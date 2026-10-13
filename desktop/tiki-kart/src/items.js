import * as THREE from 'three';
import { itemBoxTexture, canvas } from './textures.js';

export const ITEM_ICON = { turbo: '⚡', bomb: '💣', missile: '🚀', tnt: '🧨', shield: '🛡️' };
export const ITEM_NAME = { turbo: 'TURBO', bomb: 'BOMB', missile: 'HOMING ROCKET', tnt: 'TNT CRATE', shield: 'BUBBLE SHIELD' };

function pick(pos, total, rand = Math.random) {
  const f = total > 1 ? (pos - 1) / (total - 1) : 0; // 0 = leader, 1 = last
  const table = f < 0.2 ? { shield: 30, tnt: 30, bomb: 30, turbo: 10 }
    : f < 0.7 ? { bomb: 25, missile: 25, turbo: 25, tnt: 15, shield: 10 }
      : { missile: 40, turbo: 40, bomb: 20 };
  let r = rand() * 100;
  for (const [k, w] of Object.entries(table)) { if ((r -= w) <= 0) return k; }
  return 'turbo';
}

function tntTexture() {
  const [c, g] = canvas(128, 128);
  g.fillStyle = '#c0392b'; g.fillRect(0, 0, 128, 128);
  g.strokeStyle = '#7a1d12'; g.lineWidth = 10; g.strokeRect(5, 5, 118, 118);
  g.font = '900 52px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#ffde3b'; g.fillText('TNT', 64, 68);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export class ItemSystem {
  constructor(scene, track, gradient, fx) {
    this.scene = scene; this.track = track; this.fx = fx;
    this.events = [];
    const toon = (c) => new THREE.MeshToonMaterial({ color: c, gradientMap: gradient });
    // item boxes: 4 across at each row
    const boxGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const boxMat = new THREE.MeshBasicMaterial({ map: itemBoxTexture(), color: new THREE.Color(1.15, 1.15, 1.15) });
    this.boxes = [];
    for (const i of track.itemRows) for (const lat of [-5.4, -1.8, 1.8, 5.4]) {
      const p = track.pointAt(i, lat);
      const m = new THREE.Mesh(boxGeo, boxMat); m.position.set(p.x, p.y + 1.3, p.z); m.castShadow = true;
      scene.add(m);
      this.boxes.push({ x: p.x, y: p.y + 1.3, z: p.z, mesh: m, alive: true, t: 0, phase: Math.random() * 6 });
    }
    // fruit: lines of 5 down the middle
    const fruitGeo = new THREE.SphereGeometry(0.42, 12, 10); fruitGeo.scale(1, 1.15, 1);
    this.fruitMesh = new THREE.InstancedMesh(fruitGeo, toon('#ff8a1f'), track.fruitLines.length * 5);
    this.fruits = [];
    track.fruitLines.forEach((i0, li) => {
      const lat = [0, -3, 3][li % 3];
      for (let k = 0; k < 5; k++) { const p = track.pointAt(i0 + k * 3, lat); this.fruits.push({ x: p.x, y: p.y + 1.1, z: p.z, alive: true, t: 0 }); }
    });
    this.fruitMesh.castShadow = true;
    scene.add(this.fruitMesh);
    // projectile & crate models
    this.bombGeo = new THREE.SphereGeometry(0.55, 14, 12); this.bombMat = toon('#20232a');
    this.rocketGeo = new THREE.Group();
    this.tntGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4); this.tntMat = new THREE.MeshToonMaterial({ map: tntTexture(), gradientMap: gradient });
    this.rocketBody = new THREE.CylinderGeometry(0.22, 0.22, 1.4, 10).rotateX(Math.PI / 2);
    this.rocketNose = new THREE.ConeGeometry(0.22, 0.5, 10).rotateX(Math.PI / 2).translate(0, 0, 0.95);
    this.rocketMat = toon('#e8322b'); this.rocketNoseMat = toon('#ffffff');
    this.projectiles = []; this.crates = [];
    this.m = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.s = new THREE.Vector3(); this.v = new THREE.Vector3();
  }

  roll(kart, pos, total) {
    kart.item = null; kart.rolling = 0.9; kart.pending = pick(pos, total);
  }

  use(kart, order) {
    const it = kart.item; if (!it) return;
    kart.item = null;
    const tr = this.track, fx = Math.sin(kart.h), fz = Math.cos(kart.h);
    this.events.push({ type: 'use', item: it, kart });
    if (it === 'turbo') kart.boost(3, 1.7);
    else if (it === 'shield') kart.shieldTime = 9;
    else if (it === 'tnt') {
      const x = kart.x - fx * 3, z = kart.z - fz * 3, q = tr.project(x, z, kart.q.i, {});
      const mesh = new THREE.Mesh(this.tntGeo, this.tntMat); mesh.castShadow = true;
      mesh.position.set(x, q.y + 0.7, z); mesh.rotation.y = kart.h;
      this.scene.add(mesh);
      this.crates.push({ x, y: q.y + 0.7, z, mesh, life: 35, owner: kart, age: 0 });
    } else {
      let mesh;
      if (it === 'bomb') { mesh = new THREE.Mesh(this.bombGeo, this.bombMat); }
      else {
        mesh = new THREE.Group();
        mesh.add(new THREE.Mesh(this.rocketBody, this.rocketMat), new THREE.Mesh(this.rocketNose, this.rocketNoseMat));
      }
      mesh.traverse((o) => { if (o.isMesh) o.castShadow = true; });
      this.scene.add(mesh);
      // homing target = next kart ahead in the race
      const idx = order.indexOf(kart);
      const target = it === 'missile' ? order[idx - 1] ?? null : null;
      this.projectiles.push({
        type: it, owner: kart, target, mesh, age: 0, life: it === 'bomb' ? 3.5 : 6,
        s: kart.q.i + kart.q.f + 2.5 / tr.ds, lat: kart.q.lat, x: kart.x, y: kart.y + 0.7, z: kart.z, homing: false,
        speed: Math.max(kart.speed + 18, it === 'bomb' ? 46 : 54),
      });
    }
  }

  explode(x, y, z, big = false) {
    const f = this.fx;
    for (let k = 0; k < (big ? 40 : 26); k++) {
      const a = Math.random() * 6.28, sp = 4 + Math.random() * 9;
      f.fire.emit(x, y + 0.5, z, Math.cos(a) * sp, Math.random() * 8, Math.sin(a) * sp, 0.45 + Math.random() * 0.3, 1.3, 2, 0.8, 1.4, 0.7 + Math.random() * 0.3, 0.15);
    }
    for (let k = 0; k < 14; k++) f.smoke.emit(x, y + 1, z, (Math.random() - 0.5) * 6, 2 + Math.random() * 3, (Math.random() - 0.5) * 6, 1.4, 2.5, 3, 0.6, 0.35, 0.33, 0.33);
    this.events.push({ type: 'boom', x, y, z });
  }

  update(dt, karts, order, t) {
    const tr = this.track;
    this.events.length = 0;
    // boxes
    for (const b of this.boxes) {
      if (!b.alive) { b.t -= dt; if (b.t <= 0) { b.alive = true; b.mesh.visible = true; } continue; }
      b.mesh.rotation.set(t * 0.8 + b.phase, t * 1.3 + b.phase, 0);
      b.mesh.position.y = b.y + Math.sin(t * 2.5 + b.phase) * 0.18;
      for (const k of karts) {
        if (k.respawnTimer > 0) continue;
        if ((k.x - b.x) ** 2 + (k.z - b.z) ** 2 < 3.6 && Math.abs(k.y + 0.8 - b.y) < 2.2) {
          b.alive = false; b.mesh.visible = false; b.t = 2.5;
          for (let n = 0; n < 12; n++) this.fx.spark.emit(b.x, b.y, b.z, (Math.random() - 0.5) * 8, Math.random() * 6, (Math.random() - 0.5) * 8, 0.5, 0.5, 0, 1, 1.4, 1.2, 0.4);
          if (!k.item && !(k.rolling > 0)) { const pos = order.indexOf(k) + 1; this.roll(k, pos, karts.length); this.events.push({ type: 'box', kart: k }); }
          break;
        }
      }
    }
    // fruit
    this.fruits.forEach((f, i) => {
      if (!f.alive) { f.t -= dt; if (f.t <= 0) f.alive = true; }
      if (f.alive) for (const k of karts) {
        if (k.respawnTimer <= 0 && (k.x - f.x) ** 2 + (k.z - f.z) ** 2 < 3.2 && Math.abs(k.y + 0.8 - f.y) < 2) {
          f.alive = false; f.t = 7; k.fruit = Math.min(10, k.fruit + 1);
          this.events.push({ type: 'fruit', kart: k });
          break;
        }
      }
      const sc = f.alive ? 1 : 0;
      this.q.setFromEuler(new THREE.Euler(0, t * 2 + i, 0.3));
      this.m.compose(this.v.set(f.x, f.y + Math.sin(t * 3 + i) * 0.15, f.z), this.q, this.s.set(sc, sc, sc));
      this.fruitMesh.setMatrixAt(i, this.m);
    });
    this.fruitMesh.instanceMatrix.needsUpdate = true;
    // rolling roulettes
    for (const k of karts) if (k.rolling > 0) { k.rolling -= dt; if (k.rolling <= 0) { k.item = k.pending; k.pending = null; this.events.push({ type: 'got', kart: k }); } }
    // projectiles
    for (let n = this.projectiles.length - 1; n >= 0; n--) {
      const p = this.projectiles[n];
      p.age += dt;
      let done = p.age > p.life;
      if (p.type === 'missile' && p.target && p.target.respawnTimer <= 0 && !p.target.finished) {
        const dx = p.target.x - p.x, dz = p.target.z - p.z, d = Math.hypot(dx, dz);
        if (d < 35) p.homing = true;
        if (p.homing) {
          const step = Math.min(d, p.speed * dt);
          p.x += dx / d * step; p.z += dz / d * step; p.y += (p.target.y + 0.7 - p.y) * Math.min(1, dt * 6);
          p.mesh.rotation.set(0, Math.atan2(dx, dz), 0);
        }
      }
      if (!p.homing) {
        p.s += p.speed * dt / tr.ds;
        const i = ((Math.floor(p.s) % tr.N) + tr.N) % tr.N;
        const pt = tr.pointAt(p.s, Math.max(-7, Math.min(7, p.lat)));
        p.x = pt.x; p.z = pt.z; p.y = pt.y + (p.type === 'bomb' ? 0.55 : 0.9); // projectiles sail over the ravine
        p.mesh.rotation.set(p.type === 'bomb' ? -p.age * 18 : 0, Math.atan2(tr.tx[i], tr.tz[i]), 0);
      }
      p.mesh.position.set(p.x, p.y, p.z);
      // exhaust trail
      if (p.type === 'missile') this.fx.fire.emit(p.x, p.y, p.z, 0, 0.5, 0, 0.25, 0.6, 0.8, 0.7, 1.3, 0.75, 0.2);
      else if (Math.random() < 0.5) this.fx.spark.emit(p.x, p.y + 0.6, p.z, 0, 2, 0, 0.3, 0.35, 0, 1, 2.5, 1.8, 0.6);
      for (const k of karts) {
        if ((k === p.owner && p.age < 0.6) || k.respawnTimer > 0) continue;
        if ((k.x - p.x) ** 2 + (k.z - p.z) ** 2 < 5 && Math.abs(k.y + 0.7 - p.y) < 2.2) {
          k.hit(p.type); this.events.push({ type: 'hit', kart: k, by: p.owner, item: p.type }); done = true; break;
        }
      }
      if (done) {
        if (p.type === 'bomb' && p.age > p.life) for (const k of karts) if (k.respawnTimer <= 0 && (k.x - p.x) ** 2 + (k.z - p.z) ** 2 < 50) { if (k.hit('bomb')) this.events.push({ type: 'hit', kart: k, by: p.owner, item: 'bomb' }); }
        this.explode(p.x, p.y, p.z, p.type === 'bomb');
        this.scene.remove(p.mesh);
        this.projectiles.splice(n, 1);
      }
    }
    // crates
    for (let n = this.crates.length - 1; n >= 0; n--) {
      const c = this.crates[n];
      c.life -= dt; c.age += dt;
      let boom = c.life <= 0;
      for (const k of karts) {
        if ((k === c.owner && c.age < 1) || k.respawnTimer > 0) continue;
        if ((k.x - c.x) ** 2 + (k.z - c.z) ** 2 < 3.6 && Math.abs(k.y + 0.7 - c.y) < 2) { if (k.hit('tnt')) this.events.push({ type: 'hit', kart: k, by: c.owner, item: 'tnt' }); boom = true; break; }
      }
      if (boom) { this.explode(c.x, c.y, c.z, true); this.scene.remove(c.mesh); this.crates.splice(n, 1); }
    }
  }

  clear() {
    for (const p of this.projectiles) this.scene.remove(p.mesh);
    for (const c of this.crates) this.scene.remove(c.mesh);
    this.projectiles = []; this.crates = [];
    for (const b of this.boxes) { b.alive = true; b.mesh.visible = true; }
    for (const f of this.fruits) f.alive = true;
  }
}
