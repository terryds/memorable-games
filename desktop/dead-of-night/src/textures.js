// Procedural textures (canvas): grimy asphalt, cracked sidewalks, brick and plaster facades with
// broken/lit windows, planks, grass, blood, flashlight cookie.
import * as THREE from 'three';

export function rng(seed = 1) {
  let s = seed >>> 0;
  return () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
export function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function tex(c, { srgb = true, repeat = true, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = aniso;
  return t;
}
function grime(g, w, h, r, n, cols, a0 = 0.15, a1 = 0.45, s0 = 1, s1 = 3) {
  for (let i = 0; i < n; i++) { g.globalAlpha = a0 + r() * (a1 - a0); g.fillStyle = cols[Math.floor(r() * cols.length)]; const s = s0 + r() * (s1 - s0); g.fillRect(r() * w, r() * h, s, s); }
  g.globalAlpha = 1;
}
function stains(g, w, h, r, n, col, rad = 60) {
  for (let i = 0; i < n; i++) {
    const x = r() * w, y = r() * h, rr = 10 + r() * rad, grd = g.createRadialGradient(x, y, 0, x, y, rr);
    grd.addColorStop(0, col); grd.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = grd; g.fillRect(x - rr, y - rr, rr * 2, rr * 2);
  }
}

export function asphaltTexture() {
  const [c, g] = canvas(512, 512), r = rng(3);
  g.fillStyle = '#3c3d40'; g.fillRect(0, 0, 512, 512);
  grime(g, 512, 512, r, 16000, ['#2a2b2e', '#4a4b4e', '#343538', '#56575a']);
  stains(g, 512, 512, r, 14, 'rgba(10,10,12,0.5)', 80);
  g.strokeStyle = 'rgba(8,8,10,0.75)'; g.lineWidth = 1.5;
  for (let i = 0; i < 18; i++) { let x = r() * 512, y = r() * 512; g.beginPath(); g.moveTo(x, y); for (let k = 0; k < 8; k++) { x += (r() - 0.5) * 50; y += (r() - 0.5) * 50; g.lineTo(x, y); } g.stroke(); }
  // faded lane paint fragments
  g.fillStyle = 'rgba(200,180,90,0.25)'; for (let y = 0; y < 512; y += 128) g.fillRect(250, y + 10, 10, 70);
  return tex(c);
}
export function sidewalkTexture() {
  const [c, g] = canvas(256, 256), r = rng(5);
  g.fillStyle = '#56565a'; g.fillRect(0, 0, 256, 256);
  grime(g, 256, 256, r, 5000, ['#454549', '#606065', '#3a3a3e']);
  stains(g, 256, 256, r, 6, 'rgba(20,22,18,0.4)', 50);
  g.strokeStyle = '#2f2f33'; g.lineWidth = 3;
  for (let i = 0; i <= 256; i += 128) { g.beginPath(); g.moveTo(0, i); g.lineTo(256, i); g.stroke(); g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 256); g.stroke(); }
  return tex(c);
}
export function grassTexture() {
  const [c, g] = canvas(256, 256), r = rng(7);
  g.fillStyle = '#2e3c22'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 9000; i++) { g.strokeStyle = ['#3c4e2a', '#24301a', '#465a2c', '#36422a'][Math.floor(r() * 4)]; g.globalAlpha = 0.6; const x = r() * 256, y = r() * 256; g.beginPath(); g.moveTo(x, y); g.lineTo(x + (r() - 0.5) * 3, y - 3 - r() * 5); g.stroke(); }
  g.globalAlpha = 1; stains(g, 256, 256, r, 8, 'rgba(40,30,18,0.45)', 40);
  return tex(c);
}
export function concreteTexture(seed = 9, base = '#4b4c4e') {
  const [c, g] = canvas(256, 256), r = rng(seed);
  g.fillStyle = base; g.fillRect(0, 0, 256, 256);
  grime(g, 256, 256, r, 6000, ['#3b3c3e', '#55565a', '#333436']);
  stains(g, 256, 256, r, 10, 'rgba(15,18,14,0.45)', 60);
  return tex(c);
}
export function plankTexture() {
  const [c, g] = canvas(256, 512), r = rng(11);
  for (let i = 0; i < 8; i++) {
    const b = 55 + r() * 20; g.fillStyle = `rgb(${b + 10},${b},${b - 12})`; g.fillRect(i * 32, 0, 30, 512);
    for (let k = 0; k < 30; k++) { g.strokeStyle = `rgba(20,14,8,${0.15 + r() * 0.2})`; g.beginPath(); const x = i * 32 + r() * 30; g.moveTo(x, 0); g.lineTo(x + (r() - 0.5) * 4, 512); g.stroke(); }
    g.fillStyle = '#100c08'; g.fillRect(i * 32 + 30, 0, 2, 512);
  }
  return tex(c);
}

// Facade: brick or plaster with rows of windows. Most are dark/boarded; a few glow weakly.
export function facadeTexture(seed, kind = 'brick') {
  const W = 512, H = 512, [c, g] = canvas(W, H), r = rng(seed);
  if (kind === 'brick') {
    g.fillStyle = '#3a2620'; g.fillRect(0, 0, W, H);
    for (let y = 0; y < H; y += 12) for (let x = (y / 12) % 2 ? -12 : 0; x < W; x += 24) {
      const v = 40 + r() * 25; g.fillStyle = `rgb(${v + 22},${v},${v - 8})`; g.fillRect(x + 1, y + 1, 22, 10);
    }
  } else {
    g.fillStyle = kind === 'plaster' ? '#5a5650' : '#4a4e52'; g.fillRect(0, 0, W, H);
    grime(g, W, H, r, 7000, ['#4a4741', '#635f58', '#3e3b36']);
  }
  stains(g, W, H, r, 18, 'rgba(10,12,8,0.5)', 90);
  // rain streaks
  for (let i = 0; i < 40; i++) { g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(r() * W, r() * H * 0.5, 3 + r() * 4, 60 + r() * 200); }
  // windows: 4 columns x 4 floors per tile
  for (let fy = 0; fy < 4; fy++) for (let fx = 0; fx < 4; fx++) {
    const x = 28 + fx * 128, y = 30 + fy * 128, w = 70, h = 84, roll = r();
    g.fillStyle = '#16171a'; g.fillRect(x - 6, y - 6, w + 12, h + 12);
    if (roll < 0.25) { // boarded
      g.fillStyle = '#0c0d0e'; g.fillRect(x, y, w, h);
      for (let b = 0; b < 3; b++) { g.save(); g.translate(x + w / 2, y + 16 + b * 26); g.rotate((r() - 0.5) * 0.4); g.fillStyle = '#4a3a28'; g.fillRect(-w / 2 - 6, -7, w + 12, 14); g.restore(); }
    } else if (roll < 0.33) { // dim light inside
      const grd = g.createLinearGradient(x, y, x, y + h); grd.addColorStop(0, '#6b5a35'); grd.addColorStop(1, '#2a2416');
      g.fillStyle = grd; g.fillRect(x, y, w, h);
    } else { // dark, sometimes broken
      g.fillStyle = '#07080a'; g.fillRect(x, y, w, h);
      g.fillStyle = 'rgba(80,95,110,0.12)'; g.fillRect(x + 4, y + 4, w * 0.4, h - 8);
      if (r() < 0.3) { g.strokeStyle = 'rgba(140,150,160,0.25)'; g.beginPath(); g.moveTo(x + r() * w, y); g.lineTo(x + w / 2, y + h / 2); g.lineTo(x + r() * w, y + h); g.stroke(); }
    }
    g.fillStyle = '#26272a'; g.fillRect(x - 8, y + h + 4, w + 16, 8); // sill
  }
  return tex(c);
}
export function emissiveWindows(src) {
  // same layout as facadeTexture: only the lit windows, for the emissive map
  return src;
}
export function metalTexture(seed = 13) {
  const [c, g] = canvas(256, 256), r = rng(seed);
  g.fillStyle = '#4a4d50'; g.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 256; y += 16) { g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(0, y, 256, 3); g.fillStyle = 'rgba(255,255,255,0.05)'; g.fillRect(0, y + 3, 256, 2); }
  stains(g, 256, 256, r, 12, 'rgba(90,50,20,0.35)', 50); // rust
  grime(g, 256, 256, r, 3000, ['#3a3c3e', '#5a5d60']);
  return tex(c);
}
export function bloodTexture(seed = 17) {
  const [c, g] = canvas(128, 128), r = rng(seed);
  for (let i = 0; i < 26; i++) {
    const x = 64 + (r() - 0.5) * 70, y = 64 + (r() - 0.5) * 70, rr = 3 + r() * 16;
    g.fillStyle = `rgba(${70 + r() * 40},${4 + r() * 6},${4 + r() * 6},${0.6 + r() * 0.4})`;
    g.beginPath(); g.arc(x, y, rr, 0, 7); g.fill();
  }
  return tex(c, { repeat: false });
}
export function holeTexture() {
  const [c, g] = canvas(64, 64);
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 30);
  grd.addColorStop(0, 'rgba(0,0,0,1)'); grd.addColorStop(0.3, 'rgba(15,12,10,0.9)'); grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  return tex(c, { repeat: false });
}
export function glowTexture() {
  const [c, g] = canvas(128, 128), grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.25, 'rgba(255,255,255,0.35)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  return tex(c, { repeat: false });
}
export function smokeTexture() {
  const [c, g] = canvas(128, 128), r = rng(19);
  for (let i = 0; i < 16; i++) {
    const x = 64 + (r() - 0.5) * 36, y = 64 + (r() - 0.5) * 36, rad = 22 + r() * 26, grd = g.createRadialGradient(x, y, 0, x, y, rad);
    grd.addColorStop(0, 'rgba(255,255,255,0.28)'); grd.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  }
  return tex(c, { repeat: false });
}
// Flashlight cookie: hot centre, a soft ring and a faint outer spill — reads like a real torch.
export function flashlightCookie() {
  const [c, g] = canvas(256, 256);
  g.fillStyle = '#000'; g.fillRect(0, 0, 256, 256);
  const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grd.addColorStop(0, '#fffaf0'); grd.addColorStop(0.18, '#f4ecd8'); grd.addColorStop(0.3, '#b9b2a2'); grd.addColorStop(0.36, '#d8d0bc');
  grd.addColorStop(0.42, '#6e6a60'); grd.addColorStop(0.75, '#2a2824'); grd.addColorStop(1, '#000');
  g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
  return tex(c, { repeat: false });
}
export function signTexture(text, bg = '#1b2a1b', fg = '#c8c0a0') {
  const [c, g] = canvas(512, 128);
  g.fillStyle = bg; g.fillRect(0, 0, 512, 128);
  g.strokeStyle = fg; g.lineWidth = 6; g.strokeRect(8, 8, 496, 112);
  g.font = '700 64px "Special Elite", "Courier New", monospace'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = fg; g.fillText(text, 256, 68);
  const r = rng(text.length); stains(g, 512, 128, r, 8, 'rgba(0,0,0,0.5)', 50);
  return tex(c, { repeat: false });
}
export function graffitiTexture(text, color = '#a01818') {
  const [c, g] = canvas(512, 256), r = rng(text.length * 7);
  g.font = '700 74px "Special Elite", "Courier New", monospace'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = color; g.globalAlpha = 0.85;
  const lines = text.split('\n');
  lines.forEach((l, i) => { g.save(); g.translate(256, 128 + (i - (lines.length - 1) / 2) * 80); g.rotate((r() - 0.5) * 0.1); g.fillText(l, 0, 0); g.restore(); });
  for (let i = 0; i < 30; i++) { g.fillRect(40 + r() * 430, 90 + r() * 120, 3, 10 + r() * 40); } // drips
  return tex(c, { repeat: false });
}
