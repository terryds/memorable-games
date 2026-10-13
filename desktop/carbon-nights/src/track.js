import * as THREE from 'three';

export const ROAD_HW = 9; // road half width (m)
export const CITY = { x0: -560, x1: 330, z0: -260, z1: 330 };

// Closed loop: downtown avenue -> NW canyon climb -> ridge with city view -> east descent -> waterfront.
const CONTROL = [
  [230, 0, 175], [60, 0, 160], [-120, 0, 160], [-300, 0, 165], [-420, 0, 130], [-470, 0, 40],
  [-440, 0, -60], [-480, 0, -150], [-580, 3, -210], [-700, 12, -235], [-790, 24, -305],
  [-800, 38, -420], [-720, 52, -500], [-600, 62, -510], [-480, 72, -560], [-350, 82, -600],
  [-210, 90, -580], [-80, 95, -520], [50, 95, -540], [180, 90, -600], [310, 84, -580],
  [420, 76, -500], [460, 66, -390], [540, 56, -300], [650, 46, -270], [740, 36, -190],
  [770, 26, -60], [730, 16, 70], [650, 8, 170], [600, 4, 270], [510, 1.5, 345],
  [390, 0.5, 375], [290, 0, 345], [250, 0, 260],
];

export function inCity(x, z, y = 0) {
  return x > CITY.x0 && x < CITY.x1 && z > CITY.z0 && z < CITY.z1 && y < 2;
}

export class Track {
  constructor() {
    const pts = CONTROL.map(([x, y, z]) => new THREE.Vector3(x, y, z));
    this.curve = new THREE.CatmullRomCurve3(pts, true, 'centripetal');
    this.length = this.curve.getLength();
    const N = Math.round(this.length / 2);
    this.N = N;
    this.ds = this.length / N;
    const sp = this.curve.getSpacedPoints(N);
    this.px = new Float32Array(N); this.py = new Float32Array(N); this.pz = new Float32Array(N);
    for (let i = 0; i < N; i++) { this.px[i] = sp[i].x; this.py[i] = sp[i].y; this.pz[i] = sp[i].z; }
    // light smoothing of heights so the road never kinks vertically
    for (let pass = 0; pass < 4; pass++) {
      const y2 = this.py.slice();
      for (let i = 0; i < N; i++) {
        let s = 0; for (let k = -4; k <= 4; k++) s += y2[(i + k + N) % N];
        this.py[i] = s / 9;
      }
    }
    this.tx = new Float32Array(N); this.tz = new Float32Array(N);
    this.city = new Uint8Array(N);
    for (let i = 0; i < N; i++) {
      const a = (i + 1) % N, b = (i - 1 + N) % N;
      let dx = this.px[a] - this.px[b], dz = this.pz[a] - this.pz[b];
      const l = Math.hypot(dx, dz); this.tx[i] = dx / l; this.tz[i] = dz / l;
      this.city[i] = inCity(this.px[i], this.pz[i], this.py[i]) ? 1 : 0;
    }
    // signed curvature (1/m), smoothed
    const k = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const a = (i + 2) % N, b = (i - 2 + N) % N;
      const cross = this.tx[b] * this.tz[a] - this.tz[b] * this.tx[a];
      k[i] = Math.asin(Math.max(-1, Math.min(1, cross))) / (4 * this.ds);
    }
    this.curv = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      let s = 0; for (let j = -5; j <= 5; j++) s += k[(i + j + N) % N];
      this.curv[i] = s / 11;
    }
    this.startIdx = Math.round(N * 0.035); // on the downtown avenue
    this.buildGrid();
  }

  rightX(i) { return -this.tz[i]; }
  rightZ(i) { return this.tx[i]; }

  buildGrid() {
    this.cell = 64;
    this.grid = new Map();
    for (let i = 0; i < this.N; i++) {
      const key = this.key(Math.floor(this.px[i] / this.cell), Math.floor(this.pz[i] / this.cell));
      let arr = this.grid.get(key); if (!arr) this.grid.set(key, arr = []);
      arr.push(i);
    }
  }
  key(cx, cz) { return cx * 73856093 ^ cz * 19349663; }

  // Nearest sample within ~64m (null if none). Used by world generation.
  nearestCoarse(x, z) {
    const cx = Math.floor(x / this.cell), cz = Math.floor(z / this.cell);
    let best = -1, bd = Infinity;
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) {
      const arr = this.grid.get(this.key(cx + a, cz + b)); if (!arr) continue;
      for (const i of arr) {
        const dx = this.px[i] - x, dz = this.pz[i] - z, d = dx * dx + dz * dz;
        if (d < bd) { bd = d; best = i; }
      }
    }
    return best < 0 ? null : { i: best, d: Math.sqrt(bd) };
  }

  // Precise projection onto the centerline. `hint` keeps the search local (cars).
  project(x, z, hint = -1, out = {}) {
    const N = this.N;
    let best = 0, bd = Infinity;
    if (hint < 0) {
      for (let i = 0; i < N; i++) {
        const dx = this.px[i] - x, dz = this.pz[i] - z, d = dx * dx + dz * dz;
        if (d < bd) { bd = d; best = i; }
      }
    } else {
      for (let k = -40; k <= 40; k++) {
        const i = (hint + k + N) % N;
        const dx = this.px[i] - x, dz = this.pz[i] - z, d = dx * dx + dz * dz;
        if (d < bd) { bd = d; best = i; }
      }
    }
    // pick segment [i, i+1] that contains the projection
    let i = best;
    const fx = x - this.px[i], fz = z - this.pz[i];
    if (fx * this.tx[i] + fz * this.tz[i] < 0) i = (i - 1 + N) % N;
    const j = (i + 1) % N;
    const sx = this.px[j] - this.px[i], sz = this.pz[j] - this.pz[i];
    const sl2 = sx * sx + sz * sz;
    let f = ((x - this.px[i]) * sx + (z - this.pz[i]) * sz) / sl2;
    f = Math.max(0, Math.min(1, f));
    const cxp = this.px[i] + sx * f, czp = this.pz[i] + sz * f;
    const tx = this.tx[i] + (this.tx[j] - this.tx[i]) * f, tz = this.tz[i] + (this.tz[j] - this.tz[i]) * f;
    const tl = Math.hypot(tx, tz);
    out.i = i; out.f = f;
    out.tx = tx / tl; out.tz = tz / tl;
    out.rx = -out.tz; out.rz = out.tx;
    out.lat = (x - cxp) * out.rx + (z - czp) * out.rz;
    out.y = this.py[i] + (this.py[j] - this.py[i]) * f;
    out.slope = (this.py[j] - this.py[i]) / Math.sqrt(sl2);
    out.s = (i + f) * this.ds;
    return out;
  }

  pointAt(idx, lat = 0) {
    const N = this.N;
    const i = ((Math.floor(idx) % N) + N) % N, j = (i + 1) % N, f = idx - Math.floor(idx);
    const x = this.px[i] + (this.px[j] - this.px[i]) * f, z = this.pz[i] + (this.pz[j] - this.pz[i]) * f;
    return new THREE.Vector3(x + this.rightX(i) * lat, this.py[i] + (this.py[j] - this.py[i]) * f, z + this.rightZ(i) * lat);
  }

  // Contiguous runs of samples where pred(i) holds: [[start, endExclusive], ...] (may wrap)
  runs(pred) {
    const N = this.N, out = [];
    let s0 = 0; while (s0 < N && pred(s0)) s0++;
    if (s0 === N) return [[0, N + 1]];
    let i = s0;
    for (let c = 0; c < N; c++, i++) {
      const k = i % N;
      if (pred(k) && !pred((k - 1 + N) % N)) {
        let e = k; while (pred(e % N) && e - k < N) e++;
        out.push([k, e]);
      }
    }
    return out;
  }

  // Sweep a 2D cross-section profile [[lat, h], ...] along sample runs.
  sweep(profile, runs, { vScale = 1 / 40, uvAcross = null, yOffset = 0 } = {}) {
    const N = this.N, P = profile.length;
    const pos = [], uv = [], idx = [];
    let across = uvAcross;
    if (!across) {
      across = [0]; let acc = 0;
      for (let p = 1; p < P; p++) { acc += Math.hypot(profile[p][0] - profile[p - 1][0], profile[p][1] - profile[p - 1][1]); across.push(acc / 4); }
    }
    for (const [a, b] of runs) {
      const base = pos.length / 3;
      const count = b - a + 1;
      for (let c = 0; c < count; c++) {
        const i = (a + c) % N;
        const rx = this.rightX(i), rz = this.rightZ(i);
        for (let p = 0; p < P; p++) {
          const [lat, h] = profile[p];
          pos.push(this.px[i] + rx * lat, this.py[i] + h + yOffset, this.pz[i] + rz * lat);
          uv.push(across[p], (a + c) * this.ds * vScale);
        }
      }
      for (let c = 0; c < count - 1; c++) for (let p = 0; p < P - 1; p++) {
        const v0 = base + c * P + p, v1 = v0 + 1, v2 = v0 + P, v3 = v2 + 1;
        idx.push(v0, v1, v2, v1, v3, v2);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }
}
