// Synthesized audio: buzzy kart engine, slide squeal, turbo whooshes, item sfx and a sunny island tune.
export class Audio {
  constructor() { this.ctx = null; this.musicOn = true; }

  start() {
    if (this.ctx) { this.ctx.resume(); return; }
    const ctx = this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = ctx.createGain(); this.master.gain.value = 0.7; this.master.connect(ctx.destination);
    const comp = ctx.createDynamicsCompressor(); comp.connect(this.master); this.out = comp;
    this.noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = this.noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    // engine: square + saw through a lowpass, light tremolo for that lawnmower-kart buzz
    this.eng = ctx.createGain(); this.eng.gain.value = 0;
    this.engF = ctx.createBiquadFilter(); this.engF.type = 'lowpass'; this.engF.Q.value = 3;
    this.oscs = [];
    for (const [type, mul, g] of [['square', 1, 0.3], ['sawtooth', 2.01, 0.25], ['triangle', 0.5, 0.4]]) {
      const o = ctx.createOscillator(); o.type = type; const gg = ctx.createGain(); gg.gain.value = g;
      o.connect(gg); gg.connect(this.engF); o.start(); this.oscs.push([o, mul]);
    }
    this.engF.connect(this.eng); this.eng.connect(this.out);
    this.skid = this.loop('bandpass', 1500, 3);
    this.wind = this.loop('lowpass', 600, 0.6);
    this.boostN = this.loop('bandpass', 2600, 1.4);
    this.music = ctx.createGain(); this.music.gain.value = 0.18; this.music.connect(this.out);
    this.next = ctx.currentTime + 0.1; this.step = 0;
  }

  loop(type, f, q) {
    const ctx = this.ctx, s = ctx.createBufferSource(); s.buffer = this.noise; s.loop = true;
    const flt = ctx.createBiquadFilter(); flt.type = type; flt.frequency.value = f; flt.Q.value = q;
    const g = ctx.createGain(); g.gain.value = 0; s.connect(flt); flt.connect(g); g.connect(this.out); s.start();
    return { filter: flt, gain: g };
  }

  update(k, active, top = 31) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const sp = k ? Math.abs(k.speed) : 0, r = Math.min(1.3, sp / top);
    const f = 55 + r * 150 + (k?.boostTime > 0 ? 25 : 0);
    for (const [o, m] of this.oscs) o.frequency.setTargetAtTime(f * m, t, 0.04);
    this.engF.frequency.setTargetAtTime(500 + r * 1800 + (k?.throttleIn ?? 0) * 500, t, 0.05);
    this.eng.gain.setTargetAtTime(active ? 0.07 + (k?.throttleIn ?? 0) * 0.06 : 0.03, t, 0.05);
    this.skid.gain.gain.setTargetAtTime(active && k?.drifting && !k.airborne ? 0.12 : 0, t, 0.04);
    this.skid.filter.frequency.setTargetAtTime(1200 + (k?.meter ?? 0) * 900, t, 0.05);
    this.wind.gain.gain.setTargetAtTime(Math.min(0.12, sp / 400), t, 0.1);
    this.boostN.gain.gain.setTargetAtTime(k?.boostTime > 0 ? 0.08 : 0, t, 0.05);
    this.music.gain.setTargetAtTime(this.musicOn ? 0.18 : 0, t, 0.3);
    this.schedule();
  }

  // 128 bpm calypso-ish groove: marimba arpeggios, bouncy bass, shaker
  schedule() {
    const ctx = this.ctx, spb = 60 / 128 / 4;
    const prog = [[60, 64, 67, 72], [65, 69, 72, 77], [67, 71, 74, 79], [60, 64, 67, 72], [57, 60, 64, 69], [65, 69, 72, 77], [67, 71, 74, 79], [67, 71, 74, 77]];
    const mel = [76, 0, 79, 0, 76, 74, 72, 0, 74, 0, 76, 0, 72, 0, 69, 0];
    while (this.next < ctx.currentTime + 0.2) {
      const bar = Math.floor(this.step / 16) % prog.length, s = this.step % 16, ch = prog[bar], t = this.next;
      if (this.musicOn) {
        if (s % 4 === 0 || s % 4 === 3) this.tone(ch[0] - 24, t, spb * 1.5, 'triangle', 0.3, 900);
        const arp = ch[[0, 1, 2, 3, 2, 1, 2, 3][s % 8]];
        if (s % 2 === 0) this.marimba(arp, t, 0.09);
        if (bar % 2 === 1 && mel[s]) this.marimba(mel[s] + (bar === 7 ? 2 : 0), t, 0.11);
        if (s % 2 === 1) this.hat(t, 0.035); if (s === 4 || s === 12) this.hat(t, 0.08, 4000);
        if (s === 0 || s === 8 || s === 11) this.kick(t);
      }
      this.next += spb; this.step++;
    }
  }
  tone(midi, t, dur, type, vol, cut) {
    const ctx = this.ctx, o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o.type = type; o.frequency.value = 440 * Math.pow(2, (midi - 69) / 12); f.type = 'lowpass'; f.frequency.value = cut;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(f); f.connect(g); g.connect(this.music); o.start(t); o.stop(t + dur + 0.05);
  }
  marimba(midi, t, vol) {
    const ctx = this.ctx, fr = 440 * Math.pow(2, (midi - 69) / 12);
    for (const [m, v, d] of [[1, 1, 0.35], [4, 0.25, 0.08]]) {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine'; o.frequency.value = fr * m;
      g.gain.setValueAtTime(vol * v, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g); g.connect(this.music); o.start(t); o.stop(t + d + 0.02);
    }
  }
  kick(t) {
    const ctx = this.ctx, o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
    g.gain.setValueAtTime(0.45, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
    o.connect(g); g.connect(this.music); o.start(t); o.stop(t + 0.25);
  }
  hat(t, vol, f = 8000) {
    const ctx = this.ctx, s = ctx.createBufferSource(), fl = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = this.noise; fl.type = 'highpass'; fl.frequency.value = f;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    s.connect(fl); fl.connect(g); g.connect(this.music); s.start(t, Math.random()); s.stop(t + 0.06);
  }

  sfx(name, arg = 0) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const osc = (type, f0, f1, dur, vol) => {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type;
      o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g); g.connect(this.out); o.start(t); o.stop(t + dur + 0.02);
    };
    const noise = (type, f0, f1, dur, vol, q = 1) => {
      const s = ctx.createBufferSource(), fl = ctx.createBiquadFilter(), g = ctx.createGain();
      s.buffer = this.noise; fl.type = type; fl.Q.value = q; fl.frequency.setValueAtTime(f0, t); fl.frequency.exponentialRampToValueAtTime(f1, t + dur);
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      s.connect(fl); fl.connect(g); g.connect(this.out); s.start(t, Math.random()); s.stop(t + dur + 0.02);
    };
    switch (name) {
      case 'hop': osc('sine', 300, 700, 0.12, 0.15); break;
      case 'turbo': noise('bandpass', 600, 3500 + arg * 800, 0.45, 0.25 + arg * 0.05, 2); osc('sawtooth', 200 + arg * 60, 600 + arg * 150, 0.3, 0.06); break;
      case 'perfect': [0, 4, 7].forEach((n, i) => setTimeout(() => this.ctx && osc('triangle', 880 * Math.pow(2, n / 12), 880 * Math.pow(2, n / 12), 0.15, 0.12), i * 60)); break;
      case 'fizzle': noise('lowpass', 1200, 200, 0.35, 0.18); break;
      case 'box': osc('square', 660, 1320, 0.12, 0.08); break;
      case 'tick': osc('square', 1200, 1200, 0.03, 0.04); break;
      case 'got': osc('triangle', 990, 1980, 0.18, 0.12); break;
      case 'fruit': osc('sine', 1400, 2200, 0.1, 0.1); break;
      case 'fire': noise('bandpass', 400, 2400, 0.4, 0.3, 1.5); break;
      case 'boom': noise('lowpass', 1600, 80, 0.7, 0.7); osc('sine', 120, 35, 0.5, 0.5); break;
      case 'hit': osc('sawtooth', 500, 90, 0.5, 0.15); break;
      case 'wall': noise('lowpass', 900, 150, 0.25, Math.min(0.5, 0.1 + arg * 0.02)); break;
      case 'shield': osc('sine', 500, 1500, 0.4, 0.12); break;
      case 'beep': osc('square', arg ? 1320 : 660, arg ? 1320 : 660, arg ? 0.6 : 0.2, 0.15); break;
      case 'land': noise('lowpass', 500, 100, 0.2, 0.25); break;
      case 'splash': noise('bandpass', 2000, 300, 0.8, 0.4, 0.8); break;
      case 'lap': [0, 4, 7, 12].forEach((n, i) => setTimeout(() => this.ctx && osc('triangle', 660 * Math.pow(2, n / 12), 660 * Math.pow(2, n / 12), 0.18, 0.12), i * 90)); break;
    }
  }
}
