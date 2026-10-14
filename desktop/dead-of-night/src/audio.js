// Everything you hear is synthesized: a creeping ambient bed (wind, sub drones, a thin whine),
// distant horrors at random (screams, howls, creaks, a music box), 3D-positioned zombie groans,
// the Witch's sobbing, horde / Tank music cues, weapons and a heartbeat when you're hurt.
export class Sound {
  constructor() { this.ctx = null; this.volume = 0.8; this.tankOn = false; }

  start() {
    if (this.ctx) { this.ctx.resume(); return; }
    const ctx = this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = ctx.createGain(); this.master.gain.value = this.volume; this.master.connect(ctx.destination);
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 4; comp.connect(this.master);
    this.out = comp;
    // long, dark reverb (generated impulse) shared by ambience and distant sounds
    this.verb = ctx.createConvolver(); this.verb.buffer = this.impulse(4.5, 2.2);
    this.verbIn = ctx.createGain(); this.verbIn.gain.value = 1; this.verbIn.connect(this.verb);
    const verbOut = ctx.createGain(); verbOut.gain.value = 0.55; this.verb.connect(verbOut); verbOut.connect(this.out);
    this.noise = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
    const d = this.noise.getChannelData(0); let b = 0;
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.brown = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
    const bd = this.brown.getChannelData(0); for (let i = 0; i < bd.length; i++) { b = (b + 0.02 * (Math.random() * 2 - 1)) / 1.02; bd[i] = b * 3.5; }
    this.music = ctx.createGain(); this.music.gain.value = 0.9; this.music.connect(this.out); this.music.connect(this.verbIn);
    this.ambient();
    this.nextEvent = ctx.currentTime + 4;
    this.heart = 0; this.nextBeat = 0;
    setInterval(() => this.tick(), 60);
  }

  setVolume(v) { this.volume = v; if (this.master) this.master.gain.value = v; }
  impulse(sec, decay) {
    const ctx = this.ctx, n = ctx.sampleRate * sec, buf = ctx.createBuffer(2, n, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const ch = buf.getChannelData(c); for (let i = 0; i < n; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, decay); }
    return buf;
  }
  src(buf, loop = true) { const s = this.ctx.createBufferSource(); s.buffer = buf; s.loop = loop; return s; }
  lfo(freq, depth, target, offset) {
    const o = this.ctx.createOscillator(), g = this.ctx.createGain(); o.frequency.value = freq; g.gain.value = depth;
    o.connect(g); g.connect(target); if (offset !== undefined) target.value = offset; o.start(); return o;
  }

  ambient() {
    const ctx = this.ctx;
    this.amb = ctx.createGain(); this.amb.gain.value = 1; this.amb.connect(this.out);
    const ambVerb = ctx.createGain(); ambVerb.gain.value = 0.5; this.amb.connect(ambVerb); ambVerb.connect(this.verbIn);
    // sub drone: a minor second rubbing against itself, breathing through a moving lowpass
    const dr = ctx.createGain(); dr.gain.value = 0.05; const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 180; lp.Q.value = 3;
    for (const [f, t] of [[55, 'sine'], [58.3, 'sine'], [82.4, 'triangle'], [110.6, 'sine']]) { const o = ctx.createOscillator(); o.type = t; o.frequency.value = f; o.connect(lp); o.start(); this.lfo(0.03 + Math.random() * 0.04, 0.6, o.detune, 0); }
    this.lfo(0.05, 90, lp.frequency, 180);
    lp.connect(dr); dr.connect(this.amb);
    this.lfo(0.07, 0.025, dr.gain, 0.05);
    // a thin, high, unsettling whine that drifts in pitch
    const wh = ctx.createOscillator(); wh.type = 'sine'; wh.frequency.value = 1830; const whg = ctx.createGain(); whg.gain.value = 0.0;
    this.lfo(0.013, 40, wh.frequency, 1830); this.lfo(0.11, 0.004, whg.gain, 0.003); wh.connect(whg); whg.connect(this.amb); wh.start();
    // wind with slow gusts
    const wind = this.src(this.noise), wb = ctx.createBiquadFilter(); wb.type = 'bandpass'; wb.Q.value = 0.8;
    const wg = ctx.createGain(); wg.gain.value = 0.05;
    this.lfo(0.06, 350, wb.frequency, 600); this.lfo(0.09, 0.035, wg.gain, 0.05);
    wind.connect(wb); wb.connect(wg); wg.connect(this.amb); wind.start();
    // low distant rumble of a dead city
    const rum = this.src(this.brown), rl = ctx.createBiquadFilter(); rl.type = 'lowpass'; rl.frequency.value = 110;
    const rg = ctx.createGain(); rg.gain.value = 0.08; rum.connect(rl); rl.connect(rg); rg.connect(this.amb); rum.start();
    // heartbeat & tank buses
    this.heartBus = ctx.createGain(); this.heartBus.gain.value = 0; this.heartBus.connect(this.out);
    this.tankBus = ctx.createGain(); this.tankBus.gain.value = 0; this.tankBus.connect(this.music);
    // muffled ambience when downed
    this.duck = ctx.createBiquadFilter(); this.duck.type = 'lowpass'; this.duck.frequency.value = 20000;
  }

  // ------------------------------------------------ scheduler for random distant horrors + music loops
  tick() {
    const ctx = this.ctx; if (!ctx) return;
    const now = ctx.currentTime;
    if (this.playing && now > this.nextEvent) {
      this.nextEvent = now + 7 + Math.random() * 13;
      const pick = Math.random();
      const pan = Math.random() * 2 - 1;
      if (pick < 0.22) this.distantScream(pan);
      else if (pick < 0.36) this.howl(pan);
      else if (pick < 0.5) this.creak(pan);
      else if (pick < 0.6) this.musicBox();
      else if (pick < 0.7) this.glass(pan);
      else if (pick < 0.8) this.thunder();
      else if (pick < 0.9) this.distantShots(pan);
      else this.moanChorus(pan);
    }
    // heartbeat when badly hurt
    if (this.heart > 0 && now > this.nextBeat) {
      const bpm = 60 + this.heart * 60; this.nextBeat = now + 60 / bpm;
      this.thump(now, 0.5 * this.heart); this.thump(now + 0.16, 0.32 * this.heart);
    }
    // tank ostinato
    if (this.tankOn && now > (this.nextTank || 0)) {
      const spb = 60 / 132 / 2; this.nextTank = Math.max(now, this.nextTank || now) + spb;
      this.tankBeat = (this.tankBeat || 0) + 1;
      const s = this.tankBeat % 8;
      const notes = [33, 33, 36, 33, 31, 33, 39, 38];
      this.bassNote(notes[s], now + 0.02, spb * 0.9, 0.22);
      if (s % 2 === 0) this.timp(now + 0.02, s === 0 ? 0.5 : 0.3);
    }
  }
  bassNote(midi, t, dur, vol) {
    const ctx = this.ctx, o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o.type = 'sawtooth'; o.frequency.value = 440 * Math.pow(2, (midi - 69) / 12); f.type = 'lowpass'; f.frequency.value = 400;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(f); f.connect(g); g.connect(this.tankBus); o.start(t); o.stop(t + dur + 0.05);
  }
  timp(t, vol) {
    const ctx = this.ctx, o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.4);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.7);
    o.connect(g); g.connect(this.tankBus); o.start(t); o.stop(t + 0.8);
  }
  thump(t, vol) {
    const ctx = this.ctx, o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(60, t); o.frequency.exponentialRampToValueAtTime(35, t + 0.12);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    o.connect(g); g.connect(this.heartBus); o.start(t); o.stop(t + 0.2);
  }

  // ------------------------------------------------ distant horrors (mostly reverb)
  panned(pan, wet = 0.9, dry = 0.15) {
    const ctx = this.ctx, p = ctx.createStereoPanner(); p.pan.value = pan;
    const dg = ctx.createGain(); dg.gain.value = dry; const wg = ctx.createGain(); wg.gain.value = wet;
    p.connect(dg); dg.connect(this.out); p.connect(wg); wg.connect(this.verbIn);
    return p;
  }
  voice(dest, t, f0, f1, dur, vol, formant = 900, vib = 6) {
    const ctx = this.ctx, o = ctx.createOscillator(), g = ctx.createGain(), bp = ctx.createBiquadFilter();
    o.type = 'sawtooth'; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const v = ctx.createOscillator(), vg = ctx.createGain(); v.frequency.value = vib; vg.gain.value = f0 * 0.03; v.connect(vg); vg.connect(o.frequency); v.start(t); v.stop(t + dur + 0.1);
    bp.type = 'bandpass'; bp.frequency.value = formant; bp.Q.value = 4;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.15, dur * 0.3)); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(bp); bp.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.1);
  }
  distantScream(pan) { const t = this.ctx.currentTime, p = this.panned(pan, 1, 0.05); this.voice(p, t, 700 + Math.random() * 300, 380, 1.6 + Math.random(), 0.12, 1200, 7); }
  howl(pan) { const t = this.ctx.currentTime, p = this.panned(pan, 1, 0.05); this.voice(p, t, 420, 640, 0.9, 0.06, 700, 4); this.voice(p, t + 0.9, 640, 380, 1.8, 0.06, 700, 4); }
  creak(pan) {
    const ctx = this.ctx, t = ctx.currentTime, p = this.panned(pan, 0.8, 0.2);
    for (let k = 0; k < 14; k++) { const tt = t + k * (0.04 + Math.random() * 0.05); const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'square'; o.frequency.value = 120 + Math.sin(k * 0.6) * 40 + Math.random() * 20; g.gain.setValueAtTime(0.025, tt); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.05); o.connect(g); g.connect(p); o.start(tt); o.stop(tt + 0.06); }
  }
  glass(pan) {
    const ctx = this.ctx, t = ctx.currentTime, p = this.panned(pan, 0.9, 0.1);
    for (let k = 0; k < 10; k++) { const tt = t + Math.random() * 0.25, o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.value = 2500 + Math.random() * 4000; g.gain.setValueAtTime(0.02, tt); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.15); o.connect(g); g.connect(p); o.start(tt); o.stop(tt + 0.2); }
    this.noiseHit(p, t, 'highpass', 3000, 3000, 0.3, 0.05);
  }
  thunder() { const ctx = this.ctx, t = ctx.currentTime, p = this.panned(Math.random() - 0.5, 0.6, 0.6); const s = this.src(this.brown, false), f = ctx.createBiquadFilter(), g = ctx.createGain(); f.type = 'lowpass'; f.frequency.value = 200; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + 0.4); g.gain.exponentialRampToValueAtTime(0.0001, t + 3.5); s.connect(f); f.connect(g); g.connect(p); s.start(t, Math.random()); s.stop(t + 3.6); }
  distantShots(pan) { const t = this.ctx.currentTime, p = this.panned(pan, 1, 0.02); for (let k = 0; k < 3 + Math.floor(Math.random() * 4); k++) this.noiseHit(p, t + k * (0.12 + Math.random() * 0.25), 'lowpass', 800, 200, 0.25, 0.08); }
  moanChorus(pan) { const t = this.ctx.currentTime, p = this.panned(pan, 1, 0.05); for (let k = 0; k < 5; k++) this.voice(p, t + k * 0.3, 140 + Math.random() * 60, 90 + Math.random() * 30, 2 + Math.random(), 0.03, 500, 3); }
  musicBox() {
    // a few wrong-sounding notes from a broken music box, somewhere in the dark
    const ctx = this.ctx, t = ctx.currentTime, p = this.panned(Math.random() * 1.6 - 0.8, 1, 0.08);
    const seq = [76, 72, 69, 68, 71, 64, 65][Math.floor(Math.random() * 3)] ? [76, 72, 69, 68, 71] : [64, 67, 63, 60];
    seq.forEach((n, k) => { const tt = t + k * (0.38 + k * 0.05), o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine'; o.frequency.value = 440 * Math.pow(2, (n - 69) / 12) * (1 - k * 0.006); g.gain.setValueAtTime(0.05, tt); g.gain.exponentialRampToValueAtTime(0.0001, tt + 1.4); o.connect(g); g.connect(p); o.start(tt); o.stop(tt + 1.5); });
  }
  noiseHit(dest, t, type, f0, f1, dur, vol, q = 1) {
    const ctx = this.ctx, s = this.src(this.noise, false), f = ctx.createBiquadFilter(), g = ctx.createGain();
    f.type = type; f.Q.value = q; f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(dest); s.start(t, Math.random() * 2); s.stop(t + dur + 0.05);
  }

  // ------------------------------------------------ 3D sounds
  listener(cam) {
    if (!this.ctx) return;
    const L = this.ctx.listener, t = this.ctx.currentTime;
    const fx = -Math.sin(cam.rotation.y), fz = -Math.cos(cam.rotation.y);
    if (L.positionX) { L.positionX.setTargetAtTime(cam.position.x, t, 0.02); L.positionY.setTargetAtTime(cam.position.y, t, 0.02); L.positionZ.setTargetAtTime(cam.position.z, t, 0.02); L.forwardX.setTargetAtTime(fx, t, 0.02); L.forwardY.setTargetAtTime(0, t, 0.02); L.forwardZ.setTargetAtTime(fz, t, 0.02); L.upX.value = 0; L.upY.value = 1; L.upZ.value = 0; }
    else { L.setPosition(cam.position.x, cam.position.y, cam.position.z); L.setOrientation(fx, 0, fz, 0, 1, 0); }
  }
  at(x, y, z, wet = 0.35, ref = 3, max = 60) {
    const ctx = this.ctx, p = ctx.createPanner();
    p.panningModel = 'HRTF'; p.distanceModel = 'inverse'; p.refDistance = ref; p.maxDistance = max; p.rolloffFactor = 1.3;
    if (p.positionX) { p.positionX.value = x; p.positionY.value = y; p.positionZ.value = z; } else p.setPosition(x, y, z);
    const wg = ctx.createGain(); wg.gain.value = wet; p.connect(this.out); p.connect(wg); wg.connect(this.verbIn);
    return p;
  }
  groan(x, z, intense) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, p = this.at(x, 1.6, z, 0.4, 2.5);
    const f = 90 + Math.random() * 70;
    this.voice(p, t, f * (intense ? 1.6 : 1), f * 0.75, 0.7 + Math.random() * 0.9, intense ? 0.16 : 0.09, 380 + Math.random() * 300, 3 + Math.random() * 4);
    if (Math.random() < 0.5) this.noiseHit(p, t, 'bandpass', 600, 300, 0.6, 0.04, 3);
  }
  scream(x, z) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, 1.6, z, 0.5, 4); this.voice(p, t, 600, 300, 0.9, 0.2, 1400, 9); }
  witchSob(x, z, startle) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, p = this.at(x, 0.9, z, 0.6, 3, 70);
    // a sob: catch of breath, then a falling, shaky wail
    this.noiseHit(p, t, 'bandpass', 1400, 900, 0.18, 0.05 + startle * 0.04, 6);
    this.voice(p, t + 0.18, 520 + startle * 200, 330, 0.9 + Math.random() * 0.6, 0.06 + startle * 0.06, 1100, 11);
  }
  witchShriek(x, z) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, 1.4, z, 0.6, 8, 120); this.voice(p, t, 900, 1500, 0.4, 0.35, 1800, 14); this.voice(p, t + 0.35, 1500, 700, 1.4, 0.3, 1600, 12); this.sting(); }
  hunterScreech(x, z) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, 1, z, 0.5, 5); this.voice(p, t, 1100, 1600, 0.5, 0.18, 2200, 18); this.noiseHit(p, t, 'highpass', 4000, 2000, 0.5, 0.08); }
  hunterGrowl(x, z) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, 1, z, 0.4, 3); this.voice(p, t, 160, 110, 0.8, 0.1, 500, 20); }
  boomerGurgle(x, z) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, 1.5, z, 0.4, 3); this.voice(p, t, 90, 70, 1.1, 0.12, 300, 14); this.noiseHit(p, t + 0.2, 'bandpass', 300, 200, 0.6, 0.06, 4); }
  vomit(x, z) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, 1.5, z, 0.3, 4); this.noiseHit(p, t, 'lowpass', 1500, 300, 1.2, 0.4); this.voice(p, t, 140, 90, 1.2, 0.15, 400, 18); }
  splat(x, z) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, 1, z, 0.3, 4); this.noiseHit(p, t, 'lowpass', 2000, 150, 0.5, 0.6); this.thumpAt(p, t, 0.6); }
  tankRoar(x, z) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, 2, z, 0.6, 10, 150); this.voice(p, t, 140, 70, 1.6, 0.4, 350, 10); this.noiseHit(p, t, 'lowpass', 800, 100, 1.4, 0.3); }
  tankStep(x, z) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, 0, z, 0.3, 6, 80); this.thumpAt(p, t, 0.5); }
  thumpAt(dest, t, vol) { const ctx = this.ctx, o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(70, t); o.frequency.exponentialRampToValueAtTime(30, t + 0.2); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.3); o.connect(g); g.connect(dest); o.start(t); o.stop(t + 0.32); }
  zhit(x, z) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, 1.2, z, 0.1, 2); this.noiseHit(p, t, 'lowpass', 900, 200, 0.12, 0.35); }
  flesh(x, y, z, head) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, y, z, 0.1, 3); this.noiseHit(p, t, 'bandpass', head ? 1800 : 900, 300, head ? 0.15 : 0.09, head ? 0.35 : 0.18, 2); }
  beep(x, z) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, 0.2, z, 0.3, 6); const o = this.ctx.createOscillator(), g = this.ctx.createGain(); o.type = 'square'; o.frequency.value = 1500; g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.09); o.connect(g); g.connect(p); o.start(t); o.stop(t + 0.1); }
  explosion(x, z) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, 1, z, 0.7, 12, 200); this.noiseHit(p, t, 'lowpass', 3000, 60, 1.6, 1.0); this.thumpAt(p, t, 1); }
  fireWhoosh(x, z) { if (!this.ctx) return; const t = this.ctx.currentTime, p = this.at(x, 0.5, z, 0.3, 6); this.noiseHit(p, t, 'lowpass', 600, 2500, 0.8, 0.4); }
  alarm(x, z) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, p = this.at(x, 1, z, 0.4, 10, 200);
    for (let k = 0; k < 24; k++) { const o = this.ctx.createOscillator(), g = this.ctx.createGain(); o.type = 'square'; o.frequency.value = k % 2 ? 900 : 700; g.gain.setValueAtTime(0.12, t + k * 0.35); g.gain.setValueAtTime(0, t + k * 0.35 + 0.3); o.connect(g); g.connect(p); o.start(t + k * 0.35); o.stop(t + k * 0.35 + 0.32); }
  }

  // ------------------------------------------------ weapons & player
  gun(id, x, z, local) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, dest = local ? this.out : this.at(x, 1.5, z, 0.25, 8, 150);
    const big = id === 'pump' || id === 'auto', heavy = id === 'rifle';
    const vol = local ? (big ? 0.55 : heavy ? 0.5 : id === 'pistol' ? 0.32 : 0.3) : 0.3;
    this.noiseHit(dest, t, 'lowpass', big ? 2400 : 4000, 200, big ? 0.35 : 0.14, vol);
    this.thumpAt(dest, t, big || heavy ? 0.6 : 0.3);
    if (local) { const w = this.ctx.createGain(); w.gain.value = 0.25; w.connect(this.verbIn); this.noiseHit(w, t, 'lowpass', 1500, 150, 0.4, vol); }
    if (id === 'pump' && local) setTimeout(() => this.click(0.08, 900), 380);
  }
  click(vol = 0.08, f = 2500) { if (!this.ctx) return; const t = this.ctx.currentTime; this.noiseHit(this.out, t, 'bandpass', f, f * 0.8, 0.04, vol, 4); }
  reload() { this.click(0.07, 1800); setTimeout(() => this.click(0.08, 2600), 500); setTimeout(() => this.click(0.09, 1400), 1200); }
  shove() { if (!this.ctx) return; const t = this.ctx.currentTime; this.noiseHit(this.out, t, 'bandpass', 500, 1500, 0.15, 0.12, 1); }
  pickup() { this.click(0.1, 1200); setTimeout(() => this.click(0.1, 1800), 90); }
  hurt() { if (!this.ctx) return; const t = this.ctx.currentTime; this.voice(this.out, t, 220, 170, 0.25, 0.08, 700, 5); }
  step(surface) { if (!this.ctx) return; const t = this.ctx.currentTime; this.noiseHit(this.out, t, surface === 'E' ? 'lowpass' : 'bandpass', surface === 'P' ? 700 : surface === 'E' ? 500 : 1400, 300, 0.07, 0.035, 2); }
  door() { if (!this.ctx) return; const t = this.ctx.currentTime; for (let k = 0; k < 8; k++) { const o = this.ctx.createOscillator(), g = this.ctx.createGain(); o.type = 'sawtooth'; o.frequency.value = 160 + k * 15; g.gain.setValueAtTime(0.04, t + k * 0.06); g.gain.exponentialRampToValueAtTime(0.0001, t + k * 0.06 + 0.08); o.connect(g); g.connect(this.out); o.start(t + k * 0.06); o.stop(t + k * 0.06 + 0.1); } this.thumpAt(this.out, t + 0.5, 0.4); }
  radio() { if (!this.ctx) return; const t = this.ctx.currentTime; this.noiseHit(this.out, t, 'bandpass', 2500, 2500, 2.5, 0.15, 2); for (let k = 0; k < 9; k++) this.voice(this.out, t + 0.3 + k * 0.22, 190 + Math.random() * 60, 180, 0.2, 0.05, 1500, 4); }

  // ------------------------------------------------ music cues
  sting() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    for (const n of [41, 42, 47, 53, 54]) { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sawtooth'; o.frequency.value = 440 * Math.pow(2, (n - 69) / 12); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.06, t + 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.2); const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1200; o.connect(f); f.connect(g); g.connect(this.music); o.start(t); o.stop(t + 2.3); }
  }
  hordeCue() {
    // a far-off scream, then pounding drums and shrieking tremolo strings rising for ~6 s
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    this.distantScream(0); this.moanChorus(-0.4); this.moanChorus(0.4);
    for (let k = 0; k < 16; k++) this.timpTo(this.music, t + 0.8 + k * 0.32 * (1 - k * 0.025), 0.3 + k * 0.02);
    for (const n of [57, 58, 64]) {
      const o = ctx.createOscillator(), g = ctx.createGain(), trem = ctx.createOscillator(), tg = ctx.createGain(), f = ctx.createBiquadFilter();
      o.type = 'sawtooth'; o.frequency.setValueAtTime(440 * Math.pow(2, (n - 69) / 12), t + 0.6); o.frequency.exponentialRampToValueAtTime(440 * Math.pow(2, (n - 57) / 12), t + 6.5);
      trem.frequency.value = 13; tg.gain.value = 0.5; trem.connect(tg); tg.connect(g.gain);
      f.type = 'lowpass'; f.frequency.value = 2400;
      g.gain.setValueAtTime(0.0001, t + 0.6); g.gain.exponentialRampToValueAtTime(0.05, t + 4); g.gain.exponentialRampToValueAtTime(0.0001, t + 7);
      o.connect(f); f.connect(g); g.connect(this.music); o.start(t + 0.6); o.stop(t + 7.2); trem.start(t + 0.6); trem.stop(t + 7.2);
    }
  }
  timpTo(dest, t, vol) { const ctx = this.ctx, o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(100, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.3); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.5); o.connect(g); g.connect(dest); o.start(t); o.stop(t + 0.55); }
  tank(on) {
    if (!this.ctx || on === this.tankOn) return;
    this.tankOn = on;
    this.tankBus.gain.setTargetAtTime(on ? 1 : 0, this.ctx.currentTime, on ? 0.3 : 1.5);
  }
  setHeart(v) { this.heart = v; if (this.heartBus) this.heartBus.gain.setTargetAtTime(v > 0 ? 1 : 0, this.ctx.currentTime, 0.3); }
  rescue() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    [[60, 64, 67], [65, 69, 72], [67, 71, 74], [72, 76, 79]].forEach((ch, k) => ch.forEach((n) => { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'triangle'; o.frequency.value = 440 * Math.pow(2, (n - 69) / 12); g.gain.setValueAtTime(0.0001, t + k * 1.1); g.gain.exponentialRampToValueAtTime(0.05, t + k * 1.1 + 0.2); g.gain.exponentialRampToValueAtTime(0.0001, t + k * 1.1 + 2.2); o.connect(g); g.connect(this.music); o.start(t + k * 1.1); o.stop(t + k * 1.1 + 2.3); }));
  }
}
