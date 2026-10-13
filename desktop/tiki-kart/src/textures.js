import * as THREE from 'three';

export function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

export function rng(seed = 1) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function tex(c, srgb = true, repeat = true) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}

function speckle(g, w, h, n, r, colors) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[Math.floor(r() * colors.length)];
    g.globalAlpha = 0.25 + r() * 0.5;
    const s = 1 + r() * 3;
    g.fillRect(r() * w, r() * h, s, s);
  }
  g.globalAlpha = 1;
}

// Packed-dirt kart track, 1 tile = full width x 24m.
export function dirtRoadTexture() {
  const [c, g] = canvas(512, 768);
  const r = rng(4);
  const grd = g.createLinearGradient(0, 0, 512, 0);
  grd.addColorStop(0, '#b0794a'); grd.addColorStop(0.5, '#c98f58'); grd.addColorStop(1, '#b0794a');
  g.fillStyle = grd; g.fillRect(0, 0, 512, 768);
  speckle(g, 512, 768, 14000, r, ['#8a5a32', '#dba574', '#a46c3f', '#e8c08e', '#7a4e2b']);
  // pebbles
  for (let i = 0; i < 220; i++) {
    g.fillStyle = ['#d8c3a0', '#9b8a74', '#efe0c4'][Math.floor(r() * 3)];
    g.beginPath(); g.ellipse(r() * 512, r() * 768, 2 + r() * 4, 1.5 + r() * 3, r() * 3, 0, 7); g.fill();
  }
  // tire grooves
  g.strokeStyle = 'rgba(90,55,30,0.18)'; g.lineWidth = 16;
  for (const u of [0.3, 0.42, 0.58, 0.7]) { g.beginPath(); g.moveTo(u * 512, 0); g.lineTo(u * 512 + (r() - 0.5) * 6, 768); g.stroke(); }
  // darker grassy edges
  const e = g.createLinearGradient(0, 0, 512, 0);
  e.addColorStop(0, 'rgba(70,90,30,0.55)'); e.addColorStop(0.06, 'rgba(70,90,30,0)'); e.addColorStop(0.94, 'rgba(70,90,30,0)'); e.addColorStop(1, 'rgba(70,90,30,0.55)');
  g.fillStyle = e; g.fillRect(0, 0, 512, 768);
  return tex(c);
}

export function plankTexture() {
  const [c, g] = canvas(512, 512);
  const r = rng(8);
  const n = 8, h = 512 / n;
  for (let i = 0; i < n; i++) {
    const base = 120 + r() * 40;
    g.fillStyle = `rgb(${base + 40},${base},${base - 50})`;
    g.fillRect(0, i * h, 512, h - 5);
    for (let k = 0; k < 40; k++) {
      g.strokeStyle = `rgba(80,50,25,${0.1 + r() * 0.2})`; g.lineWidth = 1 + r() * 2;
      const y = i * h + r() * (h - 6);
      g.beginPath(); g.moveTo(0, y); g.bezierCurveTo(170, y + (r() - 0.5) * 6, 340, y + (r() - 0.5) * 6, 512, y + (r() - 0.5) * 4); g.stroke();
    }
    g.fillStyle = '#3c2614'; g.fillRect(0, i * h + h - 5, 512, 5);
    g.fillStyle = '#555'; for (const x of [30, 482]) { g.beginPath(); g.arc(x, i * h + h / 2 - 2, 4, 0, 7); g.fill(); }
  }
  return tex(c);
}

export function kerbTexture() {
  const [c, g] = canvas(64, 256);
  for (let i = 0; i < 4; i++) { g.fillStyle = i % 2 ? '#f4f4f4' : '#e8322b'; g.fillRect(0, i * 64, 64, 64); }
  return tex(c);
}

export function sandTexture() {
  const [c, g] = canvas(256, 256);
  const r = rng(12);
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, 256, 256);
  speckle(g, 256, 256, 6000, r, ['#d9d9d9', '#bfbfbf', '#ffffff', '#e6e6e6']);
  return tex(c);
}

export function rockTexture() {
  const [c, g] = canvas(256, 256);
  const r = rng(31);
  g.fillStyle = '#9a9a9a'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 60; i++) {
    g.fillStyle = `rgba(${60 + r() * 120},${60 + r() * 110},${60 + r() * 100},0.35)`;
    g.beginPath(); g.ellipse(r() * 256, r() * 256, 10 + r() * 40, 6 + r() * 20, r() * 3, 0, 7); g.fill();
  }
  speckle(g, 256, 256, 3000, r, ['#6d6d6d', '#c8c8c8']);
  return tex(c);
}

export function glowTexture() {
  const [c, g] = canvas(128, 128);
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.3, 'rgba(255,255,255,0.4)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  return tex(c, true, false);
}

export function smokeTexture() {
  const [c, g] = canvas(128, 128);
  const r = rng(9);
  for (let i = 0; i < 16; i++) {
    const x = 64 + (r() - 0.5) * 36, y = 64 + (r() - 0.5) * 36, rad = 22 + r() * 26;
    const grd = g.createRadialGradient(x, y, 0, x, y, rad);
    grd.addColorStop(0, 'rgba(255,255,255,0.3)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  }
  return tex(c, true, false);
}

export function cloudTexture(seed) {
  const [c, g] = canvas(512, 256);
  const r = rng(seed);
  const puffs = [];
  for (let i = 0; i < 9; i++) puffs.push([90 + r() * 330, 150 - Math.sin((i / 8) * Math.PI) * 60 * r() - 20, 40 + r() * 50]);
  // shadow pass then highlight pass for a cartoon look
  for (const [x, y, s] of puffs) { g.fillStyle = '#c9dcf2'; g.beginPath(); g.arc(x, y + 10, s, 0, 7); g.fill(); }
  for (const [x, y, s] of puffs) { g.fillStyle = '#ffffff'; g.beginPath(); g.arc(x, y, s * 0.92, 0, 7); g.fill(); }
  g.globalCompositeOperation = 'destination-in';
  const fade = g.createLinearGradient(0, 0, 0, 256); fade.addColorStop(0, '#000'); fade.addColorStop(0.9, '#000'); fade.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = fade; g.fillRect(0, 0, 512, 256);
  return tex(c, true, false);
}

export function itemBoxTexture() {
  const [c, g] = canvas(256, 256);
  const grd = g.createLinearGradient(0, 0, 256, 256);
  grd.addColorStop(0, '#ffe066'); grd.addColorStop(0.5, '#ff9f1c'); grd.addColorStop(1, '#ff4f9a');
  g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
  g.strokeStyle = '#fff8'; g.lineWidth = 14; g.strokeRect(10, 10, 236, 236);
  g.font = '900 190px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = '#7a2b00'; g.fillText('?', 134, 142);
  g.fillStyle = '#fff'; g.fillText('?', 128, 134);
  return tex(c, true, false);
}

export function boostPadTexture() {
  const [c, g] = canvas(256, 256);
  g.fillStyle = '#1b2a6b'; g.fillRect(0, 0, 256, 256);
  for (let k = 0; k < 3; k++) {
    const y = 40 + k * 70;
    const grd = g.createLinearGradient(0, y + 60, 0, y);
    grd.addColorStop(0, '#2fd7ff'); grd.addColorStop(1, '#ffffff');
    g.fillStyle = grd;
    g.beginPath(); g.moveTo(128, y); g.lineTo(220, y + 60); g.lineTo(180, y + 60); g.lineTo(128, y + 22); g.lineTo(76, y + 60); g.lineTo(36, y + 60); g.closePath(); g.fill();
  }
  g.strokeStyle = '#ffde3b'; g.lineWidth = 10; g.strokeRect(5, 5, 246, 246);
  return tex(c, true, true);
}

export function toonGradient() {
  const data = new Uint8Array([90, 170, 255]);
  const t = new THREE.DataTexture(data, 3, 1, THREE.RedFormat);
  t.minFilter = t.magFilter = THREE.NearestFilter;
  t.needsUpdate = true;
  return t;
}

export function bannerTexture(text, bg = '#ff4f9a', fg = '#fff') {
  const [c, g] = canvas(1024, 192);
  g.fillStyle = bg; g.fillRect(0, 0, 1024, 192);
  g.fillStyle = '#ffde3b'; g.fillRect(0, 0, 1024, 16); g.fillRect(0, 176, 1024, 16);
  g.font = '900 108px "Baloo 2", "Fredoka", sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = 14; g.strokeStyle = '#5a1030'; g.strokeText(text, 512, 102);
  g.fillStyle = fg; g.fillText(text, 512, 100);
  return tex(c, true, false);
}

export function waterfallTexture() {
  const [c, g] = canvas(128, 512);
  const r = rng(77);
  g.fillStyle = '#7fd8ff'; g.fillRect(0, 0, 128, 512);
  for (let i = 0; i < 260; i++) {
    g.fillStyle = `rgba(255,255,255,${0.2 + r() * 0.6})`;
    g.fillRect(r() * 128, r() * 512, 1 + r() * 4, 20 + r() * 60);
  }
  return tex(c, true, true);
}
