// Visual effects: pooled particles, bullet tracers, impact decals, smoke clouds, flashes.
import * as THREE from 'three';

export class Particles {
  constructor(max, texture, { additive = false, gravity = 0, drag = 1 } = {}) {
    this.max = max; this.gravity = gravity; this.drag = drag; this.cursor = 0;
    this.pos = new Float32Array(max * 3); this.vel = new Float32Array(max * 3); this.col = new Float32Array(max * 3);
    this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.size = new Float32Array(max); this.grow = new Float32Array(max); this.alpha = new Float32Array(max); this.a0 = new Float32Array(max);
    const g = this.geo = new THREE.BufferGeometry();
    const dyn = (arr, n) => new THREE.BufferAttribute(arr, n).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', dyn(this.pos, 3)); g.setAttribute('aCol', dyn(this.col, 3));
    g.setAttribute('aSize', dyn(this.size, 1)); g.setAttribute('aAlpha', dyn(this.alpha, 1));
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { uTex: { value: texture }, uScale: { value: 600 } },
      vertexShader: /* glsl */`
        attribute float aSize; attribute float aAlpha; attribute vec3 aCol; varying float vA; varying vec3 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = aSize * uScale / max(-mv.z, 0.3); vA = aAlpha; vC = aCol; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: /* glsl */`
        uniform sampler2D uTex; varying float vA; varying vec3 vC;
        void main(){ vec4 t = texture2D(uTex, gl_PointCoord); gl_FragColor = vec4(vC * t.rgb, t.a * vA); }`,
    });
    this.mesh = new THREE.Points(g, this.mat);
    this.mesh.frustumCulled = false;
  }
  emit(x, y, z, vx, vy, vz, life, size, grow, alpha, r = 1, g = 1, b = 1) {
    const i = this.cursor; this.cursor = (this.cursor + 1) % this.max;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.col[i * 3] = r; this.col[i * 3 + 1] = g; this.col[i * 3 + 2] = b;
    this.life[i] = this.maxLife[i] = life; this.size[i] = size; this.grow[i] = grow; this.a0[i] = alpha; this.alpha[i] = alpha;
  }
  update(dt) {
    const d = Math.exp(-this.drag * dt);
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) { this.alpha[i] = 0; continue; }
      this.life[i] -= dt;
      const j = i * 3;
      this.vel[j] *= d; this.vel[j + 1] = this.vel[j + 1] * d - this.gravity * dt; this.vel[j + 2] *= d;
      this.pos[j] += this.vel[j] * dt; this.pos[j + 1] += this.vel[j + 1] * dt; this.pos[j + 2] += this.vel[j + 2] * dt;
      if (this.pos[j + 1] < 0.02) { this.pos[j + 1] = 0.02; this.vel[j + 1] *= -0.3; }
      this.size[i] += this.grow[i] * dt;
      const k = Math.max(0, this.life[i] / this.maxLife[i]);
      this.alpha[i] = this.a0[i] * k * Math.min(1, (1 - k) * 10 + 0.4);
    }
    for (const n of ['position', 'aCol', 'aSize', 'aAlpha']) this.geo.attributes[n].needsUpdate = true;
  }
}

export class Tracers {
  constructor(scene, max = 48) {
    this.max = max; this.i = 0;
    this.pos = new Float32Array(max * 6); this.col = new Float32Array(max * 6); this.life = new Float32Array(max);
    const g = this.geo = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    this.mesh = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.mesh.frustumCulled = false; scene.add(this.mesh);
  }
  add(x0, y0, z0, x1, y1, z1) {
    // only draw a short streak travelling along the shot
    const k = this.i; this.i = (this.i + 1) % this.max;
    this.life[k] = 0.09;
    this.seg = this.seg || [];
    this.seg[k] = [x0, y0, z0, x1, y1, z1];
  }
  update(dt) {
    for (let k = 0; k < this.max; k++) {
      const o = k * 6;
      if (this.life[k] <= 0) { this.col.fill(0, o, o + 6); continue; }
      this.life[k] -= dt;
      const s = this.seg[k], t = 1 - Math.max(0, this.life[k]) / 0.09;
      const L = Math.hypot(s[3] - s[0], s[4] - s[1], s[5] - s[2]) || 1, len = Math.min(L, 4) / L;
      const a = Math.min(1, t * 1.3), b = Math.min(1, a + len);
      for (let j = 0; j < 3; j++) { this.pos[o + j] = s[j] + (s[3 + j] - s[j]) * a; this.pos[o + 3 + j] = s[j] + (s[3 + j] - s[j]) * b; }
      const f = Math.max(0, this.life[k] / 0.09) * 0.55;
      this.col[o] = 1 * f; this.col[o + 1] = 0.85 * f; this.col[o + 2] = 0.5 * f;
      this.col[o + 3] = 1 * f; this.col[o + 4] = 0.9 * f; this.col[o + 5] = 0.6 * f;
    }
    this.geo.attributes.position.needsUpdate = true; this.geo.attributes.color.needsUpdate = true;
  }
}

export class Decals {
  constructor(scene, tex, max = 140) {
    this.list = []; this.i = 0; this.max = max;
    const geo = new THREE.PlaneGeometry(0.13, 0.13);
    const m = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, opacity: 0.9 });
    this.mesh = new THREE.InstancedMesh(geo, m, max);
    this.mesh.count = 0; this.mesh.frustumCulled = false;
    scene.add(this.mesh);
    this.o = new THREE.Object3D();
  }
  add(x, y, z, nx, ny, nz, scale = 1) {
    const o = this.o;
    o.position.set(x + nx * 0.01, y + ny * 0.01, z + nz * 0.01);
    o.lookAt(x + nx, y + ny, z + nz);
    o.rotateZ(Math.random() * 6.28);
    o.scale.setScalar(scale * (0.8 + Math.random() * 0.4));
    o.updateMatrix();
    this.mesh.setMatrixAt(this.i, o.matrix);
    this.i = (this.i + 1) % this.max;
    this.mesh.count = Math.min(this.max, this.mesh.count + 1);
    this.mesh.instanceMatrix.needsUpdate = true;
  }
  clear() { this.mesh.count = 0; this.i = 0; }
}

// Smoke grenade clouds: a cluster of soft billboards per smoke, sized from the sim's radius.
export class SmokeClouds {
  constructor(scene, tex) {
    this.scene = scene; this.clouds = new Map();
    this.mat = new THREE.SpriteMaterial({ map: tex, color: 0xa8a49c, transparent: true, depthWrite: false, opacity: 0.9 });
  }
  sync(game, dt) {
    for (const s of game.smokes) {
      let c = this.clouds.get(s);
      if (!c) {
        c = { group: new THREE.Group(), puffs: [] };
        for (let i = 0; i < 46; i++) {
          const sp = new THREE.Sprite(this.mat.clone());
          const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()), h = Math.random();
          sp.userData = { ox: Math.cos(a) * r, oz: Math.sin(a) * r, oy: h, rot: (Math.random() - 0.5) * 0.3, s: 0.8 + Math.random() * 0.6 };
          sp.material.rotation = Math.random() * 6;
          sp.material.color.setScalar(0.55 + Math.random() * 0.2);
          c.group.add(sp); c.puffs.push(sp);
        }
        c.group.position.set(s.x, s.y, s.z);
        this.scene.add(c.group); this.clouds.set(s, c);
      }
      const R = game.smokeRadius(s), fade = s.t > s.life - 1.5 ? Math.max(0, (s.life - s.t) / 1.5) : 1;
      for (const p of c.puffs) {
        const u = p.userData;
        p.position.set(u.ox * R * 0.8, 0.6 + u.oy * R * 0.75, u.oz * R * 0.8);
        p.scale.setScalar(R * 0.95 * u.s + 0.3);
        p.material.rotation += u.rot * dt;
        p.material.opacity = 0.85 * fade;
      }
    }
    for (const [s, c] of this.clouds) if (!game.smokes.includes(s)) { this.scene.remove(c.group); c.puffs.forEach((p) => p.material.dispose()); this.clouds.delete(s); }
  }
  clear() { for (const [, c] of this.clouds) this.scene.remove(c.group); this.clouds.clear(); }
}
