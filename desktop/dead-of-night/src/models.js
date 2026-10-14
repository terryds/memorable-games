// Low-poly box people: survivors, an instanced horde of common infected, the special infected,
// weapons (world + first-person) and pickups.
import * as THREE from 'three';

const matCache = new Map();
export function mat(color, rough = 0.8, emissive = 0) {
  const k = color + ':' + rough + ':' + emissive;
  if (!matCache.has(k)) matCache.set(k, new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: 0, emissive, emissiveIntensity: emissive ? 1 : 0 }));
  return matCache.get(k);
}
const geoCache = new Map();
function box(w, h, d, color, x = 0, y = 0, z = 0, rough) {
  const k = `${w},${h},${d}`;
  if (!geoCache.has(k)) geoCache.set(k, new THREE.BoxGeometry(w, h, d));
  const m = new THREE.Mesh(geoCache.get(k), mat(color, rough));
  m.position.set(x, y, z); m.castShadow = true;
  return m;
}
function cyl(r, len, color, x = 0, y = 0, z = 0) { const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 10), mat(color, 0.5)); m.rotation.x = Math.PI / 2; m.position.set(x, y, z); m.castShadow = true; return m; }

const DARK = 0x2a2c2e, METAL = 0x4a4d50, WOOD = 0x5a3a20;
// Weapon models point down -z; origin is the grip. userData.muzzle = local muzzle point.
export function makeGun(id) {
  const g = new THREE.Group();
  const add = (...ms) => ms.forEach((m) => g.add(m));
  let muzzle = new THREE.Vector3(0, 0.03, -0.5);
  switch (id) {
    case 'pistol': add(box(0.032, 0.044, 0.19, 0x3a3c40, 0, 0.04, -0.06), box(0.03, 0.11, 0.05, 0x222222, 0, -0.02, 0)); muzzle.set(0, 0.045, -0.17); break;
    case 'uzi': add(box(0.05, 0.08, 0.26, DARK, 0, 0.03, -0.06), box(0.035, 0.16, 0.05, DARK, 0, -0.08, -0.02), cyl(0.014, 0.1, METAL, 0, 0.035, -0.24), box(0.02, 0.03, 0.18, DARK, 0, 0.0, 0.14)); muzzle.set(0, 0.035, -0.3); break;
    case 'pump': add(box(0.055, 0.07, 0.42, DARK, 0, 0.03, -0.1), cyl(0.02, 0.5, METAL, 0, 0.05, -0.45), box(0.06, 0.06, 0.2, WOOD, 0, 0.0, -0.42), box(0.05, 0.1, 0.28, WOOD, 0, -0.01, 0.22)); muzzle.set(0, 0.05, -0.7); break;
    case 'm16': add(box(0.05, 0.085, 0.38, DARK, 0, 0.03, -0.12), box(0.045, 0.085, 0.22, DARK, 0, 0.0, 0.2), box(0.02, 0.05, 0.12, DARK, 0, 0.1, -0.06), cyl(0.022, 0.3, 0x1b1c1d, 0, 0.035, -0.45), box(0.038, 0.16, 0.06, 0x2b2b2b, 0, -0.1, -0.15)); muzzle.set(0, 0.035, -0.62); break;
    case 'auto': add(box(0.06, 0.09, 0.46, 0x1e1f20, 0, 0.03, -0.1), cyl(0.024, 0.46, METAL, 0, 0.05, -0.48), box(0.05, 0.1, 0.26, 0x1e1f20, 0, -0.01, 0.22), box(0.04, 0.12, 0.06, DARK, 0, -0.07, 0.02)); muzzle.set(0, 0.05, -0.72); break;
    case 'rifle': add(box(0.06, 0.08, 0.6, WOOD, 0, 0.01, -0.05), cyl(0.016, 0.5, METAL, 0, 0.04, -0.6), cyl(0.03, 0.3, 0x111111, 0, 0.12, -0.08), box(0.06, 0.12, 0.28, WOOD, 0, -0.02, 0.3)); muzzle.set(0, 0.04, -0.86); break;
    case 'medkit': add(box(0.22, 0.16, 0.08, 0xb82018, 0, 0, 0), box(0.12, 0.03, 0.085, 0xeeeeee, 0, 0, 0), box(0.03, 0.12, 0.085, 0xeeeeee, 0, 0, 0)); break;
    case 'pills': add(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.09, 10), mat(0xd8b020, 0.4)), (() => { const c = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.03, 10), mat(0xeeeeee)); c.position.y = 0.055; return c; })()); break;
    case 'pipe': { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.18, 10), mat(0x6a6e72, 0.5)); p.rotation.z = Math.PI / 2; g.add(p); add(box(0.06, 0.04, 0.05, 0xb02020, 0, 0.04, 0)); break; }
    case 'molotov': { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.18, 10), new THREE.MeshStandardMaterial({ color: 0x3a5a2a, roughness: 0.2, transparent: true, opacity: 0.85 })); g.add(b); add(box(0.02, 0.07, 0.02, 0xd8c8a0, 0, 0.12, 0)); break; }
    default: add(box(0.04, 0.08, 0.3, DARK));
  }
  g.userData.muzzle = muzzle;
  return g;
}

// ---------------------------------------------------------------- survivors
const LOOKS = [
  { shirt: 0x3d6ea8, pants: 0x2b3442, skin: 0xd8a882, hair: 0x2a1c12, vest: 0 },
  { shirt: 0x7a4b2a, pants: 0x3a3226, skin: 0x8a5a3a, hair: 0x111111, vest: 0x2c2a26 },
  { shirt: 0x8c2f3a, pants: 0x262a36, skin: 0xe2b896, hair: 0x5a2a14, vest: 0 },
  { shirt: 0x4f6b3a, pants: 0x3e3a30, skin: 0xd0a080, hair: 0x8a8a86, vest: 0xc8c8c0 },
];
export class SurvivorModel {
  constructor(i) {
    const L = LOOKS[i];
    this.root = new THREE.Group(); this.pivot = new THREE.Group(); this.root.add(this.pivot);
    this.legs = [];
    for (const s of [-1, 1]) {
      const hip = new THREE.Group(); hip.position.set(s * 0.11, 0.9, 0);
      hip.add(box(0.17, 0.5, 0.19, L.pants, 0, -0.25, 0));
      const knee = new THREE.Group(); knee.position.y = -0.5; hip.add(knee);
      knee.add(box(0.15, 0.36, 0.17, L.pants, 0, -0.18, 0), box(0.16, 0.08, 0.26, 0x1c1a18, 0, -0.38, -0.04));
      hip.userData.knee = knee; this.pivot.add(hip); this.legs.push(hip);
    }
    const up = this.upper = new THREE.Group(); up.position.y = 0.9; this.pivot.add(up);
    up.add(box(0.44, 0.6, 0.26, L.shirt, 0, 0.3, 0));
    if (L.vest) up.add(box(0.46, 0.4, 0.28, L.vest, 0, 0.33, 0.01));
    const neck = this.neck = new THREE.Group(); neck.position.y = 0.62; up.add(neck);
    neck.add(box(0.22, 0.25, 0.24, L.skin, 0, 0.13, 0), box(0.24, 0.08, 0.26, L.hair, 0, 0.27, 0.02), box(0.16, 0.03, 0.02, 0x111111, 0, 0.15, -0.125));
    const arm = (s, rx, ry) => { const sh = new THREE.Group(); sh.position.set(s * 0.28, 0.52, 0); sh.add(box(0.12, 0.12, 0.42, L.shirt, 0, 0, -0.18), box(0.1, 0.1, 0.08, L.skin, 0, 0, -0.42)); sh.rotation.set(rx, ry, 0); up.add(sh); return sh; };
    this.armR = arm(1, -0.35, 0.25); this.armL = arm(-1, -0.25, -0.5);
    this.gunMount = new THREE.Group(); this.gunMount.position.set(0.1, 0.42, -0.42); up.add(this.gunMount);
    this.gunId = null; this.walk = 0;
  }
  setGun(id) {
    if (id === this.gunId) return;
    if (this.gun) this.gunMount.remove(this.gun);
    this.gunId = id; this.gun = makeGun(id); this.gun.traverse((o) => { if (o.isMesh) o.castShadow = true; }); this.gunMount.add(this.gun);
  }
  update(s, dt) {
    this.root.position.set(s.x, s.y, s.z); this.root.rotation.y = s.yaw;
    this.setGun(s.weaponId());
    const downed = s.incap || s.dead;
    this.pivot.rotation.x += ((downed ? -Math.PI / 2 * 0.92 : 0) - this.pivot.rotation.x) * Math.min(1, dt * 6);
    this.pivot.position.y = downed ? 0.15 : 0; this.pivot.position.z = downed ? 0.6 : 0;
    const sp = Math.min(1.2, s.moveSpeed / 5.4);
    this.walk += dt * (4 + sp * 6) * (sp > 0.05 ? 1 : 0);
    const sw = Math.sin(this.walk) * 0.7 * sp, duck = s.duck;
    this.legs.forEach((l, i) => { const k = i ? -1 : 1; l.rotation.x = k * sw * (1 - duck * 0.6) - duck * 0.9; l.userData.knee.rotation.x = duck * 1.6 + Math.max(0, -k * Math.cos(this.walk)) * 0.6 * sp; l.position.y = 0.9 - duck * 0.42; });
    this.upper.position.y = 0.9 - duck * 0.42;
    this.upper.rotation.x = s.pitch * 0.45 + (s.pinnedBy ? 0.5 : 0);
    this.neck.rotation.x = s.pitch * 0.4;
  }
}

// ---------------------------------------------------------------- the horde (instanced)
// 6 body parts per zombie, each an InstancedMesh; per-instance colours vary clothes and skin.
const ZSKIN = [0x7f8a72, 0x8a8f7a, 0x6f7a64, 0x9a9a88, 0x7a7060, 0x8a8a78];
const ZSHIRT = [0x4a3a30, 0x2e3a48, 0x5a2a26, 0x3a4434, 0x6a6458, 0x2a2a2e, 0x7a6a50, 0x40304a];
const ZPANTS = [0x2a2a30, 0x3a3428, 0x242c3a, 0x403a30, 0x1e1e22];
export class Horde {
  constructor(scene, max = 90) {
    this.max = max;
    const part = (w, h, d, oy) => new THREE.BoxGeometry(w, h, d).translate(0, oy, 0);
    const m = (geo) => { const im = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ roughness: 0.9 }), max); im.castShadow = true; im.receiveShadow = false; im.count = 0; im.frustumCulled = false; scene.add(im); return im; };
    this.parts = {
      torso: m(part(0.42, 0.62, 0.24, 0.31)),
      head: m(part(0.22, 0.25, 0.24, 0.12)),
      armL: m(part(0.11, 0.6, 0.11, -0.28)), armR: m(part(0.11, 0.6, 0.11, -0.28)),
      legL: m(part(0.16, 0.9, 0.18, -0.45)), legR: m(part(0.16, 0.9, 0.18, -0.45)),
    };
    this.c = new THREE.Color(); this.root = new THREE.Matrix4(); this.tmp = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.e = new THREE.Euler(); this.v = new THREE.Vector3(); this.one = new THREE.Vector3(1, 1, 1);
  }
  set(part, i, lx, ly, lz, rx, ry, rz) {
    this.e.set(rx, ry, rz, 'YXZ'); this.q.setFromEuler(this.e);
    this.tmp.compose(this.v.set(lx, ly, lz), this.q, this.one);
    this.tmp.premultiply(this.root);
    this.parts[part].setMatrixAt(i, this.tmp);
  }
  update(zombies, t, camX, camZ) {
    let i = 0;
    for (const z of zombies) {
      if (i >= this.max) break;
      if ((z.x - camX) ** 2 + (z.z - camZ) ** 2 > 110 * 110) continue;
      let sink = 0, fall = 0;
      if (z.dead) { fall = Math.min(1, z.deadT * 3); fall = 1 - (1 - fall) ** 2; sink = Math.max(0, z.deadT - 8) * 0.15; }
      // root: position, yaw, then the fall (rotate around the feet)
      this.e.set(fall * -1.45, z.dead ? z.fallDir + Math.PI : z.yaw, 0, 'YXZ'); this.q.setFromEuler(this.e);
      this.root.compose(this.v.set(z.x, z.y - sink, z.z), this.q, this.one);
      const ph = z.phase + t * (z.moving > 2 ? 11 : 4);
      const run = Math.min(1, (z.moving || 0) / 5), sw = Math.sin(ph) * (0.25 + run * 0.6) * (z.dead ? 0 : 1);
      const lean = z.dead ? 0 : run * 0.35 + (z.stagger > 0 ? -0.4 : 0);
      this.set('legL', i, -0.11, 0.9, 0, sw, 0, 0);
      this.set('legR', i, 0.11, 0.9, 0, -sw, 0, 0);
      this.set('torso', i, 0, 0.9, 0, lean, 0, Math.sin(z.phase) * 0.12);
      const reach = z.dead ? 0 : -1.25 - run * 0.2 + (z.lunge > 0 ? -0.5 : 0);
      this.set('armL', i, -0.28 * Math.cos(lean), 1.45, 0.28 * Math.sin(lean), reach + Math.sin(ph + 1) * 0.25, 0, 0.1);
      this.set('armR', i, 0.28 * Math.cos(lean), 1.45, 0.28 * Math.sin(lean), reach + Math.sin(ph) * 0.25 - (z.look % 3 === 0 ? 0.8 : 0), 0, -0.1);
      this.set('head', i, 0, 1.52, -0.3 * Math.sin(lean), lean * 0.5 - 0.15, Math.sin(z.phase * 3) * 0.3, Math.sin(z.phase) * 0.35);
      const L = z.look;
      const burn = z.burning > 0 ? 0.35 : 1;
      this.parts.head.setColorAt(i, this.c.set(ZSKIN[L % ZSKIN.length]).multiplyScalar(burn));
      this.parts.armL.setColorAt(i, this.c.set(L % 2 ? ZSKIN[(L + 1) % ZSKIN.length] : ZSHIRT[L]).multiplyScalar(burn));
      this.parts.armR.setColorAt(i, this.c.set(L % 2 ? ZSKIN[(L + 2) % ZSKIN.length] : ZSHIRT[L]).multiplyScalar(burn));
      this.parts.torso.setColorAt(i, this.c.set(ZSHIRT[L]).multiplyScalar(burn));
      this.parts.legL.setColorAt(i, this.c.set(ZPANTS[L % ZPANTS.length]).multiplyScalar(burn));
      this.parts.legR.setColorAt(i, this.c.set(ZPANTS[L % ZPANTS.length]).multiplyScalar(burn));
      i++;
    }
    for (const p of Object.values(this.parts)) { p.count = i; p.instanceMatrix.needsUpdate = true; if (p.instanceColor) p.instanceColor.needsUpdate = true; }
  }
}

// ---------------------------------------------------------------- special infected
export function makeSpecial(type) {
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const P = {};
  if (type === 'hunter') {
    const hood = 0x2a2e36;
    body.add(box(0.4, 0.55, 0.26, hood, 0, 1.05, 0), box(0.24, 0.26, 0.26, hood, 0, 1.45, 0.02), box(0.17, 0.12, 0.02, 0x0a0a0a, 0, 1.42, -0.12));
    P.legs = [box(0.16, 0.85, 0.18, 0x22252a, -0.11, 0.45, 0), box(0.16, 0.85, 0.18, 0x22252a, 0.11, 0.45, 0)]; P.legs.forEach((l) => body.add(l));
    P.arms = [box(0.1, 0.6, 0.1, 0x8a8f7a, -0.28, 1.0, -0.12), box(0.1, 0.6, 0.1, 0x8a8f7a, 0.28, 1.0, -0.12)]; P.arms.forEach((a) => body.add(a));
  } else if (type === 'boomer') {
    const skin = 0x8a8a5a;
    const belly = new THREE.Mesh(new THREE.SphereGeometry(0.62, 14, 10), mat(skin, 0.6)); belly.position.y = 1.0; belly.scale.set(1, 1.1, 0.9); belly.castShadow = true; body.add(belly);
    const boils = mat(0xa8984a, 0.5);
    for (let k = 0; k < 9; k++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.08 + Math.random() * 0.08, 8, 6), boils); const a = Math.random() * 6.28, h = Math.random(); b.position.set(Math.cos(a) * 0.55, 0.7 + h * 0.7, Math.sin(a) * 0.5); body.add(b); }
    body.add(box(0.3, 0.28, 0.3, skin, 0, 1.75, -0.05));
    P.legs = [box(0.22, 0.6, 0.22, 0x3a3428, -0.2, 0.3, 0), box(0.22, 0.6, 0.22, 0x3a3428, 0.2, 0.3, 0)]; P.legs.forEach((l) => body.add(l));
    P.arms = [box(0.14, 0.55, 0.14, skin, -0.62, 1.0, 0), box(0.14, 0.55, 0.14, skin, 0.62, 1.0, 0)]; P.arms.forEach((a) => body.add(a));
  } else if (type === 'tank') {
    const skin = 0x7a7a62;
    body.add(box(1.5, 1.2, 0.95, skin, 0, 1.75, 0), box(1.1, 0.7, 0.7, 0x3a3830, 0, 0.95, 0), box(0.4, 0.38, 0.42, skin, 0, 2.45, -0.3));
    P.legs = [box(0.36, 0.8, 0.4, 0x2a2a26, -0.35, 0.4, 0), box(0.36, 0.8, 0.4, 0x2a2a26, 0.35, 0.4, 0)]; P.legs.forEach((l) => body.add(l));
    P.arms = [new THREE.Group(), new THREE.Group()];
    P.arms.forEach((a, k) => { const s = k ? 1 : -1; a.position.set(s * 0.95, 2.2, 0); a.add(box(0.5, 1.3, 0.5, skin, 0, -0.6, 0), box(0.6, 0.5, 0.6, skin, 0, -1.4, 0)); body.add(a); });
  } else if (type === 'witch') {
    const skin = 0xc8c8b8;
    body.add(box(0.32, 0.55, 0.2, 0x8a8a80, 0, 1.0, 0), box(0.2, 0.24, 0.22, skin, 0, 1.45, 0));
    const hair = box(0.26, 0.6, 0.26, 0xd8d8d0, 0, 1.3, 0.04); body.add(hair);
    const eyes = new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 2, 0.6) });
    for (const s of [-0.05, 0.05]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 4), eyes); e.position.set(s, 1.47, -0.12); body.add(e); }
    P.legs = [box(0.11, 0.85, 0.12, skin, -0.08, 0.45, 0), box(0.11, 0.85, 0.12, skin, 0.08, 0.45, 0)]; P.legs.forEach((l) => body.add(l));
    P.arms = [new THREE.Group(), new THREE.Group()];
    P.arms.forEach((a, k) => { const s = k ? 1 : -1; a.position.set(s * 0.2, 1.25, 0); a.add(box(0.07, 0.6, 0.07, skin, 0, -0.3, 0)); for (let f = 0; f < 3; f++) a.add(box(0.015, 0.22, 0.015, 0xe8e8e0, (f - 1) * 0.025, -0.7, 0)); body.add(a); });
  }
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  g.userData = { body, P, walk: 0 };
  return g;
}
export function updateSpecial(g, sp, dt, t) {
  const { body, P } = g.userData;
  g.position.set(sp.x, sp.y, sp.z);
  g.rotation.y = sp.yaw;
  if (sp.dead) { body.rotation.x += (-Math.PI / 2 - body.rotation.x) * Math.min(1, dt * 5); body.position.y = Math.max(-0.3, body.position.y - dt * 0.02); return; }
  g.userData.walk += dt * Math.min(12, (sp.moving || 0) * 2.2);
  const sw = Math.sin(g.userData.walk) * Math.min(0.7, (sp.moving || 0) * 0.15);
  if (P.legs) { P.legs[0].rotation.x = sw; P.legs[1].rotation.x = -sw; }
  if (sp.type === 'hunter') {
    const crouch = sp.crouch || sp.state === 'crouch' || sp.pin;
    body.position.y = crouch ? -0.45 : 0; body.rotation.x = crouch ? 0.5 : sp.state === 'air' ? 0.9 : 0;
    P.arms.forEach((a, k) => { a.rotation.x = sp.pin ? -1.4 + Math.sin(t * 30 + k * 2) * 0.8 : crouch ? -0.5 : sw * (k ? -1 : 1); });
  } else if (sp.type === 'boomer') {
    body.scale.setScalar(1 + Math.sin(t * 3) * 0.03);
    P.arms.forEach((a, k) => { a.rotation.z = (k ? -1 : 1) * 0.3 + Math.sin(t * 2 + k) * 0.1; });
    body.rotation.x = sp.vomiting > 0 ? 0.4 : 0;
  } else if (sp.type === 'tank') {
    const punch = sp.punch > 0 ? Math.sin((0.4 - sp.punch) / 0.4 * Math.PI) : 0;
    P.arms[0].rotation.x = -punch * 1.8 + sw * 0.6; P.arms[1].rotation.x = -punch * 1.6 - sw * 0.6;
    body.rotation.x = 0.15 + punch * 0.2;
  } else if (sp.type === 'witch') {
    if (sp.sitting) {
      body.position.y = -0.55; body.rotation.x = 0.55; P.legs.forEach((l) => { l.rotation.x = -1.4; });
      P.arms.forEach((a, k) => { a.rotation.x = -2.2 + Math.sin(t * 5 + k) * 0.08; a.rotation.z = (k ? -1 : 1) * 0.4; });
      body.rotation.z = Math.sin(t * 7) * 0.02 * (1 + sp.startle * 4);
    } else {
      body.position.y = 0; body.rotation.x = 0.25;
      P.arms.forEach((a, k) => { a.rotation.x = -0.9 + Math.sin(t * 16 + k * 3) * 0.6; a.rotation.z = (k ? -1 : 1) * 0.5; });
    }
  }
}

// ---------------------------------------------------------------- first-person arms
export function makeViewArms(id) {
  const g = new THREE.Group();
  const sleeve = (len) => { const s = new THREE.Group(); s.add(box(0.05, 0.05, len, 0x22344e, 0, 0, len / 2 + 0.05)); s.add(box(0.045, 0.045, 0.07, 0x9a7458, 0, 0, 0.01)); return s; };
  const r = sleeve(0.32); r.position.set(0.01, -0.06, 0.04); r.rotation.set(1.05, 0.15, 0); g.add(r);
  if (['pipe', 'molotov', 'pills', 'medkit'].includes(id)) return g;
  const l = sleeve(0.34);
  if (id === 'pistol') { l.position.set(-0.035, -0.07, 0.01); l.rotation.set(1.0, -0.35, 0); }
  else { l.position.set(-0.02, -0.03, -0.34); l.rotation.set(0.95, -0.5, 0); }
  g.add(l);
  return g;
}

// ---------------------------------------------------------------- pickups
export function makeItem(it) {
  const g = new THREE.Group();
  if (it.type === 'weapon') { const m = makeGun(it.wid); m.rotation.set(0, Math.PI / 2, Math.PI / 2); g.add(m); }
  else if (it.type === 'ammo') {
    g.add(box(0.7, 0.35, 0.5, 0x3a4a2a, 0, 0.18, 0));
    for (let k = 0; k < 6; k++) g.add(box(0.16, 0.12, 0.1, 0x5a4a20, -0.2 + (k % 3) * 0.2, 0.42, (k > 2 ? 0.1 : -0.1)));
  } else if (it.type === 'medkit') { const m = makeGun('medkit'); m.scale.setScalar(1.6); m.rotation.x = -Math.PI / 2; g.add(m); }
  else { const m = makeGun(it.type); m.scale.setScalar(1.5); g.add(m); }
  // faint glow so items read in the dark (like the game's item outlines)
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; } });
  return g;
}
