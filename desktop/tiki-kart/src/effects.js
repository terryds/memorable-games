import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// Pooled billboard particles with per-particle colour.
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
    this.mesh = new THREE.Points(g, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { uTex: { value: texture }, uScale: { value: 600 } },
      vertexShader: /* glsl */`
        attribute float aSize; attribute float aAlpha; attribute vec3 aCol; varying float vA; varying vec3 vC; uniform float uScale;
        void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = aSize * uScale / max(-mv.z, 0.5); vA = aAlpha; vC = aCol; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: /* glsl */`
        uniform sampler2D uTex; varying float vA; varying vec3 vC;
        void main(){ vec4 t = texture2D(uTex, gl_PointCoord); gl_FragColor = vec4(vC * t.rgb, t.a * vA); }`,
    }));
    this.mesh.frustumCulled = false;
  }
  emit(x, y, z, vx, vy, vz, life, size, grow, alpha, r = 1, g = 1, b = 1) {
    const i = this.cursor; this.cursor = (this.cursor + 1) % this.max;
    this.pos.set([x, y, z], i * 3); this.vel.set([vx, vy, vz], i * 3); this.col.set([r, g, b], i * 3);
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
      this.size[i] += this.grow[i] * dt;
      const k = Math.max(0, this.life[i] / this.maxLife[i]);
      this.alpha[i] = this.a0[i] * k * Math.min(1, (1 - k) * 8 + 0.3);
    }
    for (const n of ['position', 'aCol', 'aSize', 'aAlpha']) this.geo.attributes[n].needsUpdate = true;
  }
}

const Final = {
  uniforms: { tDiffuse: { value: null }, uSpeed: { value: 0 }, uBoost: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform float uSpeed, uBoost; varying vec2 vUv;
    void main(){
      vec2 c = vUv - 0.5; float r = length(c);
      float blur = (uSpeed * 0.01 + uBoost * 0.03) * smoothstep(0.15, 0.6, r);
      vec3 col = vec3(0.0);
      for (int i = 0; i < 6; i++) col += texture2D(tDiffuse, vUv - c * blur * float(i) / 5.0).rgb;
      col /= 6.0;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, 1.15);                       // a touch more saturation
      col *= mix(1.0, 1.0 - smoothstep(0.35, 0.95, r), 0.35); // soft vignette
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`,
};

export function createComposer(renderer, scene, camera) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4 });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new ShaderPass({
    uniforms: { tDiffuse: { value: null } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0); gl_FragColor = vec4(min(c.rgb, vec3(16.0)), 1.0); }`,
  }));
  const bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.28, 0.35, 1.25);
  composer.addPass(bloom);
  const final = new ShaderPass(Final);
  composer.addPass(final);
  composer.addPass(new OutputPass());
  return { composer, bloom, final };
}
