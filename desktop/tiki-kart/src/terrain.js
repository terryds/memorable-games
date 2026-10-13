import * as THREE from 'three';
import { HW } from './track.js';
import { sandTexture } from './textures.js';

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
export function fbm(x, z, oct = 4) {
  let s = 0, a = 0.5, t = 0;
  for (let i = 0; i < oct; i++) { s += a * vnoise(x, z); t += a; x *= 2.03; z *= 2.03; a *= 0.5; }
  return s / t;
}
export const smooth = (a, b, v) => { let t = (v - a) / (b - a); t = t < 0 ? 0 : t > 1 ? 1 : t; return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

export const VOLCANO = { x: 0, z: -40 };

export class Terrain {
  constructor(track) {
    this.track = track;
    // ravine crossing the road under the jump
    const g0 = (track.launch + 5) % track.N;
    this.rav = { x: track.px[g0], z: track.pz[g0], tx: track.tx[g0], tz: track.tz[g0] };
    // lagoon under the rope bridge
    const b0 = Math.floor((track.cp[18] + track.cp[19]) / 2);
    this.lagoon = { x: track.px[b0], z: track.pz[b0] };

    const SIZE = this.SIZE = 1400, RES = this.RES = 350, step = this.step = SIZE / RES;
    const H = this.H = new Float32Array((RES + 1) * (RES + 1));
    const N = track.N;
    for (let j = 0; j <= RES; j++) for (let i = 0; i <= RES; i++) {
      const x = -SIZE / 2 + i * step, z = -SIZE / 2 + j * step;
      let h = this.natural(x, z);
      const near = track.nearestCoarse(x, z);
      if (near) {
        const f = track.flags[near.i];
        let skip = (f & 8) !== 0; // bridge: keep the lagoon
        for (let k = -2; k <= 2 && !skip; k++) if (track.isGap((near.i + k + N) % N)) skip = true;
        if (!skip) {
          const t = smooth(HW + 3, HW + 38, near.d);
          h = lerp(track.py[near.i] - 0.25, h, t);
        }
      }
      H[j * (RES + 1) + i] = h;
    }
    const geo = new THREE.PlaneGeometry(SIZE, SIZE, RES, RES);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let v = 0; v < pos.count; v++) pos.setY(v, H[v]);
    geo.computeVertexNormals();
    const nrm = geo.attributes.normal, col = new Float32Array(pos.count * 3), c = new THREE.Color();
    const sand = new THREE.Color('#f2d49b'), wetSand = new THREE.Color('#d9b57a'), grass = new THREE.Color('#5cc14a'),
      jungle = new THREE.Color('#2f9a3c'), rock = new THREE.Color('#8d8173'), dark = new THREE.Color('#4a4038'), floor = new THREE.Color('#e9d39a');
    for (let v = 0; v < pos.count; v++) {
      const x = pos.getX(v), y = pos.getY(v), z = pos.getZ(v), ny = nrm.getY(v);
      const n = fbm(x * 0.03, z * 0.03, 2);
      c.copy(grass).lerp(jungle, smooth(0.35, 0.7, fbm(x * 0.008 + 3, z * 0.008, 3)));
      c.lerp(sand, smooth(4.5, 2.2, y));
      c.lerp(wetSand, smooth(0.8, -0.2, y));
      if (y < -0.5) c.copy(floor).multiplyScalar(0.9);
      c.lerp(rock, smooth(0.82, 0.62, ny));
      const vd = Math.hypot(x - VOLCANO.x, z - VOLCANO.z);
      c.lerp(rock, smooth(150, 110, vd) * smooth(30, 60, y));
      c.lerp(dark, smooth(70, 30, vd) * smooth(80, 120, y));
      c.multiplyScalar(0.92 + n * 0.16);
      col[v * 3] = c.r; col[v * 3 + 1] = c.g; col[v * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const map = sandTexture(); map.repeat.set(SIZE / 6, SIZE / 6);
    this.mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true, map }));
    this.mesh.receiveShadow = true;

    // shoreline depth for the water shader (encoded -10..10 m)
    const S = 256, data = new Uint8Array(S * S);
    for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) {
      const x = -SIZE / 2 + (i + 0.5) * SIZE / S, z = -SIZE / 2 + (j + 0.5) * SIZE / S;
      data[j * S + i] = Math.max(0, Math.min(255, (this.height(x, z) + 10) * 12.75));
    }
    this.depthTex = new THREE.DataTexture(data, S, S, THREE.RedFormat);
    this.depthTex.magFilter = this.depthTex.minFilter = THREE.LinearFilter;
    this.depthTex.needsUpdate = true;
  }

  natural(x, z) {
    const dz = z + 10;
    const rz = dz > 0 ? 282 : 360;
    const rr = Math.sqrt((x / 455) ** 2 + (dz / rz) ** 2) + (fbm(x * 0.006, z * 0.006, 3) - 0.5) * 0.16;
    const land = smooth(1.04, 0.93, rr);
    let h = land * (2.6 + fbm(x * 0.01, z * 0.01, 4) * 14 * smooth(0.9, 0.55, rr)) - (1 - land) * 12;
    h += land * smooth(-90, -270, z) * (30 + fbm(x * 0.02, z * 0.02, 3) * 22);
    const vd = Math.hypot(x - VOLCANO.x, z - VOLCANO.z);
    let cone = Math.max(0, 150 - vd * 1.25);
    if (vd < 24) cone -= (24 - vd) * 1.6; // crater
    h += cone * land;
    const tun = this.track.px[this.track.cp[8]], tunz = this.track.pz[this.track.cp[8]];
    h += 34 * Math.exp(-((x - tun) ** 2 + (z - tunz) ** 2) / (2 * 50 * 50));
    // ravine (a river channel crossing under the jump)
    const r = this.rav, ax = x - r.x, az = z - r.z;
    const along = Math.abs(ax * r.tx + az * r.tz), side = Math.abs(-ax * r.tz + az * r.tx);
    h = lerp(h, -2.5, smooth(17, 8, along) * smooth(140, 90, side));
    const ld = Math.hypot(x - this.lagoon.x, z - this.lagoon.z);
    h = lerp(h, -3, smooth(80, 38, ld));
    return h;
  }

  height(x, z) {
    const { RES, step, SIZE, H } = this;
    let fx = (x + SIZE / 2) / step, fz = (z + SIZE / 2) / step;
    if (fx < 0 || fz < 0 || fx > RES || fz > RES) return -12;
    fx = Math.min(RES - 0.001, fx); fz = Math.min(RES - 0.001, fz);
    const i = Math.floor(fx), j = Math.floor(fz), tx = fx - i, tz = fz - j;
    const a = H[j * (RES + 1) + i], b = H[j * (RES + 1) + i + 1], c = H[(j + 1) * (RES + 1) + i], d = H[(j + 1) * (RES + 1) + i + 1];
    return a + (b - a) * tx + (c - a) * tz + (a - b - c + d) * tx * tz;
  }

  slope(x, z) {
    const e = 2;
    return Math.hypot(this.height(x + e, z) - this.height(x - e, z), this.height(x, z + e) - this.height(x, z - e)) / (2 * e);
  }
}
