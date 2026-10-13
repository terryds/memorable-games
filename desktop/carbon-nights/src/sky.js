import * as THREE from 'three';

export const MOON_DIR = new THREE.Vector3(0.35, 0.3, 0.88).normalize();

export function createSky() {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      uTime: { value: 0 },
      uMoonDir: { value: MOON_DIR },
      uGlowDir: { value: new THREE.Vector3(0.1, 0, 1).normalize() },
    },
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p.xyww;
      }`,
    fragmentShader: /* glsl */`
      varying vec3 vDir;
      uniform float uTime; uniform vec3 uMoonDir; uniform vec3 uGlowDir;
      float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float noise(vec3 x) {
        vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
      }
      float fbm(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.07; a *= 0.5; } return s; }
      void main() {
        vec3 d = normalize(vDir);
        float h = d.y;
        float t = clamp(h, 0.0, 1.0);
        vec3 zenith = vec3(0.004, 0.006, 0.022);
        vec3 mid = vec3(0.022, 0.018, 0.07);
        vec3 horizon = vec3(0.16, 0.06, 0.17);
        vec3 col = mix(horizon, mid, smoothstep(0.0, 0.16, t));
        col = mix(col, zenith, smoothstep(0.12, 0.75, t));
        // warm light pollution over the city
        vec3 hd = normalize(vec3(d.x, 0.0, d.z) + 1e-5);
        float g = (0.35 + 0.65 * pow(max(dot(hd, uGlowDir), 0.0), 2.0)) * exp(-max(h, 0.0) * 9.0);
        col += vec3(0.42, 0.13, 0.12) * g * 0.55;
        if (h < 0.0) col = mix(horizon * 0.7 + vec3(0.15, 0.05, 0.05) * g, vec3(0.012, 0.01, 0.03), smoothstep(0.0, 0.25, -h));
        // stars
        vec3 sp = d * 380.0; vec3 cell = floor(sp); float r = hash(cell);
        float star = 0.0;
        if (r > 0.9965) {
          vec3 c = cell + 0.5 + (vec3(hash(cell + 1.3), hash(cell + 2.7), hash(cell + 3.1)) - 0.5) * 0.6;
          star = (1.0 - smoothstep(0.0, 0.42, length(sp - c))) * (0.55 + 0.45 * sin(uTime * (1.0 + r * 40.0) + r * 300.0));
          star *= 0.6 + 2.5 * hash(cell + 9.0);
        }
        star *= smoothstep(0.03, 0.3, h);
        // moon
        float md = dot(d, uMoonDir);
        float moon = smoothstep(0.99972, 0.99980, md);
        float mare = noise(d * 700.0) * 0.6 + noise(d * 1900.0) * 0.4;
        vec3 moonCol = vec3(1.0, 0.95, 0.86) * (2.4 - 0.9 * smoothstep(0.45, 0.75, mare));
        float halo = pow(max(md, 0.0), 900.0) * 0.55 + pow(max(md, 0.0), 60.0) * 0.12 + pow(max(md, 0.0), 8.0) * 0.03;
        // clouds lit by moon and city glow
        vec2 cp = d.xz / (h + 0.1);
        float c = fbm(vec3(cp * 0.9 + vec2(uTime * 0.004, uTime * 0.002), uTime * 0.003));
        c += 0.5 * fbm(vec3(cp * 2.6 - vec2(uTime * 0.006, 0.0), 3.0)) - 0.25;
        float cloud = smoothstep(0.42, 0.85, c) * smoothstep(0.0, 0.12, h);
        vec3 cloudCol = vec3(0.045, 0.035, 0.08) + vec3(0.30, 0.11, 0.14) * g * 1.4 + vec3(0.55, 0.58, 0.7) * halo * 2.2;
        float edge = smoothstep(0.42, 0.6, c) - smoothstep(0.6, 0.85, c);
        cloudCol += vec3(0.35, 0.38, 0.5) * edge * pow(max(md, 0.0), 6.0) * 0.6;
        col += vec3(0.9, 0.95, 1.0) * star * (1.0 - cloud);
        col += vec3(0.55, 0.6, 0.78) * halo * (1.0 - cloud * 0.5);
        col = mix(col, moonCol, moon * (1.0 - cloud * 0.85));
        col = mix(col, cloudCol, cloud * 0.9);
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(5000, 48, 24), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -10;
  return mesh;
}
