// "Harbor Town" — a linear survival run on a 48×34 grid of 4 m cells. Pure JS (no DOM): shared by the
// renderer, the AI and the headless sims.
//   #  building / solid     w  harbour water (blocks walking, not bullets)
//   S  start safe room      .  street      P  park      G  gas station
//   W  warehouse (roofed)   E  docks (evac)
export const CELL = 4;
export const GW = 48, GH = 34;
export const MAP_W = GW * CELL, MAP_H = GH * CELL;
export const grid = Array.from({ length: GH }, () => Array(GW).fill('#'));
const carve = (c0, r0, c1, r1, t) => { for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) grid[r][c] = t; };
carve(2, 27, 4, 31, 'S'); grid[29][5] = 'S'; // start safe room (single doorway at c5,r29)
carve(6, 26, 34, 31, '.');     // main street
carve(14, 21, 17, 25, '.');    // side street (dead end)
carve(30, 17, 34, 25, '.');    // alley north
carve(17, 9, 36, 16, 'P');     // park
carve(37, 9, 45, 19, 'G');     // gas station
carve(33, 7, 36, 8, '.');      // warehouse loading door
carve(11, 2, 37, 6, 'W');      // warehouse
carve(9, 3, 10, 5, '.');       // warehouse back door
carve(1, 1, 8, 10, 'E');       // docks
carve(0, 0, 0, 13, 'w'); carve(0, 0, 9, 0, 'w');

export const cellAt = (x, z) => { const r = grid[Math.floor(z / CELL)]; return r ? r[Math.floor(x / CELL)] ?? '#' : '#'; };
export const isWallCell = (c, r) => c < 0 || r < 0 || c >= GW || r >= GH || grid[r][c] === '#';
const isBlockCell = (c, r) => isWallCell(c, r) || grid[r][c] === 'w';
export const ROOFED = new Set(['S', 'W']);
export const roofHeight = (t) => (t === 'S' ? 4.2 : t === 'W' ? 7 : 0);

// ---------------------------------------------------------------- solid boxes {x0,x1,z0,z1,y0,y1,kind}
export const boxes = [];
const B = (x0, z0, x1, z1, y1, kind, extra = {}) => { const b = { x0, x1, z0, z1, y0: 0, y1, kind, ...extra }; boxes.push(b); return b; };
const prop = (x, z, w, d, h, kind, extra) => B(x - w / 2, z - d / 2, x + w / 2, z + d / 2, h, kind, extra);
const car = (x, z, along = 'x', extra = {}) => (along === 'x' ? prop(x, z, 4.4, 2, 1.5, 'car', { along, ...extra }) : prop(x, z, 2, 4.4, 1.5, 'car', { along, ...extra }));

// safe room: door panel (opens with E), weapon table, cots
export const srDoor = B(23.85, 116.2, 24.15, 119.8, 3.0, 'srdoor');
prop(12, 113, 3, 1.1, 0.95, 'table');
prop(10, 125, 2, 0.9, 0.5, 'cot'); prop(16, 125, 2, 0.9, 0.5, 'cot');
// main street: wrecks, a burning car, the alarm car, dumpsters, barricade
car(36, 108); car(52, 121, 'x', { burning: true }); car(66, 113, 'z'); car(84, 107, 'x', { alarm: true });
car(98, 122); car(112, 112, 'z', { burning: true }); car(124, 106); car(46, 105, 'z');
prop(30, 106.2, 1.8, 1.2, 1.3, 'dumpster'); prop(72, 105.8, 1.8, 1.2, 1.3, 'dumpster'); prop(104, 125.2, 1.8, 1.2, 1.3, 'dumpster');
prop(92, 115, 3.6, 0.8, 1.1, 'barricade'); prop(60, 117, 3.6, 0.8, 1.1, 'barricade');
prop(62, 88, 1.8, 1.2, 1.3, 'dumpster'); prop(66, 86, 1.4, 1.4, 1.0, 'crate');
// alley
prop(122, 92, 1.8, 1.2, 1.3, 'dumpster'); prop(134, 80, 1.4, 1.4, 1, 'crate'); car(128, 72, 'z');
// park: trees, benches, fountain, gazebo posts
for (const [x, z] of [[74, 40], [86, 58], [98, 42], [110, 60], [122, 40], [80, 52], [138, 48], [104, 52], [92, 38], [130, 62], [116, 50]]) prop(x, z, 0.7, 0.7, 4, 'tree');
prop(96, 50, 4, 4, 0.8, 'fountain');
for (const [x, z, r] of [[88, 46, 0], [104, 46, 0], [112, 56, 1], [80, 60, 1]]) r ? prop(x, z, 0.6, 2, 0.5, 'bench') : prop(x, z, 2, 0.6, 0.5, 'bench');
// gas station: pumps under a canopy, store counter, a car
for (const [x, z] of [[160, 50], [160, 60], [170, 50], [170, 60]]) prop(x, z, 1, 2, 1.6, 'pump');
for (const [x, z] of [[155, 45], [175, 45], [155, 65], [175, 65]]) prop(x, z, 0.5, 0.5, 4.4, 'pillar');
B(154, 44, 176, 66, 4.8, 'canopy', { y0: 4.4 });
car(166, 74, 'z'); prop(176, 40, 6, 1.2, 1.1, 'counter');
// warehouse: shelving rows, crates, forklift
for (const x of [56, 72, 88, 104, 120]) { prop(x, 12, 1.4, 9, 3.4, 'shelf'); }
for (const [x, z] of [[64, 20], [96, 21], [112, 10], [130, 20], [52, 22], [138, 12]]) prop(x, z, 1.6, 1.6, 1.4, 'crate');
prop(80, 22, 1.4, 2.4, 2.1, 'forklift');
// docks: containers, crates, the radio
prop(18, 10, 6, 2.5, 2.6, 'container'); prop(22, 34, 2.5, 6, 2.6, 'container', { tint: 1 }); prop(30, 14, 1.6, 1.6, 1.4, 'crate');
prop(10, 30, 1.6, 1.6, 1.4, 'crate');
export const radioBox = prop(26, 26, 1.4, 1.4, 1.1, 'radiocrate');
// roofs (block grenades and moonlight, never touch walking)
for (let r = 0; r < GH; r++) for (let c = 0; c < GW; c++) if (ROOFED.has(grid[r][c])) {
  const y = roofHeight(grid[r][c]);
  boxes.push({ x0: c * CELL, x1: c * CELL + CELL, z0: r * CELL, z1: r * CELL + CELL, y0: y, y1: y + 0.4, kind: 'roof' });
}

export const START = { x: 14, z: 118 };
export const EVAC = { x: 14, z: 20, boatX: -10, boatZ: 22 };
export const RESCUE_ZONE = { x0: 4, x1: 22, z0: 8, z1: 32 };
export const inStartRoom = (x, z) => cellAt(x, z) === 'S';

// ---------------------------------------------------------------- collision
const solidsTmp = [];
export function solidsAt(x, z, r, y0, y1) {
  solidsTmp.length = 0;
  const c0 = Math.floor((x - r) / CELL), c1 = Math.floor((x + r) / CELL);
  const r0 = Math.floor((z - r) / CELL), r1 = Math.floor((z + r) / CELL);
  for (let rr = r0; rr <= r1; rr++) for (let cc = c0; cc <= c1; cc++)
    if (isBlockCell(cc, rr)) solidsTmp.push({ x0: cc * CELL, x1: cc * CELL + CELL, z0: rr * CELL, z1: rr * CELL + CELL });
  for (const b of boxes)
    if (!b.off && x + r > b.x0 && x - r < b.x1 && z + r > b.z0 && z - r < b.z1 && y1 > b.y0 + 0.001 && y0 < b.y1 - 0.001) solidsTmp.push(b);
  return solidsTmp;
}
export function groundAt(x, z, r, feet) {
  let g = 0;
  for (const b of boxes)
    if (!b.off && b.kind !== 'roof' && b.kind !== 'canopy' && x + r > b.x0 && x - r < b.x1 && z + r > b.z0 && z - r < b.z1 && b.y1 <= feet + 0.06 && b.y1 > g) g = b.y1;
  return g;
}
export function moveBody(b, dx, dz, r, h) {
  let hitX = false, hitZ = false;
  const n = Math.max(1, Math.ceil(Math.max(Math.abs(dx), Math.abs(dz)) / 0.3));
  for (let i = 0; i < n; i++) {
    if (dx) {
      b.x += dx / n;
      const s = solidsAt(b.x, b.z, r, b.y + 0.35, b.y + h);
      if (s.length) { hitX = true; if (dx > 0) { let m = Infinity; for (const o of s) m = Math.min(m, o.x0); b.x = m - r - 1e-4; } else { let m = -Infinity; for (const o of s) m = Math.max(m, o.x1); b.x = m + r + 1e-4; } }
    }
    if (dz) {
      b.z += dz / n;
      const s = solidsAt(b.x, b.z, r, b.y + 0.35, b.y + h);
      if (s.length) { hitZ = true; if (dz > 0) { let m = Infinity; for (const o of s) m = Math.min(m, o.z0); b.z = m - r - 1e-4; } else { let m = -Infinity; for (const o of s) m = Math.max(m, o.z1); b.z = m + r + 1e-4; } }
    }
  }
  return { hitX, hitZ };
}
export const clearAt = (x, z, r) => solidsAt(x, z, r, 0.35, 1.7).length === 0;

// ---------------------------------------------------------------- raycast: first solid along a ray
export function rayWorld(ox, oy, oz, dx, dy, dz, maxT = 300) {
  let best = maxT, nx = 0, ny = 0, nz = 0, kind = null, box = null;
  if (dy < -1e-6 && oy > 0) { const t = -oy / dy; if (t < best) { best = t; ny = 1; kind = 'floor'; } }
  let cx = Math.floor(ox / CELL), cz = Math.floor(oz / CELL);
  if (isWallCell(cx, cz)) return { t: 0, nx: 0, ny: 0, nz: 0, kind: 'wall' };
  const sx = dx > 0 ? 1 : -1, sz = dz > 0 ? 1 : -1, adx = Math.abs(dx), adz = Math.abs(dz);
  let tMaxX = adx > 1e-9 ? ((cx + (dx > 0 ? 1 : 0)) * CELL - ox) / dx : Infinity;
  let tMaxZ = adz > 1e-9 ? ((cz + (dz > 0 ? 1 : 0)) * CELL - oz) / dz : Infinity;
  const tdx = adx > 1e-9 ? CELL / adx : Infinity, tdz = adz > 1e-9 ? CELL / adz : Infinity;
  for (let i = 0; i < 200; i++) {
    let t, ax;
    if (tMaxX < tMaxZ) { t = tMaxX; cx += sx; tMaxX += tdx; ax = 0; } else { t = tMaxZ; cz += sz; tMaxZ += tdz; ax = 1; }
    if (t >= best) break;
    if (isWallCell(cx, cz)) { best = t; kind = 'wall'; ny = 0; if (ax === 0) { nx = -sx; nz = 0; } else { nx = 0; nz = -sz; } break; }
  }
  for (const b of boxes) {
    if (b.off) continue;
    let t0 = 0, t1 = best, n = -1, ok = true;
    const o = [ox, oy, oz], d = [dx, dy, dz], lo = [b.x0, b.y0, b.z0], hi = [b.x1, b.y1, b.z1];
    for (let k = 0; k < 3; k++) {
      if (Math.abs(d[k]) < 1e-9) { if (o[k] < lo[k] || o[k] > hi[k]) { ok = false; break; } continue; }
      let a = (lo[k] - o[k]) / d[k], c = (hi[k] - o[k]) / d[k];
      if (a > c) { const tmp = a; a = c; c = tmp; }
      if (a > t0) { t0 = a; n = k; }
      if (c < t1) t1 = c;
      if (t0 > t1) { ok = false; break; }
    }
    if (ok && n >= 0 && t0 < best) { best = t0; kind = b.kind; box = b; nx = n === 0 ? -Math.sign(dx) : 0; ny = n === 1 ? -Math.sign(dy) : 0; nz = n === 2 ? -Math.sign(dz) : 0; }
  }
  return kind ? { t: best, nx, ny, nz, kind, box: kind === 'wall' || kind === 'floor' ? null : box } : null;
}
export function lineClear(x0, y0, z0, x1, y1, z1) {
  const dx = x1 - x0, dy = y1 - y0, dz = z1 - z0, L = Math.hypot(dx, dy, dz);
  if (L < 1e-6) return true;
  const h = rayWorld(x0, y0, z0, dx / L, dy / L, dz / L, L);
  return !h || h.t >= L - 0.01;
}

// ---------------------------------------------------------------- navigation: 2 m grid, A*, flow fields
export const NS = 2, NW = MAP_W / NS, NH = MAP_H / NS;
export const navOK = new Uint8Array(NW * NH);
const NB = [];
for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) if (di || dj) NB.push([di, dj]);
const navEdge = new Uint8Array(NW * NH);
export function rebuildNav() {
  for (let j = 0; j < NH; j++) for (let i = 0; i < NW; i++) navOK[j * NW + i] = clearAt((i + 0.5) * NS, (j + 0.5) * NS, 0.6) ? 1 : 0;
  for (let j = 0; j < NH; j++) for (let i = 0; i < NW; i++) {
    if (!navOK[j * NW + i]) { navEdge[j * NW + i] = 0; continue; }
    let m = 0;
    NB.forEach(([di, dj], k) => {
      const ii = i + di, jj = j + dj;
      if (ii < 0 || jj < 0 || ii >= NW || jj >= NH || !navOK[jj * NW + ii]) return;
      if (di && dj && (!navOK[j * NW + ii] || !navOK[jj * NW + i])) return;
      if (!clearAt((i + 0.5 + di / 2) * NS, (j + 0.5 + dj / 2) * NS, 0.45)) return;
      m |= 1 << k;
    });
    navEdge[j * NW + i] = m;
  }
}
rebuildNav();
export const nodeX = (n) => (n % NW + 0.5) * NS, nodeZ = (n) => (((n / NW) | 0) + 0.5) * NS;
export const nodeOf = (x, z) => {
  const i = Math.max(0, Math.min(NW - 1, Math.floor(x / NS))), j = Math.max(0, Math.min(NH - 1, Math.floor(z / NS)));
  if (navOK[j * NW + i]) return j * NW + i;
  let bi = -1, bd = Infinity;
  for (let dj = -3; dj <= 3; dj++) for (let di = -3; di <= 3; di++) {
    const ii = i + di, jj = j + dj;
    if (ii < 0 || jj < 0 || ii >= NW || jj >= NH || !navOK[jj * NW + ii]) continue;
    const d = di * di + dj * dj; if (d < bd) { bd = d; bi = jj * NW + ii; }
  }
  return bi;
};

// Dijkstra distance field (in metres) from a set of seed nodes, over the nav graph.
export function distanceField(seeds, out = new Float32Array(NW * NH)) {
  out.fill(Infinity);
  const heap = [];
  const push = (d, n) => { heap.push([d, n]); let k = heap.length - 1; while (k > 0) { const p = (k - 1) >> 1; if (heap[p][0] <= heap[k][0]) break; [heap[p], heap[k]] = [heap[k], heap[p]]; k = p; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let k = 0; for (;;) { const l = 2 * k + 1, r = l + 1; let m = k; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === k) break; [heap[m], heap[k]] = [heap[k], heap[m]]; k = m; } } return top; };
  for (const s of seeds) if (s >= 0) { out[s] = 0; push(0, s); }
  while (heap.length) {
    const [d, n] = pop();
    if (d > out[n]) continue;
    const i = n % NW, j = (n / NW) | 0, e = navEdge[n];
    for (let k = 0; k < 8; k++) {
      if (!(e & (1 << k))) continue;
      const [di, dj] = NB[k], m = (j + dj) * NW + i + di, nd = Math.fround(d + (di && dj ? 2.83 : 2)); // keep float32-exact
      if (nd < out[m]) { out[m] = nd; push(nd, m); }
    }
  }
  return out;
}
// downhill neighbour on a distance field (for zombies chasing survivors)
export function downhill(field, n) {
  const i = n % NW, j = (n / NW) | 0, e = navEdge[n];
  let best = n, bd = field[n];
  for (let k = 0; k < 8; k++) {
    if (!(e & (1 << k))) continue;
    const [di, dj] = NB[k], m = (j + dj) * NW + i + di;
    if (field[m] < bd) { bd = field[m]; best = m; }
  }
  return best;
}
// how far along the route a point is (0 at the evac): used by the director
export let evacField = distanceField([nodeOf(EVAC.x, EVAC.z)]);
export function refreshNav() { rebuildNav(); evacField = distanceField([nodeOf(EVAC.x, EVAC.z)], evacField); }

const gScore = new Float32Array(NW * NH), came = new Int32Array(NW * NH), closed = new Uint8Array(NW * NH);
export function findPath(x0, z0, x1, z1) {
  const s = nodeOf(x0, z0), g = nodeOf(x1, z1);
  if (s < 0 || g < 0) return [[x1, z1]];
  gScore.fill(Infinity); closed.fill(0); came.fill(-1);
  const gi = g % NW, gj = (g / NW) | 0;
  const h = (n) => { const di = Math.abs(n % NW - gi), dj = Math.abs(((n / NW) | 0) - gj); return Math.max(di, dj) + 0.414 * Math.min(di, dj); };
  const heap = []; const push = (f, n) => { heap.push([f, n]); let k = heap.length - 1; while (k > 0) { const p = (k - 1) >> 1; if (heap[p][0] <= heap[k][0]) break; [heap[p], heap[k]] = [heap[k], heap[p]]; k = p; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let k = 0; for (;;) { const l = 2 * k + 1, r = l + 1; let m = k; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === k) break; [heap[m], heap[k]] = [heap[k], heap[m]]; k = m; } } return top; };
  gScore[s] = 0; push(h(s), s);
  let found = false;
  while (heap.length) {
    const [, n] = pop();
    if (closed[n]) continue; closed[n] = 1;
    if (n === g) { found = true; break; }
    const i = n % NW, j = (n / NW) | 0, e = navEdge[n];
    for (let k = 0; k < 8; k++) {
      if (!(e & (1 << k))) continue;
      const [di, dj] = NB[k], m = (j + dj) * NW + i + di;
      if (closed[m]) continue;
      const ng = gScore[n] + (di && dj ? 1.414 : 1);
      if (ng < gScore[m]) { gScore[m] = ng; came[m] = n; push(ng + h(m), m); }
    }
  }
  if (!found) return [[x1, z1]];
  const nodes = []; for (let n = g; n !== -1; n = came[n]) nodes.push(n);
  nodes.reverse();
  const pts = nodes.map((n) => [nodeX(n), nodeZ(n)]); pts[pts.length - 1] = [x1, z1];
  const out = []; let k = 0, cx = x0, cz = z0;
  while (k < pts.length) {
    let far = k;
    for (let q = Math.min(pts.length - 1, k + 16); q > k; q--) if (walkLine(cx, cz, pts[q][0], pts[q][1])) { far = q; break; }
    out.push(pts[far]); cx = pts[far][0]; cz = pts[far][1]; k = far + 1;
  }
  return out;
}
export function walkLine(x0, z0, x1, z1, r = 0.5) {
  const L = Math.hypot(x1 - x0, z1 - z0), n = Math.ceil(L / 0.5);
  for (let i = 1; i <= n; i++) { const t = i / n; if (!clearAt(x0 + (x1 - x0) * t, z0 + (z1 - z0) * t, r)) return false; }
  return true;
}
