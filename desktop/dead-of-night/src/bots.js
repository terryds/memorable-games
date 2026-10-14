// Survivor bots: follow the player, fight, free pinned teammates, revive, heal, scavenge.
// They drive the exact same input interface as the human player.
import * as M from './map.js';
import { WEAPONS } from './sim.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const wrap = (a) => ((a + Math.PI * 3) % (Math.PI * 2)) - Math.PI;

export class BotBrain {
  constructor(s, game, slot) {
    this.s = s; this.g = game; this.slot = slot; // formation slot around the player
    this.path = null; this.pathT = 0; this.pathGoal = null; this.react = 0; this.target = null;
    this.yaw = s.yaw; this.pitch = 0; this.stuckT = 0; this.lastPos = [s.x, s.z]; this.healing = false; this.useHold = false;
  }

  goal() {
    const g = this.g, s = this.s, p = g.player;
    // rush the boat
    if (g.finale.boat) return [12, 20];
    // finale: hold the docks around the radio
    if (g.finale.started) return [20 + (this.slot - 2) * 4, 22 + (this.slot % 2) * 4];
    if (!p.alive) return [s.x, s.z];
    // formation behind the player
    const a = p.yaw + (this.slot - 2) * 0.7, r = 3.2 + this.slot * 0.6; // behind = +(sin, cos) of yaw
    let gx = p.x + Math.sin(a) * r, gz = p.z + Math.cos(a) * r;
    if (!M.clearAt(gx, gz, 0.45)) { gx = p.x; gz = p.z; }
    return [gx, gz];
  }

  think(dt) {
    const g = this.g, s = this.s, inp = { yaw: this.yaw, pitch: this.pitch };
    if (!s.alive) return inp;
    this.react -= dt;
    const surv = g.survivors;
    // ------------------------------------------------ threats
    let target = null, tScore = Infinity, close = 0, chasing = 0, cx = 0, cz = 0;
    for (const z of g.zombies) {
      if (z.dead) continue;
      const d = Math.hypot(z.x - s.x, z.z - s.z);
      if (z.state === 'chase') { chasing++; cx += z.x; cz += z.z; }
      if (d > (z.state === 'chase' ? 20 : 13)) continue;
      if (d < 2.2) close++;
      const sc = d * (z.state === 'chase' ? 1 : 2.5);
      if (sc < tScore && M.lineClear(s.x, s.eye, s.z, z.x, 1.3, z.z)) { tScore = sc; target = z; }
    }
    for (const sp of g.specials) {
      if (sp.dead) continue;
      if (sp.type === 'witch' && sp.state !== 'rage') continue; // never wake the witch
      const d = Math.hypot(sp.x - s.x, sp.z - s.z);
      if (d > (sp.type === 'tank' || sp.pin || sp.state === 'rage' ? 40 : 22)) continue;
      let sc = d * (sp.pin ? 0.05 : sp.type === 'tank' ? 0.4 : 0.6);
      if (sc < tScore && M.lineClear(s.x, s.eye, s.z, sp.x, 1.2, sp.z)) { tScore = sc; target = sp; }
    }
    if (target !== this.target) { this.target = target; this.react = 0.38 / g.diff.bot + Math.random() * 0.25; }

    // ------------------------------------------------ where to go
    let gx, gz, urgent = false, use = false;
    const pinned = surv.find((o) => o !== s && o.pinnedBy && !o.dead);
    const downed = surv.filter((o) => o !== s && o.incap && !o.dead && !o.pinnedBy).sort((a, b) => Math.hypot(a.x - s.x, a.z - s.z) - Math.hypot(b.x - s.x, b.z - s.z))[0];
    const tank = g.specials.find((q) => q.type === 'tank' && !q.dead);
    if (s.incap || s.pinnedBy) { gx = s.x; gz = s.z; }
    else if (pinned) { gx = pinned.x; gz = pinned.z; urgent = true; }
    else if (downed && close === 0 && !(tank && Math.hypot(tank.x - downed.x, tank.z - downed.z) < 6)) {
      gx = downed.x; gz = downed.z; urgent = true;
      if (Math.hypot(downed.x - s.x, downed.z - s.z) < 1.7) use = true;
    } else {
      [gx, gz] = this.goal();
      // scavenge on the way
      const want = this.wantItem();
      if (want && close === 0) { gx = want.x; gz = want.z; if (Math.hypot(want.x - s.x, want.z - s.z) < 1.8) { use = !this.useHold; } }
      // keep away from a tank
      if (tank && !tank.dead && Math.hypot(tank.x - s.x, tank.z - s.z) < 9) { const dx = s.x - tank.x, dz = s.z - tank.z, L = Math.hypot(dx, dz) || 1; gx = s.x + dx / L * 6; gz = s.z + dz / L * 6; }
    }
    // open the safe room door once the player heads out
    if (!g.doorOpen && Math.hypot(24 - s.x, 118 - s.z) < 2.6 && g.player.x > 18) use = true;
    this.useHold = use; inp.use = use;

    // ------------------------------------------------ movement
    const d = Math.hypot(gx - s.x, gz - s.z);
    let mx = 0, mz = 0;
    if (d > (urgent ? 0.9 : 1.6)) {
      this.pathT -= dt;
      const goalMoved = !this.pathGoal || Math.hypot(this.pathGoal[0] - gx, this.pathGoal[1] - gz) > 3;
      if (!this.path || this.pathT <= 0 || goalMoved) {
        this.path = M.walkLine(s.x, s.z, gx, gz) ? [[gx, gz]] : M.findPath(s.x, s.z, gx, gz);
        this.pathT = 1.2; this.pathGoal = [gx, gz];
      }
      while (this.path.length > 1 && Math.hypot(this.path[0][0] - s.x, this.path[0][1] - s.z) < 1.0) this.path.shift();
      const wp = this.path[0];
      mx = wp[0] - s.x; mz = wp[1] - s.z;
    }
    // back-pedal from a crowd while shooting
    if (close >= 2 && !urgent && target) { mx -= (target.x - s.x) * 0.6; mz -= (target.z - s.z) * 0.6; }
    const L = Math.hypot(mx, mz);
    const runFar = d > 14 || urgent;
    if (L > 0.05) {
      const fy = -Math.sin(s.yaw), fz = -Math.cos(s.yaw), ry = Math.cos(s.yaw), rz = -Math.sin(s.yaw);
      inp.fwd = (mx * fy + mz * fz) / L; inp.side = (mx * ry + mz * rz) / L;
      inp.walk = !runFar && d < 3;
    }
    // unstick
    this.stuckT = Math.hypot(s.x - this.lastPos[0], s.z - this.lastPos[1]) < 0.02 && L > 0.5 ? this.stuckT + dt : 0;
    this.lastPos = [s.x, s.z];
    if (this.stuckT > 0.6) { inp.jump = true; this.path = null; }

    // ------------------------------------------------ aiming
    let aimX, aimY, aimZ;
    if (target) {
      const head = !target.type || target.type === 'hunter';
      const n = (1.15 - g.diff.bot) * 0.8 + 0.35; // aim wobble
      aimX = target.x + (target.vx || 0) * 0.08 + (Math.random() - 0.5) * n; aimZ = target.z + (target.vz || 0) * 0.08 + (Math.random() - 0.5) * n;
      aimY = target.y + (target.type === 'tank' ? 1.5 : target.crouch || target.pin ? 0.7 : head && this.g.diff.bot > 0.95 ? 1.45 : 1.1);
    } else if (use && downed) { aimX = downed.x; aimY = 0.3; aimZ = downed.z; }
    else if (L > 0.05) { aimX = s.x + mx; aimY = s.eye; aimZ = s.z + mz; }
    if (aimX !== undefined) {
      const dx = aimX - s.x, dz = aimZ - s.z, dy = aimY - s.eye;
      const wantYaw = Math.atan2(-dx, -dz), wantPitch = Math.atan2(dy, Math.hypot(dx, dz));
      const turn = (target ? 9 : 5) * dt;
      this.yaw += clamp(wrap(wantYaw - this.yaw), -turn, turn);
      this.pitch += clamp(wantPitch - this.pitch, -turn, turn);
      inp.yaw = this.yaw; inp.pitch = this.pitch;
      if (target && this.react <= 0) {
        const err = Math.abs(wrap(wantYaw - this.yaw)) + Math.abs(wantPitch - this.pitch);
        const w = WEAPONS[s.weapon().id];
        const tol = (w.pellets > 1 ? 0.14 : 0.06) / g.diff.bot;
        const dist = Math.hypot(dx, dz);
        if (dist < 1.6 && !target.type && Math.abs(wrap(wantYaw - this.yaw)) < 0.6) inp.alt = true; // shove
        else if (target.pin && dist < 2) inp.alt = true;
        else if (err < tol && dist < w.range) { this.burst = (this.burst || 0) + dt; inp.fire = w.auto ? this.burst % 1.1 < 0.65 : Math.random() < 0.35; }
      }
    }

    // ------------------------------------------------ inventory
    if (s.primary && s.cur !== 'primary' && !this.healing && s.cur !== 'throw') inp.slot = 'primary';
    if (!s.primary && s.cur !== 'secondary' && !this.healing) inp.slot = 'secondary';
    const w = s.weapon();
    if (!target && w.mag < WEAPONS[w.id].mag * 0.4 && w.reserve > 0) inp.reload = true;
    // heal when it's quiet
    const quiet = chasing < 2 && !target && !pinned && !downed;
    if (s.medkit && s.hp < 40 && quiet && !s.incap) { this.healing = true; }
    if (this.healing) {
      if (!s.medkit || !quiet || s.hp >= 99) this.healing = false;
      else { inp.slot = s.cur !== 'med' ? 'med' : null; inp.fire = s.cur === 'med'; inp.fwd = inp.side = 0; }
    }
    if (s.pills && s.hp < 50 && !this.healing && !s.incap) { if (s.cur !== 'pills') inp.slot = 'pills'; else inp.fire = true; }
    // pipe bomb into a big horde
    if (s.throwable === 'pipe' && chasing > 14 && !s.incap) {
      if (s.cur !== 'throw') inp.slot = 'throw';
      else { const ax = cx / chasing, az = cz / chasing; this.yaw = Math.atan2(-(ax - s.x), -(az - s.z)); inp.yaw = this.yaw; inp.pitch = 0.35; inp.fire = true; }
    }
    return inp;
  }

  wantItem() {
    const g = this.g, s = this.s;
    let best = null, bd = 11;
    for (const it of g.items) {
      if (it.taken) continue;
      const d = Math.hypot(it.x - s.x, it.z - s.z);
      if (d > bd) continue;
      let want = false;
      if (it.type === 'weapon') { const w = WEAPONS[it.wid]; want = !s.primary || (WEAPONS[s.primary.id].tier < w.tier); if (want && it.wid === 'rifle') want = false; }
      else if (it.type === 'ammo') want = s.primary && s.primary.reserve < WEAPONS[s.primary.id].reserve * 0.5;
      else if (it.type === 'medkit') want = !s.medkit;
      else if (it.type === 'pills') want = !s.pills;
      else if (it.type === 'pipe' || it.type === 'molotov') want = !s.throwable && it.type === 'pipe';
      if (want && M.lineClear(s.x, 1.2, s.z, it.x, it.y, it.z)) { best = it; bd = d; }
    }
    return best;
  }
}
