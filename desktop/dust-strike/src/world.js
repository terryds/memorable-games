// Builds the visible map from the grid: merged sandstone/plaster wall blocks with trims, windows
// and doorways, paved bombsites, crates, doors, barrels, tunnel roofs, painted site letters, sky.
import * as THREE from 'three';
import { CELL, GW, GH, grid, isWallCell, boxes, MAP_W, MAP_H } from './map.js';
import * as TX from './textures.js';

// Accumulates axis-aligned boxes with world-space UVs (1 texture tile = `tile` metres).
class Geo {
  constructor(tile = 4) { this.p = []; this.n = []; this.uv = []; this.i = []; this.tile = tile; }
  quad(a, b, c, d, n, uvs) {
    const k = this.p.length / 3;
    for (const v of [a, b, c, d]) this.p.push(...v);
    for (let j = 0; j < 4; j++) this.n.push(...n);
    for (const u of uvs) this.uv.push(...u);
    this.i.push(k, k + 1, k + 2, k, k + 2, k + 3);
  }
  // faces: object of booleans {px,nx,py,ny,pz,nz}; default all but bottom
  box(x0, x1, y0, y1, z0, z1, faces = {}, tile = this.tile) {
    const f = { px: true, nx: true, py: true, ny: false, pz: true, nz: true, ...faces }, t = 1 / tile;
    if (f.px) this.quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0], [[-z1 * t, y0 * t], [-z0 * t, y0 * t], [-z0 * t, y1 * t], [-z1 * t, y1 * t]]);
    if (f.nx) this.quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0], [[z0 * t, y0 * t], [z1 * t, y0 * t], [z1 * t, y1 * t], [z0 * t, y1 * t]]);
    if (f.pz) this.quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1], [[x0 * t, y0 * t], [x1 * t, y0 * t], [x1 * t, y1 * t], [x0 * t, y1 * t]]);
    if (f.nz) this.quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1], [[-x1 * t, y0 * t], [-x0 * t, y0 * t], [-x0 * t, y1 * t], [-x1 * t, y1 * t]]);
    if (f.py) this.quad([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], [0, 1, 0], [[x0 * t, -z1 * t], [x1 * t, -z1 * t], [x1 * t, -z0 * t], [x0 * t, -z0 * t]]);
    if (f.ny) this.quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [0, -1, 0], [[x0 * t, z0 * t], [x1 * t, z0 * t], [x1 * t, z1 * t], [x0 * t, z1 * t]]);
  }
  floorQuad(x0, x1, z0, z1, y = 0) {
    const t = 1 / this.tile;
    this.quad([x0, y, z1], [x1, y, z1], [x1, y, z0], [x0, y, z0], [0, 1, 0], [[x0 * t, -z1 * t], [x1 * t, -z1 * t], [x1 * t, -z0 * t], [x0 * t, -z0 * t]]);
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setIndex(this.i);
    g.computeBoundingSphere();
    return g;
  }
}

const hash = (a, b) => { let h = (a * 374761393 + b * 668265263) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
export const wallHeight = (c, r) => {
  const b = hash(Math.floor((c + 1) / 3), Math.floor((r + 2) / 3));
  return [6.5, 7.5, 8.5, 10][Math.floor(b * 4)] + (hash(c, r) < 0.15 ? 1 : 0);
};

export function buildWorld(scene, anisotropy = 8) {
  const mats = {};
  const std = (map, extra = {}) => new THREE.MeshStandardMaterial({ map, roughness: 0.92, metalness: 0, ...extra });
  const T = {
    sand: TX.sandstoneTexture(1), sand2: TX.sandstoneTexture(21, '#c7a26d'), plaster: TX.plasterTexture(2), plaster2: TX.plasterTexture(22, '#e2cfa8'),
    floor: TX.sandTexture(3), paving: TX.pavingTexture(4), trim: TX.trimTexture(5), crate: TX.crateTexture('wood'), crate2: TX.crateTexture('ammo'),
    door: TX.doorTexture(), barrel: TX.barrelTexture(),
  };
  for (const t of Object.values(T)) t.anisotropy = anisotropy;
  mats.walls = [std(T.sand), std(T.plaster), std(T.sand2), std(T.plaster2)];
  mats.trim = std(T.trim);
  mats.base = std(T.sand, { color: 0x9a8262 });
  mats.floor = std(T.floor, { roughness: 1 });
  mats.paving = std(T.paving, { roughness: 0.95 });
  mats.window = new THREE.MeshStandardMaterial({ color: 0x1d1712, roughness: 1 });
  mats.wood = std(T.crate, { color: 0x9a7650 });
  mats.shutter = std(T.door);
  const group = new THREE.Group();
  const add = (geo, mat, cast = true, receive = true) => { const m = new THREE.Mesh(geo, mat); m.castShadow = cast; m.receiveShadow = receive; group.add(m); return m; };

  // ---------------------------------------------------------------- floor
  const fl = new Geo(4);
  fl.floorQuad(-60, MAP_W + 60, -60, MAP_H + 60, 0);
  add(fl.build(), mats.floor, false, true);
  const pv = new Geo(4);
  for (let r = 0; r < GH; r++) for (let c = 0; c < GW; c++) {
    const ch = grid[r][c];
    if (ch === 'A' || ch === 'B' || ch === 'C' || (r >= 10 && r <= 11 && c >= 17 && c <= 27)) pv.floorQuad(c * CELL, c * CELL + CELL, r * CELL, r * CELL + CELL, 0.012);
  }
  add(pv.build(), mats.paving, false, true);

  // ---------------------------------------------------------------- walls
  const dist = new Uint8Array(GW * GH).fill(9);
  for (let r = 0; r < GH; r++) for (let c = 0; c < GW; c++) {
    if (!isWallCell(c, r)) continue;
    let d = 9;
    for (let dr = -2; dr <= 2; dr++) for (let dc = -2; dc <= 2; dc++) {
      const cc = c + dc, rr = r + dr;
      if (cc >= 0 && rr >= 0 && cc < GW && rr < GH && !isWallCell(cc, rr)) d = Math.min(d, Math.max(Math.abs(dr), Math.abs(dc)));
    }
    dist[r * GW + c] = d;
  }
  const wallGeos = mats.walls.map(() => new Geo(4));
  const trim = new Geo(2), base = new Geo(4), win = new Geo(2), shut = new Geo(2), wood = new Geo(1);
  const H = (c, r) => (c < 0 || r < 0 || c >= GW || r >= GH ? 0 : isWallCell(c, r) && dist[r * GW + c] <= 2 ? wallHeight(c, r) : 0);
  const open = (c, r) => c >= 0 && r >= 0 && c < GW && r < GH && !isWallCell(c, r);
  for (let r = 0; r < GH; r++) for (let c = 0; c < GW; c++) {
    if (!isWallCell(c, r) || dist[r * GW + c] > 2) continue;
    const h = H(c, r), x0 = c * CELL, x1 = x0 + CELL, z0 = r * CELL, z1 = z0 + CELL;
    const mi = Math.floor(hash(Math.floor((c + 1) / 3) + 7, Math.floor((r + 2) / 3) + 3) * 4);
    // hide faces buried against taller-or-equal neighbours / map edge
    const vis = (cc, rr) => cc >= 0 && rr >= 0 && cc < GW && rr < GH && H(cc, rr) < h;
    wallGeos[mi].box(x0, x1, 0, h, z0, z1, { px: vis(c + 1, r), nx: vis(c - 1, r), pz: vis(c, r + 1), nz: vis(c, r - 1) });
    const o = { px: open(c + 1, r), nx: open(c - 1, r), pz: open(c, r + 1), nz: open(c, r - 1) };
    if (!(o.px || o.nx || o.pz || o.nz)) continue;
    // parapet trim along the top, sticking out over the street side
    const e = 0.18;
    trim.box(x0 - (o.nx ? e : 0), x1 + (o.px ? e : 0), h - 0.05, h + 0.3, z0 - (o.nz ? e : 0), z1 + (o.pz ? e : 0), { ny: true });
    // dirty plinth
    const b = 0.07, bh = 0.45;
    if (o.px) base.box(x1, x1 + b, 0, bh, z0, z1, { nx: false });
    if (o.nx) base.box(x0 - b, x0, 0, bh, z0, z1, { px: false });
    if (o.pz) base.box(x0, x1, 0, bh, z1, z1 + b, { nz: false });
    if (o.nz) base.box(x0, x1, 0, bh, z0 - b, z0, { pz: false });
    // windows with shutters, high above head height
    if (h >= 7.5) for (const [side, on] of Object.entries(o)) {
      if (!on || hash(c * 3 + side.length, r * 7 + side.charCodeAt(1)) > 0.32) continue;
      const wy0 = 3.6 + hash(c, r * 3) * 0.6, wy1 = wy0 + 1.5, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, hw = 0.55, d = 0.04;
      if (side === 'px') { win.box(x1, x1 + d, wy0, wy1, cz - hw, cz + hw); shut.box(x1, x1 + 0.08, wy0, wy1, cz - hw - 0.6, cz - hw); shut.box(x1, x1 + 0.08, wy0, wy1, cz + hw, cz + hw + 0.6); wood.box(x1, x1 + 0.14, wy0 - 0.12, wy0, cz - hw - 0.1, cz + hw + 0.1); }
      if (side === 'nx') { win.box(x0 - d, x0, wy0, wy1, cz - hw, cz + hw); shut.box(x0 - 0.08, x0, wy0, wy1, cz - hw - 0.6, cz - hw); shut.box(x0 - 0.08, x0, wy0, wy1, cz + hw, cz + hw + 0.6); wood.box(x0 - 0.14, x0, wy0 - 0.12, wy0, cz - hw - 0.1, cz + hw + 0.1); }
      if (side === 'pz') { win.box(cx - hw, cx + hw, wy0, wy1, z1, z1 + d); shut.box(cx - hw - 0.6, cx - hw, wy0, wy1, z1, z1 + 0.08); shut.box(cx + hw, cx + hw + 0.6, wy0, wy1, z1, z1 + 0.08); wood.box(cx - hw - 0.1, cx + hw + 0.1, wy0 - 0.12, wy0, z1, z1 + 0.14); }
      if (side === 'nz') { win.box(cx - hw, cx + hw, wy0, wy1, z0 - d, z0); shut.box(cx - hw - 0.6, cx - hw, wy0, wy1, z0 - 0.08, z0); shut.box(cx + hw, cx + hw + 0.6, wy0, wy1, z0 - 0.08, z0); wood.box(cx - hw - 0.1, cx + hw + 0.1, wy0 - 0.12, wy0, z0 - 0.14, z0); }
    }
  }
  wallGeos.forEach((g, i) => add(g.build(), mats.walls[i]));
  add(trim.build(), mats.trim); add(base.build(), mats.base, false); add(win.build(), mats.window, false); add(shut.build(), mats.shutter, false); add(wood.build(), mats.wood, false);

  // ---------------------------------------------------------------- props from the collision boxes
  const crate = new Geo(1), crate2 = new Geo(1), door = new Geo(3.2), roof = new Geo(4), lintel = new Geo(4), beams = new Geo(1);
  const barrelGeo = new THREE.CylinderGeometry(0.36, 0.36, 1.1, 14);
  const barrelMat = std(T.barrel, { roughness: 0.6, metalness: 0.3 });
  for (const b of boxes) {
    if (b.kind === 'crate') crate.box(b.x0, b.x1, b.y0, b.y1, b.z0, b.z1);
    else if (b.kind === 'crate2') crate2.box(b.x0, b.x1, b.y0, b.y1, b.z0, b.z1);
    else if (b.kind === 'door') door.box(b.x0, b.x1, b.y0, b.y1, b.z0, b.z1);
    else if (b.kind === 'lintel') { lintel.box(b.x0, b.x1, b.y0, b.y1, b.z0, b.z1, { ny: true }); beams.box(b.x0 - 0.05, b.x1 + 0.05, b.y0 - 0.25, b.y0, b.z0 - 0.05, b.z1 + 0.05, { ny: true }); }
    else if (b.kind === 'roof') {
      roof.box(b.x0 - 0.1, b.x1 + 0.1, b.y0, b.y1, b.z0 - 0.1, b.z1 + 0.1, { ny: true });
      // wooden joists under the roof
      for (let k = 0.5; k < 4; k += 1.2) beams.box(b.x0, b.x1, b.y0 - 0.18, b.y0, b.z0 + k, b.z0 + k + 0.18, { ny: true });
    } else if (b.kind === 'barrel') {
      const m = new THREE.Mesh(barrelGeo, barrelMat);
      m.position.set((b.x0 + b.x1) / 2, 0.55, (b.z0 + b.z1) / 2); m.rotation.y = hash(b.x0 | 0, b.z0 | 0) * 6;
      m.castShadow = m.receiveShadow = true; group.add(m);
    }
  }
  add(crate.build(), std(T.crate)); add(crate2.build(), std(T.crate2)); add(door.build(), std(T.door));
  add(roof.build(), mats.walls[1]); add(lintel.build(), mats.walls[0]); add(beams.build(), mats.wood);

  // ---------------------------------------------------------------- paint: site letters & signs
  const decal = (tex, x, y, z, size, rotY, rotX = 0) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 1, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
    m.position.set(x, y, z); m.rotation.set(rotX, rotY, 0, 'YXZ'); m.receiveShadow = true; group.add(m); return m;
  };
  const tA = TX.letterTexture('A'), tB = TX.letterTexture('B');
  decal(tA, 124, 0.03, 24, 7, 0, -Math.PI / 2);
  decal(tB, 15, 0.03, 26, 7, 0, -Math.PI / 2);
  decal(tA, 128.02, 2.6, 38, 2.6, Math.PI / 2);   // long A entrance, facing east
  decal(tA, 111.98, 2.6, 38, 2.6, -Math.PI / 2);  // short stairs
  decal(tB, 11.98, 2.6, 38, 2.6, -Math.PI / 2);   // tunnel exit
  decal(tB, 44, 2.6, 12.02, 2.6, 0);              // B doors
  decal(TX.signTexture('A', '→'), 90, 2.3, 40.02, 2.6, 0); // catwalk
  decal(TX.signTexture('B', '→'), 50, 2.3, 63.98, 2.6, Math.PI); // lower tunnel

  // ---------------------------------------------------------------- skyline beyond the walls
  const sky = new THREE.Mesh(new THREE.SphereGeometry(900, 24, 16), new THREE.MeshBasicMaterial({ map: TX.skyTexture(), side: THREE.BackSide, fog: false, depthWrite: false }));
  sky.position.set(MAP_W / 2, 0, MAP_H / 2); sky.renderOrder = -1; group.add(sky);
  const towerMat = mats.walls[3], domeMat = new THREE.MeshStandardMaterial({ color: 0xc9b38a, roughness: 0.8 });
  for (const [x, z, h, r] of [[-26, 40, 26, 3], [176, 24, 30, 2.6], [70, -34, 22, 4], [118, 152, 28, 3], [22, 146, 18, 5], [180, 96, 20, 4.5], [-30, 104, 24, 3.5]]) {
    const t = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.8, r, h, 12), towerMat);
    t.position.set(x, h / 2, z); group.add(t);
    const d = new THREE.Mesh(new THREE.SphereGeometry(r * 1.05, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
    d.position.set(x, h, z); group.add(d);
  }
  scene.add(group);
  return { group, mats };
}
