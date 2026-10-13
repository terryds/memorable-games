// Synthesized, positional sound effects (Web Audio) + radio voice lines (speech synthesis).
const GUN = {
  ak47: { lp: 2600, body: 95, decay: 0.26, gain: 1.0, crack: 0.5 },
  m4a1: { lp: 1500, body: 120, decay: 0.12, gain: 0.55, crack: 0.15 },
  awp: { lp: 2200, body: 60, decay: 0.7, gain: 1.35, crack: 0.8 },
  mp5: { lp: 1300, body: 140, decay: 0.08, gain: 0.45, crack: 0.1 },
  glock: { lp: 3200, body: 160, decay: 0.14, gain: 0.7, crack: 0.4 },
  usp: { lp: 1200, body: 150, decay: 0.08, gain: 0.45, crack: 0.1 },
  deagle: { lp: 2400, body: 80, decay: 0.38, gain: 1.15, crack: 0.7 },
};

export class Sfx {
  constructor() { this.ctx = null; this.volume = 0.8; this.voice = true; this.lx = 0; this.ly = 0; this.lz = 0; }

  start() {
    if (this.ctx) { this.ctx.resume(); return; }
    const ctx = this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = ctx.createGain(); this.master.gain.value = this.volume;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4;
    this.master.connect(comp); comp.connect(ctx.destination);
    this.noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = this.noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    // desert wind ambience
    const w = ctx.createBufferSource(); w.buffer = this.noise; w.loop = true;
    const wf = ctx.createBiquadFilter(); wf.type = 'lowpass'; wf.frequency.value = 380;
    const wg = ctx.createGain(); wg.gain.value = 0.025;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07; const lg = ctx.createGain(); lg.gain.value = 0.015; lfo.connect(lg); lg.connect(wg.gain); lfo.start();
    w.connect(wf); wf.connect(wg); wg.connect(this.master); w.start();
  }
  setVolume(v) { this.volume = v; if (this.master) this.master.gain.value = v; }

  listener(x, y, z, yaw) {
    this.lx = x; this.ly = y; this.lz = z;
    if (!this.ctx) return;
    const L = this.ctx.listener, fx = -Math.sin(yaw), fz = -Math.cos(yaw);
    if (L.positionX) {
      L.positionX.value = x; L.positionY.value = y; L.positionZ.value = z;
      L.forwardX.value = fx; L.forwardY.value = 0; L.forwardZ.value = fz; L.upX.value = 0; L.upY.value = 1; L.upZ.value = 0;
    } else { L.setPosition(x, y, z); L.setOrientation(fx, 0, fz, 0, 1, 0); }
  }

  // output node: positional panner (with distance muffling) or straight to master
  out(pos, ref = 3, roll = 1.1) {
    const ctx = this.ctx;
    if (!pos) return this.master;
    const p = ctx.createPanner(); p.panningModel = 'HRTF'; p.distanceModel = 'inverse'; p.refDistance = ref; p.rolloffFactor = roll; p.maxDistance = 300;
    if (p.positionX) { p.positionX.value = pos[0]; p.positionY.value = pos[1]; p.positionZ.value = pos[2]; } else p.setPosition(...pos);
    const d = Math.hypot(pos[0] - this.lx, pos[2] - this.lz);
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = Math.max(700, 16000 - d * 160);
    f.connect(p); p.connect(this.master);
    return f;
  }

  burst(dest, { t = 0, dur = 0.2, type = 'lowpass', f = 2000, q = 0.7, gain = 0.5, attack = 0.002, sweep = 0 }) {
    const ctx = this.ctx, t0 = ctx.currentTime + t;
    const s = ctx.createBufferSource(); s.buffer = this.noise;
    const flt = ctx.createBiquadFilter(); flt.type = type; flt.frequency.value = f; flt.Q.value = q;
    if (sweep) flt.frequency.exponentialRampToValueAtTime(Math.max(40, f * sweep), t0 + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(gain, t0 + attack); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    s.connect(flt); flt.connect(g); g.connect(dest);
    s.start(t0, Math.random() * 1.5); s.stop(t0 + dur + 0.05);
  }
  tone(dest, { t = 0, f = 440, f2 = 0, dur = 0.2, type = 'sine', gain = 0.3, attack = 0.003 }) {
    const ctx = this.ctx, t0 = ctx.currentTime + t;
    const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(f, t0);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(gain, t0 + attack); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(dest); o.start(t0); o.stop(t0 + dur + 0.05);
  }

  gun(id, pos) {
    if (!this.ctx) return;
    const p = GUN[id] || GUN.glock, o = this.out(pos, 6, 0.9), v = pos ? 1 : 0.75;
    this.burst(o, { dur: p.decay, f: p.lp, gain: p.gain * v, q: 0.5 });
    this.burst(o, { dur: 0.04, type: 'highpass', f: 3000, gain: p.crack * 0.5 * v });
    this.tone(o, { f: p.body * 2, f2: p.body * 0.5, dur: p.decay * 0.8, type: 'triangle', gain: p.gain * 0.6 * v });
    if (id === 'awp') this.burst(o, { t: 0.05, dur: 0.9, f: 500, gain: 0.25 * v, attack: 0.05 });
  }
  step(pos, own) {
    if (!this.ctx) return;
    const o = own ? this.master : this.out(pos, 2.5, 1.4);
    this.burst(o, { dur: 0.07, type: 'bandpass', f: 500 + Math.random() * 500, q: 1.2, gain: own ? 0.08 : 0.35 });
    this.burst(o, { t: 0.02, dur: 0.05, type: 'highpass', f: 2500, gain: own ? 0.03 : 0.12 });
  }
  land(pos, own) { if (!this.ctx) return; const o = own ? this.master : this.out(pos, 2.5, 1.4); this.burst(o, { dur: 0.12, f: 400, gain: own ? 0.2 : 0.4 }); }
  reload(dur, own, pos) {
    if (!this.ctx) return;
    const o = own ? this.master : this.out(pos, 2, 1.5), g = own ? 0.25 : 0.2;
    this.burst(o, { t: 0.15, dur: 0.05, type: 'bandpass', f: 1800, q: 3, gain: g });
    this.burst(o, { t: dur * 0.55, dur: 0.06, type: 'bandpass', f: 1400, q: 3, gain: g * 1.2 });
    this.burst(o, { t: dur * 0.85, dur: 0.05, type: 'bandpass', f: 2600, q: 4, gain: g });
    this.burst(o, { t: dur * 0.9, dur: 0.05, type: 'bandpass', f: 1900, q: 4, gain: g });
  }
  click(gain = 0.15, f = 2500) { if (!this.ctx) return; this.burst(this.master, { dur: 0.03, type: 'bandpass', f, q: 5, gain }); }
  dry() { this.click(0.2, 3500); }
  switchW() { if (!this.ctx) return; this.burst(this.master, { dur: 0.12, type: 'bandpass', f: 900, q: 0.8, gain: 0.08 }); this.click(0.12, 2200); }
  hit(head) {
    if (!this.ctx) return;
    if (head) { this.tone(this.master, { f: 2500, dur: 0.18, gain: 0.08 }); this.tone(this.master, { f: 3700, dur: 0.12, gain: 0.05 }); }
    else this.burst(this.master, { dur: 0.05, type: 'bandpass', f: 900, q: 2, gain: 0.18 });
  }
  hurt() { if (!this.ctx) return; this.burst(this.master, { dur: 0.15, f: 300, gain: 0.5 }); this.tone(this.master, { f: 140, f2: 80, dur: 0.2, gain: 0.25 }); }
  knife(pos) { if (!this.ctx) return; this.burst(this.out(pos, 2, 1.5), { dur: 0.18, type: 'bandpass', f: 1200, q: 1.5, gain: 0.25, sweep: 3, attack: 0.04 }); }
  throwN(pos) { if (!this.ctx) return; this.burst(this.out(pos, 2, 1.5), { dur: 0.25, type: 'bandpass', f: 600, q: 1, gain: 0.2, sweep: 2, attack: 0.05 }); }
  bounce(pos) { if (!this.ctx) return; this.burst(this.out(pos, 2, 1.4), { dur: 0.05, type: 'bandpass', f: 2200, q: 3, gain: 0.3 }); }
  explosion(pos, big) {
    if (!this.ctx) return;
    const o = this.out(pos, big ? 30 : 12, 0.6);
    this.burst(o, { dur: big ? 2.6 : 1.4, f: big ? 700 : 900, gain: big ? 1.6 : 1.1, sweep: 0.2 });
    this.tone(o, { f: 70, f2: 28, dur: big ? 1.6 : 0.9, type: 'sine', gain: big ? 1.2 : 0.8 });
    this.burst(o, { dur: 0.08, type: 'highpass', f: 2000, gain: 0.5 });
  }
  flashPop(pos) { if (!this.ctx) return; const o = this.out(pos, 8, 0.8); this.burst(o, { dur: 0.25, type: 'highpass', f: 1500, gain: 0.7 }); this.tone(o, { f: 300, f2: 100, dur: 0.2, gain: 0.3 }); }
  ring(dur) { if (!this.ctx) return; this.tone(this.master, { f: 3400, dur: Math.min(4, dur), gain: 0.035, attack: 0.05 }); }
  smokePop(pos) { if (!this.ctx) return; this.burst(this.out(pos, 5, 1), { dur: 2.2, type: 'highpass', f: 2500, gain: 0.25, attack: 0.05 }); }
  beep(pos) { if (!this.ctx) return; this.tone(this.out(pos, 6, 0.6), { f: 2900, dur: 0.09, type: 'square', gain: 0.12 }); }
  plantBeeps(pos) { if (!this.ctx) return; const o = this.out(pos, 4, 1); for (let i = 0; i < 7; i++) this.tone(o, { t: i * 0.42, f: 1700 + (i % 3) * 300, dur: 0.07, type: 'square', gain: 0.1 }); }
  defuse(pos) { if (!this.ctx) return; const o = this.out(pos, 3, 1.2); for (let i = 0; i < 6; i++) this.burst(o, { t: i * 0.3, dur: 0.06, type: 'bandpass', f: 1500 + Math.random() * 1500, q: 3, gain: 0.2 }); }
  buy() { this.click(0.2, 1800); }
  zoom() { this.click(0.15, 4000); }
  pickup() { this.click(0.25, 1500); }
  roundEnd(win) {
    if (!this.ctx) return;
    const notes = win ? [523, 659, 784, 1047] : [440, 415, 370, 330];
    notes.forEach((f, i) => this.tone(this.master, { t: i * 0.13, f, dur: 0.5, type: 'triangle', gain: 0.12 }));
  }

  say(text) {
    if (!this.voice || !window.speechSynthesis) return;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 1.08; u.pitch = 0.75; u.volume = Math.min(1, this.volume * 0.9);
      speechSynthesis.speak(u);
    } catch { /* no voices */ }
  }
}
