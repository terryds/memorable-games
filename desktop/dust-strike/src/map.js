// "Dust" — a desert bomb-defusal map on a 36×30 grid of 4 m cells (walls / floor), plus crates
// and door panels as AABBs. Pure JS: shared by the renderer, the bots and the headless sim.
//   # wall   . floor   A/B bombsite   T/C team spawn (buy zones)
export const CELL = 4;
const RAW = [
  '####################################',
  '#BBBBBBBBB####CCCCCCCC...AAAAAAAAAA#',
  '#BBBBBBBBB####CCC##CCC...AAAAAAAAAA#',
  '#BBBBBBBBB....CCC##CCC###AAAAAAAAAA#',
  '#BBBBBBBBB....CCCCCCCC###AAAAAAAAAA#',
  '#BBBBBBBBB#####CCCCCC####AAAAAAAAAA#',
  '#BBBBBBBBB####...#########AAAAAAAAA#',
  '#BBBBBBBBB####...#########AAAAAAAAA#',
  '#BBBBBBBBB####......######AAAAAAAAA#',
  '#..##############...######..####...#',
  '#..##############...........####...#',
  '#...#############...........####...#',
  '###.#############...############.###',
  '###.#############...############.###',
  '#...#############...############...#',
  '#...................############...#',
  '#...###########.....##############.#',
  '#...#############...##############.#',
  '#.###############...############...#',
  '#.###############...############...#',
  '#...#############...#####..........#',
  '#...#############...#####..........#',
  '#.............#.....#####...########',
  '##########TTTTTTTTTTTTTTTTTTTT######',
  '##########TTTTTTTTTTTTTTTTTTTT######',
  '##########TTTTTTTTTTTTTTTTTTTT######',
  '##########TTTTTTTTTTTTTTTTTTTT######',
  '##########TTTTTTTTTTTTTTTTTTTT######',
  '##########TTTTTTTTTTTTTTTTTTTT######',
  '####################################',
];
export const GW = RAW[0].length, GH = RAW.length;
for (const r of RAW) if (r.length !== GW) throw new Error('bad map row: ' + r);
export const grid = RAW.map((r) => r.split(''));
export const MAP_W = GW * CELL, MAP_H = GH * CELL;
export const isWallCell = (c, r) => c < 0 || r < 0 || c >= GW || r >= GH || grid[r][c] === '#';
export const cellAt = (x, z) => { const r = grid[Math.floor(z / CELL)]; return r ? r[Math.floor(x / CELL)] ?? '#' : '#'; };
export const isWallAt = (x, z) => cellAt(x, z) === '#';

// ---------------------------------------------------------------- solid boxes
// {x0,x1,z0,z1,y0,y1,kind}. Crates are 1 m (jumpable) or 2 m (jump onto a 1 m one first).
export const boxes = [];
const crate = (x, z, s, h, kind = 'crate') => boxes.push({ x0: x - s / 2, x1: x + s / 2, z0: z - s / 2, z1: z + s / 2, y0: 0, y1: h, kind });
const panel = (x0, x1, z0, z1, h = 3.2) => boxes.push({ x0, x1, z0, z1, y0: 0, y1: h, kind: 'door' });
// B site
crate(22, 18, 2, 2); crate(23.5, 18.5, 1, 1); crate(10, 10, 1.4, 1); crate(34, 30, 2, 1, 'crate2');
crate(8, 30, 1.4, 1); crate(34, 8, 1, 1); crate(29, 23, 1, 1);
// A site
crate(118, 16, 2, 2); crate(119.5, 16.5, 1, 1); crate(132, 28, 2, 1, 'crate2'); crate(108, 10, 1.4, 1);
crate(136, 8, 2, 1); crate(104, 30, 1, 1); crate(126, 32, 1.4, 1);
// long A, outside long, mid, catwalk, tunnels
crate(138, 56, 2, 1, 'crate2'); crate(130, 44, 1.4, 1); crate(112, 84, 1.4, 1);
crate(72, 62, 2, 1); crate(78, 40, 1.4, 1); crate(96, 46.5, 1, 1);
crate(6, 46, 1.4, 1); crate(6, 66, 1, 1);
// spawns
crate(60, 100, 2, 1); crate(96, 104, 2, 2); crate(97.5, 102.5, 1, 1); crate(80, 111, 1.4, 1);
crate(62, 10, 1.4, 1); crate(84, 16, 1.4, 1);
// oil drums
for (const [x, z] of [[5.2, 5.2], [6.3, 5.6], [138.6, 34.6], [42.6, 93.6], [68.8, 86], [57.2, 9.6], [139, 81], [100.6, 4.8]]) crate(x, z, 0.75, 1.1, 'barrel');
// covered tunnels: roof slabs (block bullets / grenades, never touch walking)
const roofCells = [];
for (let r = 16; r <= 21; r++) for (let c = 1; c <= 3; c++) roofCells.push([c, r]);
for (let c = 1; c <= 9; c++) roofCells.push([c, 22]);
for (let c = 4; c <= 13; c++) roofCells.push([c, 15]);
for (const [c, r] of roofCells) if (RAW[r][c] !== '#') boxes.push({ x0: c * CELL, x1: c * CELL + CELL, z0: r * CELL, z1: r * CELL + CELL, y0: 4.4, y1: 4.9, kind: 'roof' });
// doorway lintels (decor + they stop high grenades)
boxes.push({ x0: 47.5, x1: 48.5, z0: 12, z1: 20, y0: 3.5, y1: 6.2, kind: 'lintel' });
boxes.push({ x0: 56, x1: 68, z0: 25.5, z1: 26.5, y0: 3.5, y1: 6.2, kind: 'lintel' });
boxes.push({ x0: 100, x1: 112, z0: 89.5, z1: 90.5, y0: 3.5, y1: 6.2, kind: 'lintel' });
// double doors: mid doors, long doors, B doors
panel(56, 59.5, 25.85, 26.15); panel(64.5, 68, 25.85, 26.15);
panel(100, 103.5, 89.85, 90.15); panel(108.5, 112, 89.85, 90.15);
panel(47.85, 48.15, 12, 14); panel(47.85, 48.15, 18, 20);

// ---------------------------------------------------------------- places
export const SITES = {
  A: { x: 120, z: 20, name: 'A' },
  B: { x: 20, z: 20, name: 'B' },
};
export const siteAt = (x, z) => { const c = cellAt(x, z); return c === 'A' || c === 'B' ? c : null; };
export const SPAWNS = {
  T: [[64, 106], [70, 102], [76, 106], [84, 102], [90, 108], [58, 112], [66, 112], [74, 98], [88, 96], [104, 110]],
  CT: [[60, 6], [64, 14], [60, 18], [80, 6], [84, 12], [66, 6], [82, 18], [72, 19], [64, 22], [86, 6]],
};
export const inBuyZone = (team, x, z) => cellAt(x, z) === (team === 'T' ? 'T' : 'C');

// ---------------------------------------------------------------- collision
const solidsTmp = [];
// every wall cell / box whose footprint overlaps [x±r]×[z±r] and vertical span overlaps (y0,y1)
export function solidsAt(x, z, r, y0, y1) {
  solidsTmp.length = 0;
  const c0 = Math.floor((x - r) / CELL), c1 = Math.floor((x + r) / CELL);
  const r0 = Math.floor((z - r) / CELL), r1 = Math.floor((z + r) / CELL);
  for (let rr = r0; rr <= r1; rr++) for (let cc = c0; cc <= c1; cc++)
    if (isWallCell(cc, rr)) solidsTmp.push({ x0: cc * CELL, x1: cc * CELL + CELL, z0: rr * CELL, z1: rr * CELL + CELL });
  for (const b of boxes)
    if (x + r > b.x0 && x - r < b.x1 && z + r > b.z0 && z - r < b.z1 && y1 > b.y0 + 0.001 && y0 < b.y1 - 0.001) solidsTmp.push(b);
  return solidsTmp;
}

// highest surface under the footprint at or below `feet` (+ a small snap)
export function groundAt(x, z, r, feet) {
  let g = 0;
  for (const b of boxes)
    if (x + r > b.x0 && x - r < b.x1 && z + r > b.z0 && z - r < b.z1 && b.y1 <= feet + 0.06 && b.y1 > g) g = b.y1;
  return g;
}

// axis-separated move with exact push-out; returns flags
export function moveBody(b, dx, dz, r, h) {
  let hitX = false, hitZ = false;
  const n = Math.max(1, Math.ceil(Math.max(Math.abs(dx), Math.abs(dz)) / 0.3));
  for (let i = 0; i < n; i++) {
    if (dx) {
      b.x += dx / n;
      const s = solidsAt(b.x, b.z, r, b.y + 0.02, b.y + h);
      if (s.length) {
        hitX = true;
        if (dx > 0) { let m = Infinity; for (const o of s) m = Math.min(m, o.x0); b.x = m - r - 1e-4; }
        else { let m = -Infinity; for (const o of s) m = Math.max(m, o.x1); b.x = m + r + 1e-4; }
      }
    }
    if (dz) {
      b.z += dz / n;
      const s = solidsAt(b.x, b.z, r, b.y + 0.02, b.y + h);
      if (s.length) {
        hitZ = true;
        if (dz > 0) { let m = Infinity; for (const o of s) m = Math.min(m, o.z0); b.z = m - r - 1e-4; }
        else { let m = -Infinity; for (const o of s) m = Math.max(m, o.z1); b.z = m + r + 1e-4; }
      }
    }
  }
  return { hitX, hitZ };
}

export function clearAt(x, z, r) { return solidsAt(x, z, r, 0.05, 1.7).length === 0; }

// ---------------------------------------------------------------- raycast
// first solid hit along a ray (walls are treated as infinitely tall): {t, nx, ny, nz, kind}
export function rayWorld(ox, oy, oz, dx, dy, dz, maxT = 300) {
  let best = maxT, nx = 0, ny = 0, nz = 0, kind = null;
  if (dy < -1e-6 && oy > 0) { const t = -oy / dy; if (t < best) { best = t; nx = 0; ny = 1; nz = 0; kind = 'floor'; } }
  // grid DDA in xz
  let cx = Math.floor(ox / CELL), cz = Math.floor(oz / CELL);
  if (isWallCell(cx, cz)) return { t: 0, nx: 0, ny: 0, nz: 0, kind: 'wall' };
  const sx = dx > 0 ? 1 : -1, sz = dz > 0 ? 1 : -1;
  const adx = Math.abs(dx), adz = Math.abs(dz);
  let tMaxX = adx > 1e-9 ? ((cx + (dx > 0 ? 1 : 0)) * CELL - ox) / dx : Infinity;
  let tMaxZ = adz > 1e-9 ? ((cz + (dz > 0 ? 1 : 0)) * CELL - oz) / dz : Infinity;
  const tdx = adx > 1e-9 ? CELL / adx : Infinity, tdz = adz > 1e-9 ? CELL / adz : Infinity;
  for (let i = 0; i < 200; i++) {
    let t, ax;
    if (tMaxX < tMaxZ) { t = tMaxX; cx += sx; tMaxX += tdx; ax = 0; } else { t = tMaxZ; cz += sz; tMaxZ += tdz; ax = 1; }
    if (t >= best) break;
    if (isWallCell(cx, cz)) {
      best = t; kind = 'wall'; ny = 0;
      if (ax === 0) { nx = -sx; nz = 0; } else { nx = 0; nz = -sz; }
      break;
    }
  }
  // boxes: slab test
  for (const b of boxes) {
    let t0 = 0, t1 = best, n = -1;
    const o = [ox, oy, oz], d = [dx, dy, dz], lo = [b.x0, b.y0, b.z0], hi = [b.x1, b.y1, b.z1];
    let ok = true;
    for (let k = 0; k < 3; k++) {
      if (Math.abs(d[k]) < 1e-9) { if (o[k] < lo[k] || o[k] > hi[k]) { ok = false; break; } continue; }
      let a = (lo[k] - o[k]) / d[k], c = (hi[k] - o[k]) / d[k];
      if (a > c) { const tmp = a; a = c; c = tmp; }
      if (a > t0) { t0 = a; n = k; }
      if (c < t1) t1 = c;
      if (t0 > t1) { ok = false; break; }
    }
    if (ok && n >= 0 && t0 < best) {
      best = t0; kind = b.kind;
      nx = n === 0 ? -Math.sign(dx) : 0; ny = n === 1 ? -Math.sign(dy) : 0; nz = n === 2 ? -Math.sign(dz) : 0;
    }
  }
  return kind ? { t: best, nx, ny, nz, kind } : null;
}

export function lineClear(x0, y0, z0, x1, y1, z1) {
  const dx = x1 - x0, dy = y1 - y0, dz = z1 - z0, L = Math.hypot(dx, dy, dz);
  if (L < 1e-6) return true;
  const h = rayWorld(x0, y0, z0, dx / L, dy / L, dz / L, L);
  return !h || h.t >= L - 0.01;
}

// ---------------------------------------------------------------- navigation (2 m nav grid, A*)
export const NS = 2, NW = MAP_W / NS, NH = MAP_H / NS;
export const navOK = new Uint8Array(NW * NH);
for (let j = 0; j < NH; j++) for (let i = 0; i < NW; i++) {
  const x = (i + 0.5) * NS, z = (j + 0.5) * NS;
  navOK[j * NW + i] = clearAt(x, z, 0.75) ? 1 : 0;
}
// per-node bitmask of passable neighbour edges (the midpoint must be clear too, so thin door
// panels lying between two walkable nodes block the edge)
const NB = [];
for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) if (di || dj) NB.push([di, dj]);
const navEdge = new Uint8Array(NW * NH);
for (let j = 0; j < NH; j++) for (let i = 0; i < NW; i++) {
  if (!navOK[j * NW + i]) continue;
  let m = 0;
  NB.forEach(([di, dj], k) => {
    const ii = i + di, jj = j + dj;
    if (ii < 0 || jj < 0 || ii >= NW || jj >= NH || !navOK[jj * NW + ii]) return;
    if (di && dj && (!navOK[j * NW + ii] || !navOK[jj * NW + i])) return;
    if (!clearAt((i + 0.5 + di / 2) * NS, (j + 0.5 + dj / 2) * NS, 0.5)) return;
    m |= 1 << k;
  });
  navEdge[j * NW + i] = m;
}
export const nodeOf = (x, z) => {
  let i = Math.max(0, Math.min(NW - 1, Math.floor(x / NS))), j = Math.max(0, Math.min(NH - 1, Math.floor(z / NS)));
  if (navOK[j * NW + i]) return j * NW + i;
  let bi = -1, bd = Infinity;  // nearest walkable node
  for (let dj = -3; dj <= 3; dj++) for (let di = -3; di <= 3; di++) {
    const ii = i + di, jj = j + dj;
    if (ii < 0 || jj < 0 || ii >= NW || jj >= NH || !navOK[jj * NW + ii]) continue;
    const d = di * di + dj * dj; if (d < bd) { bd = d; bi = jj * NW + ii; }
  }
  return bi;
};

const gScore = new Float32Array(NW * NH), came = new Int32Array(NW * NH), closed = new Uint8Array(NW * NH);
export function findPath(x0, z0, x1, z1) {
  const s = nodeOf(x0, z0), g = nodeOf(x1, z1);
  if (s < 0 || g < 0) return [[x1, z1]];
  gScore.fill(Infinity); closed.fill(0); came.fill(-1);
  const gi = g % NW, gj = (g / NW) | 0;
  const h = (n) => { const di = Math.abs(n % NW - gi), dj = Math.abs(((n / NW) | 0) - gj); return Math.max(di, dj) + 0.414 * Math.min(di, dj); };
  // binary heap of [f, node]
  const heap = []; const push = (f, n) => { heap.push([f, n]); let k = heap.length - 1; while (k > 0) { const p = (k - 1) >> 1; if (heap[p][0] <= heap[k][0]) break; [heap[p], heap[k]] = [heap[k], heap[p]]; k = p; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let k = 0; for (;;) { const l = 2 * k + 1, r = l + 1; let m = k; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === k) break; [heap[m], heap[k]] = [heap[k], heap[m]]; k = m; } } return top; };
  gScore[s] = 0; push(h(s), s);
  let found = false;
  while (heap.length) {
    const [, n] = pop();
    if (closed[n]) continue; closed[n] = 1;
    if (n === g) { found = true; break; }
    const i = n % NW, j = (n / NW) | 0;
    const edges = navEdge[n];
    for (let k = 0; k < 8; k++) {
      if (!(edges & (1 << k))) continue;
      const [di, dj] = NB[k], m = (j + dj) * NW + i + di;
      if (closed[m]) continue;
      const ng = gScore[n] + (di && dj ? 1.414 : 1);
      if (ng < gScore[m]) { gScore[m] = ng; came[m] = n; push(ng + h(m), m); }
    }
  }
  if (!found) return [[x1, z1]];
  const nodes = [];
  for (let n = g; n !== -1; n = came[n]) nodes.push(n);
  nodes.reverse();
  const pts = nodes.map((n) => [(n % NW + 0.5) * NS, (((n / NW) | 0) + 0.5) * NS]);
  pts[pts.length - 1] = [x1, z1];
  // string-pull: skip nodes while the straight line stays walkable
  const out = []; let k = 0; let cx = x0, cz = z0;
  while (k < pts.length) {
    let far = k;
    for (let q = Math.min(pts.length - 1, k + 16); q > k; q--) if (walkLine(cx, cz, pts[q][0], pts[q][1])) { far = q; break; }
    out.push(pts[far]); cx = pts[far][0]; cz = pts[far][1]; k = far + 1;
  }
  return out;
}

export function walkLine(x0, z0, x1, z1, r = 0.55) {
  const L = Math.hypot(x1 - x0, z1 - z0), n = Math.ceil(L / 0.5);
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    if (!clearAt(x0 + (x1 - x0) * t, z0 + (z1 - z0) * t, r)) return false;
  }
  return true;
}

// random walkable point near (x,z) within radius
export function randomNear(x, z, rad, rnd = Math.random) {
  for (let i = 0; i < 30; i++) {
    const a = rnd() * Math.PI * 2, d = rnd() * rad, px = x + Math.cos(a) * d, pz = z + Math.sin(a) * d;
    if (clearAt(px, pz, 0.8) && lineClear(x, 1, z, px, 1, pz)) return [px, pz];
  }
  return [x, z];
}
