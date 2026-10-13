// Bot AI. Every bot produces the same input struct the player does (move axes, view angles,
// buttons), so bots obey the same movement, recoil and accuracy rules.
import { findPath, randomNear, siteAt, SITES } from './map.js';
import { WEAPONS } from './weapons.js';

export const SKILL = {
  easy: { react: 0.8, aimErr: 0.075, turn: 5, snap: 6, spray: 0.2, head: 0.12, burst: 3, stop: 0.45 },
  normal: { react: 0.45, aimErr: 0.035, turn: 9, snap: 10, spray: 0.55, head: 0.3, burst: 4, stop: 0.8 },
  hard: { react: 0.26, aimErr: 0.017, turn: 14, snap: 16, spray: 0.85, head: 0.5, burst: 6, stop: 0.95 },
};

// T routes (via points) — the A* fills in the corners between them
const ROUTES = {
  A_long: [[106, 94], [106, 86], [120, 84], [134, 76], [134, 44], [132, 36]],
  A_short: [[74, 94], [74, 70], [74, 46], [90, 44], [106, 44], [107, 37]],
  B_tun: [[50, 94], [46, 90], [20, 90], [8, 86], [8, 44], [8, 38]],
  B_mid: [[74, 94], [74, 66], [50, 62], [10, 62], [8, 44], [8, 38]],
};
const T_HOLDS = {
  A: [[[124, 6], [96, 12]], [[112, 30], [96, 12]], [[136, 20], [94, 12]], [[130, 30], [108, 38]], [[116, 8], [106, 38]]],
  B: [[[30, 8], [48, 16]], [[34, 26], [48, 16]], [[12, 20], [48, 16]], [[6, 6], [48, 16]], [[24, 32], [44, 14]]],
};
const PLANT_SPOTS = { A: [[120, 22], [126, 14], [114, 26]], B: [[20, 22], [16, 12], [26, 26]] };
const CT_HOLDS = {
  A: [[[124, 26], [134, 40]], [[112, 14], [107, 38]], [[136, 14], [134, 40]]],
  B: [[[26, 30], [8, 38]], [[8, 12], [8, 40]], [[34, 12], [10, 38]]],
  mid: [[[66, 30], [76, 52]]],
};
const CT_ROLES = ['A', 'B', 'mid', 'A', 'B', 'A', 'B', 'mid', 'A'];

const wrap = (a) => { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a; };
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const rand = (a, b) => a + Math.random() * (b - a);
const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) * 1.15;
const yawTo = (dx, dz) => Math.atan2(-dx, -dz);

export class BotBrain {
  constructor(a, game, base) {
    this.a = a; this.g = game;
    // per-bot personality around the difficulty baseline
    const j = () => rand(0.85, 1.15);
    this.s = { ...base, react: base.react * j(), aimErr: base.aimErr * j(), turn: base.turn * j() };
    // defenders know the angles: CTs get a small edge so bot-vs-bot rounds stay balanced
    if (a.team === 'CT') { this.s.react *= 0.7; this.s.aimErr *= 0.72; }
    this.inp = { fwd: 0, side: 0, jump: false, crouch: false, walk: false, fire: false, alt: false, reload: false, use: false, slot: null, drop: false, yaw: 0, pitch: 0 };
  }

  roundStart() {
    const a = this.a, g = this.g;
    Object.assign(this, {
      path: null, pathGoal: null, pi: 0, target: null, reactT: 0, trackT: 0, lastSeen: null, noise: null,
      errY: 0, errP: 0, errTY: 0, errTP: 0, errT: 0, burstN: 0, pauseT: 0, strafe: Math.random() < 0.5 ? -1 : 1, strafeT: 0,
      stopToShoot: true, crouchShoot: false, aimHead: false, bought: false, buyT: rand(0.4, 3), stuckT: 0, stuckN: 0,
      lastX: a.x, lastZ: a.z, via: 0, mode: 'route', holdT: 0, sweep: rand(0, 6), nadeStage: 0, scopeT: 0, lookT: 0, prevFire: false,
      postSpot: null, jumpCd: 0,
    });
    if (a.team === 'T') {
      if (!g.tPlan || g.tPlan.round !== g.round) {
        const site = Math.random() < 0.5 ? 'A' : 'B';
        g.tPlan = { round: g.round, site, n: 0 };
      }
      const plan = g.tPlan, k = plan.n++;
      const routes = plan.site === 'A' ? ['A_long', 'A_short', 'A_long', 'A_short', 'A_long'] : ['B_tun', 'B_tun', 'B_mid', 'B_tun', 'B_tun'];
      this.site = plan.site;
      this.route = ROUTES[routes[k % routes.length]];
      this.hold = T_HOLDS[plan.site][k % 5];
      this.plantSpot = PLANT_SPOTS[plan.site][Math.floor(Math.random() * 3)];
      this.waitT = rand(0, 3) + (routes[k % routes.length].includes('short') || routes[k % routes.length].includes('mid') ? 3 : 0);
    } else {
      const k = g.agents.filter((b) => b.team === 'CT' && b.isBot && b.id < a.id).length;
      this.role = CT_ROLES[k % CT_ROLES.length];
      const holds = CT_HOLDS[this.role];
      this.hold = holds[Math.floor(k / 3) % holds.length];
      this.waitT = 0;
    }
  }

  hear(e) {
    const a = this.a; if (!a.alive) return;
    let src, range;
    if (e.type === 'shot' || e.type === 'step') { src = this.g.agents[e.a]; if (!src || src.team === a.team) return; range = e.type === 'shot' ? 55 : 20; }
    else if (e.type === 'he') { src = e; range = 35; } else return;
    const d = Math.hypot(src.x - a.x, src.z - a.z);
    if (d < range) this.noise = { x: src.x, y: (src.y ?? 0) + 1.4, z: src.z, t: this.g.time };
  }

  think(dt) {
    const a = this.a, g = this.g, inp = this.inp, s = this.s;
    Object.assign(inp, { fwd: 0, side: 0, jump: false, crouch: false, walk: false, fire: false, alt: false, reload: false, use: false, slot: null, drop: false });
    inp.yaw = a.yaw; inp.pitch = a.pitch;
    if (g.phase === 'freeze') {
      if (!this.bought && (this.buyT -= dt) <= 0) { this.bought = true; this.buy(); }
      this.lookAt(a.x - Math.sin(a.yaw) * 10, a.eyeY, a.z - Math.cos(a.yaw) * 10, dt);
      return inp;
    }
    if (g.phase === 'end' || g.phase === 'over') return inp;
    this.jumpCd -= dt;

    this.perceive(dt);
    const w = WEAPONS[a.weaponId()];

    if (this.nadeStage && (!a.inv.nades.length || this.target)) this.nadeStage = 0;
    // keep the best gun out (unless planting / throwing)
    const busy = a.plantT > 0 || a.defuseT > 0 || this.nadeStage > 0 || a.nadeHeld;
    if (!busy && a.cur !== a.bestSlot() && a.cur !== 'c4') inp.slot = a.bestSlot();
    const gun = a.gun();
    if (gun && gun.mag === 0 && gun.reserve === 0) {
      const other = a.cur === 'primary' ? (a.inv.secondary?.mag || a.inv.secondary?.reserve ? 'secondary' : 'knife') : 'knife';
      inp.slot = other; if (a.cur === 'primary') a.inv.primary = null;
    }

    let move = null; // desired world-space direction
    if (this.target && this.reactT <= 0) {
      move = this.fight(dt, w);
    } else {
      if (!this.target && gun && gun.mag < WEAPONS[gun.id].mag * 0.4 && gun.reserve > 0 && a.reloadT <= 0 && (!this.lastSeen || g.time - this.lastSeen.t > 1.2)) inp.reload = true;
      const goal = this.goal(dt);
      if (goal) move = this.moveTo(goal[0], goal[1]);
      this.idleLook(dt, move);
      if (this.target) { this.aim(this.target, dt); move = null; } // reacting: freeze up and turn toward it
    }
    if (move) {
      // separation from teammates
      let mx = move[0], mz = move[1];
      for (const b of g.agents) {
        if (b === a || !b.alive || b.team !== a.team) continue;
        const dx = a.x - b.x, dz = a.z - b.z, d = Math.hypot(dx, dz);
        if (d < 1.3 && d > 0.01) { mx += dx / d * (1.3 - d) * 1.5; mz += dz / d * (1.3 - d) * 1.5; }
      }
      const sy = Math.sin(inp.yaw), cy = Math.cos(inp.yaw);
      // world dir → (fwd, side) relative to the view
      inp.fwd = clamp(-sy * mx - cy * mz, -1, 1);
      inp.side = clamp(cy * mx - sy * mz, -1, 1);
      this.unstick(dt);
    } else { this.stuckT = 0; this.lastX = a.x; this.lastZ = a.z; }
    this.prevFire = inp.fire;
    return inp;
  }

  // ---------------------------------------------------------------- perception
  perceive(dt) {
    const a = this.a, g = this.g, row = g.vis[a.id];
    let best = null, bd = Infinity;
    if (a.flash < 0.9) {
      for (const b of g.agents) {
        if (!b.alive || b.team === a.team) continue;
        const v = row[b.id];
        const aware = v >= 3 || (v === 1 && (b === this.target || (b.id === a.lastAttacker && g.time - a.lastHurt < 2.5)));
        if (!aware) continue;
        let d = Math.hypot(b.x - a.x, b.z - a.z);
        if (b === this.target) d *= 0.6;
        if (d < bd) { bd = d; best = b; }
      }
    }
    if (best !== this.target) {
      if (best) {
        let r = this.s.react * rand(0.8, 1.3);
        if (this.target) r *= 0.45;
        if (best.id === a.lastAttacker && g.time - a.lastHurt < 1.5) r *= 0.7;
        if (row[best.id] === 1) r += 0.15; // had to turn around
        // holding a still, pre-aimed angle beats running into it
        r *= a.moveSpeed < 1 ? 0.7 : 1.25;
        const off = Math.abs(wrap(yawTo(best.x - a.x, best.z - a.z) - a.yaw));
        if (off < 0.3) r *= 0.8;
        this.reactT = r; this.trackT = 0; this.burstN = 0; this.pauseT = 0;
        this.aimHead = Math.random() < this.s.head;
        this.stopToShoot = Math.random() < this.s.stop;
        this.crouchShoot = Math.random() < 0.25;
        this.errTY = gauss() * this.s.aimErr * 2.2; this.errTP = gauss() * this.s.aimErr * 1.5; this.errY = this.errTY; this.errP = this.errTP;
      }
      this.target = best;
    }
    if (best) {
      this.reactT -= dt; this.trackT += dt;
      this.lastSeen = { x: best.x, y: best.y + 1.3, z: best.z, t: g.time };
      const site = siteAt(best.x, best.z) || nearSite(best.x, best.z);
      g.intel[a.team] = { x: best.x, z: best.z, t: g.time, site };
      g.seen[a.team][best.id] = { site, t: g.time };
    }
  }

  // ---------------------------------------------------------------- combat
  aim(b, dt) {
    const a = this.a, s = this.s;
    const ty = b.y + b.height * (this.aimHead ? 0.9 : 0.64);
    const dx = b.x - a.x, dz = b.z - a.z, d = Math.hypot(dx, dz);
    // slowly wandering aim error that tightens while tracking
    this.errT -= dt;
    if (this.errT <= 0) {
      this.errT = rand(0.25, 0.5);
      const m = 1 + Math.min(1.5, Math.hypot(b.vx, b.vz) / 4);
      this.errTY = gauss() * s.aimErr * m; this.errTP = gauss() * s.aimErr * 0.7 * m;
    }
    const k = 1 - Math.exp(-dt * 4);
    this.errY += (this.errTY - this.errY) * k; this.errP += (this.errTP - this.errP) * k;
    const tight = Math.max(0.35, 1 - this.trackT * 0.7) * (a.moveSpeed < 0.5 ? 0.75 : 1.15);
    const desY = yawTo(dx, dz) + this.errY * tight - a.punchY * s.spray;
    const desP = Math.atan2(ty - a.eyeY, d) + this.errP * tight - a.punchP * s.spray;
    this.turnTo(desY, desP, dt);
    return { dy: wrap(desY - this.inp.yaw), dp: desP - this.inp.pitch, d };
  }

  turnTo(desY, desP, dt) {
    const inp = this.inp, s = this.s;
    const dy = wrap(desY - inp.yaw), dp = desP - inp.pitch;
    const f = Math.min(1, s.snap * dt), mx = s.turn * dt;
    inp.yaw = wrap(inp.yaw + clamp(dy * f, -mx, mx));
    inp.pitch = clamp(inp.pitch + clamp(dp * f, -mx, mx), -1.4, 1.4);
  }

  lookAt(x, y, z, dt, slow = 1) {
    const a = this.a, dx = x - a.x, dz = z - a.z;
    const desY = yawTo(dx, dz), desP = Math.atan2(y - a.eyeY, Math.hypot(dx, dz));
    const inp = this.inp, f = Math.min(1, 5 * slow * dt), mx = this.s.turn * 0.6 * dt;
    inp.yaw = wrap(inp.yaw + clamp(wrap(desY - inp.yaw) * f, -mx, mx));
    inp.pitch = clamp(inp.pitch + clamp((desP - inp.pitch) * f, -mx, mx), -1.4, 1.4);
  }

  fight(dt, w) {
    const a = this.a, g = this.g, inp = this.inp, s = this.s, b = this.target;
    const { dy, dp, d } = this.aim(b, dt);
    let move = null;
    // knife only: run at them
    if (w.slot === 'knife' || !a.gun()) {
      if (!a.inv.primary && !a.inv.secondary) {
        move = this.moveTo(b.x, b.z);
        if (d < 2) inp.fire = true;
        return move;
      }
    }
    const g2 = a.gun();
    if (g2 && g2.mag === 0) {
      if (a.cur === 'primary' && a.inv.secondary && (a.inv.secondary.mag > 0) && d < 25) inp.slot = 'secondary';
      else inp.reload = true;
      move = this.strafeMove(dt);
      return move;
    }
    // AWP: scope in first
    if (w.scope) {
      if (a.scope === 0 && !a.rescope && d > 6 && a.reloadT <= 0) { if (!this.prevAlt) inp.alt = true; this.scopeT = 0; }
      this.prevAlt = inp.alt;
      if (a.scope) this.scopeT += dt;
    }
    const tol = Math.atan2(0.26, d) + 0.006;
    const aligned = Math.abs(dy) < tol && Math.abs(dp) < tol * 1.3;
    const settled = a.moveSpeed < a.maxSpeed() * 0.36 || !this.stopToShoot;
    let wantFire = aligned && settled && (!w.scope || a.scope || d <= 6) && (!w.scope || this.scopeT > 0.18 || d <= 6);
    if (w.auto) {
      const burst = d < 10 ? 14 : d < 25 ? s.burst + 2 : s.burst;
      if (this.pauseT > 0) { this.pauseT -= dt; wantFire = false; }
      else if (a.shots >= burst) { this.pauseT = rand(0.22, 0.45) * (d > 25 ? 1.3 : 1); wantFire = false; }
      // keep spraying once started if roughly on target
      if (a.fireHeld && this.pauseT <= 0 && Math.abs(dy) < tol * 2.5 && a.shots < burst) wantFire = true;
      inp.fire = wantFire;
    } else {
      inp.fire = wantFire && !a.fireHeld;
    }
    if (this.stopToShoot && (wantFire || a.shots > 0 || aligned)) {
      move = null;
      inp.crouch = this.crouchShoot && d > 15 && w.auto;
    } else move = this.strafeMove(dt);
    if (!aligned && Math.abs(dy) > 0.6) move = this.strafeMove(dt);
    return move;
  }

  strafeMove(dt) {
    const a = this.a;
    this.strafeT -= dt;
    if (this.strafeT <= 0) { this.strafeT = rand(0.35, 0.9); this.strafe = -this.strafe; }
    const rx = Math.cos(this.inp.yaw), rz = -Math.sin(this.inp.yaw);
    // don't strafe into walls: unstick handles flips
    return [rx * this.strafe, rz * this.strafe];
  }

  // ---------------------------------------------------------------- goals
  goal(dt) {
    const a = this.a, g = this.g, b = g.bomb, inp = this.inp;
    if (this.waitT > 0 && g.roundT > 100) { this.waitT -= dt; if (this.waitT > 0) return null; }
    // throw an HE at the last place we saw someone
    if (this.nadeStage || this.tryNade()) return null;
    if (a.team === 'T') {
      if (b.state === 'dropped') {
        const ts = g.alive('T').filter((t) => t.isBot);
        const near = ts.sort((p, q) => Math.hypot(p.x - b.x, p.z - b.z) - Math.hypot(q.x - b.x, q.z - b.z))[0];
        if (near === a) return [b.x, b.z];
      }
      if (b.state === 'planted') {
        if (!this.postSpot) this.postSpot = randomNear(b.x, b.z, 9);
        if (Math.hypot(a.x - this.postSpot[0], a.z - this.postSpot[1]) < 1) { this.mode = 'hold'; return null; }
        return this.postSpot;
      }
      if (a.inv.c4) {
        const site = siteAt(a.x, a.z);
        if (site && (site === this.site || g.roundT < 30)) {
          const sp = site === this.site ? this.plantSpot : [a.x, a.z];
          if (Math.hypot(a.x - sp[0], a.z - sp[1]) < 1.2 || g.roundT < 25) { if (!this.target) inp.use = true; return null; }
          return sp;
        }
        if (g.roundT < 45 && this.via < this.route.length) this.waitT = 0;
      }
      if (this.via < this.route.length) {
        const p = this.route[this.via];
        if (Math.hypot(a.x - p[0], a.z - p[1]) < 3) this.via++;
        return p;
      }
      if (a.inv.c4) return this.plantSpot;
      // hold an angle on site; last T alive goes hunting if the bomb is gone
      const hs = this.hold[0];
      if (Math.hypot(a.x - hs[0], a.z - hs[1]) < 1.2) { this.mode = 'hold'; return null; }
      return hs;
    }
    // CT
    if (b.state === 'planted') {
      const d = Math.hypot(a.x - b.x, a.z - b.z);
      const cts = g.alive('CT').filter((c) => c.isBot).sort((p, q) => Math.hypot(p.x - b.x, p.z - b.z) - Math.hypot(q.x - b.x, q.z - b.z));
      if (cts[0] === a || d < 12) {
        if (d < 1.2) { if (!this.target && (!this.lastSeen || g.time - this.lastSeen.t > 1.2 || b.timer < (a.kit ? 6 : 11))) inp.use = true; return null; }
        return [b.x, b.z];
      }
      if (!this.postSpot) this.postSpot = randomNear(b.x, b.z, 10);
      if (Math.hypot(a.x - this.postSpot[0], a.z - this.postSpot[1]) < 1) return null;
      return this.postSpot;
    }
    const intel = g.intel.CT;
    // rotate on info: mid goes to any call; one player from the other site goes when 2+ Ts are seen there
    if (!this.rotate) {
      const heat = { A: 0, B: 0 };
      for (const id in g.seen.CT) { const e = g.seen.CT[id]; if (e.site && g.time - e.t < 6 && g.agents[id].alive) heat[e.site]++; }
      for (const site of ['A', 'B']) {
        if (this.role === site || !heat[site]) continue;
        const first = g.agents.find((b) => b.alive && b.isBot && b.team === 'CT' && g.brains.get(b.id).role === this.role) === a;
        if (this.role === 'mid' || (heat[site] >= 2 && first)) this.rotate = { site, p: randomNear(SITES[site].x, SITES[site].z, 9) };
      }
    }
    if (this.rotate) {
      if (Math.hypot(a.x - this.rotate.p[0], a.z - this.rotate.p[1]) < 1.2) return null;
      return this.rotate.p;
    }
    const alive = g.alive('CT');
    if (alive.length === 1 && g.roundT < 50 && intel) return [intel.x, intel.z];
    const hs = this.hold[0];
    if (Math.hypot(a.x - hs[0], a.z - hs[1]) < 1.2) { this.mode = 'hold'; return null; }
    return hs;
  }

  tryNade() {
    const a = this.a, g = this.g;
    if (!a.inv.nades.includes('he') || !this.lastSeen || this.target) return false;
    const age = g.time - this.lastSeen.t, d = Math.hypot(this.lastSeen.x - a.x, this.lastSeen.z - a.z);
    if (age < 0.8 || age > 4 || d < 8 || d > 20) return false;
    while (a.inv.nades[0] !== 'he') a.inv.nades.push(a.inv.nades.shift());
    this.nadeStage = 1; this.nadeAt = { ...this.lastSeen, d };
    return true;
  }

  // ---------------------------------------------------------------- moving & looking
  moveTo(x, z) {
    const a = this.a;
    if (!this.path || !this.pathGoal || Math.hypot(this.pathGoal[0] - x, this.pathGoal[1] - z) > 1.5) {
      this.path = findPath(a.x, a.z, x, z); this.pathGoal = [x, z]; this.pi = 0;
    }
    while (this.pi < this.path.length) {
      const p = this.path[this.pi];
      const d = Math.hypot(p[0] - a.x, p[1] - a.z);
      if (d < (this.pi === this.path.length - 1 ? 0.6 : 1.1)) { this.pi++; continue; }
      return [(p[0] - a.x) / d, (p[1] - a.z) / d];
    }
    return null;
  }

  unstick(dt) {
    const a = this.a;
    this.stuckT += dt;
    if (this.stuckT > 0.7) {
      const moved = Math.hypot(a.x - this.lastX, a.z - this.lastZ);
      if (moved < 0.5) {
        this.stuckN++;
        if (this.jumpCd <= 0) { this.inp.jump = true; this.jumpCd = 0.8; }
        this.strafe = -this.strafe;
        if (this.stuckN >= 2) { this.path = null; this.stuckN = 0; }
      } else this.stuckN = 0;
      this.stuckT = 0; this.lastX = a.x; this.lastZ = a.z;
    }
  }

  idleLook(dt, move) {
    const a = this.a, g = this.g;
    if (this.nadeStage) return this.nadeLook(dt);
    if (this.noise && g.time - this.noise.t < 2.5) return this.lookAt(this.noise.x, this.noise.y, this.noise.z, dt, 1.4);
    if (this.lastSeen && g.time - this.lastSeen.t < 3) return this.lookAt(this.lastSeen.x, this.lastSeen.y, this.lastSeen.z, dt, 1.4);
    if (!move && (this.mode === 'hold' || this.hold)) {
      const b = g.bomb;
      let L = this.hold ? this.hold[1] : null;
      if (b.state === 'planted' && a.team === 'T') L = this.hold[1];
      if (b.state === 'planted' && a.team === 'CT') L = [b.x, b.z];
      if (L) {
        this.sweep += dt * 0.6;
        const sx = Math.sin(this.sweep) * 3;
        return this.lookAt(L[0] + sx, 1.5, L[1] + sx, dt, 0.7);
      }
    }
    if (move) {
      // look a bit ahead along the path
      const p = this.path && this.path[Math.min(this.pi + 1, this.path.length - 1)];
      const tx = p ? p[0] : a.x + move[0] * 5, tz = p ? p[1] : a.z + move[1] * 5;
      const dx = tx - a.x, dz = tz - a.z, d = Math.hypot(dx, dz);
      if (d > 0.5) this.lookAt(a.x + dx / d * 8 + move[0] * 4, a.eyeY, a.z + dz / d * 8 + move[1] * 4, dt, 0.8);
    }
  }

  nadeLook(dt) {
    const a = this.a, n = this.nadeAt, inp = this.inp;
    if (a.cur !== 'nade') { inp.slot = 'nade'; return; }
    const dx = n.x - a.x, dz = n.z - a.z;
    const desY = yawTo(dx, dz), desP = 0.5 * Math.asin(Math.min(0.99, n.d / 18)) - 0.12;
    this.turnTo(desY, desP, dt);
    if (a.switchT > 0) return;
    if (this.nadeStage === 1 && Math.abs(wrap(desY - inp.yaw)) < 0.05) { inp.fire = true; this.nadeStage = 2; }
    else if (this.nadeStage === 2) { inp.fire = false; this.nadeStage = 0; this.lastSeen = null; }
  }

  // ---------------------------------------------------------------- economy
  buy() {
    const a = this.a, g = this.g, m = () => a.money;
    const T = a.team === 'T', rifle = T ? 'ak47' : 'm4a1', rp = T ? 2700 : 3100;
    if (!a.inv.primary) {
      if (m() >= 4750 + 1000 && Math.random() < 0.18) g.buy(a, 'awp');
      else if (m() >= rp + 650) g.buy(a, rifle);
      else if (m() >= 1500 + 650 && g.round > 1 && Math.random() < 0.5) g.buy(a, 'mp5');
      else if (m() >= 700 && g.round > 1 && Math.random() < 0.35 && a.inv.secondary?.id !== 'deagle') g.buy(a, 'deagle');
    }
    if (a.armor < 100 || !a.helmet) { if (m() >= 1000 && (a.inv.primary || g.round === 1)) g.buy(a, 'vesthelm'); else if (m() >= 650) g.buy(a, 'vest'); }
    if (!T && !a.kit && m() >= 400 && a.inv.primary) g.buy(a, 'kit');
    if (m() >= 300 && a.inv.primary && Math.random() < 0.6) g.buy(a, 'he');
  }
}

function nearSite(x, z) {
  for (const k of ['A', 'B']) if (Math.hypot(SITES[k].x - x, SITES[k].z - z) < 30) return k;
  return null;
}
