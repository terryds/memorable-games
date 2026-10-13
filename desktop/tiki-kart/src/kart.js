import * as THREE from 'three';
import { HW } from './track.js';

export const CLASSES = {
  balanced: { label: 'BALANCED', top: 31, accel: 20, turn: 1.0, stats: { speed: 0.7, accel: 0.7, turn: 0.7 } },
  speed: { label: 'SPEED', top: 33, accel: 17, turn: 0.9, stats: { speed: 1.0, accel: 0.5, turn: 0.5 } },
  accel: { label: 'ACCEL', top: 30.5, accel: 25, turn: 1.0, stats: { speed: 0.6, accel: 1.0, turn: 0.7 } },
  turn: { label: 'TURNING', top: 30.5, accel: 20, turn: 1.18, stats: { speed: 0.6, accel: 0.7, turn: 1.0 } },
};

export const CHARACTERS = [
  { id: 'mango', name: 'MANGO', emoji: '🐯', kart: '#ff8a1f', body: '#ffa53a', cls: 'balanced', blurb: 'Island tiger. Never brakes.' },
  { id: 'pip', name: 'PIP', emoji: '🐰', kart: '#ff5fae', body: '#fff0f6', cls: 'turn', blurb: 'Hops corners like nobody else.' },
  { id: 'rex', name: 'REX', emoji: '🦖', kart: '#3fbf3f', body: '#47b84a', cls: 'speed', blurb: 'Tiny arms. Huge top speed.' },
  { id: 'bolt', name: 'BOLT', emoji: '🤖', kart: '#2f7dff', body: '#c9d4e6', cls: 'accel', blurb: 'Zero to turbo in a blink.' },
  { id: 'waddle', name: 'WADDLE', emoji: '🐧', kart: '#8a5cff', body: '#22262e', cls: 'turn', blurb: 'Slides on everything.' },
  { id: 'koa', name: 'KOA', emoji: '🐻', kart: '#e8322b', body: '#8a5a32', cls: 'speed', blurb: 'Heavy foot, heavy heart.' },
];

function headFor(id, toon, body) {
  const g = new THREE.Group();
  const white = toon('#ffffff'), black = toon('#141414');
  const eyes = (y = 0.12, z = 0.44, sx = 0.2, r = 0.13) => {
    for (const s of [-1, 1]) {
      const e = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 10), white); e.position.set(s * sx, y, z); g.add(e);
      const p = new THREE.Mesh(new THREE.SphereGeometry(r * 0.5, 8, 8), black); p.position.set(s * sx, y, z + r * 0.75); g.add(p);
    }
  };
  if (id === 'bolt') {
    const h = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.75, 0.8), body); g.add(h);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.22, 0.05), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4, 2.2, 2.6) })); visor.position.set(0, 0.08, 0.41); g.add(visor);
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.5), black); ant.position.set(0.25, 0.6, 0); g.add(ant);
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.09), new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 0.3, 0.3) })); ball.position.set(0.25, 0.86, 0); g.add(ball);
    return g;
  }
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.52, 18, 14), body); head.scale.set(1, 0.95, 0.95); g.add(head);
  if (id === 'mango') {
    for (const s of [-1, 1]) { const ear = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), body); ear.position.set(s * 0.36, 0.42, -0.05); g.add(ear); }
    const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 10), white); muzzle.position.set(0, -0.14, 0.38); muzzle.scale.set(1.2, 0.8, 0.7); g.add(muzzle);
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.08), toon('#d8322b')); nose.position.set(0, -0.06, 0.55); g.add(nose);
    for (const s of [-1, 1]) for (let k = 0; k < 2; k++) { const st = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.22, 0.05), black); st.position.set(s * (0.46 - k * 0.06), 0.1 + k * 0.2, 0.18); st.rotation.z = s * 0.4; g.add(st); }
    eyes(0.14, 0.4);
  } else if (id === 'pip') {
    for (const s of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.6, 4, 8), body); ear.position.set(s * 0.2, 0.75, -0.05); ear.rotation.z = -s * 0.18; g.add(ear);
      const inner = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.45, 4, 6), toon('#ff8fc4')); inner.position.set(s * 0.2, 0.75, 0.04); inner.rotation.z = -s * 0.18; g.add(inner);
    }
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.07), toon('#ff5fae')); nose.position.set(0, -0.04, 0.5); g.add(nose);
    eyes(0.14, 0.42);
  } else if (id === 'rex') {
    const snout = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.36, 0.5), body); snout.position.set(0, -0.12, 0.42); g.add(snout);
    for (let k = 0; k < 4; k++) { const sp = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.28, 5), toon('#ffde3b')); sp.position.set(0, 0.42 - k * 0.12, -0.3 - k * 0.12); sp.rotation.x = -0.6 - k * 0.2; g.add(sp); }
    for (const s of [-1, 1]) { const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.1, 4), white); tooth.position.set(s * 0.15, -0.32, 0.62); tooth.rotation.x = Math.PI; g.add(tooth); }
    eyes(0.2, 0.36, 0.22);
  } else if (id === 'waddle') {
    const face = new THREE.Mesh(new THREE.SphereGeometry(0.4, 14, 12), white); face.position.set(0, -0.02, 0.22); face.scale.set(1, 1, 0.7); g.add(face);
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.3, 8), toon('#ff9f1c')); beak.rotation.x = Math.PI / 2; beak.position.set(0, -0.08, 0.58); g.add(beak);
    eyes(0.14, 0.45, 0.16, 0.11);
  } else if (id === 'koa') {
    for (const s of [-1, 1]) { const ear = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), body); ear.position.set(s * 0.38, 0.4, -0.05); g.add(ear); }
    const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 10), toon('#d9b07a')); muzzle.position.set(0, -0.15, 0.4); muzzle.scale.set(1.1, 0.8, 0.8); g.add(muzzle);
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.09), black); nose.position.set(0, -0.06, 0.6); g.add(nose);
    eyes(0.14, 0.4);
  }
  return g;
}

export function buildKart(ch, gradient, glowTex) {
  const toon = (c) => new THREE.MeshToonMaterial({ color: c, gradientMap: gradient });
  const group = new THREE.Group(), body = new THREE.Group();
  group.add(body);
  const paint = toon(ch.kart), dark = toon('#24262c'), metal = toon('#b9c0cc'), tireM = toon('#1a1a1d'), driverM = toon(ch.body);
  const add = (geo, mat, x, y, z, parent = body) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); parent.add(m); return m; };
  // chassis
  add(new THREE.BoxGeometry(1.5, 0.28, 2.5), paint, 0, 0.42, 0);
  const nose = add(new THREE.BoxGeometry(1.3, 0.3, 0.9), paint, 0, 0.48, 1.45); nose.rotation.x = 0.28;
  add(new THREE.BoxGeometry(1.9, 0.16, 0.36), dark, 0, 0.36, 1.9); // bumper
  for (const s of [-1, 1]) add(new THREE.BoxGeometry(0.36, 0.34, 1.3), paint, s * 0.92, 0.46, 0.05); // side pods
  add(new THREE.BoxGeometry(1.0, 0.5, 0.75), dark, 0, 0.75, -1.05); // engine
  const pipes = [];
  for (const s of [-1, 1]) { const p = add(new THREE.CylinderGeometry(0.1, 0.12, 0.7, 10), metal, s * 0.32, 0.95, -1.42); p.rotation.x = -1.0; pipes.push(new THREE.Vector3(s * 0.32, 1.12, -1.72)); }
  add(new THREE.BoxGeometry(1.7, 0.08, 0.4), paint, 0, 1.42, -1.38); // spoiler
  for (const s of [-1, 1]) add(new THREE.BoxGeometry(0.06, 0.45, 0.25), dark, s * 0.6, 1.2, -1.38);
  add(new THREE.BoxGeometry(0.8, 0.6, 0.2), dark, 0, 0.85, -0.5); // seat back
  const wheelCol = add(new THREE.CylinderGeometry(0.05, 0.05, 0.5), dark, 0, 0.95, 0.55); wheelCol.rotation.x = -0.9;
  const steer = add(new THREE.TorusGeometry(0.22, 0.045, 8, 18), dark, 0, 1.1, 0.42); steer.rotation.x = -0.7;
  // number plate
  // driver
  const driver = new THREE.Group(); driver.position.set(0, 0.62, -0.2); body.add(driver);
  add(new THREE.CylinderGeometry(0.34, 0.42, 0.75, 12), driverM, 0, 0.45, 0, driver);
  for (const s of [-1, 1]) { const arm = add(new THREE.CapsuleGeometry(0.1, 0.45, 4, 8), driverM, s * 0.32, 0.55, 0.35, driver); arm.rotation.x = -1.1; }
  const head = headFor(ch.id, toon, driverM); head.position.set(0, 1.25, 0.05); driver.add(head);
  // wheels
  const wheels = [];
  for (const [sx, z, rad, w, front] of [[-1, 1.15, 0.34, 0.32, true], [1, 1.15, 0.34, 0.32, true], [-1, -0.95, 0.44, 0.46, false], [1, -0.95, 0.44, 0.46, false]]) {
    const pivot = new THREE.Group(); pivot.position.set(sx * 0.95, rad, z); group.add(pivot);
    const spin = new THREE.Group(); pivot.add(spin);
    spin.add(new THREE.Mesh(new THREE.CylinderGeometry(rad, rad, w, 18).rotateZ(Math.PI / 2), tireM));
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(rad * 0.5, rad * 0.5, w + 0.02, 10).rotateZ(Math.PI / 2), paint); spin.add(hub);
    const bolt = new THREE.Mesh(new THREE.BoxGeometry(w + 0.04, rad * 0.9, 0.08), metal); spin.add(bolt);
    wheels.push({ pivot, spin, front, rad });
  }
  // boost flames
  const flameMat = new THREE.SpriteMaterial({ map: glowTex, color: new THREE.Color(0.7, 1.0, 1.8), blending: THREE.AdditiveBlending, depthWrite: false });
  const flames = pipes.map((p) => { const f = new THREE.Sprite(flameMat.clone()); f.position.copy(p); f.visible = false; body.add(f); return f; });
  // shield bubble
  const shield = new THREE.Mesh(new THREE.SphereGeometry(2.0, 24, 16), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uT: { value: 0 } },
    vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'varying vec3 vN; varying vec3 vV; uniform float uT; void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 2.5); gl_FragColor = vec4(vec3(0.3, 0.9, 1.4) * (f * 0.9 + 0.05 + 0.05 * sin(uT * 8.0)), 1.0); }',
  }));
  shield.position.y = 0.9; shield.visible = false; group.add(shield);
  // blob shadow helps on toon terrain from far away
  group.traverse((o) => { if (o.isMesh && o !== shield) { o.castShadow = true; } });
  return { group, body, wheels, flames, pipes, shield, head, driver };
}

export class Kart {
  constructor(ch, gradient, glowTex, isPlayer = false) {
    this.ch = ch; this.spec = CLASSES[ch.cls]; this.name = isPlayer ? 'YOU' : ch.name; this.isPlayer = isPlayer;
    this.model = buildKart(ch, gradient, glowTex);
    this.obj = this.model.group;
    this.reset();
  }

  reset() {
    this.x = this.y = this.z = 0; this.h = 0; this.speed = 0; this.kx = this.kz = 0;
    this.airborne = false; this.vy = 0; this.airTime = 0; this.launchCd = 0;
    this.drifting = false; this.driftDir = 0; this.meter = 0; this.boosts = 0; this.driftFailed = false; this.hopPending = false;
    this.yawOff = 0; this.steerVis = 0;
    this.boostTime = 0; this.boostLevel = 0; this.spinTime = 0; this.spinAngle = 0; this.shieldTime = 0; this.invuln = 0;
    this.item = null; this.rolling = 0; this.fruit = 0;
    this.q = { i: 0 }; this.lap = 0; this.passedHalf = true; this.rel = 0; this.progress = 0; this.finished = false; this.finishTime = 0;
    this.prevDrift = false; this.prevBoost = false; this.prevItem = false;
    this.impact = 0; this.events = [];
    this.wheelRot = 0; this.squash = 0; this.respawnTimer = 0; this.lastSafe = 0; this.wrongWay = 0;
  }

  place(track, idx, lat) {
    const p = track.pointAt(idx, lat), i = ((Math.floor(idx) % track.N) + track.N) % track.N;
    this.x = p.x; this.y = p.y; this.z = p.z;
    this.h = Math.atan2(track.tx[i], track.tz[i]);
    this.speed = 0; this.kx = this.kz = 0; this.airborne = false; this.vy = 0; this.drifting = false; this.yawOff = 0;
    track.project(this.x, this.z, -1, this.q);
    const L = track.length;
    this.rel = (this.q.s - track.finishIdx * track.ds + L) % L;
    this.syncObj(0.016, 0);
  }

  get top() { return this.spec.top * (1 + this.fruit * 0.006); }

  boost(level, time) {
    this.boostTime = Math.max(this.boostTime, time);
    this.boostLevel = Math.max(this.boostTime > 0 ? this.boostLevel : 0, level);
    this.speed = Math.max(this.speed, this.top * (1.0 + 0.04 * level));
    this.events.push({ type: 'boost', level });
  }

  hit(kind) {
    if (this.invuln > 0 || this.spinTime > 0) return false;
    if (this.shieldTime > 0) { this.shieldTime = 0; this.events.push({ type: 'shieldpop' }); return false; }
    this.spinTime = kind === 'tnt' ? 1.5 : 1.15;
    this.speed *= 0.25; this.drifting = false; this.boostTime = 0;
    if (kind === 'tnt' || kind === 'bomb') { this.airborne = true; this.vy = kind === 'tnt' ? 9 : 6; }
    this.fruit = Math.max(0, this.fruit - 3);
    this.events.push({ type: 'hit', kind });
    return true;
  }

  update(dt, inp, track) {
    const s = this.spec, N = track.N;
    this.events.length = 0;
    this.invuln = Math.max(0, this.invuln - dt);
    this.shieldTime = Math.max(0, this.shieldTime - dt);
    this.launchCd = Math.max(0, this.launchCd - dt);
    if (this.respawnTimer > 0) {
      this.respawnTimer -= dt;
      if (this.respawnTimer <= 0) {
        this.place(track, this.respawnIdx, 0);
        this.invuln = 1.5;
      }
      return;
    }
    const spinning = this.spinTime > 0;
    if (spinning) { this.spinTime -= dt; this.spinAngle += dt * 13; inp = { throttle: 0, brake: 0, steer: 0, drift: false, boost: false, item: false }; }
    else this.spinAngle = 0;

    const driftDown = inp.drift && !this.prevDrift, boostDown = inp.boost && !this.prevBoost;
    this.prevDrift = inp.drift; this.prevBoost = inp.boost;

    // --- longitudinal ---
    let top = this.top;
    if (this.boostTime > 0) { this.boostTime -= dt; top *= 1.22 + 0.07 * this.boostLevel; } else this.boostLevel = 0;
    if (!this.airborne) {
      if (inp.throttle > 0 && this.speed > -1) {
        if (this.speed < top) this.speed += (s.accel * inp.throttle * (1 - Math.pow(Math.max(0, this.speed) / top, 2.2)) + (this.boostTime > 0 ? 30 : 0)) * dt;
      }
      if (inp.brake > 0) this.speed -= (this.speed > 0.5 ? 34 : 12) * inp.brake * dt;
      if (this.speed < -9) this.speed = -9;
      if (!inp.throttle && !inp.brake) this.speed -= Math.sign(this.speed) * Math.min(Math.abs(this.speed), 5 * dt);
      if (this.speed > top) this.speed -= (this.speed - top) * 2.2 * dt;
    }

    // --- powerslide ---
    if (driftDown && !this.airborne && this.speed > 8 && !spinning) { this.airborne = true; this.vy = 3.6; this.hopPending = true; this.events.push({ type: 'hop' }); }
    if (this.hopPending && !this.airborne) {
      this.hopPending = false;
      if (inp.drift && Math.abs(inp.steer) > 0.2 && this.speed > 8) {
        this.drifting = true; this.driftDir = Math.sign(inp.steer); this.meter = 0; this.boosts = 0; this.driftFailed = false;
      }
    }
    if (this.drifting) {
      if (!inp.drift || this.speed < 7 || spinning) this.drifting = false;
      else if (!this.airborne) {
        this.meter += dt * 1.2;
        if (this.meter >= 1) { this.meter = 0; this.events.push({ type: 'overheat' }); }
        if (boostDown) {
          if (!this.driftFailed && this.meter >= 0.7 && this.boosts < 3) {
            this.boosts++;
            const perfect = this.meter > 0.9;
            this.boost(this.boosts, 0.5 + 0.22 * this.boosts + (perfect ? 0.2 : 0));
            this.events.push({ type: 'turbo', n: this.boosts, perfect });
            this.meter = 0;
          } else if (this.meter < 0.7) { this.driftFailed = true; this.events.push({ type: 'fizzle' }); }
        }
        this.speed -= this.speed * 0.05 * dt;
      }
    }
    if (!this.drifting) this.meter = 0;

    // --- steering ---
    let w;
    const sp = Math.abs(this.speed);
    if (this.drifting) {
      w = this.driftDir * s.turn * (1.05 + 0.8 * inp.steer * this.driftDir) * Math.min(1, sp / 10);
      this.yawOff += (this.driftDir * 0.6 - this.yawOff) * Math.min(1, dt * 7);
    } else {
      const lim = (24 * s.turn) / Math.max(sp, 4);
      w = inp.steer * Math.min(s.turn * 2.1 * Math.min(1, 0.25 + sp / 5), lim);
      if (this.speed < 0) w = -w;
      if (this.airborne && !this.hopPending) w *= 0.45;
      this.yawOff += (0 - this.yawOff) * Math.min(1, dt * 8);
    }
    this.h -= w * dt;
    this.steerVis += (inp.steer - this.steerVis) * Math.min(1, dt * 10);
    this.w = w;

    // --- integrate ---
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    this.x += (fx * this.speed + this.kx) * dt;
    this.z += (fz * this.speed + this.kz) * dt;
    const kd = Math.exp(-5 * dt); this.kx *= kd; this.kz *= kd;

    const q = track.project(this.x, this.z, this.q.i, this.q);
    const onGap = track.isGap(q.i) || Math.abs(q.lat) > HW + 2;
    if (this.airborne) {
      this.vy -= 27 * dt; this.y += this.vy * dt; this.airTime += dt;
      if (!onGap && this.y <= q.y && this.vy <= 0) {
        this.y = q.y; this.airborne = false;
        if (this.airTime > 0.55 && !spinning) { this.boost(1, 0.4 + Math.min(0.6, this.airTime * 0.4)); this.events.push({ type: 'hangtime', t: this.airTime }); }
        this.squash = Math.min(0.3, this.airTime * 0.25 + 0.05);
        this.airTime = 0;
      } else if (this.y < q.y - 18 || this.y < -1.5) {
        this.respawnTimer = 1.4; this.respawnIdx = track.isGap(q.i) ? track.gapEnd + 4 : q.i;
        this.speed = 0; this.drifting = false; this.events.push({ type: 'fall' });
        return;
      }
    } else if (onGap) { this.airborne = true; this.vy = 0; this.airTime = 0; }
    else {
      this.y = q.y;
      if ((track.flags[q.i] & 2) && this.speed > 6 && this.launchCd <= 0) {
        this.airborne = true; this.vy = 3 + this.speed * 0.15; this.airTime = 0; this.launchCd = 1.5; this.hopPending = false;
        this.events.push({ type: 'launch' });
      }
      this.lastSafe = q.i;
    }

    // walls
    const lim = HW - 0.95;
    this.impact = 0;
    if (Math.abs(q.lat) > lim && !track.isGap(q.i)) {
      const sign = Math.sign(q.lat), over = q.lat - sign * lim;
      this.x -= q.rx * over; this.z -= q.rz * over;
      const nx = q.rx * sign, nz = q.rz * sign;
      const vn = (fx * this.speed + this.kx) * nx + (fz * this.speed + this.kz) * nz;
      if (vn > 0) {
        this.impact = vn;
        this.kx -= nx * vn * 0.6; this.kz -= nz * vn * 0.6;
        this.speed *= 1 - Math.min(0.45, vn * 0.035);
        const th = Math.atan2(q.tx, q.tz), fwd = fx * q.tx + fz * q.tz;
        // glance off toward the racing direction (never re-align a kart that's facing backwards)
        if (fwd > -0.3) {
          const dh = ((th - this.h + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
          this.h += dh * Math.min(1, vn * 0.06);
        }
        if (vn > 5) this.drifting = false;
        if (vn > 3) this.events.push({ type: 'wall', v: vn });
      }
    }

    // laps
    const L = track.length, startS = track.finishIdx * track.ds;
    const rel = (q.s - startS + L) % L;
    if (rel > L * 0.4 && rel < L * 0.6) this.passedHalf = true;
    if (this.rel > L * 0.8 && rel < L * 0.2) { if (this.passedHalf) { this.lap++; this.passedHalf = false; this.lapEvent = true; } }
    else if (this.rel < L * 0.2 && rel > L * 0.8) { this.lap--; this.passedHalf = true; }
    this.rel = rel;
    this.progress = (this.lap - 1) * L + rel;
    const along = fx * q.tx + fz * q.tz;
    this.wrongWay = along < -0.4 && this.speed > 4 ? this.wrongWay + dt : 0;
  }

  syncObj(dt, t) {
    const o = this.obj, m = this.model;
    o.position.set(this.x, this.y, this.z);
    o.rotation.set(0, this.h + this.yawOff + this.spinAngle, 0);
    this.squash = Math.max(0, this.squash - dt * 1.5);
    m.body.scale.set(1 + this.squash * 0.5, 1 - this.squash, 1 + this.squash * 0.3);
    m.body.rotation.z = -this.steerVis * 0.06 * Math.min(1, Math.abs(this.speed) / 20) - (this.drifting ? this.driftDir * 0.08 : 0);
    m.body.rotation.x = this.airborne ? -Math.max(-0.3, Math.min(0.3, this.vy * 0.03)) : 0;
    m.body.position.y = Math.abs(Math.sin(t * 24)) * 0.02 * Math.min(1, Math.abs(this.speed) / 10);
    m.head.rotation.y = -this.steerVis * 0.35;
    this.wheelRot += this.speed * dt / 0.4;
    for (const w of m.wheels) { w.spin.rotation.x = this.wheelRot * (0.4 / w.rad); if (w.front) w.pivot.rotation.y = -this.steerVis * 0.45; }
    const boosting = this.boostTime > 0;
    m.flames.forEach((f) => { f.visible = boosting; if (boosting) { const s = 0.45 + Math.random() * 0.3 + this.boostLevel * 0.1; f.scale.set(s, s * 1.3, 1); } });
    m.shield.visible = this.shieldTime > 0;
    if (m.shield.visible) m.shield.material.uniforms.uT.value = t;
    o.visible = this.respawnTimer <= 0 && (this.invuln <= 0 || Math.floor(t * 12) % 2 === 0);
    o.updateMatrixWorld(true);
  }

  exhaustWorld(k) {
    const p = this.model.pipes[k].clone();
    p.applyMatrix4(this.model.body.matrixWorld);
    return p;
  }
}

// ---------------------------------------------------------------- AI
export class KartAI {
  constructor(kart, track, { skill = 1, lane = 0, seed = 1 } = {}) {
    this.k = kart; this.track = track; this.skill = skill; this.baseLane = lane; this.phase = seed * 2.3;
    this.avoid = 0; this.wantDrift = false; this.itemDelay = 1 + Math.random() * 2; this.boostAt = 0.78 + Math.random() * 0.12;
  }

  input(dt, karts, gapToPlayer, time) {
    const k = this.k, tr = this.track, N = tr.N, q = k.q, sp = Math.max(0, k.speed);
    // unstick: reverse briefly off a wall; if no real progress for 3 s (or driving the wrong way) get rescued
    if (k.spinTime <= 0 && k.respawnTimer <= 0) {
      this.chkT = (this.chkT || 0) + dt;
      if (this.chkT > 3) {
        if (k.progress - (this.chkP ?? -1e9) < 15 || k.wrongWay > 1.2) { k.respawnTimer = 0.6; k.respawnIdx = (q.i + 2) % N; k.wrongWay = 0; this.recover = 0; }
        this.chkT = 0; this.chkP = k.progress;
      }
      this.slow = k.speed < 2 && !k.airborne ? (this.slow || 0) + dt : 0;
      if (this.slow > 0.8 && !(this.recover > 0)) { this.recover = 0.7; this.slow = 0; }
    }
    if (this.recover > 0) {
      this.recover -= dt;
      const side = (Math.sin(k.h) * -tr.tz[q.i] + Math.cos(k.h) * tr.tx[q.i]) > 0 ? 1 : -1;
      return { throttle: 0, brake: 1, steer: side, drift: false, boost: false, item: false };
    }
    const band = Math.max(0.88, Math.min(1.12, 1 + gapToPlayer * 0.0012));
    const sk = this.skill * band;
    // speed plan
    const aLat = 24 * k.spec.turn * 0.95;
    let vt = k.top * Math.min(1.06, sk);
    let maxC = 0, sgn = 0;
    for (let d = 0; d < 90; d += 4) {
      const j = (q.i + Math.round(d / tr.ds)) % N, c = tr.curv[j];
      if (d < 40 && Math.abs(c) > maxC) { maxC = Math.abs(c); sgn = Math.sign(c); }
      const vc = Math.sqrt(aLat / (Math.abs(c) + 1e-4)) * (this.wantDrift ? 1.15 : 1);
      vt = Math.min(vt, Math.sqrt(vc * vc + 2 * 26 * d));
    }
    // traffic avoidance
    let shift = 0;
    const fx = Math.sin(k.h), fz = Math.cos(k.h);
    for (const o of karts) {
      if (o === k) continue;
      const dx = o.x - k.x, dz = o.z - k.z, ahead = dx * fx + dz * fz, side = -dx * fz + dz * fx;
      if (ahead > 0 && ahead < 10 + sp * 0.3 && Math.abs(side) < 2.4) shift += side > 0 ? -3.5 : 3.5;
    }
    this.avoid += (shift - this.avoid) * Math.min(1, dt * 2.5);
    const lane = this.baseLane + Math.sin(time * 0.17 + this.phase) * 2.5;
    // hug the inside on bends
    const inside = sgn * Math.min(4, maxC * 160); // curv < 0 is a left-hander
    const lat = Math.max(-HW + 2, Math.min(HW - 2, lane * 0.5 + inside + this.avoid));
    const p = tr.pointAt(q.i + q.f + (5 + sp * 0.45) / tr.ds, lat);
    const dx = p.x - k.x, dz = p.z - k.z;
    const ang = Math.atan2(-dx * fz + dz * fx, dx * fx + dz * fz);
    let steer = Math.max(-1, Math.min(1, ang * 2.4));
    // powerslide through tight corners
    const tight = maxC > 0.017 && sp > 16 && !k.airborne;
    if (tight && !k.drifting && !this.wantDrift && Math.random() < 0.08 * sk) this.wantDrift = true;
    if (this.wantDrift && maxC < 0.008) this.wantDrift = false;
    let drift = this.wantDrift;
    if (k.drifting) {
      // steering inside a slide: steer = how tight; derive from desired yaw rate
      const desire = ang * 2.2;
      steer = Math.max(-1, Math.min(1, (desire * k.driftDir - 1.05 * k.spec.turn) / (0.8 * k.spec.turn))) * k.driftDir;
      if (Math.sign(ang) !== k.driftDir && Math.abs(ang) > 0.25) drift = false; // bail out
    } else if (this.wantDrift) steer = Math.sign(steer || sgn) * Math.max(0.6, Math.abs(steer));
    const boost = k.drifting && k.meter > this.boostAt && Math.random() < 0.6 + 0.35 * this.skill;
    if (boost) this.boostAt = 0.74 + Math.random() * 0.16;
    const throttle = sp < vt ? 1 : 0.3;
    const brake = sp > vt + 3 ? Math.min(1, (sp - vt) / 8) : 0;
    // items
    let item = false;
    if (k.item && k.rolling <= 0) {
      this.itemDelay -= dt;
      if (this.itemDelay < 0) {
        const it = k.item;
        const ahead = karts.some((o) => o !== k && ((o.progress - k.progress) > 5 && (o.progress - k.progress) < 70));
        const behind = karts.some((o) => o !== k && ((k.progress - o.progress) > 3 && (k.progress - o.progress) < 35));
        if (it === 'turbo' && maxC < 0.01) item = true;
        else if (it === 'shield') item = true;
        else if ((it === 'missile' || it === 'bomb') && ahead) item = true;
        else if (it === 'tnt' && behind) item = true;
        else if (this.itemDelay < -8) item = true;
        if (item) this.itemDelay = 1 + Math.random() * 2.5;
      }
    }
    return { throttle, brake, steer, drift, boost, item };
  }
}

export function collideKarts(karts, onHit) {
  for (let a = 0; a < karts.length; a++) for (let b = a + 1; b < karts.length; b++) {
    const A = karts[a], B = karts[b];
    if (A.respawnTimer > 0 || B.respawnTimer > 0) continue;
    const dx = B.x - A.x, dz = B.z - A.z, d = Math.hypot(dx, dz), min = 2.1;
    if (d >= min || d < 1e-4 || Math.abs(A.y - B.y) > 1.6) continue;
    const nx = dx / d, nz = dz / d, push = (min - d) / 2;
    A.x -= nx * push; A.z -= nz * push; B.x += nx * push; B.z += nz * push;
    const va = Math.sin(A.h) * A.speed * nx + Math.cos(A.h) * A.speed * nz, vb = Math.sin(B.h) * B.speed * nx + Math.cos(B.h) * B.speed * nz;
    const rel = va - vb;
    if (rel > 0) {
      A.kx -= nx * rel * 0.7; A.kz -= nz * rel * 0.7; B.kx += nx * rel * 0.7; B.kz += nz * rel * 0.7;
      onHit?.(A, B, rel, (A.x + B.x) / 2, (A.y + B.y) / 2 + 0.6, (A.z + B.z) / 2);
    }
  }
}
