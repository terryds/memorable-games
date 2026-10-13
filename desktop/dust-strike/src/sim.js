// Game simulation: movement, weapons, grenades, bomb, rounds and economy. No DOM / three.js, so the
// same code runs in the browser and in the headless bot-vs-bot test (test/sim.js).
import { moveBody, groundAt, solidsAt, rayWorld, lineClear, siteAt, inBuyZone, SPAWNS } from './map.js';
import { WEAPONS, GEAR, SPRAY_X, sprayY } from './weapons.js';
import { BotBrain, SKILL } from './bots.js';

export const R = 0.4, H_STAND = 1.8, H_CROUCH = 1.25, EYE_STAND = 1.64, EYE_CROUCH = 1.12;
export const GRAV = 20, JUMP_V = 7, BASE_SPEED = 6.4;
export const FREEZE = 6, ROUND_TIME = 115, BOMB_TIME = 40, PLANT_TIME = 3.2, END_TIME = 5, BUY_TIME = 20;
const MAX_MONEY = 16000;
const ZONE_MULT = { head: 4, chest: 1, stomach: 1.25, legs: 0.75 };
const T_NAMES = ['Viktor', 'Hassan', 'Dmitri', 'Rafael', 'Omar', 'Yuri', 'Karim', 'Ivan', 'Tariq'];
const CT_NAMES = ['Mitch', 'Brad', 'Kurt', 'Wade', 'Ryan', 'Cole', 'Hank', 'Duke', 'Grant'];
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const emptyInput = () => ({ fwd: 0, side: 0, jump: false, crouch: false, walk: false, fire: false, alt: false, reload: false, use: false, slot: null, drop: false, yaw: 0, pitch: 0 });

export function viewDir(yaw, pitch) {
  const cp = Math.cos(pitch);
  return [-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp];
}

export class Agent {
  constructor(id, name, team, isBot) {
    Object.assign(this, {
      id, name, team, isBot, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, yaw: 0, pitch: 0, onGround: true, duck: 0,
      hp: 100, armor: 0, helmet: false, kit: false, alive: true, money: 800, kills: 0, deaths: 0, hs: 0,
    });
    this.inv = { primary: null, secondary: null, nades: [], c4: false };
    this.cur = 'secondary'; this.last = 'knife';
    this.nextFire = 0; this.reloadT = 0; this.switchT = 0; this.shots = 0; this.lastShot = -9;
    this.punchP = 0; this.punchY = 0; this.fireHeld = false; this.altHeld = false; this.useHeld = false; this.jumpHeld = false;
    this.scope = 0; this.rescope = 0; this.plantT = 0; this.defuseT = 0; this.flash = 0; this.flashMax = 0;
    this.stepAcc = 0; this.lastHurt = -9; this.lastAttacker = -1; this.spotted = { T: -9, CT: -9 }; this.deathT = 0;
    this.moveSpeed = 0; this.nadeHeld = false; this.input = emptyInput(); this.roundDmg = 0;
  }
  get eyeY() { return this.y + EYE_STAND - (EYE_STAND - EYE_CROUCH) * this.duck; }
  get height() { return H_STAND - (H_STAND - H_CROUCH) * this.duck; }
  weaponId() {
    switch (this.cur) {
      case 'primary': return this.inv.primary?.id ?? 'knife';
      case 'secondary': return this.inv.secondary?.id ?? 'knife';
      case 'nade': return this.inv.nades[0] ?? 'knife';
      case 'c4': return this.inv.c4 ? 'c4' : 'knife';
      default: return 'knife';
    }
  }
  gun() { return this.cur === 'primary' ? this.inv.primary : this.cur === 'secondary' ? this.inv.secondary : null; }
  has(slot) {
    return slot === 'knife' || (slot === 'primary' && !!this.inv.primary) || (slot === 'secondary' && !!this.inv.secondary)
      || (slot === 'nade' && this.inv.nades.length > 0) || (slot === 'c4' && this.inv.c4);
  }
  bestSlot() { return this.inv.primary ? 'primary' : this.inv.secondary ? 'secondary' : 'knife'; }
  maxSpeed() {
    const w = WEAPONS[this.weaponId()];
    return BASE_SPEED * (w.speed ?? 1) * (this.scope ? 0.82 : 1);
  }
}

export class Game {
  constructor(opts = {}) {
    this.opts = { playerTeam: 'CT', difficulty: 'normal', winRounds: 8, teamSize: 5, botsOnly: false, ...opts };
    this.agents = []; this.events = []; this.time = 0; this.round = 0;
    this.score = { T: 0, CT: 0 }; this.lossStreak = { T: 0, CT: 0 };
    this.grenades = []; this.smokes = []; this.drops = []; this.bomb = null;
    this.phase = 'idle'; this.phaseT = 0; this.roundT = ROUND_TIME; this.winner = null; this.visT = 0;
    this.history = []; this.intel = { T: null, CT: null }; this.tPlan = null;
    let id = 0;
    const names = { T: [...T_NAMES].sort(() => Math.random() - 0.5), CT: [...CT_NAMES].sort(() => Math.random() - 0.5) };
    for (const team of ['T', 'CT']) {
      for (let i = 0; i < this.opts.teamSize; i++) {
        const isPlayer = !this.opts.botsOnly && team === this.opts.playerTeam && i === 0;
        const a = new Agent(id++, isPlayer ? 'You' : names[team][i], team, !isPlayer);
        this.agents.push(a);
        if (isPlayer) this.player = a;
      }
    }
    const base = SKILL[this.opts.difficulty] || SKILL.normal;
    this.brains = new Map();
    for (const a of this.agents) if (a.isBot) this.brains.set(a.id, new BotBrain(a, this, base));
    this.vis = this.agents.map(() => new Uint8Array(this.agents.length));
  }

  emit(e) {
    this.events.push(e);
    if (e.type === 'shot' || e.type === 'step' || e.type === 'he' || e.type === 'planted') for (const b of this.brains.values()) b.hear(e);
  }
  alive(team) { return this.agents.filter((a) => a.alive && (!team || a.team === team)); }
  agent(id) { return this.agents[id]; }
  get buyOpen() { return this.phase === 'freeze' || (this.phase === 'live' && ROUND_TIME - this.roundT < BUY_TIME); }
  canBuy(a) { return a.alive && this.buyOpen && inBuyZone(a.team, a.x, a.z); }

  start() { this.newRound(true); }

  newRound(first = false) {
    this.round++;
    this.phase = 'freeze'; this.phaseT = FREEZE; this.roundT = ROUND_TIME; this.winner = null;
    this.grenades.length = 0; this.smokes.length = 0; this.drops.length = 0;
    this.seen = { T: {}, CT: {} }; this.intel = { T: null, CT: null };
    for (const team of ['T', 'CT']) {
      const spots = [...SPAWNS[team]].sort(() => Math.random() - 0.5);
      this.agents.filter((a) => a.team === team).forEach((a, i) => {
        if (first || !a.alive) {
          a.inv = { primary: null, secondary: null, nades: [], c4: false };
          const pid = team === 'T' ? 'glock' : 'usp', w = WEAPONS[pid];
          a.inv.secondary = { id: pid, mag: w.mag, reserve: w.reserve };
          a.armor = 0; a.helmet = false; a.kit = false;
        }
        if (first) { a.money = 800; a.kills = 0; a.deaths = 0; a.hs = 0; }
        a.inv.c4 = false;
        const [x, z] = spots[i % spots.length];
        Object.assign(a, { x, y: 0, z, vx: 0, vy: 0, vz: 0, hp: 100, alive: true, onGround: true, duck: 0, pitch: 0 });
        a.yaw = team === 'T' ? 0 : Math.PI;
        a.cur = a.bestSlot(); a.last = 'knife';
        Object.assign(a, { nextFire: 0, reloadT: 0, switchT: 0, shots: 0, punchP: 0, punchY: 0, scope: 0, rescope: 0, plantT: 0, defuseT: 0, flash: 0, flashMax: 0, lastHurt: -9, lastAttacker: -1, roundDmg: 0 });
        a.spotted = { T: -9, CT: -9 };
        // keep ammo topped up for survivors' guns like CS's spare mags? no — CS keeps what you have.
      });
    }
    const ts = this.alive('T');
    const carrier = ts[Math.floor(Math.random() * ts.length)];
    carrier.inv.c4 = true;
    this.bomb = { state: 'carried', carrier: carrier.id, x: carrier.x, y: 0, z: carrier.z, timer: 0, site: null, beepT: 0, planter: -1 };
    this.emit({ type: 'roundStart', round: this.round });
    for (const b of this.brains.values()) b.roundStart();
  }

  endRound(winner, reason) {
    if (this.phase === 'end' || this.phase === 'over') return;
    const loser = winner === 'T' ? 'CT' : 'T';
    this.phase = 'end'; this.phaseT = END_TIME; this.winner = winner;
    this.score[winner]++;
    const winCash = reason === 'bomb' || reason === 'defuse' ? 3500 : 3250;
    const lossCash = 1400 + 500 * Math.min(this.lossStreak[loser], 4);
    for (const a of this.agents) {
      if (a.team === winner) a.money += winCash;
      else a.money += lossCash + (a.team === 'T' && this.bomb.state === 'defused' ? 800 : 0);
      a.money = Math.min(MAX_MONEY, a.money);
    }
    this.lossStreak[winner] = 0; this.lossStreak[loser]++;
    this.history.push({ winner, reason });
    this.emit({ type: 'roundEnd', winner, reason });
  }

  // ------------------------------------------------------------------ main step
  update(dt, playerInput) {
    this.time += dt;
    if (this.phase === 'idle' || this.phase === 'over') return;
    if (this.phase === 'freeze') {
      this.phaseT -= dt;
      if (this.phaseT <= 0) { this.phase = 'live'; this.emit({ type: 'go' }); }
    } else if (this.phase === 'end') {
      this.phaseT -= dt;
      if (this.phaseT <= 0) {
        if (this.score.T >= this.opts.winRounds || this.score.CT >= this.opts.winRounds) {
          this.phase = 'over'; this.emit({ type: 'matchOver', winner: this.score.T > this.score.CT ? 'T' : 'CT' });
          return;
        }
        this.newRound();
        return;
      }
    } else if (this.phase === 'live') {
      this.roundT -= dt;
    }

    this.visT -= dt;
    if (this.visT <= 0) { this.visT = 0.1; this.updateVisibility(); }

    for (const a of this.agents) {
      if (!a.alive) continue;
      let inp;
      if (a.isBot) inp = this.brains.get(a.id).think(dt);
      else inp = playerInput || emptyInput();
      a.input = inp;
      this.applyInput(a, inp, dt);
    }
    this.updateGrenades(dt);
    this.updateBomb(dt);
    this.updateDrops();

    const aliveT = this.alive('T').length, aliveCT = this.alive('CT').length;
    if (this.phase === 'live') {
      if (aliveCT === 0) this.endRound('T', 'elim');
      else if (aliveT === 0) this.endRound('CT', 'elim');
      else if (this.roundT <= 0) this.endRound('CT', 'time');
    } else if (this.phase === 'planted') {
      if (aliveCT === 0) this.endRound('T', 'elim');
    }
  }

  // ------------------------------------------------------------------ movement & actions
  applyInput(a, inp, dt) {
    a.yaw = inp.yaw; a.pitch = clamp(inp.pitch, -1.5, 1.5);
    const locked = this.phase === 'freeze' || a.plantT > 0 || a.defuseT > 0;
    // crouch (can't stand up under a crate)
    const wantDuck = inp.crouch ? 1 : 0;
    if (wantDuck < a.duck && solidsAt(a.x, a.z, R, a.y + 0.02, a.y + H_STAND).length) { /* stay ducked */ }
    else a.duck += clamp(wantDuck - a.duck, -dt * 7, dt * 7);

    let f = locked ? 0 : inp.fwd, s = locked ? 0 : inp.side;
    const l = Math.hypot(f, s); if (l > 1) { f /= l; s /= l; }
    const sy = Math.sin(a.yaw), cy = Math.cos(a.yaw);
    const wx = -sy * f + cy * s, wz = -cy * f - sy * s;
    const wl = Math.hypot(wx, wz);
    let maxSp = a.maxSpeed();
    if (a.duck > 0.5) maxSp *= 0.34; else if (inp.walk) maxSp *= 0.52;
    if (a.onGround) {
      if (wl > 0.01) {
        const tx = wx * maxSp, tz = wz * maxSp;
        let dvx = tx - a.vx, dvz = tz - a.vz; const dl = Math.hypot(dvx, dvz), lim = 52 * dt;
        if (dl > lim) { dvx *= lim / dl; dvz *= lim / dl; }
        a.vx += dvx; a.vz += dvz;
      } else {
        const sp = Math.hypot(a.vx, a.vz), ns = Math.max(0, sp - 42 * dt);
        if (sp > 0) { a.vx *= ns / sp; a.vz *= ns / sp; }
      }
      if (inp.jump && !a.jumpHeld && !locked && a.duck < 0.6) {
        a.vy = JUMP_V; a.onGround = false; this.emit({ type: 'jump', a: a.id });
      }
    } else if (wl > 0.01) {
      // a little air control
      a.vx += wx * 9 * dt; a.vz += wz * 9 * dt;
      const sp = Math.hypot(a.vx, a.vz); if (sp > maxSp * 1.05) { a.vx *= maxSp * 1.05 / sp; a.vz *= maxSp * 1.05 / sp; }
    }
    a.jumpHeld = inp.jump;
    a.vy -= GRAV * dt;
    const px = a.x, pz = a.z;
    const hit = moveBody(a, a.vx * dt, a.vz * dt, R, a.height);
    if (hit.hitX) a.vx = 0;
    if (hit.hitZ) a.vz = 0;
    const ny = a.y + a.vy * dt, ground = groundAt(a.x, a.z, R, a.y);
    if (a.vy > 0 && solidsAt(a.x, a.z, R, ny + 0.02, ny + a.height).length) a.vy = 0;
    else if (ny <= ground) {
      if (!a.onGround && a.vy < -4) this.emit({ type: 'land', a: a.id });
      a.y = ground; a.vy = 0; a.onGround = true;
    } else { a.y = ny; a.onGround = false; }
    a.moveSpeed = Math.hypot(a.x - px, a.z - pz) / dt;
    if (a.onGround && a.moveSpeed > BASE_SPEED * 0.6) {
      a.stepAcc += a.moveSpeed * dt;
      if (a.stepAcc > 2.3) { a.stepAcc = 0; this.emit({ type: 'step', a: a.id }); }
    }
    a.flash = Math.max(0, a.flash - dt);

    // ---- weapons
    if (a.switchT > 0) a.switchT -= dt;
    if (a.reloadT > 0) {
      a.reloadT -= dt;
      if (a.reloadT <= 0) {
        const g = a.gun();
        if (g) { const w = WEAPONS[g.id], n = Math.min(w.mag - g.mag, g.reserve); g.mag += n; g.reserve -= n; }
      }
    }
    if (a.rescope && this.time >= a.nextFire) { a.scope = a.rescope; a.rescope = 0; }
    const wid = a.weaponId(), w = WEAPONS[wid];
    if (w.rate && this.time - a.lastShot > w.rate * 1.25) {
      a.shots = Math.max(0, a.shots - dt / 0.07);
      const k = Math.exp(-dt * 7); a.punchP *= k; a.punchY *= k;
    }
    if (inp.slot && inp.slot !== a.cur) this.switchTo(a, inp.slot);
    else if (inp.slot === 'nade' && a.cur === 'nade' && a.inv.nades.length > 1 && !a.nadeHeld) { a.inv.nades.push(a.inv.nades.shift()); a.switchT = 0.4; this.emit({ type: 'switch', a: a.id }); }
    if (inp.drop) this.dropCurrent(a);
    if (inp.reload) this.startReload(a);

    const canAct = this.phase !== 'freeze' && a.switchT <= 0 && !(a.plantT > 0) && !(a.defuseT > 0);
    if (w.slot === 'knife') {
      if (canAct && this.time >= a.nextFire) {
        if (inp.fire) this.knife(a, false); else if (inp.alt) this.knife(a, true);
      }
    } else if (w.slot === 'nade') {
      if (canAct && (inp.fire || inp.alt)) { a.nadeHeld = true; a.nadeUnder = inp.alt && !inp.fire; }
      else if (a.nadeHeld && !inp.fire && !inp.alt) { a.nadeHeld = false; this.throwNade(a, a.nadeUnder); }
    } else if (w.slot === 'c4') {
      // planting handled below
    } else {
      const g = a.gun();
      if (w.scope && inp.alt && !a.altHeld && a.reloadT <= 0 && a.switchT <= 0) { a.scope = (a.scope + 1) % 3; a.rescope = 0; this.emit({ type: 'zoom', a: a.id }); }
      if (canAct && inp.fire && !(a.fireHeld && !w.auto) && this.time >= a.nextFire && a.reloadT <= 0) {
        if (g.mag > 0) this.shoot(a, w, g);
        else { a.nextFire = this.time + 0.3; this.emit({ type: 'dry', a: a.id }); if (g.reserve > 0) this.startReload(a); }
      }
    }
    a.fireHeld = inp.fire; a.altHeld = inp.alt;

    // ---- plant / defuse
    const wantPlant = a.inv.c4 && ((a.cur === 'c4' && inp.fire) || inp.use);
    if (wantPlant && this.phase === 'live' && a.onGround && siteAt(a.x, a.z)) {
      if (a.plantT === 0) { if (a.cur !== 'c4') this.switchTo(a, 'c4', 0); this.emit({ type: 'plantStart', a: a.id }); }
      a.vx = a.vz = 0;
      a.plantT += dt;
      if (a.plantT >= PLANT_TIME) this.plant(a);
    } else a.plantT = 0;

    const b = this.bomb;
    const nearBomb = b.state === 'planted' && a.team === 'CT' && Math.hypot(a.x - b.x, a.z - b.z) < 1.6 && Math.abs(a.y - b.y) < 1.4;
    if (nearBomb && inp.use && a.onGround) {
      if (a.defuseT === 0) this.emit({ type: 'defuseStart', a: a.id, kit: a.kit });
      a.vx = a.vz = 0;
      a.defuseT += dt;
      if (a.defuseT >= (a.kit ? 5 : 10)) {
        b.state = 'defused'; a.money += 300;
        this.emit({ type: 'defused', a: a.id });
        this.endRound('CT', 'defuse');
      }
    } else a.defuseT = 0;
    // swap for a gun on the floor
    if (inp.use && !a.useHeld && !nearBomb && !wantPlant) this.pickupNear(a, true);
    a.useHeld = inp.use;
  }

  switchTo(a, slot, t) {
    if (!a.has(slot) || slot === a.cur) return;
    a.last = a.cur; a.cur = slot;
    const w = WEAPONS[a.weaponId()];
    a.switchT = t ?? (slot === 'knife' ? 0.35 : slot === 'primary' && w === WEAPONS.awp ? 0.9 : 0.55);
    a.reloadT = 0; a.scope = 0; a.rescope = 0; a.shots = 0; a.nadeHeld = false;
    this.emit({ type: 'switch', a: a.id });
  }

  startReload(a) {
    const g = a.gun(); if (!g) return;
    const w = WEAPONS[g.id];
    if (g.mag >= w.mag || g.reserve <= 0 || a.reloadT > 0 || a.switchT > 0) return;
    a.reloadT = w.reload; a.scope = 0; a.rescope = 0;
    this.emit({ type: 'reload', a: a.id });
  }

  // ------------------------------------------------------------------ shooting
  shoot(a, w, g) {
    g.mag--; a.nextFire = this.time + w.rate; a.lastShot = this.time;
    const inacc = this.inaccuracy(a, w);
    const yaw = a.yaw + a.punchY, pitch = a.pitch + a.punchP;
    const [dx, dy, dz] = viewDir(yaw, pitch);
    // right & up basis for the spread cone
    const rx = Math.cos(yaw), rz = -Math.sin(yaw);
    const ux = Math.sin(yaw) * Math.sin(pitch), uy = Math.cos(pitch), uz = Math.cos(yaw) * Math.sin(pitch);
    const ang = Math.random() * Math.PI * 2, r = inacc * Math.sqrt(Math.random());
    const ox_ = Math.cos(ang) * r, oy_ = Math.sin(ang) * r;
    let fx = dx + rx * ox_ + ux * oy_, fy = dy + uy * oy_, fz = dz + rz * ox_ + uz * oy_;
    const fl = Math.hypot(fx, fy, fz); fx /= fl; fy /= fl; fz /= fl;
    const i = Math.floor(a.shots);
    a.punchP += w.kick * sprayY(i) * (0.9 + Math.random() * 0.2);
    a.punchY += w.kick * 0.55 * SPRAY_X[Math.min(i, SPRAY_X.length - 1)] * (0.85 + Math.random() * 0.3);
    a.shots++;
    if (w.scope && a.scope) { a.rescope = a.scope; a.scope = 0; }
    const res = this.trace(a, a.x, a.eyeY, a.z, fx, fy, fz, 260, w, g.id);
    this.emit({ type: 'shot', a: a.id, w: g.id, ox: a.x, oy: a.eyeY, oz: a.z, hx: res.x, hy: res.y, hz: res.z, hit: res.victim });
  }

  // cone half-angle (radians) for the next bullet — also drives the dynamic crosshair
  inaccuracy(a, w = WEAPONS[a.weaponId()]) {
    if (!w.spread) return 0.01;
    const maxSp = a.maxSpeed();
    const moveFrac = clamp((a.moveSpeed - maxSp * 0.34) / (maxSp * 0.5), 0, 1);
    return w.spread * (a.duck > 0.5 ? 0.7 : 1) + moveFrac * w.moveSpread + (a.onGround ? 0 : 0.14)
      + Math.min(a.shots, 12) * w.spraySpread + (w.scope && !a.scope ? w.unscoped : 0);
  }

  trace(a, ox, oy, oz, dx, dy, dz, maxT, w, wid) {
    const wh = rayWorld(ox, oy, oz, dx, dy, dz, maxT);
    let best = wh ? wh.t : maxT, victim = null, zone = null;
    for (const b of this.agents) {
      if (!b.alive || b === a || b.team === a.team) continue;
      const h = this.hitAgent(b, ox, oy, oz, dx, dy, dz, best);
      if (h) { best = h.t; victim = b; zone = h.zone; }
    }
    const x = ox + dx * best, y = oy + dy * best, z = oz + dz * best;
    if (victim) {
      const dmg = w.dmg * Math.pow(w.falloff, best / 12.7);
      this.damage(victim, a, dmg, zone, wid, w.pen, dx, dz);
    } else if (wh) this.emit({ type: 'impact', x, y, z, nx: wh.nx, ny: wh.ny, nz: wh.nz, kind: wh.kind });
    return { x, y, z, victim: victim ? victim.id : -1 };
  }

  // ray vs head sphere + body cylinder
  hitAgent(b, ox, oy, oz, dx, dy, dz, maxT) {
    const H = b.height, hy = b.y + H * 0.91, hr = 0.17;
    let best = null;
    // sphere
    const lx = ox - b.x, ly = oy - hy, lz = oz - b.z;
    const bq = lx * dx + ly * dy + lz * dz, c = lx * lx + ly * ly + lz * lz - hr * hr, disc = bq * bq - c;
    if (disc >= 0) { const t = -bq - Math.sqrt(disc); if (t > 0 && t < maxT) best = { t, zone: 'head' }; }
    // cylinder (xz) from feet to shoulders
    const top = b.y + H * 0.82, cr = 0.3;
    const qa = dx * dx + dz * dz;
    if (qa > 1e-9) {
      const qb = 2 * (lx * dx + lz * dz), qc = lx * lx + lz * lz - cr * cr, d2 = qb * qb - 4 * qa * qc;
      if (d2 >= 0) {
        const s = Math.sqrt(d2);
        for (const t of [(-qb - s) / (2 * qa), (-qb + s) / (2 * qa)]) {
          if (t <= 0 || t >= (best ? best.t : maxT)) continue;
          const y = oy + dy * t;
          if (y >= b.y && y <= top) {
            const rel = (y - b.y) / H;
            best = { t, zone: rel < 0.45 ? 'legs' : rel < 0.62 ? 'stomach' : 'chest' };
            break;
          }
        }
      }
    }
    return best;
  }

  damage(v, a, dmg, zone, wid, pen = 0.6, dx = 0, dz = 0) {
    if (!v.alive) return;
    let d = dmg * (ZONE_MULT[zone] ?? 1), hpD = d;
    const armored = v.armor > 0 && zone !== 'legs' && (zone !== 'head' || v.helmet);
    if (armored) { hpD = d * pen; v.armor = Math.max(0, Math.round(v.armor - (d - hpD) * 0.5)); }
    hpD = Math.max(1, Math.round(hpD));
    v.hp -= hpD; v.lastHurt = this.time; v.lastAttacker = a ? a.id : -1;
    if (a && a.team !== v.team) a.roundDmg += Math.min(hpD, v.hp + hpD);
    this.emit({ type: 'hurt', v: v.id, a: a ? a.id : -1, dmg: hpD, zone, dx, dz, w: wid, armored });
    if (v.hp <= 0) this.kill(v, a, wid, zone === 'head');
  }

  kill(v, k, wid, head) {
    v.alive = false; v.hp = 0; v.deaths++; v.deathT = this.time; v.plantT = 0; v.defuseT = 0; v.scope = 0;
    const g = v.inv.primary || v.inv.secondary;
    if (g) this.drops.push({ ...g, x: v.x + (Math.random() - 0.5), y: groundAt(v.x, v.z, 0.2, v.y + 0.1), z: v.z + (Math.random() - 0.5), t: this.time, yaw: Math.random() * 6.28 });
    if (g === v.inv.primary) v.inv.primary = null; else v.inv.secondary = null;
    if (v.inv.c4) {
      v.inv.c4 = false;
      Object.assign(this.bomb, { state: 'dropped', carrier: -1, x: v.x, y: groundAt(v.x, v.z, 0.2, v.y + 0.1), z: v.z });
      this.emit({ type: 'bombDropped' });
    }
    if (k && k !== v && k.team !== v.team) {
      k.kills++; if (head) k.hs++;
      k.money = Math.min(MAX_MONEY, k.money + (WEAPONS[wid]?.kill ?? 300));
    }
    this.emit({ type: 'kill', k: k ? k.id : -1, v: v.id, w: wid, head });
  }

  knife(a, heavy) {
    const w = WEAPONS.knife;
    a.nextFire = this.time + (heavy ? w.rate2 : w.rate);
    this.emit({ type: 'knife', a: a.id, heavy });
    const [dx, , dz] = viewDir(a.yaw, 0);
    let best = null, bd = w.range;
    for (const b of this.agents) {
      if (!b.alive || b.team === a.team) continue;
      const ex = b.x - a.x, ez = b.z - a.z, d = Math.hypot(ex, ez);
      if (d > bd + R || Math.abs(b.y - a.y) > 1.2) continue;
      if ((ex * dx + ez * dz) / (d || 1) < 0.65) continue;
      if (!lineClear(a.x, a.eyeY - 0.3, a.z, b.x, b.y + 1.1, b.z)) continue;
      best = b; bd = d;
    }
    if (best) {
      const [fx, , fz] = viewDir(best.yaw, 0), ex = best.x - a.x, ez = best.z - a.z, d = Math.hypot(ex, ez) || 1;
      const back = (fx * ex + fz * ez) / d > 0.5;
      this.damage(best, a, heavy ? (back ? 180 : w.dmg2) : back ? 90 : w.dmg, 'chest', 'knife', 0.85, dx, dz);
    }
  }

  // ------------------------------------------------------------------ grenades
  throwNade(a, under) {
    const kind = a.inv.nades.shift(); if (!kind) return;
    const [dx, dy, dz] = viewDir(a.yaw, clamp(a.pitch + 0.12, -1.4, 1.4));
    const sp = under ? 8 : 17;
    this.grenades.push({
      kind, owner: a.id, x: a.x + dx * 0.4, y: a.eyeY - 0.1, z: a.z + dz * 0.4,
      vx: dx * sp + a.vx * 0.6, vy: dy * sp + Math.max(0, a.vy) * 0.6, vz: dz * sp + a.vz * 0.6, t: 0, rest: false, spin: 0,
    });
    a.nextFire = this.time + 0.6;
    this.emit({ type: 'throw', a: a.id, kind });
    if (a.inv.nades.length === 0) this.switchTo(a, a.has(a.last) && a.last !== 'nade' ? a.last : a.bestSlot(), 0.4);
    else { a.switchT = 0.5; this.emit({ type: 'switch', a: a.id }); }
  }

  updateGrenades(dt) {
    for (let i = this.grenades.length - 1; i >= 0; i--) {
      const g = this.grenades[i];
      g.t += dt;
      if (!g.rest) {
        g.vy -= 16 * dt;
        let left = dt;
        for (let k = 0; k < 3 && left > 0; k++) {
          const sp = Math.hypot(g.vx, g.vy, g.vz); if (sp < 1e-4) break;
          const dx = g.vx / sp, dy = g.vy / sp, dz = g.vz / sp, dist = sp * left;
          const h = rayWorld(g.x, g.y, g.z, dx, dy, dz, dist + 0.08);
          if (h && h.t <= dist + 0.08) {
            const t = Math.max(0, h.t - 0.08);
            g.x += dx * t; g.y += dy * t; g.z += dz * t;
            left -= t / sp;
            const vn = g.vx * h.nx + g.vy * h.ny + g.vz * h.nz;
            g.vx -= 2 * vn * h.nx; g.vy -= 2 * vn * h.ny; g.vz -= 2 * vn * h.nz;
            g.vx *= 0.5; g.vy *= 0.45; g.vz *= 0.5;
            if (sp > 3) this.emit({ type: 'bounce', x: g.x, y: g.y, z: g.z });
            if (h.ny > 0.7 && Math.hypot(g.vx, g.vy, g.vz) < 1.2) { g.rest = true; g.vx = g.vy = g.vz = 0; break; }
          } else { g.x += dx * dist; g.y += dy * dist; g.z += dz * dist; left = 0; }
        }
        if (g.y < 0.05) { g.y = 0.05; if (g.vy < 0) g.vy = -g.vy * 0.4; g.vx *= 0.7; g.vz *= 0.7; if (Math.abs(g.vy) < 1) { g.rest = true; g.vx = g.vy = g.vz = 0; } }
      }
      const fuse = g.kind === 'smoke' ? (g.rest ? Math.min(g.t, 1.2) + 0.6 : 99) : 1.6;
      if (g.kind === 'smoke' ? (g.rest && g.t > 1.2) || g.t > 4 : g.t >= fuse) {
        this.grenades.splice(i, 1);
        this.detonate(g);
      }
    }
    for (let i = this.smokes.length - 1; i >= 0; i--) {
      const s = this.smokes[i]; s.t += dt;
      if (s.t > s.life) this.smokes.splice(i, 1);
    }
  }

  detonate(g) {
    const owner = this.agents[g.owner];
    if (g.kind === 'he') {
      this.emit({ type: 'he', x: g.x, y: g.y, z: g.z });
      for (const b of this.agents) {
        if (!b.alive) continue;
        const d = Math.hypot(b.x - g.x, b.y + 1 - g.y, b.z - g.z);
        if (d > 11 || !lineClear(g.x, g.y + 0.2, g.z, b.x, b.y + 1, b.z)) continue;
        if (b.team === owner.team && b !== owner) continue;
        const dmg = 98 * Math.pow(1 - d / 11, 1.3);
        if (dmg >= 1) this.damage(b, owner, dmg, 'chest', 'he', 0.55, b.x - g.x, b.z - g.z);
      }
    } else if (g.kind === 'flash') {
      this.emit({ type: 'flash', x: g.x, y: g.y, z: g.z });
      for (const b of this.agents) {
        if (!b.alive) continue;
        const ex = g.x - b.x, ey = g.y - b.eyeY, ez = g.z - b.z, d = Math.hypot(ex, ey, ez);
        if (d > 32 || !lineClear(b.x, b.eyeY, b.z, g.x, g.y, g.z) || this.smokeBlocks(b.x, b.eyeY, b.z, g.x, g.y, g.z)) continue;
        const [vx, vy, vz] = viewDir(b.yaw, b.pitch), dot = (ex * vx + ey * vy + ez * vz) / (d || 1);
        const dist = clamp(1.15 - d / 32, 0.25, 1);
        const dur = (dot > 0.6 ? 4.2 : dot > 0.1 ? 2.4 : dot > -0.4 ? 1 : 0.35) * dist;
        if (dur > b.flash) { b.flash = dur; b.flashMax = dur; }
      }
    } else {
      this.smokes.push({ x: g.x, y: Math.max(0, g.y - 0.1), z: g.z, t: 0, life: 18 });
      this.emit({ type: 'smoke', x: g.x, y: g.y, z: g.z });
    }
  }

  smokeRadius(s) {
    if (s.t > s.life - 1.5) return 4.6 * Math.max(0, (s.life - s.t) / 1.5);
    return 4.6 * Math.min(1, s.t / 1.1);
  }

  smokeBlocks(x0, y0, z0, x1, y1, z1) {
    for (const s of this.smokes) {
      const r = this.smokeRadius(s) * 0.92; if (r < 1) continue;
      const cx = s.x, cy = s.y + 1.4, cz = s.z;
      const dx = x1 - x0, dy = y1 - y0, dz = z1 - z0, L2 = dx * dx + dy * dy + dz * dz;
      const t = clamp(((cx - x0) * dx + (cy - y0) * dy + (cz - z0) * dz) / (L2 || 1), 0, 1);
      const px = x0 + dx * t - cx, py = (y0 + dy * t - cy) * 1.4, pz = z0 + dz * t - cz;
      if (px * px + py * py + pz * pz < r * r) return true;
    }
    return false;
  }

  // ------------------------------------------------------------------ bomb
  plant(a) {
    const b = this.bomb;
    a.inv.c4 = false; a.plantT = 0; a.money += 300;
    Object.assign(b, { state: 'planted', carrier: -1, x: a.x, y: a.y, z: a.z, timer: BOMB_TIME, site: siteAt(a.x, a.z), beepT: 0, planter: a.id });
    this.phase = 'planted';
    this.switchTo(a, a.bestSlot(), 0.3);
    this.emit({ type: 'planted', a: a.id, site: b.site });
  }

  updateBomb(dt) {
    const b = this.bomb;
    if (b.state === 'carried') {
      const c = this.agents[b.carrier]; b.x = c.x; b.y = c.y; b.z = c.z;
    } else if (b.state === 'dropped') {
      for (const a of this.agents)
        if (a.alive && a.team === 'T' && Math.hypot(a.x - b.x, a.z - b.z) < 1.1 && Math.abs(a.y - b.y) < 1.5) {
          a.inv.c4 = true; b.state = 'carried'; b.carrier = a.id;
          this.emit({ type: 'bombPickup', a: a.id }); break;
        }
    } else if (b.state === 'planted' && this.phase === 'planted') {
      b.timer -= dt; b.beepT -= dt;
      if (b.beepT <= 0) {
        const f = b.timer / BOMB_TIME;
        b.beepT = b.timer < 2 ? 0.12 : b.timer < 5 ? 0.25 : 0.25 + f * 0.95;
        this.emit({ type: 'beep', x: b.x, y: b.y, z: b.z, urgent: b.timer < 5 });
      }
      if (b.timer <= 0) {
        b.state = 'exploded';
        this.emit({ type: 'explode', x: b.x, y: b.y, z: b.z });
        for (const a of this.agents) {
          if (!a.alive) continue;
          const d = Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
          const dmg = d < 10 ? 500 : 500 * Math.exp(-((d - 10) ** 2) / (2 * 9 * 9));
          if (dmg > 1) this.damage(a, this.agents[b.planter], dmg, 'chest', 'c4', a.armor > 0 ? 0.7 : 1);
        }
        this.endRound('T', 'bomb');
      }
    }
  }

  // ------------------------------------------------------------------ ground weapons
  updateDrops() {
    for (const a of this.agents) if (a.alive) this.pickupNear(a, false);
  }

  pickupNear(a, swap) {
    for (let i = 0; i < this.drops.length; i++) {
      const d = this.drops[i];
      if (Math.hypot(a.x - d.x, a.z - d.z) > (swap ? 1.8 : 1.0) || Math.abs(a.y - d.y) > 1.5 || this.time - d.t < 0.6) continue;
      const w = WEAPONS[d.id], slot = w.slot;
      if (a.inv[slot] && !swap) continue;
      if (a.inv[slot] && a.isBot && WEAPONS[a.inv[slot].id].price >= w.price) continue;
      this.drops.splice(i, 1);
      if (a.inv[slot]) this.dropItem(a, slot);
      a.inv[slot] = { id: d.id, mag: d.mag, reserve: d.reserve };
      this.emit({ type: 'pickup', a: a.id, w: d.id });
      if (swap || (slot === 'primary' && a.cur !== 'primary')) this.switchTo(a, slot, 0.5);
      return true;
    }
    return false;
  }

  dropItem(a, slot) {
    const g = a.inv[slot]; if (!g) return;
    const [dx, , dz] = viewDir(a.yaw, 0);
    this.drops.push({ ...g, x: a.x + dx * 1.3, y: groundAt(a.x, a.z, 0.2, a.y + 0.1), z: a.z + dz * 1.3, t: this.time, yaw: a.yaw + 1.2 });
    a.inv[slot] = null;
  }

  dropCurrent(a) {
    if (a.cur === 'c4' && a.inv.c4) {
      a.inv.c4 = false;
      const [dx, , dz] = viewDir(a.yaw, 0);
      Object.assign(this.bomb, { state: 'dropped', carrier: -1, x: a.x + dx * 1.4, y: a.y, z: a.z + dz * 1.4 });
      this.emit({ type: 'bombDropped' });
      this.switchTo(a, a.bestSlot(), 0.3);
      return;
    }
    if (a.cur !== 'primary' && a.cur !== 'secondary') return;
    const slot = a.cur;
    this.dropItem(a, slot);
    a.cur = 'knife'; this.switchTo(a, a.bestSlot());
  }

  // ------------------------------------------------------------------ economy
  buy(a, item) {
    if (!this.canBuy(a)) return 'Not in buy zone / buy time over';
    const w = WEAPONS[item], gear = GEAR[item];
    const team = (w || gear)?.team;
    if (team && team !== a.team) return 'Not available for your team';
    let price = (w || gear).price;
    if (item === 'vesthelm' && a.armor >= 100 && !a.helmet) price = 350;
    if (a.money < price) return 'Not enough money';
    if (w && w.nade) {
      const n = a.inv.nades.filter((x) => x === item).length;
      if (n >= w.max) return 'Can\'t carry any more';
      if (a.inv.nades.length >= 4) return 'Can\'t carry any more grenades';
      a.inv.nades.push(item);
    } else if (w) {
      const slot = w.slot;
      if (a.inv[slot]?.id === item) return 'Already have one';
      if (a.inv[slot]) this.dropItem(a, slot);
      a.inv[slot] = { id: item, mag: w.mag, reserve: w.reserve };
      a.cur = 'knife'; this.switchTo(a, slot, 0.4);
    } else if (item === 'vest') {
      if (a.armor >= 100) return 'Already have kevlar';
      a.armor = 100;
    } else if (item === 'vesthelm') {
      if (a.armor >= 100 && a.helmet) return 'Already have kevlar + helmet';
      a.armor = 100; a.helmet = true;
    } else if (item === 'kit') {
      if (a.kit) return 'Already have a kit';
      a.kit = true;
    }
    a.money -= price;
    this.emit({ type: 'buy', a: a.id, item });
    return null;
  }

  // ------------------------------------------------------------------ visibility (shared by bots + radar)
  updateVisibility() {
    const A = this.agents;
    for (const a of A) {
      const row = this.vis[a.id]; row.fill(0);
      if (!a.alive) continue;
      const [vx, , vz] = viewDir(a.yaw, 0), ey = a.eyeY;
      for (const b of A) {
        if (!b.alive || b.team === a.team) continue;
        const dx = b.x - a.x, dz = b.z - a.z, d = Math.hypot(dx, dz);
        if (d > 110) continue;
        const hy = b.y + b.height * 0.9, cy = b.y + b.height * 0.6;
        let los = (lineClear(a.x, ey, a.z, b.x, hy, b.z) && !this.smokeBlocks(a.x, ey, a.z, b.x, hy, b.z)) ? 2
          : (lineClear(a.x, ey, a.z, b.x, cy, b.z) && !this.smokeBlocks(a.x, ey, a.z, b.x, cy, b.z)) ? 1 : 0;
        if (!los) continue;
        const inFov = (dx * vx + dz * vz) / (d || 1) > 0.42;
        row[b.id] = inFov ? 2 + los : 1; // 1 = LOS only, 3 = chest visible, 4 = head visible
        if (inFov && a.flash < 1) b.spotted[a.team] = this.time;
      }
    }
  }
}
