import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { smokeTexture, glowTexture } from './textures.js';

export class Rain {
  constructor(count = 9000) {
    const B = 90;
    const pos = new Float32Array(count * 6), end = new Float32Array(count * 2), rnd = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      const x = Math.random() * B, y = Math.random() * 50, z = Math.random() * B, r = Math.random();
      pos.set([x, y, z, x, y, z], i * 6);
      end[i * 2] = 0; end[i * 2 + 1] = 1;
      rnd[i * 2] = rnd[i * 2 + 1] = r;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aEnd', new THREE.BufferAttribute(end, 1));
    g.setAttribute('aRnd', new THREE.BufferAttribute(rnd, 1));
    this.uniforms = { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uVel: { value: new THREE.Vector3() }, uAmt: { value: 1 } };
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: this.uniforms,
      vertexShader: /* glsl */`
        attribute float aEnd; attribute float aRnd;
        uniform float uTime; uniform vec3 uCam; uniform vec3 uVel; uniform float uAmt;
        varying float vA;
        void main() {
          const vec3 B = vec3(90.0, 50.0, 90.0);
          float fall = 26.0 + aRnd * 10.0;
          vec3 p = position + vec3(uTime * 3.0, -uTime * fall, uTime * 1.0);
          p = mod(p - uCam + B * 0.5, B) - B * 0.5 + uCam;
          vec3 streak = vec3(3.0, -fall, 1.0) * 0.022 - uVel * 0.03;
          p += streak * aEnd;
          vA = (0.12 + 0.18 * aRnd) * step(aRnd, uAmt) * (1.0 - aEnd * 0.6);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vA *= smoothstep(2.5, 9.0, -mv.z) * (1.0 - smoothstep(30.0, 45.0, -mv.z)) * 0.8;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */`
        varying float vA;
        void main() { gl_FragColor = vec4(vec3(0.75, 0.82, 1.0) * vA, 1.0); }`,
    });
    this.mesh = new THREE.LineSegments(g, mat);
    this.mesh.frustumCulled = false;
  }
  update(t, cam, vel) {
    this.uniforms.uTime.value = t;
    this.uniforms.uCam.value.copy(cam);
    this.uniforms.uVel.value.copy(vel);
  }
}

// Pooled billboard particles (smoke, sparks, splashes).
export class Particles {
  constructor(max, { additive = false, texture, gravity = 0, drag = 1, color = [1, 1, 1] } = {}) {
    this.max = max; this.gravity = gravity; this.drag = drag;
    this.pos = new Float32Array(max * 3); this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.size = new Float32Array(max); this.grow = new Float32Array(max); this.alpha = new Float32Array(max);
    this.cursor = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    this.geo = g;
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { uTex: { value: texture }, uColor: { value: new THREE.Color(...color) }, uScale: { value: 600 } },
      vertexShader: /* glsl */`
        attribute float aSize; attribute float aAlpha; varying float vA; uniform float uScale;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uScale / max(-mv.z, 0.5);
          vA = aAlpha;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */`
        uniform sampler2D uTex; uniform vec3 uColor; varying float vA;
        void main() {
          vec4 t = texture2D(uTex, gl_PointCoord);
          gl_FragColor = vec4(uColor * t.rgb, t.a * vA);
          #include <colorspace_fragment>
        }`,
    });
    this.mesh = new THREE.Points(g, mat);
    this.mesh.frustumCulled = false;
  }
  emit(x, y, z, vx, vy, vz, life, size, grow = 0, alpha = 1) {
    const i = this.cursor; this.cursor = (this.cursor + 1) % this.max;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.life[i] = life; this.maxLife[i] = life; this.size[i] = size; this.grow[i] = grow; this.alpha[i] = alpha;
    this.baseAlpha ??= new Float32Array(this.max);
    this.baseAlpha[i] = alpha;
  }
  update(dt) {
    const d = Math.exp(-this.drag * dt);
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) { this.alpha[i] = 0; continue; }
      this.life[i] -= dt;
      this.vel[i * 3] *= d; this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.gravity * dt; this.vel[i * 3 + 2] *= d;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.size[i] += this.grow[i] * dt;
      const k = Math.max(0, this.life[i] / this.maxLife[i]);
      this.alpha[i] = this.baseAlpha[i] * k * Math.min(1, (1 - k) * 6 + 0.2);
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.aSize.needsUpdate = true;
    this.geo.attributes.aAlpha.needsUpdate = true;
  }
}

export function makeSmoke() { return new Particles(500, { texture: smokeTexture(), drag: 1.6, gravity: -0.6, color: [0.4, 0.39, 0.46] }); }
export function makeSparks() { return new Particles(300, { texture: glowTexture(), additive: true, drag: 0.6, gravity: 14, color: [6, 2.6, 0.6] }); }
export function makeSplash() { return new Particles(400, { texture: smokeTexture(), drag: 2.5, gravity: 2, color: [0.5, 0.55, 0.7] }); }

// Ring buffer of quads laid on the road surface.
export class Skidmarks {
  constructor(max = 2400) {
    this.max = max; this.cursor = 0;
    this.pos = new Float32Array(max * 6 * 3);
    this.a = new Float32Array(max * 6);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aA', new THREE.BufferAttribute(this.a, 1).setUsage(THREE.DynamicDrawUsage));
    this.geo = g;
    this.mesh = new THREE.Mesh(g, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4,
      vertexShader: 'attribute float aA; varying float vA; void main(){ vA = aA; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'varying float vA; void main(){ gl_FragColor = vec4(0.0, 0.0, 0.0, vA); }',
    }));
    this.mesh.frustumCulled = false;
    this.last = new Map();
  }
  add(key, x, y, z, rx, rz, strength) {
    const prev = this.last.get(key);
    this.last.set(key, { x, y, z, rx, rz });
    if (!prev) return;
    const dx = x - prev.x, dz = z - prev.z;
    if (dx * dx + dz * dz > 16 || dx * dx + dz * dz < 0.01) return;
    const w = 0.14, i = this.cursor; this.cursor = (this.cursor + 1) % this.max;
    const P = [
      [prev.x - prev.rx * w, prev.y, prev.z - prev.rz * w], [prev.x + prev.rx * w, prev.y, prev.z + prev.rz * w],
      [x - rx * w, y, z - rz * w], [x + rx * w, y, z + rz * w],
    ];
    const order = [0, 2, 1, 1, 2, 3];
    order.forEach((o, k) => { this.pos.set(P[o], (i * 6 + k) * 3); this.a[i * 6 + k] = 0.55 * strength; });
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.aA.needsUpdate = true;
  }
  break(key) { this.last.delete(key); }
}

const FinalShader = {
  uniforms: {
    tDiffuse: { value: null }, uTime: { value: 0 }, uSpeed: { value: 0 }, uNitro: { value: 0 }, uSlow: { value: 0 }, uHit: { value: 0 },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform float uTime, uSpeed, uNitro, uSlow, uHit; varying vec2 vUv;
    float rand(vec2 c){ return fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 c = vUv - 0.5;
      float r = length(c);
      // radial speed blur
      float blur = (uSpeed * 0.018 + uNitro * 0.03) * smoothstep(0.12, 0.6, r);
      vec3 col = vec3(0.0);
      for (int i = 0; i < 8; i++) { float k = float(i) / 7.0; col += texture2D(tDiffuse, vUv - c * blur * k).rgb; }
      col /= 8.0;
      // chromatic aberration toward the edges
      float ca = 0.0025 * r * r * 4.0 * (1.0 + uNitro * 2.0 + uHit * 6.0);
      col.r = mix(col.r, texture2D(tDiffuse, vUv - c * ca).r, 0.8);
      col.b = mix(col.b, texture2D(tDiffuse, vUv + c * ca).b, 0.8);
      // carbon grade: teal shadows, warm highlights
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(col, col * vec3(0.86, 1.02, 1.12), (1.0 - smoothstep(0.0, 0.4, l)) * 0.5);
      col = mix(col, col * vec3(1.08, 1.0, 0.9), smoothstep(0.3, 1.2, l) * 0.35);
      // speedbreaker: desaturate + cold tint
      col = mix(col, vec3(l) * vec3(0.7, 0.95, 1.25), uSlow * 0.55);
      // vignette
      col *= mix(1.0, (1.0 - smoothstep(0.25, 0.85, r)), 0.55 + uSlow * 0.3);
      col += (rand(vUv * 731.0 + uTime) - 0.5) * 0.025;
      gl_FragColor = vec4(col, 1.0);
    }`,
};

export function createComposer(renderer, scene, camera) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4 });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  // NaN/Inf guard before bloom so one bad pixel can't smear into black blocks (seen on Apple GPUs)
  composer.addPass(new ShaderPass({
    uniforms: { tDiffuse: { value: null } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv);
        if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0);
        gl_FragColor = vec4(min(c.rgb, vec3(16.0)), 1.0); }`,
  }));
  const bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.45, 0.45, 1.05);
  composer.addPass(bloom);
  const final = new ShaderPass(FinalShader);
  composer.addPass(final);
  composer.addPass(new OutputPass());
  return { composer, bloom, final };
}
