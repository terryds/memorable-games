import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ROAD_HW, CITY } from './track.js';
import { rockTexture, normalNoiseTexture, rng } from './textures.js';

function hash2(ix, iz) {
  let h = (Math.imul(ix, 374761393) + Math.imul(iz, 668265263)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
function vnoise(x, z) {
  const ix = Math.floor(x), iz = Math.floor(z);
  let fx = x - ix, fz = z - iz;
  fx = fx * fx * (3 - 2 * fx); fz = fz * fz * (3 - 2 * fz);
  const a = hash2(ix, iz), b = hash2(ix + 1, iz), c = hash2(ix, iz + 1), d = hash2(ix + 1, iz + 1);
  return a + (b - a) * fx + (c - a) * fz + (a - b - c + d) * fx * fz;
}
function fbm(x, z, oct = 5) {
  let s = 0, a = 0.5, t = 0;
  for (let i = 0; i < oct; i++) { s += a * vnoise(x, z); t += a; x *= 2.03; z *= 2.03; a *= 0.5; }
  return s / t;
}
function ridged(x, z, oct = 5) {
  let s = 0, a = 0.5, t = 0;
  for (let i = 0; i < oct; i++) { const n = 1 - Math.abs(2 * vnoise(x, z) - 1); s += a * n * n; t += a; x *= 2.1; z *= 2.1; a *= 0.5; }
  return s / t;
}
export const smooth = (a, b, v) => { let t = (v - a) / (b - a); t = t < 0 ? 0 : t > 1 ? 1 : t; return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

export const WATER_Y = -1.2;

export function naturalHeight(x, z) {
  const n = fbm(x * 0.0045, z * 0.0045, 5);
  const r = ridged(x * 0.0022 + 7.3, z * 0.0022 - 2.1, 5);
  const north = smooth(-280, -980, z) * 240;
  const west = smooth(-520, -1150, x) * 150;
  const east = smooth(380, 1000, x) * 125;
  const ring = smooth(1050, 1550, Math.hypot(x, z * 1.15)) * 330 * (1 - smooth(150, 700, z));
  const m = Math.max(north, west, east, ring);
  let h = m * (0.42 + 0.85 * r) + n * 16;
  // city basin is flat
  const cm = smooth(CITY.x0 - 90, CITY.x0, x) * smooth(CITY.x1 + 90, CITY.x1, x) * smooth(CITY.z0 - 90, CITY.z0, z) * smooth(CITY.z1 + 50, CITY.z1, z);
  h = lerp(h, -0.1, cm);
  // the bay to the south, a far shore with the skyline across it
  const s = smooth(330, 470, z);
  h = lerp(h, -14 - n * 6, s);
  h = lerp(h, 1.5 + n * 3, smooth(1150, 1240, z));
  return h;
}

export class Terrain {
  constructor(track) {
    const SIZE = 3400, RES = 425;
    this.SIZE = SIZE; this.RES = RES; this.step = SIZE / RES;
    const H = new Float32Array((RES + 1) * (RES + 1));
    this.H = H;
    for (let j = 0; j <= RES; j++) for (let i = 0; i <= RES; i++) {
      const x = -SIZE / 2 + i * this.step, z = -SIZE / 2 + j * this.step;
      let h = naturalHeight(x, z);
      const near = track.nearestCoarse(x, z);
      if (near) {
        const ry = track.py[near.i];
        const t = smooth(ROAD_HW + 5, ROAD_HW + 52, near.d);
        h = lerp(ry - 0.3, h, t);
      }
      H[j * (RES + 1) + i] = h;
    }
    const geo = new THREE.PlaneGeometry(SIZE, SIZE, RES, RES);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    // PlaneGeometry rotated: vertex (i, j) with z increasing along j
    for (let v = 0; v < pos.count; v++) {
      const i = v % (RES + 1), j = Math.floor(v / (RES + 1));
      pos.setY(v, H[j * (RES + 1) + i]);
    }
    geo.computeVertexNormals();
    const nrm = geo.attributes.normal;
    const col = new Float32Array(pos.count * 3);
    const c = new THREE.Color();
    for (let v = 0; v < pos.count; v++) {
      const x = pos.getX(v), y = pos.getY(v), z = pos.getZ(v), ny = nrm.getY(v);
      const n = fbm(x * 0.02, z * 0.02, 3);
      const grass = new THREE.Color(0.035 + n * 0.02, 0.055 + n * 0.03, 0.03);
      const rock = new THREE.Color(0.1 + n * 0.05, 0.088 + n * 0.04, 0.08 + n * 0.03);
      const city = new THREE.Color(0.035, 0.035, 0.042);
      c.copy(grass).lerp(rock, smooth(0.86, 0.7, ny));
      c.lerp(rock, smooth(150, 260, y) * 0.6);
      const cm = smooth(CITY.x0 - 40, CITY.x0, x) * smooth(CITY.x1 + 40, CITY.x1, x) * smooth(CITY.z0 - 40, CITY.z0, z) * smooth(CITY.z1 + 20, CITY.z1, z);
      c.lerp(city, cm);
      c.lerp(new THREE.Color(0.16, 0.14, 0.11), smooth(2.5, 0.2, Math.abs(y - WATER_Y - 1)) * (1 - cm) * 0.8); // beach
      col[v * 3] = c.r; col[v * 3 + 1] = c.g; col[v * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const map = rockTexture(); map.repeat.set(SIZE / 14, SIZE / 14);
    const nmap = normalNoiseTexture(13, [16, 32, 64, 128], 4); nmap.repeat.set(SIZE / 22, SIZE / 22);
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, map, normalMap: nmap, normalScale: new THREE.Vector2(1.2, 1.2), roughness: 0.92, metalness: 0 });
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.name = 'terrain';
  }

  height(x, z) {
    const { RES, step, SIZE, H } = this;
    let fx = (x + SIZE / 2) / step, fz = (z + SIZE / 2) / step;
    fx = Math.max(0, Math.min(RES - 0.001, fx)); fz = Math.max(0, Math.min(RES - 0.001, fz));
    const i = Math.floor(fx), j = Math.floor(fz), tx = fx - i, tz = fz - j;
    const a = H[j * (RES + 1) + i], b = H[j * (RES + 1) + i + 1], c = H[(j + 1) * (RES + 1) + i], d = H[(j + 1) * (RES + 1) + i + 1];
    return a + (b - a) * tx + (c - a) * tz + (a - b - c + d) * tx * tz;
  }

  slope(x, z) {
    const e = 3;
    const dx = this.height(x + e, z) - this.height(x - e, z), dz = this.height(x, z + e) - this.height(x, z - e);
    return Math.hypot(dx, dz) / (2 * e);
  }
}

export function createTrees(terrain, track) {
  const r = rng(77);
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.18, 0.28, 3, 5); trunk.translate(0, 1.5, 0);
  parts.push(trunk);
  for (let k = 0; k < 3; k++) {
    const cone = new THREE.ConeGeometry(2.6 - k * 0.7, 4.2 - k * 0.6, 7);
    cone.translate(0, 3.2 + k * 2.3, 0);
    parts.push(cone);
  }
  const colors = [new THREE.Color(0.09, 0.06, 0.04), new THREE.Color(0.04, 0.09, 0.05), new THREE.Color(0.045, 0.1, 0.055), new THREE.Color(0.05, 0.11, 0.06)];
  parts.forEach((p, i) => {
    const n = p.attributes.position.count, a = new Float32Array(n * 3);
    for (let v = 0; v < n; v++) { a[v * 3] = colors[i].r; a[v * 3 + 1] = colors[i].g; a[v * 3 + 2] = colors[i].b; }
    p.setAttribute('color', new THREE.BufferAttribute(a, 3));
  });
  const geo = mergeGeometries(parts.map((p) => p.toNonIndexed()));
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, flatShading: true });
  const COUNT = 5200;
  const mesh = new THREE.InstancedMesh(geo, mat, COUNT);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const tint = new THREE.Color();
  let placed = 0, tries = 0;
  while (placed < COUNT && tries < 80000) {
    tries++;
    // bias samples toward the track so the roadside is lush
    let x, z;
    if (r() < 0.6) {
      const i = Math.floor(r() * track.N);
      if (track.city[i]) continue;
      const side = r() < 0.5 ? -1 : 1, off = ROAD_HW + 12 + r() * 160;
      x = track.px[i] + track.rightX(i) * off * side + (r() - 0.5) * 30;
      z = track.pz[i] + track.rightZ(i) * off * side + (r() - 0.5) * 30;
    } else { x = (r() - 0.5) * 3000; z = -1500 + r() * 2200; }
    if (x > CITY.x0 - 40 && x < CITY.x1 + 40 && z > CITY.z0 - 40 && z < CITY.z1 + 40) continue;
    const h = terrain.height(x, z);
    if (h < 1.5 || h > 330) continue;
    if (terrain.slope(x, z) > 0.75) continue;
    const near = track.nearestCoarse(x, z);
    if (near && near.d < ROAD_HW + 10) continue;
    const sc = 0.8 + r() * 0.9;
    p.set(x, h - 0.3, z); q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), r() * 6.28); s.set(sc, sc * (0.85 + r() * 0.5), sc);
    m.compose(p, q, s);
    mesh.setMatrixAt(placed, m);
    tint.setScalar(0.7 + r() * 0.6);
    mesh.setColorAt(placed, tint);
    placed++;
  }
  mesh.count = placed;
  mesh.name = 'trees';
  mesh.userData.noReflect = true;
  return mesh;
}
