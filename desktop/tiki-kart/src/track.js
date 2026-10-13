import * as THREE from 'three';

export const HW = 9; // road half width (m)

// Tiki Island loop: beach straight -> jungle -> temple tunnel -> cliff jump over the ravine
// -> switchback descent -> rope bridge across the lagoon -> back onto the beach.
const CONTROL = [
  [-150, 1.6, 232], [0, 1.6, 246], [130, 1.6, 232], [222, 2.2, 182], [252, 4, 92], [232, 7, 12],
  [172, 10, -40], [182, 12, -112], [232, 14, -172], [192, 18, -242], [110, 24, -262], [30, 30, -232],
  [-40, 34, -202], [-84, 35, -186], [-126, 28, -168], [-176, 23, -138], [-222, 17, -80], [-202, 12, -12],
  [-152, 7, 32], [-102, 5, 82], [-162, 3.5, 132], [-240, 2, 168], [-262, 1.6, 218],
];

export class Track {
  constructor() {
    const pts = CONTROL.map(([x, y, z]) => new THREE.Vector3(x, y, z));
    this.curve = new THREE.CatmullRomCurve3(pts, true, 'centripetal');
    this.length = this.curve.getLength();
    const N = this.N = Math.round(this.length / 2);
    this.ds = this.length / N;
    const sp = this.curve.getSpacedPoints(N);
    this.px = new Float32Array(N); this.py = new Float32Array(N); this.pz = new Float32Array(N);
    for (let i = 0; i < N; i++) { this.px[i] = sp[i].x; this.py[i] = sp[i].y; this.pz[i] = sp[i].z; }
    for (let pass = 0; pass < 4; pass++) {
      const y2 = this.py.slice();
      for (let i = 0; i < N; i++) { let s = 0; for (let k = -4; k <= 4; k++) s += y2[(i + k + N) % N]; this.py[i] = s / 9; }
    }
    // control point -> nearest sample
    this.cp = CONTROL.map(([x, , z]) => {
      let best = 0, bd = Infinity;
      for (let i = 0; i < N; i++) { const d = (this.px[i] - x) ** 2 + (this.pz[i] - z) ** 2; if (d < bd) { bd = d; best = i; } }
      return best;
    });
    const cp = this.cp;
    this.flags = new Uint8Array(N); // bit 1 gap, 2 launch, 4 tunnel, 8 bridge, 16 boost
    const mark = (a, b, bit) => { for (let i = a; i !== b; i = (i + 1) % N) this.flags[i] |= bit; };
    // jump: kicker ramp ending at the launch sample, then an 18 m gap
    this.launch = cp[13];
    for (let k = 0; k <= 14; k++) { const i = (this.launch - 14 + k + N) % N; const t = k / 14; this.py[i] += 1.8 * t * t; }
    mark((this.launch - 2 + N) % N, (this.launch + 1) % N, 2);
    mark((this.launch + 1) % N, (this.launch + 10) % N, 1);
    this.gapEnd = (this.launch + 10) % N;
    mark(cp[7], cp[9], 4);
    mark((cp[18] + 4) % N, (cp[19] + 2) % N, 8);
    this.boostPads = [(cp[2] + 6) % N, cp[16], (cp[21] + 4) % N, (cp[5] + 4) % N];
    this.itemRows = [(cp[3] + 8) % N, (cp[10] + 4) % N, (cp[15] + 6) % N, (cp[20] + 6) % N];
    this.fruitLines = [(cp[1] + 22) % N, (cp[6] + 6) % N, (cp[11] + 2) % N, (cp[17] + 4) % N, (cp[22] + 4) % N, (cp[8] + 6) % N];
    this.startIdx = (cp[1] - 8 + N) % N;
    this.finishIdx = (this.startIdx + 8) % N;

    this.tx = new Float32Array(N); this.tz = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const a = (i + 1) % N, b = (i - 1 + N) % N;
      const dx = this.px[a] - this.px[b], dz = this.pz[a] - this.pz[b], l = Math.hypot(dx, dz);
      this.tx[i] = dx / l; this.tz[i] = dz / l;
    }
    const k = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      const a = (i + 2) % N, b = (i - 2 + N) % N;
      const cross = this.tx[b] * this.tz[a] - this.tz[b] * this.tx[a];
      k[i] = Math.asin(Math.max(-1, Math.min(1, cross))) / (4 * this.ds);
    }
    this.curv = new Float32Array(N);
    for (let i = 0; i < N; i++) { let s = 0; for (let j = -5; j <= 5; j++) s += k[(i + j + N) % N]; this.curv[i] = s / 11; }
    this.buildGrid();
  }

  isGap(i) { return (this.flags[i] & 1) !== 0; }
  rightX(i) { return -this.tz[i]; }
  rightZ(i) { return this.tx[i]; }

  buildGrid() {
    this.cell = 64; this.grid = new Map();
    for (let i = 0; i < this.N; i++) {
      const key = this.key(Math.floor(this.px[i] / this.cell), Math.floor(this.pz[i] / this.cell));
      let arr = this.grid.get(key); if (!arr) this.grid.set(key, arr = []);
      arr.push(i);
    }
  }
  key(cx, cz) { return cx * 73856093 ^ cz * 19349663; }

  nearestCoarse(x, z) {
    const cx = Math.floor(x / this.cell), cz = Math.floor(z / this.cell);
    let best = -1, bd = Infinity;
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) {
      const arr = this.grid.get(this.key(cx + a, cz + b)); if (!arr) continue;
      for (const i of arr) { const dx = this.px[i] - x, dz = this.pz[i] - z, d = dx * dx + dz * dz; if (d < bd) { bd = d; best = i; } }
    }
    return best < 0 ? null : { i: best, d: Math.sqrt(bd) };
  }

  project(x, z, hint = -1, out = {}) {
    const N = this.N;
    let best = 0, bd = Infinity;
    const scan = (i) => { const dx = this.px[i] - x, dz = this.pz[i] - z, d = dx * dx + dz * dz; if (d < bd) { bd = d; best = i; } };
    if (hint < 0) for (let i = 0; i < N; i++) scan(i);
    else for (let k = -40; k <= 40; k++) scan((hint + k + N) % N);
    let i = best;
    if ((x - this.px[i]) * this.tx[i] + (z - this.pz[i]) * this.tz[i] < 0) i = (i - 1 + N) % N;
    const j = (i + 1) % N;
    const sx = this.px[j] - this.px[i], sz = this.pz[j] - this.pz[i], sl2 = sx * sx + sz * sz;
    let f = ((x - this.px[i]) * sx + (z - this.pz[i]) * sz) / sl2;
    f = Math.max(0, Math.min(1, f));
    const cxp = this.px[i] + sx * f, czp = this.pz[i] + sz * f;
    const tx = this.tx[i] + (this.tx[j] - this.tx[i]) * f, tz = this.tz[i] + (this.tz[j] - this.tz[i]) * f, tl = Math.hypot(tx, tz);
    out.i = i; out.f = f; out.tx = tx / tl; out.tz = tz / tl; out.rx = -out.tz; out.rz = out.tx;
    out.lat = (x - cxp) * out.rx + (z - czp) * out.rz;
    out.y = this.py[i] + (this.py[j] - this.py[i]) * f;
    out.slope = (this.py[j] - this.py[i]) / Math.sqrt(sl2);
    out.s = (i + f) * this.ds;
    return out;
  }

  pointAt(idx, lat = 0) {
    const N = this.N, i = ((Math.floor(idx) % N) + N) % N, j = (i + 1) % N, f = idx - Math.floor(idx);
    const x = this.px[i] + (this.px[j] - this.px[i]) * f, z = this.pz[i] + (this.pz[j] - this.pz[i]) * f;
    return new THREE.Vector3(x + this.rightX(i) * lat, this.py[i] + (this.py[j] - this.py[i]) * f, z + this.rightZ(i) * lat);
  }

  runs(pred) {
    const N = this.N, out = [];
    let s0 = 0; while (s0 < N && pred(s0)) s0++;
    if (s0 === N) return [[0, N + 1]];
    for (let c = 0, i = s0; c < N; c++, i++) {
      const k = i % N;
      if (pred(k) && !pred((k - 1 + N) % N)) { let e = k; while (pred(e % N) && e - k < N) e++; out.push([k, e]); }
    }
    return out;
  }

  // Sweep a cross-section [[lat, h], ...] along sample runs; uv.x across, uv.y along (meters * vScale).
  sweep(profile, runs, { vScale = 1 / 24, uvAcross = null, extend = 1 } = {}) {
    const N = this.N, P = profile.length, pos = [], uv = [], idx = [];
    let across = uvAcross;
    if (!across) {
      across = [0]; let acc = 0;
      for (let p = 1; p < P; p++) { acc += Math.hypot(profile[p][0] - profile[p - 1][0], profile[p][1] - profile[p - 1][1]); across.push(acc / 4); }
    }
    for (const [a, b] of runs) {
      const base = pos.length / 3, count = b - a + extend;
      for (let c = 0; c < count; c++) {
        const i = (a + c) % N, rx = this.rightX(i), rz = this.rightZ(i);
        for (let p = 0; p < P; p++) {
          const [lat, h] = profile[p];
          pos.push(this.px[i] + rx * lat, this.py[i] + h, this.pz[i] + rz * lat);
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
