// Procedural canvas textures: sandstone blocks, plaster, sand, paving, crates, doors, decals.
import * as THREE from 'three';

export function rng(seed) {
  let s = seed >>> 0;
  return () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function tex(c, { repeat = true, srgb = true, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  return t;
}
function noise(g, w, h, r, amt, alpha = 0.08, size = 2) {
  for (let i = 0; i < amt; i++) {
    const v = r() < 0.5 ? 0 : 255;
    g.fillStyle = `rgba(${v},${v},${v},${alpha * r()})`;
    g.fillRect(r() * w, r() * h, size * (0.5 + r()), size * (0.5 + r()));
  }
}
function blotches(g, w, h, r, n, color, rad) {
  for (let i = 0; i < n; i++) {
    const x = r() * w, y = r() * h, s = rad * (0.4 + r());
    const grd = g.createRadialGradient(x, y, 0, x, y, s);
    grd.addColorStop(0, color); grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.fillRect(x - s, y - s, s * 2, s * 2);
    // wrap so the tile stays seamless
    for (const [ox, oy] of [[w, 0], [-w, 0], [0, h], [0, -h]]) { g.save(); g.translate(ox, oy); g.fillRect(x - s, y - s, s * 2, s * 2); g.restore(); }
  }
}

// 1 tile = 4 m × 4 m of wall
export function sandstoneTexture(seed = 1, base = '#cfae78') {
  const S = 512, [c, g] = canvas(S, S), r = rng(seed);
  g.fillStyle = base; g.fillRect(0, 0, S, S);
  blotches(g, S, S, r, 14, 'rgba(160,120,70,0.14)', 90);
  blotches(g, S, S, r, 10, 'rgba(255,240,210,0.12)', 80);
  const rowH = S / 8;
  for (let y = 0; y < 8; y++) {
    let x = -r() * 80;
    while (x < S) {
      const bw = 70 + r() * 70;
      const l = 0.9 + r() * 0.2;
      g.fillStyle = `rgba(${l > 1 ? 255 : 90},${l > 1 ? 235 : 60},${l > 1 ? 200 : 30},${Math.abs(l - 1) * 0.9})`;
      g.fillRect(x + 2, y * rowH + 2, bw - 4, rowH - 4);
      // mortar
      g.fillStyle = 'rgba(95,70,40,0.55)';
      g.fillRect(x, y * rowH, 3, rowH);
      if (x + bw > S) g.fillRect(x + bw - S, y * rowH, 3, rowH);
      // chips
      if (r() < 0.25) { g.fillStyle = 'rgba(90,60,30,0.25)'; g.beginPath(); g.arc(x + r() * bw, y * rowH + r() * rowH, 3 + r() * 6, 0, 7); g.fill(); }
      x += bw;
    }
    g.fillStyle = 'rgba(95,70,40,0.6)'; g.fillRect(0, y * rowH, S, 3);
    g.fillStyle = 'rgba(255,240,215,0.25)'; g.fillRect(0, y * rowH + 3, S, 2);
  }
  noise(g, S, S, r, 9000, 0.12, 2);
  return tex(c);
}

export function plasterTexture(seed = 2, base = '#d9c29a') {
  const S = 512, [c, g] = canvas(S, S), r = rng(seed);
  g.fillStyle = base; g.fillRect(0, 0, S, S);
  blotches(g, S, S, r, 14, 'rgba(170,130,80,0.12)', 110);
  blotches(g, S, S, r, 10, 'rgba(255,248,230,0.15)', 90);
  // flaked-off patches showing bricks
  for (let i = 0; i < 3; i++) {
    const x = r() * S, y = r() * S, w = 50 + r() * 90, h = 30 + r() * 50;
    g.fillStyle = 'rgba(170,120,80,0.55)'; g.fillRect(x, y, w, h);
    g.strokeStyle = 'rgba(110,75,45,0.5)'; g.lineWidth = 2;
    for (let yy = y; yy < y + h; yy += 12) { g.beginPath(); g.moveTo(x, yy); g.lineTo(x + w, yy); g.stroke(); }
  }
  // cracks
  g.strokeStyle = 'rgba(90,65,40,0.45)'; g.lineWidth = 1.5;
  for (let i = 0; i < 8; i++) {
    let x = r() * S, y = r() * S; g.beginPath(); g.moveTo(x, y);
    for (let k = 0; k < 6; k++) { x += (r() - 0.5) * 40; y += r() * 25; g.lineTo(x, y); }
    g.stroke();
  }
  // grime at the bottom of the tile (walls are 1.5–2.5 tiles tall; the shader-free trick: dirty band)
  const grd = g.createLinearGradient(0, S * 0.8, 0, S);
  grd.addColorStop(0, 'rgba(110,80,45,0)'); grd.addColorStop(1, 'rgba(110,80,45,0.25)');
  g.fillStyle = grd; g.fillRect(0, S * 0.8, S, S * 0.2);
  noise(g, S, S, r, 6000, 0.06, 2);
  return tex(c);
}

// floor: 1 tile = 4 m
export function sandTexture(seed = 3) {
  const S = 512, [c, g] = canvas(S, S), r = rng(seed);
  g.fillStyle = '#c9a66e'; g.fillRect(0, 0, S, S);
  blotches(g, S, S, r, 40, 'rgba(150,110,60,0.25)', 70);
  blotches(g, S, S, r, 30, 'rgba(240,215,170,0.3)', 60);
  for (let i = 0; i < 260; i++) {
    const x = r() * S, y = r() * S, s = 1 + r() * 3.5;
    g.fillStyle = `rgba(${90 + r() * 60},${70 + r() * 40},${40 + r() * 30},${0.4 + r() * 0.4})`;
    g.beginPath(); g.ellipse(x, y, s, s * (0.6 + r() * 0.4), r() * 3, 0, 7); g.fill();
  }
  noise(g, S, S, r, 16000, 0.12, 2);
  return tex(c);
}

export function pavingTexture(seed = 4) {
  const S = 512, [c, g] = canvas(S, S), r = rng(seed);
  g.fillStyle = '#bba07a'; g.fillRect(0, 0, S, S);
  const n = 4, cs = S / n;
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const l = 0.85 + r() * 0.3;
    g.fillStyle = `rgb(${190 * l | 0},${165 * l | 0},${125 * l | 0})`;
    g.fillRect(x * cs + 3, y * cs + 3, cs - 6, cs - 6);
    if (r() < 0.3) { g.strokeStyle = 'rgba(80,60,40,0.4)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x * cs + r() * cs, y * cs); g.lineTo(x * cs + r() * cs, y * cs + cs); g.stroke(); }
  }
  blotches(g, S, S, r, 25, 'rgba(120,90,55,0.2)', 80);
  noise(g, S, S, r, 12000, 0.12, 2);
  return tex(c);
}

export function trimTexture(seed = 5) {
  const S = 256, [c, g] = canvas(S, S), r = rng(seed);
  g.fillStyle = '#e3cfa6'; g.fillRect(0, 0, S, S);
  blotches(g, S, S, r, 20, 'rgba(160,125,80,0.25)', 40);
  noise(g, S, S, r, 5000, 0.12, 2);
  return tex(c);
}

export function crateTexture(kind = 'wood') {
  const S = 256, [c, g] = canvas(S, S), r = rng(kind === 'wood' ? 7 : 8);
  const base = kind === 'wood' ? [176, 128, 72] : [86, 98, 62];
  const col = (l, a = 1) => `rgba(${base[0] * l | 0},${base[1] * l | 0},${base[2] * l | 0},${a})`;
  g.fillStyle = col(1); g.fillRect(0, 0, S, S);
  // planks
  for (let i = 0; i < 6; i++) {
    g.fillStyle = col(0.85 + r() * 0.3); g.fillRect(0, i * S / 6 + 1, S, S / 6 - 2);
    g.fillStyle = col(0.55); g.fillRect(0, i * S / 6, S, 2);
    for (let k = 0; k < 14; k++) { g.fillStyle = col(0.7, 0.25); g.fillRect(r() * S, i * S / 6 + r() * S / 6, 20 + r() * 50, 1); }
  }
  // frame + cross brace
  const f = 26;
  g.fillStyle = col(0.75); g.fillRect(0, 0, S, f); g.fillRect(0, S - f, S, f); g.fillRect(0, 0, f, S); g.fillRect(S - f, 0, f, S);
  g.save(); g.translate(S / 2, S / 2); g.rotate(Math.PI / 4); g.fillRect(-S * 0.7, -f / 2, S * 1.4, f); g.restore();
  g.strokeStyle = col(0.45); g.lineWidth = 3; g.strokeRect(1.5, 1.5, S - 3, S - 3); g.strokeRect(f, f, S - 2 * f, S - 2 * f);
  // nails
  g.fillStyle = 'rgba(40,35,30,0.8)';
  for (const [x, y] of [[13, 13], [S - 13, 13], [13, S - 13], [S - 13, S - 13], [S / 2, 13], [S / 2, S - 13]]) { g.beginPath(); g.arc(x, y, 2.5, 0, 7); g.fill(); }
  if (kind !== 'wood') { g.fillStyle = 'rgba(230,220,180,0.7)'; g.font = 'bold 30px monospace'; g.textAlign = 'center'; g.fillText('AMMO', S / 2, S / 2 + 10); }
  noise(g, S, S, r, 4000, 0.15, 2);
  return tex(c);
}

export function doorTexture() {
  const S = 256, [c, g] = canvas(S, S), r = rng(11);
  g.fillStyle = '#3f6f8c'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 8; i++) {
    g.fillStyle = `rgba(${40 + r() * 30},${90 + r() * 30},${115 + r() * 30},1)`; g.fillRect(i * S / 8 + 1, 0, S / 8 - 2, S);
    g.fillStyle = 'rgba(20,30,40,0.6)'; g.fillRect(i * S / 8, 0, 2, S);
  }
  // paint peeling to wood
  for (let i = 0; i < 40; i++) { g.fillStyle = 'rgba(150,110,70,0.8)'; g.fillRect(r() * S, r() * S, 4 + r() * 20, 2 + r() * 8); }
  g.fillStyle = 'rgba(60,50,40,0.9)'; g.fillRect(0, S * 0.2, S, 10); g.fillRect(0, S * 0.75, S, 10);
  noise(g, S, S, r, 4000, 0.15, 2);
  return tex(c);
}

export function barrelTexture() {
  const [c, g] = canvas(256, 128), r = rng(13);
  g.fillStyle = '#2f5d8a'; g.fillRect(0, 0, 256, 128);
  for (const y of [18, 64, 108]) { g.fillStyle = 'rgba(20,35,55,0.8)'; g.fillRect(0, y - 3, 256, 6); }
  for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(120,70,30,${0.3 + r() * 0.4})`; g.fillRect(r() * 256, r() * 128, 3 + r() * 14, 2 + r() * 10); }
  noise(g, 256, 128, r, 3000, 0.15, 2);
  return tex(c);
}

export function letterTexture(text, color = 'rgba(200,40,30,0.85)') {
  const S = 256, [c, g] = canvas(S, S), r = rng(text.charCodeAt(0));
  g.font = 'bold 200px Impact, Arial Black, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = color; g.fillText(text, S / 2, S / 2 + 10);
  // spray-paint drips & speckle
  for (let i = 0; i < 10; i++) { g.fillRect(S / 2 - 60 + r() * 120, S / 2 + 60 + r() * 20, 3, 10 + r() * 30); }
  g.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 1500; i++) { g.fillStyle = `rgba(0,0,0,${r() * 0.6})`; g.fillRect(r() * S, r() * S, 2, 2); }
  return tex(c, { repeat: false });
}

export function signTexture(text, arrow) {
  const [c, g] = canvas(256, 128);
  g.fillStyle = 'rgba(0,0,0,0)'; g.fillRect(0, 0, 256, 128);
  g.fillStyle = 'rgba(30,30,30,0.85)';
  g.font = 'bold 72px Impact, Arial Black, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text + ' ' + arrow, 128, 68);
  return tex(c, { repeat: false });
}

export function holeTexture() {
  const [c, g] = canvas(64, 64);
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 30);
  grd.addColorStop(0, 'rgba(10,8,6,1)'); grd.addColorStop(0.25, 'rgba(25,20,15,0.95)'); grd.addColorStop(0.45, 'rgba(60,45,30,0.5)'); grd.addColorStop(1, 'rgba(60,45,30,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  return tex(c, { repeat: false });
}

export function smokeTexture() {
  const [c, g] = canvas(128, 128), r = rng(9);
  for (let i = 0; i < 18; i++) {
    const x = 64 + (r() - 0.5) * 40, y = 64 + (r() - 0.5) * 40, rad = 20 + r() * 26;
    const grd = g.createRadialGradient(x, y, 0, x, y, rad);
    grd.addColorStop(0, 'rgba(255,255,255,0.32)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  }
  return tex(c, { repeat: false, srgb: false });
}

export function glowTexture() {
  const [c, g] = canvas(64, 64);
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.35, 'rgba(255,255,255,0.35)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  return tex(c, { repeat: false, srgb: false });
}

export function flashTexture() {
  // star-shaped muzzle flash
  const [c, g] = canvas(128, 128);
  g.translate(64, 64);
  for (let k = 0; k < 2; k++) {
    g.rotate(Math.PI / 4);
    g.fillStyle = 'rgba(255,200,120,0.85)';
    g.beginPath();
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2, rr = i % 2 ? 18 : 60; g.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); }
    g.fill();
  }
  const grd = g.createRadialGradient(0, 0, 0, 0, 0, 30);
  grd.addColorStop(0, 'rgba(255,250,220,1)'); grd.addColorStop(1, 'rgba(255,180,90,0)');
  g.fillStyle = grd; g.fillRect(-64, -64, 128, 128);
  return tex(c, { repeat: false });
}

export function skyTexture() {
  const [c, g] = canvas(16, 512);
  const grd = g.createLinearGradient(0, 0, 0, 512);
  grd.addColorStop(0, '#3f7fc4'); grd.addColorStop(0.42, '#8fbbe0'); grd.addColorStop(0.5, '#e8dcc0'); grd.addColorStop(0.56, '#d8bf93'); grd.addColorStop(1, '#a88a5c');
  g.fillStyle = grd; g.fillRect(0, 0, 16, 512);
  return tex(c, { repeat: false });
}
