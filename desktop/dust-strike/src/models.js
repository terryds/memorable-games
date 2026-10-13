// Low-poly box models: weapons (shared by the first-person viewmodel and third-person soldiers)
// and the two soldier factions.
import * as THREE from 'three';

const matCache = new Map();
export function mat(color, rough = 0.7, metal = 0.1) {
  const k = color + ':' + rough + ':' + metal;
  // no env map in this game, so keep metalness low or metal parts render pitch black
  if (!matCache.has(k)) matCache.set(k, new THREE.MeshStandardMaterial({ color, roughness: Math.max(0.35, rough), metalness: Math.min(0.25, metal * 0.3) }));
  return matCache.get(k);
}
const boxGeoCache = new Map();
function box(w, h, d, color, x = 0, y = 0, z = 0, rough, metal) {
  const k = `${w},${h},${d}`;
  if (!boxGeoCache.has(k)) boxGeoCache.set(k, new THREE.BoxGeometry(w, h, d));
  const m = new THREE.Mesh(boxGeoCache.get(k), mat(color, rough, metal));
  m.position.set(x, y, z);
  return m;
}
function cyl(r, len, color, x = 0, y = 0, z = 0, rough, metal) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 10), mat(color, rough, metal));
  m.rotation.x = Math.PI / 2; m.position.set(x, y, z);
  return m;
}

const METAL = 0x585c62, DARK = 0x3b3e42, WOOD = 0x8a5530, OLIVE = 0x66734a;

// Weapon models point down -z; origin is the grip. userData.muzzle = local muzzle point.
export function makeGun(id) {
  const g = new THREE.Group();
  let muzzle = new THREE.Vector3(0, 0.03, -0.6);
  const add = (...ms) => ms.forEach((m) => g.add(m));
  switch (id) {
    case 'ak47':
      add(box(0.055, 0.085, 0.4, METAL, 0, 0.03, -0.12, 0.5, 0.6), box(0.05, 0.1, 0.26, WOOD, 0, 0.0, 0.2, 0.6),
        box(0.065, 0.065, 0.22, WOOD, 0, 0.02, -0.42, 0.6), cyl(0.012, 0.32, METAL, 0, 0.045, -0.66, 0.4, 0.7),
        cyl(0.009, 0.25, METAL, 0, 0.075, -0.5, 0.4, 0.7), box(0.012, 0.04, 0.012, METAL, 0, 0.09, -0.78),
        box(0.035, 0.1, 0.05, DARK, 0, -0.06, 0.03));
      { const m = box(0.042, 0.19, 0.07, 0x2e2a26, 0, -0.1, -0.17, 0.5, 0.4); m.rotation.x = 0.35; g.add(m); }
      muzzle.set(0, 0.045, -0.83); break;
    case 'm4a1':
      add(box(0.05, 0.085, 0.38, DARK, 0, 0.03, -0.12, 0.5, 0.5), box(0.045, 0.085, 0.22, DARK, 0, 0.0, 0.2),
        box(0.02, 0.035, 0.2, DARK, 0, 0.09, -0.1), cyl(0.028, 0.24, 0x2b2d2f, 0, 0.035, -0.42),
        cyl(0.022, 0.2, 0x18191a, 0, 0.035, -0.64, 0.5, 0.5), box(0.035, 0.1, 0.05, DARK, 0, -0.06, 0.03),
        box(0.038, 0.16, 0.06, 0x2b2b2b, 0, -0.1, -0.15));
      muzzle.set(0, 0.035, -0.75); break;
    case 'awp':
      add(box(0.07, 0.1, 0.55, OLIVE, 0, 0.02, -0.05, 0.8), box(0.065, 0.15, 0.3, OLIVE, 0, -0.01, 0.32, 0.8),
        cyl(0.016, 0.55, METAL, 0, 0.04, -0.6, 0.4, 0.7), cyl(0.032, 0.34, 0x111111, 0, 0.12, -0.08, 0.3, 0.6),
        cyl(0.04, 0.05, 0x111111, 0, 0.12, -0.27, 0.3, 0.6), box(0.035, 0.1, 0.05, DARK, 0, -0.07, 0.06),
        box(0.045, 0.07, 0.1, DARK, 0, -0.06, -0.1));
      muzzle.set(0, 0.04, -0.88); break;
    case 'mp5':
      add(box(0.05, 0.08, 0.32, DARK, 0, 0.03, -0.08), cyl(0.026, 0.26, 0x151617, 0, 0.035, -0.37),
        box(0.035, 0.09, 0.05, DARK, 0, -0.05, 0.04), box(0.02, 0.06, 0.2, DARK, 0, 0.03, 0.18));
      { const m = box(0.032, 0.16, 0.05, 0x2b2b2b, 0, -0.09, -0.1); m.rotation.x = 0.25; g.add(m); }
      muzzle.set(0, 0.035, -0.5); break;
    case 'glock':
      add(box(0.032, 0.042, 0.18, 0x3a3c40, 0, 0.04, -0.06, 0.4, 0.5), box(0.03, 0.11, 0.05, 0x2c2c2c, 0, -0.02, 0.0));
      muzzle.set(0, 0.045, -0.16); break;
    case 'usp':
      add(box(0.032, 0.044, 0.19, 0x3c3f44, 0, 0.04, -0.06, 0.4, 0.5), box(0.03, 0.11, 0.05, 0x2c2c2c, 0, -0.02, 0.0), cyl(0.016, 0.15, 0x26272a, 0, 0.04, -0.23, 0.5, 0.4));
      muzzle.set(0, 0.04, -0.31); break;
    case 'deagle':
      add(box(0.038, 0.055, 0.25, 0x8d9096, 0, 0.045, -0.08, 0.25, 0.9), box(0.034, 0.12, 0.055, 0x2a2a2a, 0, -0.02, 0.0));
      muzzle.set(0, 0.05, -0.21); break;
    case 'knife': {
      add(box(0.024, 0.032, 0.11, 0x161616, 0, 0, 0.02));
      const b = box(0.006, 0.034, 0.17, 0xc8ccd0, 0, 0.004, -0.12, 0.2, 0.9); g.add(b);
      add(box(0.05, 0.012, 0.012, 0x444444, 0, 0, -0.035));
      muzzle.set(0, 0, -0.2); break;
    }
    case 'he': add(new THREE.Mesh(new THREE.SphereGeometry(0.038, 12, 10), mat(0x4a5a2e, 0.6)), box(0.012, 0.05, 0.02, 0x999999, 0, 0.04, 0.01)); break;
    case 'flash': { const c = cyl(0.026, 0.1, 0x9aa0a6, 0, 0, 0, 0.4, 0.6); c.rotation.x = 0; g.add(c, box(0.012, 0.05, 0.02, 0x777777, 0, 0.06, 0.01)); break; }
    case 'smoke': { const c = cyl(0.028, 0.11, 0x6f7a6a, 0, 0, 0, 0.5, 0.4); c.rotation.x = 0; const band = cyl(0.03, 0.02, 0x3c8d4a, 0, 0.02, 0); band.rotation.x = 0; g.add(c, band, box(0.012, 0.05, 0.02, 0x777777, 0, 0.065, 0.01)); break; }
    case 'c4': add(box(0.16, 0.06, 0.1, 0xb39b6a, 0, 0, 0, 0.8), box(0.07, 0.02, 0.045, 0x111111, 0.02, 0.04, 0), box(0.05, 0.008, 0.03, 0x335533, 0.02, 0.052, 0)); break;
    default: add(box(0.03, 0.1, 0.2, DARK));
  }
  g.userData.muzzle = muzzle;
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

// ---------------------------------------------------------------- soldiers
const LOOK = {
  T: { shirt: 0xc49c6c, pants: 0x9a8058, vest: 0x7e664c, head: 0x5e5044, skin: 0xd09c74, accent: 0xb0442f, boots: 0x4a3c2e, helmet: 0 },
  CT: { shirt: 0x7090c0, pants: 0x5a6e96, vest: 0x56688a, head: 0x5c6e88, skin: 0xe0b08a, accent: 0x333333, boots: 0x303030, helmet: 0x74859a },
};

export class Soldier {
  constructor(team) {
    const L = LOOK[team];
    this.team = team;
    this.root = new THREE.Group();          // world position + yaw
    this.pivot = new THREE.Group();         // death fall pivot at the feet
    this.root.add(this.pivot);
    const legs = this.legs = [];
    for (const s of [-1, 1]) {
      const hip = new THREE.Group(); hip.position.set(s * 0.11, 0.9, 0);
      hip.add(box(0.17, 0.5, 0.19, L.pants, 0, -0.25, 0));
      const knee = new THREE.Group(); knee.position.set(0, -0.5, 0); hip.add(knee);
      knee.add(box(0.15, 0.36, 0.17, L.pants, 0, -0.18, 0), box(0.16, 0.08, 0.26, L.boots, 0, -0.38, -0.04));
      hip.userData.knee = knee;
      this.pivot.add(hip); legs.push(hip);
    }
    const upper = this.upper = new THREE.Group(); upper.position.y = 0.9; this.pivot.add(upper);
    upper.add(box(0.46, 0.6, 0.27, L.shirt, 0, 0.3, 0), box(0.5, 0.42, 0.32, L.vest, 0, 0.33, 0));
    if (team === 'T') upper.add(box(0.5, 0.06, 0.33, L.accent, 0, 0.1, 0)); else upper.add(box(0.12, 0.1, 0.05, 0xe8e2c8, 0.12, 0.45, -0.17));
    const neck = this.neck = new THREE.Group(); neck.position.y = 0.62; upper.add(neck);
    neck.add(box(0.24, 0.26, 0.26, L.head, 0, 0.14, 0));
    if (team === 'T') {
      neck.add(box(0.2, 0.06, 0.02, L.skin, 0, 0.17, -0.13), box(0.16, 0.035, 0.025, 0x111111, 0, 0.18, -0.14));
    } else {
      neck.add(box(0.2, 0.14, 0.02, L.skin, 0, 0.1, -0.13), box(0.22, 0.05, 0.03, 0x0d0d0d, 0, 0.18, -0.14),
        box(0.29, 0.1, 0.31, L.helmet, 0, 0.27, 0.01, 0.6));
    }
    // arms reach forward to the gun
    const arm = (s, rx, ry) => {
      const sh = new THREE.Group(); sh.position.set(s * 0.29, 0.52, 0);
      sh.add(box(0.13, 0.13, 0.42, L.shirt, 0, 0, -0.18)); sh.add(box(0.11, 0.11, 0.08, 0x1d1d1d, 0, 0, -0.42));
      sh.rotation.set(rx, ry, 0); upper.add(sh); return sh;
    };
    this.armR = arm(1, -0.35, 0.25); this.armL = arm(-1, -0.25, -0.5);
    this.gunMount = new THREE.Group(); this.gunMount.position.set(0.1, 0.42, -0.42); upper.add(this.gunMount);
    this.gunId = null; this.gun = null;
    this.root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = false; } });
    this.walk = 0; this.dead = false; this.deathT = 0; this.fallDir = 1;
  }

  setGun(id) {
    if (id === this.gunId) return;
    if (this.gun) this.gunMount.remove(this.gun);
    this.gunId = id; this.gun = makeGun(id); this.gunMount.add(this.gun);
    const pistol = id === 'glock' || id === 'usp' || id === 'deagle' || id === 'knife' || id === 'he' || id === 'flash' || id === 'smoke' || id === 'c4';
    this.gunMount.position.set(pistol ? 0.05 : 0.1, pistol ? 0.4 : 0.42, pistol ? -0.5 : -0.42);
    this.armL.rotation.set(pistol ? -0.5 : -0.25, pistol ? -0.15 : -0.5, 0);
    this.armR.rotation.set(pistol ? -0.5 : -0.35, pistol ? 0.15 : 0.25, 0);
  }

  update(a, dt) {
    this.root.position.set(a.x, a.y, a.z);
    this.root.rotation.y = a.yaw;
    if (!a.alive) {
      if (!this.dead) { this.dead = true; this.deathT = 0; this.fallDir = Math.random() < 0.5 ? 1 : -1; }
      this.deathT = Math.min(1, this.deathT + dt * 2.6);
      const e = 1 - (1 - this.deathT) ** 3;
      this.pivot.rotation.set(e * Math.PI / 2 * 0.98, 0, e * 0.25 * this.fallDir);
      this.pivot.position.y = e * 0.1;
      this.legs.forEach((l) => { l.rotation.x *= 0.9; l.userData.knee.rotation.x *= 0.9; });
      return;
    }
    if (this.dead) { this.dead = false; this.pivot.rotation.set(0, 0, 0); this.pivot.position.y = 0; }
    this.setGun(a.weaponId());
    const sp = Math.min(1.2, a.moveSpeed / 6.4);
    this.walk += dt * (4 + sp * 6) * (sp > 0.05 ? 1 : 0);
    const sw = Math.sin(this.walk) * 0.7 * sp, duck = a.duck;
    // crouch: bend knees, drop the body
    this.legs.forEach((l, i) => {
      const s = i ? -1 : 1;
      l.rotation.x = s * sw * (1 - duck * 0.6) - duck * 0.9;
      l.userData.knee.rotation.x = duck * 1.6 + Math.max(0, -s * Math.cos(this.walk)) * 0.6 * sp;
    });
    const drop = duck * 0.42;
    this.legs.forEach((l) => { l.position.y = 0.9 - drop; });
    this.upper.position.y = 0.9 - drop;
    this.upper.rotation.x = a.pitch * 0.45 + duck * 0.1;
    this.neck.rotation.x = a.pitch * 0.4;
    this.upper.rotation.y = Math.sin(this.walk) * 0.06 * sp;
  }
}

// ---------------------------------------------------------------- first-person arms
export function makeViewArms(team, id) {
  const L = LOOK[team];
  const g = new THREE.Group();
  const sleeve = (len) => {
    const s = new THREE.Group();
    s.add(box(0.06, 0.06, len, L.vest, 0, 0, len / 2 + 0.04));
    s.add(box(0.055, 0.06, 0.08, 0x2a2a2a, 0, 0, 0)); // glove
    return s;
  };
  const pistol = id === 'glock' || id === 'usp' || id === 'deagle';
  // arms angle steeply down so they leave the bottom of the screen instead of crossing the near plane
  const r = sleeve(0.32); r.position.set(0.01, -0.06, 0.04); r.rotation.set(1.05, 0.15, 0); g.add(r);
  if (id === 'knife' || id === 'he' || id === 'flash' || id === 'smoke') return g;
  const l = sleeve(0.34);
  if (pistol) { l.position.set(-0.035, -0.07, 0.01); l.rotation.set(1.0, -0.35, 0); }
  else if (id === 'c4') { l.position.set(-0.08, -0.03, 0); l.rotation.set(1.0, -0.4, 0); }
  else { l.position.set(-0.02, -0.03, id === 'awp' ? -0.3 : -0.34); l.rotation.set(0.95, -0.5, 0); }
  g.add(l);
  return g;
}
