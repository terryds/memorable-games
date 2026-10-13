// Fully synthesized audio: engine, tires, nitro, wind, impacts, countdown and a low-key night drive loop.
export class Audio {
  constructor() { this.ctx = null; this.musicOn = true; this.muted = false; }

  start() {
    if (this.ctx) { this.ctx.resume(); return; }
    const ctx = this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = ctx.createGain(); this.master.gain.value = 0.7; this.master.connect(ctx.destination);
    const comp = ctx.createDynamicsCompressor(); comp.connect(this.master);
    this.out = comp;
    this.noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;

    // engine: two detuned saws + sub square through a resonant lowpass and soft clip
    this.eng = ctx.createGain(); this.eng.gain.value = 0;
    this.engFilter = ctx.createBiquadFilter(); this.engFilter.type = 'lowpass'; this.engFilter.Q.value = 4;
    const shaper = ctx.createWaveShaper();
    const curve = new Float32Array(1024); for (let i = 0; i < 1024; i++) { const x = i / 512 - 1; curve[i] = Math.tanh(x * 2.5); }
    shaper.curve = curve;
    this.oscs = [];
    for (const [type, mul, gain] of [['sawtooth', 1, 0.5], ['sawtooth', 1.005, 0.4], ['square', 0.5, 0.35], ['triangle', 2, 0.15]]) {
      const o = ctx.createOscillator(); o.type = type; const g = ctx.createGain(); g.gain.value = gain;
      o.connect(g); g.connect(shaper); o.start(); this.oscs.push([o, mul]);
    }
    shaper.connect(this.engFilter); this.engFilter.connect(this.eng); this.eng.connect(this.out);

    this.skid = this.loopNoise('bandpass', 1300, 2.5);
    this.wind = this.loopNoise('lowpass', 500, 0.5);
    this.nos = this.loopNoise('bandpass', 2400, 1.2);
    this.rain = this.loopNoise('highpass', 3500, 0.3);
    this.rain.gain.gain.value = 0.035;
    this.music = ctx.createGain(); this.music.gain.value = 0.16; this.music.connect(this.out);
    this.nextNote = ctx.currentTime + 0.1; this.step = 0;
  }

  loopNoise(type, freq, q) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuf; src.loop = true;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); g.gain.value = 0;
    src.connect(f); f.connect(g); g.connect(this.out); src.start();
    return { src, filter: f, gain: g };
  }

  setMuted(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.7; }
  toggleMusic() { this.musicOn = !this.musicOn; if (this.music) this.music.gain.value = this.musicOn ? 0.16 : 0; return this.musicOn; }

  update(car, active, timeScale = 1) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const rpm = car ? car.rpm : 900;
    const f = (28 + rpm / 60 * 0.9) * (0.75 + 0.25 * timeScale);
    for (const [o, mul] of this.oscs) o.frequency.setTargetAtTime(f * mul, t, 0.03);
    const thr = car?.throttleIn ?? 0;
    this.engFilter.frequency.setTargetAtTime(300 + rpm * 0.25 + thr * 1400, t, 0.05);
    this.eng.gain.setTargetAtTime(active ? 0.13 + thr * 0.12 : 0.06, t, 0.05);
    const slip = car ? Math.min(1, Math.abs(car.slip) * 2.5) * Math.min(1, car.speed / 20) : 0;
    this.skid.gain.gain.setTargetAtTime(active && (car.drifting || slip > 0.35) ? 0.22 * slip + 0.04 : 0, t, 0.05);
    this.skid.filter.frequency.setTargetAtTime(900 + slip * 900, t, 0.1);
    this.wind.gain.gain.setTargetAtTime(car ? Math.min(0.3, car.speed / 300) : 0, t, 0.1);
    this.wind.filter.frequency.setTargetAtTime(300 + (car?.speed ?? 0) * 12, t, 0.1);
    this.nos.gain.gain.setTargetAtTime(car?.nitroOn ? 0.12 : 0, t, 0.05);
    this.music.gain.setTargetAtTime(this.musicOn ? 0.16 : 0, t, 0.3);
    this.schedule();
  }

  // 100 bpm minor arpeggio + bass pulse
  schedule() {
    const ctx = this.ctx, spb = 60 / 100 / 4;
    const prog = [[57, 60, 64, 69], [53, 57, 60, 65], [48, 52, 55, 60], [55, 59, 62, 67]];
    while (this.nextNote < ctx.currentTime + 0.2) {
      const bar = Math.floor(this.step / 16) % 4, s = this.step % 16, chord = prog[bar];
      const tt = this.nextNote;
      if (this.musicOn) {
        if (s % 2 === 0) this.note(chord[0] - 24, tt, spb * 1.6, 'sawtooth', 0.32, 260);
        const arp = chord[[0, 1, 2, 3, 2, 1, 3, 2][s % 8]] + (s >= 8 ? 12 : 0);
        this.note(arp, tt, spb * 0.9, 'square', 0.07, 1800);
        if (s === 0) for (const n of chord) this.note(n, tt, spb * 15, 'sawtooth', 0.035, 900);
        if (s % 4 === 0) this.kick(tt);
        if (s % 8 === 4) this.hat(tt, 0.12);
        else if (s % 2 === 1) this.hat(tt, 0.04);
      }
      this.nextNote += spb; this.step++;
    }
  }

  note(midi, t, dur, type, vol, cutoff) {
    const ctx = this.ctx, o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o.type = type; o.frequency.value = 440 * Math.pow(2, (midi - 69) / 12);
    f.type = 'lowpass'; f.frequency.value = cutoff;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(f); f.connect(g); g.connect(this.music); o.start(t); o.stop(t + dur + 0.05);
  }
  kick(t) {
    const ctx = this.ctx, o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(130, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.15);
    g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
    o.connect(g); g.connect(this.music); o.start(t); o.stop(t + 0.3);
  }
  hat(t, vol) {
    const ctx = this.ctx, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = this.noiseBuf; f.type = 'highpass'; f.frequency.value = 7000;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    s.connect(f); f.connect(g); g.connect(this.music); s.start(t, Math.random()); s.stop(t + 0.06);
  }

  impact(strength) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = this.noiseBuf; f.type = 'lowpass'; f.frequency.value = 900 + strength * 80;
    const v = Math.min(0.9, 0.15 + strength * 0.04);
    g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
    s.connect(f); f.connect(g); g.connect(this.out); s.start(t, Math.random()); s.stop(t + 0.4);
    const o = ctx.createOscillator(), og = ctx.createGain();
    o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(35, t + 0.2);
    og.gain.setValueAtTime(v, t); og.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
    o.connect(og); og.connect(this.out); o.start(t); o.stop(t + 0.3);
  }

  beep(high) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'square'; o.frequency.value = high ? 1320 : 660;
    g.gain.setValueAtTime(0.18, t); g.gain.exponentialRampToValueAtTime(0.001, t + (high ? 0.7 : 0.25));
    o.connect(g); g.connect(this.out); o.start(t); o.stop(t + 0.8);
  }

  whoosh() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = this.noiseBuf; f.type = 'bandpass'; f.Q.value = 2;
    f.frequency.setValueAtTime(400, t); f.frequency.exponentialRampToValueAtTime(3000, t + 0.4);
    g.gain.setValueAtTime(0.25, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
    s.connect(f); f.connect(g); g.connect(this.out); s.start(t); s.stop(t + 0.7);
  }

  shift() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = this.noiseBuf; f.type = 'bandpass'; f.frequency.value = 1800; f.Q.value = 6;
    g.gain.setValueAtTime(0.08, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    s.connect(f); f.connect(g); g.connect(this.out); s.start(t, Math.random()); s.stop(t + 0.15);
  }
}
