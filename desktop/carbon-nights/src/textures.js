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

// Tileable value noise rendered into a canvas (used for puddles / water normals).
function noiseField(size, scales, rand) {
  const out = new Float32Array(size * size);
  let amp = 1, total = 0;
  for (const cells of scales) {
    const g = new Float32Array(cells * cells).map(() => rand());
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const fx = (x / size) * cells, fy = (y / size) * cells;
      const x0 = Math.floor(fx), y0 = Math.floor(fy);
      const tx = fx - x0, ty = fy - y0;
      const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
      const a = g[(y0 % cells) * cells + (x0 % cells)];
      const b = g[(y0 % cells) * cells + ((x0 + 1) % cells)];
      const c = g[((y0 + 1) % cells) * cells + (x0 % cells)];
      const d = g[((y0 + 1) % cells) * cells + ((x0 + 1) % cells)];
      out[y * size + x] += amp * (a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy);
    }
    total += amp; amp *= 0.5;
  }
  for (let i = 0; i < out.length; i++) out[i] /= total;
  return out;
}

export function roadTexture() {
  const [c, g] = canvas(512, 1024);
  const r = rng(7);
  g.fillStyle = '#26262b';
  g.fillRect(0, 0, 512, 1024);
  for (let i = 0; i < 26000; i++) {
    const v = 25 + r() * 40;
    g.fillStyle = `rgba(${v},${v},${v + 4},${0.25 + r() * 0.4})`;
    g.fillRect(r() * 512, r() * 1024, 1 + r() * 2, 1 + r() * 2);
  }
  // tire wear lanes (slightly darker)
  for (const u of [0.13, 0.37, 0.63, 0.87]) {
    const grd = g.createLinearGradient((u - 0.07) * 512, 0, (u + 0.07) * 512, 0);
    grd.addColorStop(0, 'rgba(0,0,0,0)'); grd.addColorStop(0.5, 'rgba(8,8,12,0.35)'); grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.fillRect((u - 0.07) * 512, 0, 0.14 * 512, 1024);
  }
  // edge lines
  g.fillStyle = '#d8d8d0';
  g.fillRect(12, 0, 9, 1024); g.fillRect(512 - 21, 0, 9, 1024);
  // lane dashes
  for (const u of [0.25, 0.75]) for (let y = 0; y < 1024; y += 256) g.fillRect(u * 512 - 4, y + 40, 8, 150);
  // center double line (amber)
  g.fillStyle = '#d9a43a';
  g.fillRect(256 - 10, 0, 6, 1024); g.fillRect(256 + 4, 0, 6, 1024);
  // cracks & patches
  g.strokeStyle = 'rgba(10,10,12,0.5)'; g.lineWidth = 1.2;
  for (let i = 0; i < 14; i++) {
    let x = r() * 512, y = r() * 1024; g.beginPath(); g.moveTo(x, y);
    for (let k = 0; k < 6; k++) { x += (r() - 0.5) * 40; y += (r() - 0.5) * 40; g.lineTo(x, y); }
    g.stroke();
  }
  return tex(c);
}

export function puddleTexture() {
  const size = 256, r = rng(3);
  const n = noiseField(size, [4, 8, 16, 32], r);
  const n2 = noiseField(size, [16, 32, 64], rng(11));
  const [c, g] = canvas(size, size);
  const img = g.createImageData(size, size);
  for (let i = 0; i < size * size; i++) {
    img.data[i * 4] = Math.min(255, Math.max(0, (n[i] - 0.3) * 2.2 * 255));
    img.data[i * 4 + 1] = n2[i] * 255;
    img.data[i * 4 + 2] = n[(i * 7) % (size * size)] * 255;
    img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  return tex(c, false);
}

export function normalNoiseTexture(seed = 5, scales = [8, 16, 32, 64], strength = 3) {
  const size = 256;
  const h = noiseField(size, scales, rng(seed));
  const [c, g] = canvas(size, size);
  const img = g.createImageData(size, size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const i = y * size + x;
    const dx = (h[y * size + ((x + 1) % size)] - h[y * size + ((x - 1 + size) % size)]) * strength * size / 16;
    const dy = (h[((y + 1) % size) * size + x] - h[((y - 1 + size) % size) * size + x]) * strength * size / 16;
    const len = Math.hypot(dx, dy, 1);
    img.data[i * 4] = (-dx / len * 0.5 + 0.5) * 255;
    img.data[i * 4 + 1] = (-dy / len * 0.5 + 0.5) * 255;
    img.data[i * 4 + 2] = (1 / len * 0.5 + 0.5) * 255;
    img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  return tex(c, false);
}

// 16x16 grid of windows; wall pixels are near-black so the emissive map only lights the glass.
export function windowTexture(seed = 1, warm = true) {
  const S = 1024, N = 16, cell = S / N;
  const [c, g] = canvas(S, S);
  const r = rng(seed);
  g.fillStyle = '#0b0c12'; g.fillRect(0, 0, S, S);
  const lit = warm
    ? ['#ffd9a0', '#ffe6bf', '#ffcf8a', '#f5f0e0', '#cfe6ff', '#bfe0ff']
    : ['#bfe0ff', '#d6ecff', '#9fd0ff', '#ffe6bf'];
  for (let row = 0; row < N; row++) {
    const officeFloor = r() < 0.12; // entire floor lit
    const darkFloor = r() < 0.15;
    for (let col = 0; col < N; col++) {
      const x = col * cell, y = row * cell;
      const mx = cell * 0.12, my = cell * 0.18;
      let on = officeFloor ? r() < 0.85 : darkFloor ? r() < 0.04 : r() < 0.26;
      if (on) {
        const base = lit[Math.floor(r() * lit.length)];
        g.fillStyle = base;
        g.globalAlpha = 0.35 + r() * 0.6;
        g.fillRect(x + mx, y + my, cell - mx * 2, cell - my * 2);
        // blinds / silhouettes
        g.globalAlpha = 0.25;
        g.fillStyle = '#000';
        if (r() < 0.4) for (let k = 0; k < 5; k++) g.fillRect(x + mx, y + my + k * (cell - my * 2) / 5, cell - mx * 2, 2);
        if (r() < 0.2) g.fillRect(x + mx + r() * (cell - mx * 2 - 10), y + cell - my - 22, 10, 22);
        g.globalAlpha = 1;
      } else {
        const grd = g.createLinearGradient(x, y + my, x + cell, y + cell - my);
        grd.addColorStop(0, '#141a26'); grd.addColorStop(1, '#07090e');
        g.fillStyle = grd;
        g.fillRect(x + mx, y + my, cell - mx * 2, cell - my * 2);
      }
    }
  }
  return tex(c);
}

export function glowTexture(inner = 'rgba(255,255,255,1)', mid = 'rgba(255,255,255,0.35)') {
  const [c, g] = canvas(128, 128);
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, inner); grd.addColorStop(0.25, mid); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  return tex(c, true, false);
}

export function smokeTexture() {
  const [c, g] = canvas(128, 128);
  const r = rng(9);
  for (let i = 0; i < 18; i++) {
    const x = 64 + (r() - 0.5) * 40, y = 64 + (r() - 0.5) * 40, rad = 20 + r() * 30;
    const grd = g.createRadialGradient(x, y, 0, x, y, rad);
    grd.addColorStop(0, 'rgba(255,255,255,0.22)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  }
  return tex(c, true, false);
}

export function checkerTexture() {
  const [c, g] = canvas(256, 64);
  for (let y = 0; y < 4; y++) for (let x = 0; x < 16; x++) {
    g.fillStyle = (x + y) % 2 ? '#111' : '#eee';
    g.fillRect(x * 16, y * 16, 16, 16);
  }
  return tex(c, true, false);
}

export function concreteTexture() {
  const [c, g] = canvas(256, 256);
  const r = rng(21);
  g.fillStyle = '#4a4a50'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 5000; i++) {
    const v = 50 + r() * 40;
    g.fillStyle = `rgba(${v},${v},${v + 5},0.4)`;
    g.fillRect(r() * 256, r() * 256, 2, 2);
  }
  g.strokeStyle = '#2c2c32'; g.lineWidth = 3;
  for (let i = 0; i <= 256; i += 64) { g.beginPath(); g.moveTo(0, i); g.lineTo(256, i); g.stroke(); g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 256); g.stroke(); }
  return tex(c);
}

export function rockTexture() {
  const size = 256;
  const n = noiseField(size, [8, 16, 32, 64, 128], rng(31));
  const [c, g] = canvas(size, size);
  const img = g.createImageData(size, size);
  for (let i = 0; i < size * size; i++) {
    const v = 120 + (n[i] - 0.5) * 170;
    img.data[i * 4] = v; img.data[i * 4 + 1] = v; img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  return tex(c);
}

const SIGN_FONTS = ['900 italic 110px "Rajdhani", sans-serif', '700 100px "Orbitron", sans-serif', '800 110px sans-serif'];

// Neon sign: glowing text on a dark backing panel.
export function neonSign(text, color, opts = {}) {
  const vertical = !!opts.vertical;
  const font = opts.font ?? SIGN_FONTS[0];
  const [c, g] = vertical ? canvas(160, 640) : canvas(640, 200);
  g.fillStyle = 'rgba(6,4,12,0.92)';
  g.fillRect(0, 0, c.width, c.height);
  g.strokeStyle = color; g.lineWidth = 6; g.shadowColor = color; g.shadowBlur = 18;
  g.strokeRect(10, 10, c.width - 20, c.height - 20);
  g.font = font;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  const draw = () => {
    if (vertical) {
      const chars = [...text];
      const step = (c.height - 60) / chars.length;
      g.font = font.replace(/\d+px/, `${Math.min(110, step * 0.95) | 0}px`);
      chars.forEach((ch, i) => g.fillText(ch, c.width / 2, 30 + step * (i + 0.5)));
    } else {
      let size = 110;
      g.font = font.replace(/\d+px/, `${size}px`);
      while (g.measureText(text).width > c.width - 70 && size > 30) { size -= 6; g.font = font.replace(/\d+px/, `${size}px`); }
      g.fillText(text, c.width / 2, c.height / 2 + 4);
    }
  };
  g.fillStyle = color; g.shadowBlur = 30; draw();
  g.shadowBlur = 8; g.fillStyle = '#ffffff'; g.globalAlpha = 0.85; draw(); g.globalAlpha = 1;
  return tex(c, true, false);
}
