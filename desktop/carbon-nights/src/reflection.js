import * as THREE from 'three';

// Planar mirror about y = 0, shared by the wet city streets and the bay.
export class PlanarReflection {
  constructor(scale = 0.5) {
    this.scale = scale;
    this.rt = new THREE.WebGLRenderTarget(16, 16, { type: THREE.HalfFloatType, samples: 0 });
    this.rt.texture.generateMipmaps = false;
    this.camera = new THREE.PerspectiveCamera();
    this.textureMatrix = new THREE.Matrix4();
    this.enabled = true;
    this.hidden = []; // objects not drawn into the reflection
    this._n = new THREE.Vector3(0, 1, 0);
    this._v = new THREE.Vector3(); this._c = new THREE.Vector3(); this._t = new THREE.Vector3();
    this._la = new THREE.Vector3(); this._rm = new THREE.Matrix4();
    this._plane = new THREE.Plane(); this._clip = new THREE.Vector4(); this._q = new THREE.Vector4();
    this.uniforms = {
      uReflTex: { value: this.rt.texture },
      uReflMatrix: { value: this.textureMatrix },
      uReflOn: { value: 1 },
    };
  }

  setSize(w, h) { this.rt.setSize(Math.max(16, (w * this.scale) | 0), Math.max(16, (h * this.scale) | 0)); this.uniforms.uReflOn.value = 0; }

  update(renderer, scene, camera) {
    if (!this.enabled) { this.uniforms.uReflOn.value = 0; return; }
    const n = this._n, cam = this.camera;
    this._c.setFromMatrixPosition(camera.matrixWorld);
    if (this._c.y < 0.05) return;
    // mirrored eye
    this._v.set(this._c.x, -this._c.y, this._c.z);
    this._rm.extractRotation(camera.matrixWorld);
    this._la.set(0, 0, -1).applyMatrix4(this._rm).add(this._c);
    this._t.set(this._la.x, -this._la.y, this._la.z);
    cam.position.copy(this._v);
    cam.up.set(0, 1, 0).applyMatrix4(this._rm).reflect(n);
    cam.lookAt(this._t);
    cam.far = camera.far; cam.near = camera.near;
    cam.updateMatrixWorld();
    cam.projectionMatrix.copy(camera.projectionMatrix);
    this.textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    this.textureMatrix.multiply(cam.projectionMatrix).multiply(cam.matrixWorldInverse);
    // oblique near plane clips everything below the water line
    this._plane.setFromNormalAndCoplanarPoint(n, new THREE.Vector3(0, 0.0, 0)).applyMatrix4(cam.matrixWorldInverse);
    const clip = this._clip.set(this._plane.normal.x, this._plane.normal.y, this._plane.normal.z, this._plane.constant);
    const p = cam.projectionMatrix.elements, q = this._q;
    q.x = (Math.sign(clip.x) + p[8]) / p[0];
    q.y = (Math.sign(clip.y) + p[9]) / p[5];
    q.z = -1; q.w = (1 + p[10]) / p[14];
    clip.multiplyScalar(2 / clip.dot(q));
    p[2] = clip.x; p[6] = clip.y; p[10] = clip.z + 1 - 0.003; p[14] = clip.w;

    const vis = this.hidden.map((o) => o.visible);
    this.hidden.forEach((o) => (o.visible = false));
    const prev = renderer.getRenderTarget();
    renderer.setRenderTarget(this.rt);
    renderer.clear();
    renderer.render(scene, cam);
    renderer.setRenderTarget(prev);
    this.hidden.forEach((o, i) => (o.visible = vis[i]));
    this.uniforms.uReflOn.value = 1;
  }
}

// Inject a distorted planar reflection into a standard material.
// mode 'road': only where the surface sits near y=0 (wet city streets), modulated by puddles.
// mode 'water': everywhere, with stronger ripple distortion.
export function addReflection(material, refl, shared, mode = 'road') {
  material.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, refl.uniforms, shared);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nvarying vec4 vRefl;\nuniform mat4 uReflMatrix;')
      .replace('#include <fog_vertex>', '#include <fog_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;\nvRefl = uReflMatrix * vec4(vWPos, 1.0);');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec3 vWPos; varying vec4 vRefl;
uniform sampler2D uReflTex; uniform float uReflOn; uniform sampler2D uPuddle; uniform float uTime; uniform float uWet;`)
      .replace('#include <opaque_fragment>', `#include <opaque_fragment>
{
  vec3 V = normalize(cameraPosition - vWPos);
  float fres = 0.04 + 0.96 * pow(1.0 - clamp(V.y, 0.0, 1.0), 5.0);
  ${mode === 'road' ? `
  float pud = texture2D(uPuddle, vWPos.xz * 0.012).r;
  float flatness = (1.0 - smoothstep(0.15, 0.6, abs(vWPos.y)));
  float wet = uWet * flatness * (0.35 + 0.65 * smoothstep(0.05, 0.6, pud));
  vec2 rip = (texture2D(uPuddle, vWPos.xz * 0.5 + vec2(uTime * 0.03, uTime * 0.021)).gb - 0.5) * (0.002 + 0.006 * (1.0 - pud));
  float k = wet * mix(0.17, 0.58, fres);` : `
  vec2 rip = (texture2D(uPuddle, vWPos.xz * 0.02 + vec2(uTime * 0.006, uTime * 0.004)).gb - 0.5) * 0.05
           + (texture2D(uPuddle, vWPos.xz * 0.07 - vec2(uTime * 0.01, 0.0)).gb - 0.5) * 0.025;
  float k = mix(0.25, 1.0, fres);`}
  vec4 rc = vRefl; rc.xy += rip * rc.w;
  ${mode === 'road' ? `
  // wet asphalt smears reflections into vertical streaks
  float sp = (0.006 + 0.012 * (1.0 - pud)) * rc.w;
  vec3 refl = texture2DProj(uReflTex, rc).rgb * 0.28
            + texture2DProj(uReflTex, rc + vec4(0.0, sp, 0.0, 0.0)).rgb * 0.2
            + texture2DProj(uReflTex, rc - vec4(0.0, sp, 0.0, 0.0)).rgb * 0.2
            + texture2DProj(uReflTex, rc + vec4(0.0, sp * 2.5, 0.0, 0.0)).rgb * 0.16
            + texture2DProj(uReflTex, rc - vec4(0.0, sp * 2.5, 0.0, 0.0)).rgb * 0.16;` : `
  vec3 refl = texture2DProj(uReflTex, rc).rgb;`}
  if (uReflOn > 0.5) gl_FragColor.rgb += max(refl, vec3(0.0)) * k;
}`);
  };
  material.customProgramCacheKey = () => 'refl-' + mode;
}
