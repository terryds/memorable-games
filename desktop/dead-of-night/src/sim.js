// Dead of Night — game simulation (no DOM): survivors, common infected, special infected, the AI
// Director, pickups, throwables and the docks finale. Runs identically in the browser and in the
// headless sims (test/*.js).
import * as M from './map.js';

export const WEAPONS = {
  pistol: { name: 'Dual Pistols', slot: 'secondary', dmg: 36, rof: 0.15, mag: 30, reserve: Infinity, spread: 0.012, pellets: 1, reload: 1.7, auto: false, pierce: 1, range: 90 },
  uzi: { name: 'Submachine Gun', slot: 'primary', tier: 1, dmg: 22, rof: 0.065, mag: 50, reserve: 480, spread: 0.028, pellets: 1, reload: 2.0, auto: true, pierce: 1, range: 70 },
  pump: { name: 'Pump Shotgun', slot: 'primary', tier: 1, dmg: 24, rof: 0.85, mag: 8, reserve: 56, spread: 0.075, pellets: 9, reload: 0.45, shell: true, auto: false, pierce: 2, range: 28 },
  m16: { name: 'Assault Rifle', slot: 'primary', tier: 2, dmg: 33, rof: 0.088, mag: 50, reserve: 360, spread: 0.018, pellets: 1, reload: 2.2, auto: true, pierce: 2, range: 110 },
  auto: { name: 'Auto Shotgun', slot: 'primary', tier: 2, dmg: 23, rof: 0.25, mag: 10, reserve: 90, spread: 0.08, pellets: 11, reload: 0.4, shell: true, auto: true, pierce: 2, range: 30 },
  rifle: { name: 'Hunting Rifle', slot: 'primary', tier: 2, dmg: 95, rof: 0.25, mag: 15, reserve: 180, spread: 0.003, pellets: 1, reload: 3.0, auto: false, pierce: 4, range: 160 },
};
export const DIFF = {
  easy: { zdmg: 1, sdmg: 0.5, tankHp: 4000, pop: 0.7, bot: 1.15, witchOneShot: false },
  normal: { zdmg: 2, sdmg: 1, tankHp: 6000, pop: 1, bot: 1, witchOneShot: true },
  advanced: { zdmg: 5, sdmg: 1.5, tankHp: 8000, pop: 1.3, bot: 0.92, witchOneShot: true },
};
export const SURVIVORS = [
  { name: 'YOU', color: 0x3d6ea8 },
  { name: 'MARCUS', color: 0x7a4b2a },
  { name: 'ROSA', color: 0x8c2f3a },
  { name: 'DOC', color: 0x4f6b3a },
];
export const FINALE_TIME = 150;
const RUN = 5.4, WALK = 2.6, CROUCH = 2.1, GRAV = 16;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const dist2 = (a, b) => (a.x - b.x) ** 2 + (a.z - b.z) ** 2;
const angWrap = (a) => ((a + Math.PI * 3) % (Math.PI * 2)) - Math.PI;

export class Survivor {
  constructor(i, game) {
    const d = SURVIVORS[i];
    this.id = i; this.name = d.name; this.color = d.color; this.isPlayer = i === 0; this.game = game;
    this.x = M.START.x + (i % 2 ? 2.5 : -2.5); this.z = M.START.z + (i < 2 ? -3 : 3); this.y = 0; this.vy = 0; this.vx = 0; this.vz = 0;
    this.yaw = Math.PI / 2 * -1; this.pitch = 0; this.duck = 0; this.onGround = true; this.moveSpeed = 0;
    this.hp = 100; this.incap = false; this.incapHp = 300; this.incaps = 0; this.dead = false;
    this.primary = null; this.pistol = { id: 'pistol', mag: 30, reserve: Infinity };
    this.cur = 'secondary'; this.throwable = null; this.medkit = false; this.pills = false;
    this.fireCd = 0; this.reloadT = 0; this.shoveCd = 0; this.switchT = 0; this.flash = true;
    this.pinnedBy = null; this.reviveT = 0; this.reviving = null; this.healT = 0; this.bile = 0; this.hurtT = 0;
    this.kb = 0; this.stats = { kills: 0, specials: 0, dmg: 0, incaps: 0 };
    this.lastFire = false; this.lastUse = false; this.spread = 0;
  }
  get alive() { return !this.dead; }
  get up() { return !this.dead && !this.incap; }
  get eye() { return this.y + (this.incap ? 0.6 : 1.62 - this.duck * 0.55); }
  weapon() { return this.cur === 'primary' && this.primary ? this.primary : this.pistol; }
  weaponId() { if (this.cur === 'throw' && this.throwable) return this.throwable; if (this.cur === 'med' && this.medkit) return 'medkit'; if (this.cur === 'pills' && this.pills) return 'pills'; return this.weapon().id; }
  has(slot) { return slot === 'primary' ? !!this.primary : slot === 'secondary' ? true : slot === 'throw' ? !!this.throwable : slot === 'med' ? this.medkit : slot === 'pills' ? this.pills : false; }
}

export class Game {
  constructor({ diff = 'normal', seed = 1 } = {}) {
    this.diff = DIFF[diff]; this.diffName = diff;
    let s = seed >>> 0;
    this.rand = () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    M.srDoor.off = false; M.refreshNav();
    this.t = 0; this.events = []; this.over = null; this.doorOpen = false;
    this.survivors = SURVIVORS.map((_, i) => new Survivor(i, this));
    this.player = this.survivors[0];
    this.zombies = []; this.specials = []; this.throws = []; this.fires = [];
    this.fieldSurv = new Float32Array(M.NW * M.NH); this.fieldBile = new Float32Array(M.NW * M.NH); this.fieldPipe = new Float32Array(M.NW * M.NH);
    this.hasBile = false; this.hasPipe = false; this.fieldT = 0;
    this.items = [];
    this.placeItems();
    this.dir = { t: 0, mobT: 35, hordeT: 110, specialT: 30, intensity: 0, relaxT: 0, tankDone: false, warehouseTank: false, maxProg: Infinity, ambientT: 0 };
    this.finale = { started: false, t: 0, waveT: 0, tank: false, boat: false, boatX: M.EVAC.boatX - 40 };
    this.alarmUsed = false;
    this.spawnCandidates = [];
    for (let n = 0; n < M.NW * M.NH; n++) if (M.navOK[n] && M.cellAt(M.nodeX(n), M.nodeZ(n)) !== 'S') this.spawnCandidates.push(n);
    // the witch sits weeping in the park, just off the path
    this.spawnSpecial('witch', 92, 56, { sitting: true });
    this.populateAmbient(true);
  }

  emit(type, data = {}) { this.events.push({ type, ...data }); }

  placeItems() {
    const it = (type, x, z, extra = {}) => this.items.push({ type, x, z, y: extra.y ?? 1, taken: false, ...extra });
    // safe room: tier-1 guns, medkits
    it('weapon', 10.6, 113, { wid: 'uzi' }); it('weapon', 12, 113, { wid: 'pump' }); it('weapon', 13.4, 113, { wid: 'uzi' });
    for (const x of [9.5, 10.5, 13.5, 14.5]) it('medkit', x, 125, { y: 0.55 });
    it('ammo', 18, 120, { y: 0.4, infinite: true });
    // side street stash
    it('pipe', 62, 86.6, { y: 1.4 }); it('pills', 66, 86, { y: 1.05 }); it('ammo', 58, 90, { y: 0.4, infinite: true });
    it('molotov', 122, 91.3, { y: 1.35 });
    // gas station: tier-2 on the counter
    it('weapon', 174, 40, { wid: 'm16', y: 1.15 }); it('weapon', 176, 40, { wid: 'auto', y: 1.15 }); it('weapon', 178, 40, { wid: 'rifle', y: 1.15 });
    it('ammo', 168, 70, { y: 0.4, infinite: true }); it('pills', 172.6, 40, { y: 1.15 }); it('pipe', 158, 72, { y: 0.4 });
    // warehouse
    it('ammo', 100, 22, { y: 0.4, infinite: true }); it('medkit', 112, 10.8, { y: 1.45 }); it('medkit', 64, 20.8, { y: 1.45 });
    it('pills', 130, 20.8, { y: 1.45 }); it('molotov', 52, 22.8, { y: 1.45 });
    // docks
    it('ammo', 30, 26, { y: 0.4, infinite: true }); it('medkit', 30, 14.8, { y: 1.45 }); it('medkit', 10, 30.8, { y: 1.45 }); it('pipe', 24, 26, { y: 1.15 });
  }

  // ---------------------------------------------------------------- main step
  step(dt, inputs) {
    if (this.over) return;
    this.t += dt;
    for (const s of this.survivors) this.stepSurvivor(s, inputs[s.id] || {}, dt);
    this.fieldT -= dt;
    if (this.fieldT <= 0) { this.fieldT = 0.3; this.updateFields(); }
    this.stepZombies(dt);
    this.stepSpecials(dt);
    this.stepThrows(dt);
    this.stepDirector(dt);
    this.stepFinale(dt);
    this.checkOver();
  }

  checkOver() {
    const p = this.player;
    if (p.dead) { this.over = { win: false, reason: 'You died.' }; this.emit('over', this.over); return; }
    if (this.survivors.every((s) => s.dead || s.incap)) { this.over = { win: false, reason: 'All survivors are down.' }; this.emit('over', this.over); return; }
    if (this.finale.boat && this.finale.boatX >= M.EVAC.boatX - 0.5 && inRescue(p) && p.up) {
      const saved = this.survivors.filter((s) => s.alive && (inRescue(s) || Math.hypot(s.x - p.x, s.z - p.z) < 25));
      this.over = { win: true, saved: saved.length, reason: `${saved.length} of 4 survivors escaped.` };
      this.emit('over', this.over);
    }
  }

  // ---------------------------------------------------------------- survivors
  stepSurvivor(s, inp, dt) {
    if (s.dead) return;
    s.fireCd = Math.max(0, s.fireCd - dt); s.shoveCd = Math.max(0, s.shoveCd - dt); s.switchT = Math.max(0, s.switchT - dt);
    s.bile = Math.max(0, s.bile - dt); s.hurtT = Math.max(0, s.hurtT - dt);
    if (inp.flash) s.flash = !s.flash;
    s.yaw = inp.yaw ?? s.yaw; s.pitch = clamp(inp.pitch ?? s.pitch, -1.45, 1.45);
    if (s.incap) {
      s.incapHp -= dt * (this.diffName === 'easy' ? 0.8 : 1.4);
      if (s.incapHp <= 0) return this.kill(s);
      s.moveSpeed = 0;
      if (!s.pinnedBy) this.stepWeapon(s, inp, dt, true);
      return;
    }
    if (s.pinnedBy) { s.moveSpeed = 0; s.reviving = null; s.healT = 0; return; }
    // knockback (tank punches)
    if (s.kb > 0) {
      s.kb -= dt;
      M.moveBody(s, s.vx * dt, s.vz * dt, 0.4, 1.8); s.vx *= Math.exp(-3 * dt); s.vz *= Math.exp(-3 * dt);
    } else {
      const busy = s.reviving || s.healT > 0;
      const crouch = !!inp.crouch;
      s.duck += ((crouch ? 1 : 0) - s.duck) * Math.min(1, dt * 10);
      let sp = crouch ? CROUCH : inp.walk ? WALK : RUN;
      if (s.hp < 40) sp *= 0.85;
      if (busy) sp = 0;
      const f = clamp(inp.fwd || 0, -1, 1), r = clamp(inp.side || 0, -1, 1), L = Math.hypot(f, r) || 1;
      const sy = Math.sin(s.yaw), cy = Math.cos(s.yaw);
      const wx = (-sy * f + cy * r) / L * sp, wz = (-cy * f - sy * r) / L * sp;
      const acc = s.onGround ? 12 : 3;
      s.vx += (wx - s.vx) * Math.min(1, acc * dt); s.vz += (wz - s.vz) * Math.min(1, acc * dt);
      M.moveBody(s, s.vx * dt, s.vz * dt, 0.4, 1.8);
      s.moveSpeed = Math.hypot(s.vx, s.vz);
      if (inp.jump && s.onGround && !busy) { s.vy = 5.2; s.onGround = false; }
    }
    // vertical
    s.vy -= GRAV * dt; s.y += s.vy * dt;
    const g = M.groundAt(s.x, s.z, 0.35, s.y);
    if (s.y <= g) { s.y = g; s.vy = 0; s.onGround = true; } else s.onGround = s.y - g < 0.05;
    // push out of zombies
    for (const z of this.zombies) if (!z.dead) {
      const dx = s.x - z.x, dz = s.z - z.z, d = Math.hypot(dx, dz);
      if (d < 0.7 && d > 1e-4) { const p = (0.7 - d) * 0.5; s.x += dx / d * p; s.z += dz / d * p; z.x -= dx / d * p; z.z -= dz / d * p; }
    }
    this.stepWeapon(s, inp, dt, false);
    this.stepUse(s, inp, dt);
  }

  stepUse(s, inp, dt) {
    const useEdge = inp.use && !s.lastUse; s.lastUse = !!inp.use;
    // reviving a downed teammate (hold)
    if (s.reviving) {
      const t = s.reviving;
      if (!inp.use || !t.incap || t.dead || Math.hypot(t.x - s.x, t.z - s.z) > 2.2 || s.pinnedBy) { s.reviving = null; s.reviveT = 0; }
      else {
        s.reviveT += dt;
        if (s.reviveT >= 4) {
          t.incap = false; t.hp = 30; t.incapHp = 300; t.reviveT = 0; s.reviving = null; s.reviveT = 0;
          this.emit('revived', { who: t, by: s });
        }
        return;
      }
    }
    // healing with a medkit (hold fire on the medkit slot)
    if (s.cur === 'med' && s.medkit && inp.fire) {
      s.healT += dt;
      if (s.healT >= 5) { s.hp = Math.min(100, s.hp + (100 - s.hp) * 0.8); s.incaps = 0; s.medkit = false; s.healT = 0; s.cur = s.primary ? 'primary' : 'secondary'; this.emit('healed', { who: s }); }
      return;
    } else s.healT = 0;
    if (s.cur === 'pills' && s.pills && inp.fire && !s.lastFire) { s.hp = Math.min(100, s.hp + 50); s.pills = false; s.cur = s.primary ? 'primary' : 'secondary'; this.emit('pills', { who: s }); }
    s.lastFire = !!inp.fire;
    if (!inp.use) return;
    // revive anyone downed nearby
    for (const o of this.survivors) if (o !== s && o.incap && !o.dead && !o.pinnedBy && Math.hypot(o.x - s.x, o.z - s.z) < 2) { s.reviving = o; s.reviveT = 0; return; }
    if (!useEdge) return;
    const ex = s.x, ez = s.z, fy = Math.sin(s.yaw), fz = Math.cos(s.yaw);
    // safe room door
    const dd = Math.hypot(24 - ex, 118 - ez);
    if (dd < 3) { this.toggleDoor(s); return; }
    // radio
    if (!this.finale.started && Math.hypot(26 - ex, 26 - ez) < 2.6) { this.startFinale(s); return; }
    // pickups: nearest in front within 2.4 m
    let best = null, bd = 2.4;
    for (const it of this.items) {
      if (it.taken) continue;
      const dx = it.x - ex, dz = it.z - ez, d = Math.hypot(dx, dz);
      if (d < bd && (-fy * dx - fz * dz) > -0.4 * d) { best = it; bd = d; }
    }
    if (best) this.pickup(s, best);
  }

  pickup(s, it) {
    if (it.type === 'weapon') {
      const w = WEAPONS[it.wid];
      s.primary = { id: it.wid, mag: w.mag, reserve: w.reserve };
      s.cur = 'primary'; s.switchT = 0.5; s.reloadT = 0;
      if (s.isPlayer) this.emit('pickup', { who: s, what: w.name }); // guns stay on the table for the others
      return;
    }
    if (it.type === 'ammo') {
      if (s.primary) { s.primary.reserve = WEAPONS[s.primary.id].reserve; this.emit('pickup', { who: s, what: 'Ammo' }); }
      return;
    }
    if (it.type === 'medkit') { if (s.medkit) return; s.medkit = true; }
    else if (it.type === 'pills') { if (s.pills) return; s.pills = true; }
    else if (it.type === 'pipe' || it.type === 'molotov') { if (s.throwable) return; s.throwable = it.type; }
    it.taken = true;
    this.emit('pickup', { who: s, what: { medkit: 'First Aid Kit', pills: 'Pain Pills', pipe: 'Pipe Bomb', molotov: 'Molotov' }[it.type] });
  }

  toggleDoor(s) {
    if (this.doorOpen) return;
    this.doorOpen = true; M.srDoor.off = true; M.refreshNav();
    this.emit('door', { by: s });
  }

  // ---------------------------------------------------------------- weapons
  stepWeapon(s, inp, dt, incapped) {
    if (inp.slot && !incapped && s.has(inp.slot) && inp.slot !== s.cur) { s.cur = inp.slot; s.switchT = 0.45; s.reloadT = 0; s.healT = 0; }
    if (incapped) s.cur = 'secondary';
    const w = s.weapon(), W = WEAPONS[w.id];
    // shove (melee push) — the survivor's best friend
    if (inp.alt && s.shoveCd <= 0 && !incapped) { s.shoveCd = 0.75; this.shove(s); }
    // reloading
    if (s.reloadT > 0) {
      s.reloadT -= dt;
      if (W.shell) {
        if (s.reloadT <= 0) {
          if (w.mag < W.mag && w.reserve > 0) { w.mag++; w.reserve--; this.emit('shell', { who: s }); s.reloadT = W.mag > w.mag && w.reserve > 0 ? W.reload : 0; }
        }
        if (inp.fire && w.mag > 0 && !inp.reloadHold) s.reloadT = 0;  // pump: fire interrupts the reload
      } else if (s.reloadT <= 0) {
        const need = W.mag - w.mag, take = Math.min(need, w.reserve);
        w.mag += take; if (w.reserve !== Infinity) w.reserve -= take;
      }
      if (s.reloadT > 0) return;
    }
    if (s.cur === 'throw') {
      if (inp.fire && s.throwable && s.switchT <= 0 && !s.lastThrow) this.throwItem(s);
      s.lastThrow = !!inp.fire;
      return;
    }
    if (s.cur === 'med' || s.cur === 'pills') return;
    if ((inp.reload && w.mag < W.mag && w.reserve > 0) || (w.mag === 0 && w.reserve > 0)) {
      s.reloadT = W.shell ? W.reload + 0.2 : W.reload; this.emit('reload', { who: s, id: w.id }); return;
    }
    const want = W.auto ? inp.fire : inp.fire && !s.lastTrigger;
    s.lastTrigger = !!inp.fire;
    s.spread = Math.max(0, s.spread - dt * 0.12);
    if (want && s.fireCd <= 0 && s.switchT <= 0 && w.mag > 0) {
      s.fireCd = W.rof; w.mag--;
      const moving = Math.min(1, s.moveSpeed / RUN);
      const spread = W.spread * (1 + moving * 1.2 - s.duck * 0.35) + s.spread;
      s.spread = Math.min(0.05, s.spread + (W.pellets > 1 ? 0.0 : 0.006));
      const ox = s.x, oy = s.eye, oz = s.z;
      const cp = Math.cos(s.pitch);
      const bx = -Math.sin(s.yaw) * cp, by = Math.sin(s.pitch), bz = -Math.cos(s.yaw) * cp;
      let hitAny = false;
      for (let k = 0; k < W.pellets; k++) {
        const a = this.rand() * Math.PI * 2, r = Math.sqrt(this.rand()) * spread;
        // perpendicular basis
        const ux = Math.cos(s.yaw), uz = -Math.sin(s.yaw);
        const vx = -Math.sin(s.yaw) * -Math.sin(s.pitch), vy = Math.cos(s.pitch), vz = -Math.cos(s.yaw) * -Math.sin(s.pitch);
        let dx = bx + (ux * Math.cos(a) + vx * Math.sin(a)) * r, dy = by + (vy * Math.sin(a)) * r, dz = bz + (uz * Math.cos(a) + vz * Math.sin(a)) * r;
        const L = Math.hypot(dx, dy, dz); dx /= L; dy /= L; dz /= L;
        hitAny = this.fireBullet(s, ox, oy, oz, dx, dy, dz, W, k === 0) || hitAny;
      }
      this.emit('shot', { who: s, id: w.id });
      this.noise(s.x, s.z, 28);
      if (w.mag === 0 && w.reserve > 0) { s.reloadT = W.shell ? W.reload + 0.2 : W.reload; this.emit('reload', { who: s, id: w.id }); }
    }
  }

  fireBullet(s, ox, oy, oz, dx, dy, dz, W, tracer) {
    const wall = M.rayWorld(ox, oy, oz, dx, dy, dz, W.range);
    let tEnd = wall ? wall.t : W.range;
    const hits = [];
    const test = (e, r, y0, y1, hy, hr) => {
      // vertical cylinder body + head sphere
      const fx = ox - e.x, fz = oz - e.z;
      const a = dx * dx + dz * dz, b = 2 * (fx * dx + fz * dz), c = fx * fx + fz * fz - r * r, disc = b * b - 4 * a * c;
      let tb = Infinity;
      if (disc >= 0 && a > 1e-9) { const t = (-b - Math.sqrt(disc)) / (2 * a); const y = oy + dy * t; if (t > 0 && y > e.y + y0 && y < e.y + y1) tb = t; }
      let th = Infinity;
      if (hr) {
        const hx = ox - e.x, hyy = oy - (e.y + hy), hz = oz - e.z;
        const bb = hx * dx + hyy * dy + hz * dz, cc = hx * hx + hyy * hyy + hz * hz - hr * hr, dd = bb * bb - cc;
        if (dd >= 0) { const t = -bb - Math.sqrt(dd); if (t > 0) th = t; }
      }
      const t = Math.min(tb, th);
      if (t < tEnd) hits.push({ e, t, head: th <= tb });
    };
    for (const z of this.zombies) if (!z.dead && Math.abs(z.x - ox) < W.range && Math.abs(z.z - oz) < W.range) test(z, 0.32, 0.05, 1.45, 1.62, 0.17);
    for (const sp of this.specials) if (!sp.dead) {
      if (sp.type === 'tank') test(sp, 0.85, 0, 2.0, 2.15, 0.35);
      else if (sp.type === 'boomer') test(sp, 0.6, 0, 1.5, 1.7, 0.22);
      else if (sp.type === 'witch') test(sp, 0.35, 0, sp.sitting ? 0.95 : 1.4, sp.sitting ? 1.1 : 1.58, 0.17);
      else test(sp, 0.38, 0, sp.crouch ? 0.9 : 1.4, sp.crouch ? 1.0 : 1.6, 0.18);
    }
    hits.sort((a, b) => a.t - b.t);
    let pierce = W.pierce, endT = tEnd, hitSomething = false;
    for (const h of hits) {
      const dmg = W.dmg;
      this.damageInfected(h.e, dmg, h.head, s, ox + dx * h.t, oy + dy * h.t, oz + dz * h.t, dx, dz, W.pellets > 1);
      hitSomething = true;
      if (h.e.type === 'tank' || h.e.type === 'witch' || --pierce <= 0) { endT = h.t; break; }
    }
    const ex = ox + dx * endT, ey = oy + dy * endT, ez = oz + dz * endT;
    if (tracer) this.emit('tracer', { x0: ox, y0: oy - 0.15, z0: oz, x1: ex, y1: ey, z1: ez, who: s });
    if (wall && endT === tEnd && wall.box?.alarm) this.triggerAlarm();
    if (wall && endT === tEnd) this.emit('impact', { x: ex, y: ey, z: ez, nx: wall.nx, ny: wall.ny, nz: wall.nz, kind: wall.kind });
    return hitSomething;
  }

  damageInfected(e, dmg, head, by, x, y, z, dx, dz, pellet) {
    if (e.dead) return;
    this.emit('blood', { x, y, z, dx, dz, head, special: !!e.type });
    if (!e.type) {
      e.hp -= head ? dmg * 4 : dmg;
      if (pellet || dmg > 60) { e.vx += dx * 3; e.vz += dz * 3; e.stagger = Math.max(e.stagger, 0.25); }
      if (e.state === 'idle' || e.state === 'wander') this.aggro(e, by);
      if (e.hp <= 0) this.killZombie(e, by, dx, dz, head);
      return;
    }
    // specials
    if (e.type === 'witch') {
      if (e.sitting || e.state !== 'rage') this.witchRage(e, by);
      e.hp -= head ? dmg * 2 : dmg;
    } else if (e.type === 'tank') e.hp -= dmg * (head ? 1.2 : 1);
    else e.hp -= head ? dmg * 2 : dmg;
    if (e.type === 'hunter' && e.pin && dmg >= 30) e.stagger = 0.2;
    if (e.hp <= 0) this.killSpecial(e, by);
  }

  killZombie(z, by, dx = 0, dz = 0, head = false) {
    z.dead = true; z.deadT = 0; z.fallDir = Math.atan2(dx, dz);
    if (by) by.stats.kills++;
    this.emit('zdeath', { z, head });
  }

  shove(s) {
    this.emit('shove', { who: s });
    const fx = -Math.sin(s.yaw), fz = -Math.cos(s.yaw);
    for (const z of this.zombies) {
      if (z.dead) continue;
      const dx = z.x - s.x, dz = z.z - s.z, d = Math.hypot(dx, dz);
      if (d < 2.0 && (dx * fx + dz * fz) / (d || 1) > 0.35) {
        z.stagger = 0.9; z.vx = dx / (d || 1) * 7; z.vz = dz / (d || 1) * 7; z.attackCd = 1;
        if (z.state === 'idle' || z.state === 'wander') this.aggro(z, s);
        this.emit('shoved', { z });
      }
    }
    for (const sp of this.specials) {
      if (sp.dead || sp.type === 'tank' || sp.type === 'witch') continue;
      const dx = sp.x - s.x, dz = sp.z - s.z, d = Math.hypot(dx, dz);
      if (d < 2.2 && (dx * fx + dz * fz) / (d || 1) > 0.2) {
        if (sp.pin) this.releasePin(sp);
        sp.stagger = 1.0; sp.vx = dx / (d || 1) * 6; sp.vz = dz / (d || 1) * 6; sp.vomitCd = Math.max(sp.vomitCd || 0, 1);
        this.emit('shoved', { z: sp });
      }
    }
    // shoving a pinned teammate's hunter from beside them
    for (const o of this.survivors) if (o !== s && o.pinnedBy && Math.hypot(o.x - s.x, o.z - s.z) < 2.2) this.releasePin(o.pinnedBy);
  }

  throwItem(s) {
    const type = s.throwable; s.throwable = null; s.cur = s.primary ? 'primary' : 'secondary'; s.switchT = 0.4;
    const cp = Math.cos(s.pitch), sp = 15;
    this.throws.push({ type, x: s.x, y: s.eye - 0.1, z: s.z, vx: -Math.sin(s.yaw) * cp * sp, vy: Math.sin(s.pitch) * sp + 3.5, vz: -Math.cos(s.yaw) * cp * sp, t: 0, landed: false, by: s });
    this.emit('throw', { who: s, type });
  }

  stepThrows(dt) {
    for (let i = this.throws.length - 1; i >= 0; i--) {
      const p = this.throws[i];
      p.t += dt;
      if (!p.landed) {
        p.vy -= GRAV * dt;
        const nx = p.x + p.vx * dt, ny = p.y + p.vy * dt, nz = p.z + p.vz * dt;
        const dx = nx - p.x, dy = ny - p.y, dz = nz - p.z, L = Math.hypot(dx, dy, dz);
        const h = L > 1e-6 ? M.rayWorld(p.x, p.y, p.z, dx / L, dy / L, dz / L, L) : null;
        if (h) {
          p.x += dx / L * (h.t - 0.05); p.y += dy / L * (h.t - 0.05); p.z += dz / L * (h.t - 0.05);
          if (p.type === 'molotov') { this.igniteAt(p); this.throws.splice(i, 1); continue; }
          if (h.ny > 0.5) { p.vy = -p.vy * 0.3; p.vx *= 0.5; p.vz *= 0.5; if (Math.abs(p.vy) < 1) { p.landed = true; p.y = Math.max(p.y, 0.1); } }
          else { if (h.nx) p.vx = -p.vx * 0.4; if (h.nz) p.vz = -p.vz * 0.4; if (h.ny < -0.5) p.vy = -Math.abs(p.vy) * 0.3; }
          this.emit('bounce', { x: p.x, y: p.y, z: p.z, type: p.type });
        } else { p.x = nx; p.y = ny; p.z = nz; }
        if (p.y < 0.1 && p.type === 'molotov') { p.y = 0.1; this.igniteAt(p); this.throws.splice(i, 1); continue; }
        if (p.y < 0.08) { p.y = 0.08; p.landed = true; }
      }
      if (p.type === 'pipe') {
        if (Math.floor(p.t * (1.5 + p.t)) !== Math.floor((p.t - dt) * (1.5 + p.t - dt))) this.emit('beep', { x: p.x, y: p.y, z: p.z });
        if (p.t > 6) { this.explode(p.x, p.y, p.z, p.by); this.throws.splice(i, 1); }
      }
    }
    for (let i = this.fires.length - 1; i >= 0; i--) {
      const f = this.fires[i]; f.t += dt;
      if (f.t > 15) { this.fires.splice(i, 1); continue; }
      for (const z of this.zombies) if (!z.dead && (z.x - f.x) ** 2 + (z.z - f.z) ** 2 < f.r * f.r) { z.hp -= 40 * dt; z.burning = 3; if (z.hp <= 0) this.killZombie(z, f.by); }
      for (const sp of this.specials) if (!sp.dead && (sp.x - f.x) ** 2 + (sp.z - f.z) ** 2 < f.r * f.r) { sp.burning = 3; if (sp.type === 'witch' && sp.sitting) this.witchRage(sp, f.by); }
      for (const s of this.survivors) if (s.alive && (s.x - f.x) ** 2 + (s.z - f.z) ** 2 < f.r * f.r && s.y < 0.6) this.hurt(s, 8 * dt, null, true);
    }
    for (const z of this.zombies) if (z.burning > 0 && !z.dead) { z.burning -= dt; z.hp -= 12 * dt; if (z.hp <= 0) this.killZombie(z, null); }
    for (const sp of this.specials) if (sp.burning > 0 && !sp.dead) { sp.burning -= dt; sp.hp -= (sp.type === 'tank' ? 60 : 25) * dt; if (sp.hp <= 0) this.killSpecial(sp, null); }
  }
  igniteAt(p) { this.fires.push({ x: p.x, z: p.z, r: 4, t: 0, by: p.by }); this.emit('ignite', { x: p.x, z: p.z }); }

  explode(x, y, z, by) {
    this.emit('explode', { x, y, z });
    for (const zb of this.zombies) if (!zb.dead) {
      const d = Math.hypot(zb.x - x, zb.z - z);
      if (d < 7.5) this.killZombie(zb, by, (zb.x - x) / (d || 1), (zb.z - z) / (d || 1));
    }
    for (const sp of this.specials) if (!sp.dead) { const d = Math.hypot(sp.x - x, sp.z - z); if (d < 7.5) { if (sp.type === 'witch' && sp.sitting) this.witchRage(sp, by); sp.hp -= sp.type === 'tank' ? 400 : 300; if (sp.hp <= 0) this.killSpecial(sp, by); } }
    for (const s of this.survivors) if (s.alive) { const d = Math.hypot(s.x - x, s.z - z); if (d < 5) this.hurt(s, 10 * (1 - d / 5), null, true); }
  }

  noise(x, z, r) {
    for (const zb of this.zombies) if (!zb.dead && (zb.state === 'idle' || zb.state === 'wander')) {
      const d2 = (zb.x - x) ** 2 + (zb.z - z) ** 2;
      if (d2 < r * r && this.rand() < 0.6) this.aggro(zb, null);
    }
  }

  // ---------------------------------------------------------------- damage to survivors
  hurt(s, amt, src, env = false) {
    if (s.dead) return;
    if (!env) s.hurtT = 0.35;
    s.stats.dmg += amt;
    if (s.incap) { s.incapHp -= amt * 1.5; if (s.incapHp <= 0) this.kill(s); return; }
    s.hp -= amt;
    if (src && !env) this.emit('hurt', { who: s, src, amt });
    if (s.hp <= 0) {
      if (s.incaps >= 2) return this.kill(s);
      s.hp = 0; s.incap = true; s.incapHp = 300; s.incaps++; s.stats.incaps++; s.reviving = null; s.healT = 0; s.cur = 'secondary';
      if (s.pinnedBy && s.pinnedBy.type !== 'hunter') s.pinnedBy = null;
      this.emit('incap', { who: s });
    }
  }
  kill(s) {
    if (s.dead) return;
    s.dead = true; s.incap = false;
    if (s.pinnedBy) { const h = s.pinnedBy; this.releasePin(h); }
    this.emit('death', { who: s });
  }

  // ---------------------------------------------------------------- flow fields
  updateFields() {
    const seeds = [], bile = [];
    for (const s of this.survivors) if (s.alive) { const n = M.nodeOf(s.x, s.z); seeds.push(n); if (s.bile > 0) bile.push(n); }
    M.distanceField(seeds, this.fieldSurv);
    this.hasBile = bile.length > 0; if (this.hasBile) M.distanceField(bile, this.fieldBile);
    const pipes = this.throws.filter((p) => p.type === 'pipe');
    this.hasPipe = pipes.length > 0; if (this.hasPipe) M.distanceField(pipes.map((p) => M.nodeOf(p.x, p.z)), this.fieldPipe);
    // where the group is along the route (lower = closer to the evac)
    let prog = Infinity;
    for (const s of this.survivors) if (s.alive) prog = Math.min(prog, M.evacField[M.nodeOf(s.x, s.z)]);
    if (isFinite(prog)) { this.progress = prog; this.dir.maxProg = Math.min(this.dir.maxProg, prog); }
  }

  // ---------------------------------------------------------------- common infected
  spawnZombie(x, z, state = 'chase', target = null) {
    if (this.zombies.filter((q) => !q.dead).length > 70) return null;
    const zb = {
      x, z, y: 0, vx: 0, vz: 0, yaw: this.rand() * 6.28, hp: 50, state, target, attackCd: 0.5 + this.rand(), stagger: 0, dead: false, deadT: 0,
      look: Math.floor(this.rand() * 8), phase: this.rand() * 10, speed: 5.7 + this.rand() * 1.0, groanT: 2 + this.rand() * 6, wanderT: 0, burning: 0, fallDir: 0,
      lunge: 0,
    };
    this.zombies.push(zb);
    return zb;
  }
  aggro(z, by) { z.state = 'chase'; z.target = by && by.alive ? by : null; if (this.rand() < 0.3) this.emit('zscream', { z }); }

  stepZombies(dt) {
    const surv = this.survivors.filter((s) => s.alive);
    // spatial hash for separation
    const hash = new Map(), key = (x, z) => (Math.floor(x / 2) * 7919) ^ Math.floor(z / 2);
    for (const z of this.zombies) if (!z.dead) { const k = key(z.x, z.z); let a = hash.get(k); if (!a) hash.set(k, a = []); a.push(z); }
    for (let i = this.zombies.length - 1; i >= 0; i--) {
      const z = this.zombies[i];
      if (z.dead) { z.deadT += dt; if (z.deadT > 12) this.zombies.splice(i, 1); continue; }
      z.groanT -= dt; if (z.groanT <= 0) { z.groanT = 3 + this.rand() * 7; this.emit('groan', { z }); }
      if (z.stagger > 0) {
        z.stagger -= dt;
        M.moveBody(z, z.vx * dt, z.vz * dt, 0.3, 1.6); z.vx *= Math.exp(-6 * dt); z.vz *= Math.exp(-6 * dt);
        continue;
      }
      // pick a target: biled survivor > pipe bomb > nearest survivor
      let tx = null, tz = null, field = this.fieldSurv, tgt = null;
      if (z.state === 'idle' || z.state === 'wander') {
        // see/hear survivors nearby
        for (const s of surv) {
          const d2 = dist2(z, s);
          const flash = s.flash ? 1.4 : 1;
          if (d2 < (8 * flash) ** 2 || (d2 < (16 * flash) ** 2 && this.rand() < dt * 1.5 && M.lineClear(z.x, 1.6, z.z, s.x, s.eye, s.z))) { this.aggro(z, s); break; }
        }
        if (z.state === 'idle') { z.wanderT -= dt; if (z.wanderT <= 0) { z.wanderT = 3 + this.rand() * 6; z.state = this.rand() < 0.4 ? 'wander' : 'idle'; z.yaw = this.rand() * 6.28; } }
        if (z.state === 'wander') {
          z.wanderT -= dt; if (z.wanderT <= 0) { z.state = 'idle'; z.wanderT = 2 + this.rand() * 5; }
          const sp = 0.9, wx = -Math.sin(z.yaw) * sp, wz = -Math.cos(z.yaw) * sp;
          const r = M.moveBody(z, wx * dt, wz * dt, 0.3, 1.6);
          if (r.hitX || r.hitZ) z.yaw += Math.PI * (0.5 + this.rand());
          z.moving = sp;
        } else z.moving = 0;
        continue;
      }
      if (this.hasBile) field = this.fieldBile;
      else if (this.hasPipe) { const n = M.nodeOf(z.x, z.z); if (this.fieldPipe[n] < 45) field = this.fieldPipe; }
      // nearest survivor (or biled one) for the final approach
      let bd = Infinity;
      for (const s of surv) {
        if (this.hasBile && s.bile <= 0) continue;
        const d2 = dist2(z, s); if (d2 < bd) { bd = d2; tgt = s; }
      }
      if (field === this.fieldPipe) { const p = this.throws.find((q) => q.type === 'pipe'); if (p) { tx = p.x; tz = p.z; tgt = null; bd = (z.x - p.x) ** 2 + (z.z - p.z) ** 2; } }
      else if (tgt) { tx = tgt.x; tz = tgt.z; }
      if (tx === null) { z.state = 'wander'; continue; }
      const d = Math.sqrt(bd);
      let mx, mz;
      if (d < 7 && M.lineClear(z.x, 1.2, z.z, tx, 1.2, tz)) { mx = tx - z.x; mz = tz - z.z; }
      else {
        const n = M.nodeOf(z.x, z.z), nn = M.downhill(field, n);
        if (nn === n) { mx = tx - z.x; mz = tz - z.z; } else { mx = M.nodeX(nn) - z.x; mz = M.nodeZ(nn) - z.z; }
      }
      let ml = Math.hypot(mx, mz) || 1;
      if (d > 4) { const w = Math.sin(z.phase * 1.7 + this.t * 0.6) * 0.55; const ox = -mz / ml * w, oz = mx / ml * w; mx = mx / ml + ox; mz = mz / ml + oz; ml = Math.hypot(mx, mz) || 1; } // fan out instead of single file
      let sp = z.speed * (z.burning > 0 ? 1.15 : 1);
      // attack range
      if (tgt && d < 1.25 && Math.abs(tgt.y - z.y) < 1.4) {
        sp = 0.6;
        z.attackCd -= dt;
        if (z.attackCd <= 0) {
          z.attackCd = 1.0 + this.rand() * 0.3; z.lunge = 0.35;
          const dmg = tgt.incap ? this.diff.zdmg * 2.5 : this.diff.zdmg;
          this.hurt(tgt, dmg, z);
          this.emit('zhit', { z, who: tgt });
        }
      }
      z.lunge = Math.max(0, z.lunge - dt);
      let wx = mx / ml * sp, wz = mz / ml * sp;
      // separation
      const k0x = Math.floor(z.x / 2), k0z = Math.floor(z.z / 2);
      for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) {
        const arr = hash.get(((k0x + a) * 7919) ^ (k0z + b)); if (!arr) continue;
        for (const o of arr) {
          if (o === z) continue;
          const dx = z.x - o.x, dz = z.z - o.z, dd = dx * dx + dz * dz;
          if (dd < 0.5 && dd > 1e-5) { const q = Math.sqrt(dd); wx += dx / q * 1.8; wz += dz / q * 1.8; }
        }
      }
      z.vx += (wx - z.vx) * Math.min(1, 8 * dt); z.vz += (wz - z.vz) * Math.min(1, 8 * dt);
      M.moveBody(z, z.vx * dt, z.vz * dt, 0.3, 1.6);
      z.yaw = Math.atan2(-mx, -mz);
      z.moving = Math.hypot(z.vx, z.vz);
      // lost interest when far from everyone and out of sight
      if (bd > 90 * 90) { z.state = 'wander'; z.wanderT = 4; }
    }
  }

  // ---------------------------------------------------------------- special infected
  spawnSpecial(type, x, z, extra = {}) {
    const hp = { hunter: 250, boomer: 50, tank: this.diff.tankHp, witch: 1000 }[type];
    const sp = { type, x, z, y: 0, vx: 0, vz: 0, vy: 0, yaw: this.rand() * 6.28, hp, maxHp: hp, dead: false, deadT: 0, state: 'stalk', t: 0, stagger: 0, target: null, attackCd: 0, crouch: false, pin: null, burning: 0, ...extra };
    if (type === 'witch') { sp.state = 'sit'; sp.startle = 0; sp.sitting = true; sp.yaw = 0.6; }
    this.specials.push(sp);
    this.emit('special', { sp });
    return sp;
  }
  killSpecial(sp, by) {
    if (sp.dead) return;
    sp.dead = true; sp.deadT = 0;
    if (sp.pin) this.releasePin(sp);
    if (by) by.stats.specials++;
    if (sp.type === 'boomer') {
      this.emit('boomerpop', { x: sp.x, z: sp.z });
      for (const s of this.survivors) if (s.alive && Math.hypot(s.x - sp.x, s.z - sp.z) < 4) this.bile(s);
    }
    this.emit('sdeath', { sp });
  }
  releasePin(sp) { if (sp.pin) { sp.pin.pinnedBy = null; sp.pin = null; sp.state = 'stalk'; sp.stagger = 1; sp.t = 0; } }
  bile(s) {
    const fresh = s.bile <= 0;
    s.bile = 15;
    this.emit('biled', { who: s });
    if (fresh) this.spawnMob(12 + Math.floor(this.rand() * 6), s);
  }

  witchRage(w, by) {
    if (w.state === 'rage') return;
    w.state = 'rage'; w.sitting = false; w.target = by && by.alive ? by : this.nearestSurvivor(w); w.t = 0;
    this.emit('witchrage', { w });
  }
  nearestSurvivor(e, up = false) {
    let b = null, bd = Infinity;
    for (const s of this.survivors) if (s.alive && (!up || s.up)) { const d = dist2(e, s); if (d < bd) { bd = d; b = s; } }
    return b;
  }

  stepSpecials(dt) {
    for (let i = this.specials.length - 1; i >= 0; i--) {
      const sp = this.specials[i];
      if (sp.dead) { sp.deadT += dt; if (sp.deadT > 15) this.specials.splice(i, 1); continue; }
      sp.t += dt;
      if (sp.stagger > 0) { sp.stagger -= dt; M.moveBody(sp, sp.vx * dt, sp.vz * dt, 0.4, 1.6); sp.vx *= Math.exp(-5 * dt); sp.vz *= Math.exp(-5 * dt); continue; }
      if (sp.type === 'witch') this.stepWitch(sp, dt);
      else if (sp.type === 'hunter') this.stepHunter(sp, dt);
      else if (sp.type === 'boomer') this.stepBoomer(sp, dt);
      else if (sp.type === 'tank') this.stepTank(sp, dt);
    }
  }
  chaseStep(sp, tgt, speed, dt, r = 0.4) {
    let mx = tgt.x - sp.x, mz = tgt.z - sp.z;
    const d = Math.hypot(mx, mz);
    if (!(d < 8 && M.lineClear(sp.x, 1.2, sp.z, tgt.x, 1.2, tgt.z))) {
      const n = M.nodeOf(sp.x, sp.z), nn = M.downhill(this.fieldSurv, n);
      if (nn !== n) { mx = M.nodeX(nn) - sp.x; mz = M.nodeZ(nn) - sp.z; }
    }
    const L = Math.hypot(mx, mz) || 1;
    sp.vx += (mx / L * speed - sp.vx) * Math.min(1, 8 * dt); sp.vz += (mz / L * speed - sp.vz) * Math.min(1, 8 * dt);
    M.moveBody(sp, sp.vx * dt, sp.vz * dt, r, 1.7);
    sp.yaw = Math.atan2(-mx, -mz); sp.moving = Math.hypot(sp.vx, sp.vz);
    return d;
  }
  stepWitch(w, dt) {
    if (w.state === 'sit') {
      w.moving = 0;
      for (const s of this.survivors) {
        if (!s.alive) continue;
        const d = Math.hypot(s.x - w.x, s.z - w.z);
        let rate = d < 3 ? 0.9 : d < 7 ? 0.22 : d < 11 ? 0.06 : 0;
        // a flashlight shining at her angers her far faster
        if (s.flash && d < 14) {
          const fx = -Math.sin(s.yaw), fz = -Math.cos(s.yaw), dot = ((w.x - s.x) * fx + (w.z - s.z) * fz) / (d || 1);
          if (dot > 0.9) rate += d < 7 ? 0.35 : 0.12;
        }
        if (s.moveSpeed > 4 && d < 9) rate *= 1.6;
        w.startle += rate * dt;
        if (w.startle >= 1) { this.witchRage(w, s); return; }
      }
      w.startle = Math.max(0, w.startle - dt * 0.03);
      return;
    }
    // rage: sprint to the target and tear them down
    const tgt = w.target && w.target.alive ? w.target : (w.target = this.nearestSurvivor(w));
    if (!tgt) return;
    if (w.done) { w.moving = 0; return; }
    const d = this.chaseStep(w, tgt, 8.2, dt, 0.35);
    w.attackCd -= dt;
    if (d < 1.3 && w.attackCd <= 0) {
      w.attackCd = 0.9;
      if (!tgt.incap && this.diff.witchOneShot) { this.hurt(tgt, 999, w); }
      else this.hurt(tgt, tgt.incap ? 20 : 45, w);
      this.emit('witchhit', { w, who: tgt });
      if (tgt.dead || tgt.incap) { w.slashes = (w.slashes || 0) + 1; if (w.slashes > 4) w.done = true; }
    }
  }
  stepHunter(h, dt) {
    if (h.pin) {
      const s = h.pin;
      h.x = s.x + Math.sin(h.yaw) * 0.6; h.z = s.z + Math.cos(h.yaw) * 0.6; h.crouch = true; h.moving = 0;
      h.attackCd -= dt;
      if (h.attackCd <= 0) { h.attackCd = 0.25; this.hurt(s, 2.5 * this.diff.sdmg * (s.incap ? 1.5 : 1), h); this.emit('hunterclaw', { h }); }
      return;
    }
    if (h.state === 'air') {
      h.vy -= GRAV * dt; h.y += h.vy * dt;
      const r = M.moveBody(h, h.vx * dt, h.vz * dt, 0.4, 1.2);
      for (const s of this.survivors) {
        if (!s.up || s.pinnedBy) continue;
        if (Math.hypot(s.x - h.x, s.z - h.z) < 1.3 && Math.abs(s.y + 0.8 - h.y) < 1.6) {
          h.pin = s; s.pinnedBy = h; h.state = 'pin'; h.y = s.y; h.attackCd = 0.2; h.yaw = Math.atan2(h.x - s.x, h.z - s.z);
          s.reviving = null; s.healT = 0;
          this.emit('pinned', { who: s, h });
          return;
        }
      }
      if (h.y <= 0 || r.hitX || r.hitZ) { h.y = Math.max(0, M.groundAt(h.x, h.z, 0.3, h.y + 0.1)); h.state = 'stalk'; h.t = 0; h.vx *= 0.2; h.vz *= 0.2; }
      return;
    }
    const tgt = this.nearestSurvivor(h, true);
    if (!tgt) return;
    const d = Math.hypot(tgt.x - h.x, tgt.z - h.z);
    const los = M.lineClear(h.x, 1.0, h.z, tgt.x, tgt.eye, tgt.z);
    if (h.state === 'crouch') {
      h.crouch = true; h.moving = 0; h.yaw = Math.atan2(h.x - tgt.x, h.z - tgt.z);
      if (h.t > 0.55) {
        if (los && d < 22) {
          const T = Math.max(0.35, d / 15);
          h.vx = (tgt.x - h.x) / T; h.vz = (tgt.z - h.z) / T; h.vy = 4 + T * 4; h.state = 'air'; h.crouch = false;
          this.emit('pounce', { h });
        } else { h.state = 'stalk'; h.t = 0; }
      }
      return;
    }
    h.crouch = d < 25;
    if (los && d < 18 && d > 3 && h.t > 2) { h.state = 'crouch'; h.t = 0; this.emit('hunterwarn', { h }); return; }
    if (d < 2) { h.attackCd -= dt; if (h.attackCd <= 0) { h.attackCd = 0.6; this.hurt(tgt, 5 * this.diff.sdmg, h); } }
    this.chaseStep(h, tgt, h.crouch ? 3.2 : 6, dt);
    h.growlT = (h.growlT || 0) - dt; if (h.growlT <= 0) { h.growlT = 3 + this.rand() * 3; this.emit('huntergrowl', { h }); }
  }
  stepBoomer(b, dt) {
    const tgt = this.nearestSurvivor(b, true);
    if (!tgt) return;
    b.vomitCd = Math.max(0, (b.vomitCd || 0) - dt);
    const d = Math.hypot(tgt.x - b.x, tgt.z - b.z);
    b.gurgleT = (b.gurgleT || 0) - dt; if (b.gurgleT <= 0) { b.gurgleT = 2.5 + this.rand() * 3; this.emit('boomergurgle', { b }); }
    if (d < 8 && b.vomitCd <= 0 && M.lineClear(b.x, 1.4, b.z, tgt.x, tgt.eye, tgt.z)) {
      b.vomitCd = 18; b.vomiting = 1.2;
      this.emit('vomit', { b });
      const fx = (tgt.x - b.x) / (d || 1), fz = (tgt.z - b.z) / (d || 1);
      for (const s of this.survivors) {
        if (!s.alive) continue;
        const dx = s.x - b.x, dz = s.z - b.z, dd = Math.hypot(dx, dz);
        if (dd < 8.5 && (dx * fx + dz * fz) / (dd || 1) > 0.7) this.bile(s);
      }
    }
    b.vomiting = Math.max(0, (b.vomiting || 0) - dt);
    if (b.vomiting > 0) { b.moving = 0; return; }
    if (d > 4) this.chaseStep(b, tgt, 3.6, dt, 0.5); else b.moving = 0;
    if (d < 1.6) { b.attackCd -= dt; if (b.attackCd <= 0) { b.attackCd = 1.2; this.hurt(tgt, 4 * this.diff.sdmg, b); } }
  }
  stepTank(t, dt) {
    const tgt = this.nearestSurvivor(t, true) || this.nearestSurvivor(t);
    if (!tgt) return;
    t.attackCd -= dt;
    const d = this.chaseStep(t, tgt, t.burning > 0 ? 6.4 : 5.6, dt, 0.8);
    // knock zombies out of the way
    if (d < 2.3 && t.attackCd <= 0 && Math.abs(tgt.y - t.y) < 1.5) {
      t.attackCd = 1.5; t.punch = 0.4;
      const dmg = (tgt.incap ? 30 : 24) * this.diff.sdmg;
      this.hurt(tgt, dmg, t);
      if (!tgt.incap && !tgt.dead) { const dx = tgt.x - t.x, dz = tgt.z - t.z, L = Math.hypot(dx, dz) || 1; tgt.vx = dx / L * 11; tgt.vz = dz / L * 11; tgt.vy = 4.5; tgt.onGround = false; tgt.kb = 0.7; }
      this.emit('tankpunch', { t, who: tgt });
    }
    t.punch = Math.max(0, (t.punch || 0) - dt);
    t.stompT = (t.stompT || 0) - dt * Math.max(0.3, t.moving / 5); if (t.stompT <= 0) { t.stompT = 0.45; this.emit('tankstep', { t }); }
  }

  // ---------------------------------------------------------------- AI Director
  visibleToSurvivors(x, z) {
    for (const s of this.survivors) if (s.alive && Math.hypot(s.x - x, s.z - z) < 70 && M.lineClear(s.x, s.eye, s.z, x, 1.2, z)) return true;
    return false;
  }
  // a random hidden spot `ahead` metres (negative = behind) along the route from the group
  findSpawn(minD = 22, maxD = 55, aheadBias = 0.5) {
    const prog = this.progress ?? 300;
    const surv = this.survivors.filter((s) => s.alive);
    for (let k = 0; k < 60; k++) {
      const n = this.spawnCandidates[Math.floor(this.rand() * this.spawnCandidates.length)];
      const ev = M.evacField[n];
      if (!isFinite(ev)) continue;
      const along = prog - ev; // positive = ahead
      if (this.rand() < aheadBias ? (along < 5 || along > 70) : (along > -5 || along < -60)) continue;
      const x = M.nodeX(n), z = M.nodeZ(n);
      let near = Infinity; for (const s of surv) near = Math.min(near, Math.hypot(s.x - x, s.z - z));
      if (near < minD || near > maxD) continue;
      if (!this.finale.started && M.cellAt(x, z) === 'E' && prog > 60) continue;
      if (this.visibleToSurvivors(x, z)) continue;
      return [x, z];
    }
    return null;
  }
  spawnMob(n, target = null) {
    let made = 0;
    for (let i = 0; i < n * 2 && made < n; i++) {
      const p = this.findSpawn(14, 40, 0.45); if (!p) continue;
      for (let j = 0; j < Math.min(4, n - made); j++) { const zb = this.spawnZombie(p[0] + (this.rand() - 0.5) * 2, p[1] + (this.rand() - 0.5) * 2, 'chase', target); if (zb) made++; }
    }
    return made;
  }
  populateAmbient(initial = false) {
    const want = Math.round(16 * this.diff.pop), alive = this.zombies.filter((z) => !z.dead && (z.state === 'idle' || z.state === 'wander')).length;
    for (let i = alive; i < want; i++) {
      // ambient walkers are spread along the whole route at the start, ahead of the group later
      let p = null;
      if (initial) {
        for (let k = 0; k < 40 && !p; k++) { const n = this.spawnCandidates[Math.floor(this.rand() * this.spawnCandidates.length)]; const x = M.nodeX(n), z = M.nodeZ(n); if (M.evacField[n] < 270 && Math.hypot(x - M.START.x, z - M.START.z) > 30) p = [x, z]; }
      } else p = this.findSpawn(30, 70, 1);
      if (p) this.spawnZombie(p[0], p[1], this.rand() < 0.5 ? 'idle' : 'wander');
    }
  }
  stepDirector(dt) {
    const D = this.dir;
    if (!this.doorOpen) return;
    D.t += dt;
    // intensity rises with damage taken and nearby fighting, falls when calm
    const nearAgg = this.zombies.filter((z) => !z.dead && z.state === 'chase').length;
    D.intensity = clamp(D.intensity + (nearAgg * 0.012 - 0.05) * dt * 3, 0, 1);
    D.ambientT -= dt; if (D.ambientT <= 0) { D.ambientT = 4; this.populateAmbient(); }
    if (this.finale.started) return;
    // peak -> relax: hold off new mobs while things are hot
    const relaxing = D.intensity > 0.8;
    D.mobT -= relaxing ? dt * 0.2 : dt;
    if (D.mobT <= 0) { D.mobT = 30 + this.rand() * 35; this.spawnMob(Math.round((6 + this.rand() * 8) * this.diff.pop)); }
    D.hordeT -= relaxing ? dt * 0.3 : dt;
    if (D.hordeT <= 0) { D.hordeT = 120 + this.rand() * 60; this.horde(); }
    const aliveSpecials = this.specials.filter((s) => !s.dead && s.type !== 'witch').length;
    D.specialT -= dt;
    if (D.specialT <= 0 && aliveSpecials < (this.diffName === 'advanced' ? 2 : 1)) {
      const p = this.findSpawn(13, 32, 0.6);
      if (p) { this.spawnSpecial(this.rand() < 0.55 ? 'hunter' : 'boomer', p[0], p[1]); D.specialT = 35 + this.rand() * 30; } else D.specialT = 3;
    }
    // the warehouse tank: when the group reaches the middle of the warehouse
    if (!D.warehouseTank && this.progress < 120) {
      const p = this.findSpawn(25, 50, 0.9);
      if (p) { D.warehouseTank = true; this.spawnSpecial('tank', p[0], p[1]); }
    }
  }
  horde(scale = 1) {
    this.emit('horde', {});
    const n = Math.round((22 + this.rand() * 8) * this.diff.pop * scale);
    let made = 0;
    // three or four groups, front and back, so the group gets surrounded
    for (let gIdx = 0; gIdx < 4 && made < n; gIdx++) {
      const p = this.findSpawn(12, 34, gIdx % 2 ? 0.2 : 0.8); if (!p) continue;
      for (let j = 0; j < Math.ceil(n / 4) && made < n; j++) { const zb = this.spawnZombie(p[0] + (this.rand() - 0.5) * 3, p[1] + (this.rand() - 0.5) * 3, 'chase'); if (zb) { zb.speed += 0.6; made++; } }
    }
    if (made < n) this.spawnMob(n - made);
  }
  triggerAlarm() {
    if (this.alarmUsed) return;
    this.alarmUsed = true; this.emit('alarm', {});
    this.horde(1.1);
  }

  // ---------------------------------------------------------------- finale at the docks
  startFinale(s) {
    this.finale.started = true; this.finale.t = 0; this.finale.waveT = 6;
    this.emit('radio', { by: s });
  }
  stepFinale(dt) {
    const F = this.finale;
    if (!F.started) return;
    F.t += dt;
    if (F.t > 8) {
      F.waveT -= dt;
      if (F.waveT <= 0 && F.t < FINALE_TIME) { F.waveT = 14; this.spawnMob(Math.round(11 * this.diff.pop)); if (Math.floor(F.t / 14) % 3 === 0) this.emit('horde', {}); }
      const sp = this.specials.filter((q) => !q.dead && q.type !== 'witch').length;
      if (sp < 1 && this.rand() < dt * 0.05) { const p = this.findSpawn(20, 45, 0.5); if (p) this.spawnSpecial(this.rand() < 0.5 ? 'hunter' : 'boomer', p[0], p[1]); }
    }
    if (!F.tank && F.t > 70) { const p = this.findSpawn(25, 50, 0.5); if (p) { F.tank = true; this.spawnSpecial('tank', p[0], p[1]); } }
    if (F.t >= FINALE_TIME && !F.boat) { F.boat = true; this.emit('boat', {}); }
    if (F.boat) F.boatX = Math.min(M.EVAC.boatX, F.boatX + dt * 9);
  }
}

export const inRescue = (s) => s.x > M.RESCUE_ZONE.x0 && s.x < M.RESCUE_ZONE.x1 && s.z > M.RESCUE_ZONE.z0 && s.z < M.RESCUE_ZONE.z1;
export { angWrap };
