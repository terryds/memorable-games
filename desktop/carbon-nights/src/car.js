import * as THREE from 'three';
import { ROAD_HW } from './track.js';
import { glowTexture } from './textures.js';

export const CAR_CLASSES = {
  tuner: {
    name: 'TUNER', model: 'KAZE RX-8', blurb: 'Light, twitchy, born to slide.',
    top: 76, power: 16, aLat: 27, grip: 9.5, driftGrip: 2.0, steer: 0.62, stats: { speed: 0.68, accel: 0.8, handling: 0.95, drift: 1.0 },
    L: 4.3, W: 1.82, wheelR: 0.33, glow: '#00e5ff',
  },
  muscle: {
    name: 'MUSCLE', model: 'BRUTUS V8', blurb: 'Brutal torque. Smokes everything.',
    top: 81, power: 19, aLat: 23.5, grip: 8.8, driftGrip: 1.5, steer: 0.54, stats: { speed: 0.8, accel: 1.0, handling: 0.6, drift: 0.85 },
    L: 4.75, W: 1.96, wheelR: 0.36, glow: '#ff7a1a',
  },
  exotic: {
    name: 'EXOTIC', model: 'VELOCE GT', blurb: 'Untouchable top speed, planted grip.',
    top: 90, power: 17.5, aLat: 26, grip: 10.5, driftGrip: 1.75, steer: 0.55, stats: { speed: 1.0, accel: 0.9, handling: 0.82, drift: 0.65 },
    L: 4.6, W: 2.0, wheelR: 0.35, glow: '#ff2bd6',
  },
};

let glowTex;

function extrude(points, depth, bevel = 0.06, arches = null) {
  const shape = new THREE.Shape();
  shape.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const p = points[i];
    if (p.length === 4) shape.quadraticCurveTo(p[0], p[1], p[2], p[3]);
    else shape.lineTo(p[0], p[1]);
  }
  if (arches) {
    const { fz, rz, ar, by } = arches;
    shape.lineTo(fz + ar, by);
    shape.absarc(fz, by, ar, 0, Math.PI, false);
    shape.lineTo(rz + ar, by);
    shape.absarc(rz, by, ar, 0, Math.PI, false);
  }
  shape.closePath();
  const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel * 1.3, bevelSize: bevel, bevelSegments: 4, curveSegments: 14 });
  g.translate(0, 0, -depth / 2);
  g.rotateY(-Math.PI / 2); // profile x (length) -> world +z
  g.computeVertexNormals();
  return g;
}

// Side profiles: [x (front +), y] with optional quadratic curve [cx, cy, x, y].
function profiles(type, L) {
  const f = L / 2, r = -L / 2;
  if (type === 'muscle') return {
    body: [[r + 0.05, 0.3], [r, 0.5], [r + 0.02, 0.88], [r + 0.5, 0.95], [-1.0, 0.96], [0.9, 0.94], [f - 0.35, 0.9], [f, 0.84], [f + 0.02, 0.5], [f - 0.05, 0.3]],
    cabin: [[-1.45, 0.92], [-0.85, 1.36], [0.25, 1.38], [0.95, 0.92]],
    roof: [[-0.92, 1.3], [-0.82, 1.385], [0.25, 1.395], [0.35, 1.3]],
  };
  if (type === 'exotic') return {
    body: [[r + 0.05, 0.28], [r, 0.5], [r + 0.05, 0.86], [r + 0.6, 0.9], [-0.9, 0.92], [0.2, 0.86], [f - 0.6, 0.66], [f - 0.05, 0.52, f, 0.38], [f - 0.05, 0.26]],
    cabin: [[-1.35, 0.9], [-0.55, 1.18], [0.1, 1.18], [1.05, 0.8]],
    roof: [[-0.62, 1.13], [-0.5, 1.195], [0.08, 1.195], [0.2, 1.13]],
  };
  return { // tuner
    body: [[r + 0.05, 0.28], [r, 0.48], [r + 0.04, 0.82], [r + 0.55, 0.88], [-1.0, 0.9], [0.85, 0.86], [f - 0.4, 0.74], [f - 0.02, 0.62, f, 0.45], [f - 0.06, 0.27]],
    cabin: [[-1.3, 0.88], [-0.6, 1.27], [0.25, 1.29], [0.95, 0.86]],
    roof: [[-0.68, 1.21], [-0.58, 1.28], [0.24, 1.3], [0.34, 1.21]],
  };
}

export function buildCarModel(type, color, envMap) {
  glowTex ??= glowTexture();
  const spec = CAR_CLASSES[type];
  const { L, W, wheelR: R } = spec;
  const group = new THREE.Group();
  const body = new THREE.Group();
  group.add(body);
  const paint = new THREE.MeshPhysicalMaterial({ color, metalness: 0.7, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.09, envMap, envMapIntensity: 1.8 });
  const glass = new THREE.MeshPhysicalMaterial({ color: 0x06080c, metalness: 0.3, roughness: 0.04, envMap, envMapIntensity: 2.2 });
  const trim = new THREE.MeshStandardMaterial({ color: 0x0a0a0c, roughness: 0.55, metalness: 0.2, envMap, envMapIntensity: 0.6 });
  const chrome = new THREE.MeshStandardMaterial({ color: 0xd8dce4, metalness: 1, roughness: 0.18, envMap, envMapIntensity: 1.6 });
  const tire = new THREE.MeshStandardMaterial({ color: 0x0e0e10, roughness: 0.85 });
  const head = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.6, 2.6, 2.4) });
  const tail = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.9, 0.0, 0.02) });
  const P = profiles(type, L);
  const fz = L / 2 - (type === 'exotic' ? 1.22 : 1.18), rz = -L / 2 + (type === 'exotic' ? 1.15 : 1.05);

  const by = P.body[P.body.length - 1].slice(-1)[0];
  const bodyMesh = new THREE.Mesh(extrude(P.body, W - 0.2, 0.08, { fz, rz, ar: R + 0.09, by }), paint);
  body.add(bodyMesh);
  const cab = new THREE.Mesh(extrude(P.cabin, W * 0.78 - 0.1, 0.05), glass);
  body.add(cab);
  const roof = new THREE.Mesh(extrude(P.roof, W * 0.78 - 0.06, 0.05), paint);
  body.add(roof);

  // wheel-arch shadows, skirts, splitter, diffuser
  const skirt = new THREE.BoxGeometry(0.1, 0.16, L * 0.45);
  for (const sx of [-1, 1]) { const m = new THREE.Mesh(skirt, trim); m.position.set(sx * (W / 2 - 0.02), 0.3, -0.02); body.add(m); }
  const split = new THREE.Mesh(new THREE.BoxGeometry(W - 0.1, 0.06, 0.35), trim); split.position.set(0, 0.24, L / 2 - 0.1); body.add(split);
  const grille = new THREE.Mesh(new THREE.BoxGeometry(W * 0.55, 0.16, 0.06), trim); grille.position.set(0, 0.38, L / 2 + 0.1); body.add(grille);
  const diff = new THREE.Mesh(new THREE.BoxGeometry(W - 0.3, 0.14, 0.3), trim); diff.position.set(0, 0.3, -L / 2 - 0.02); body.add(diff);

  // lights
  const headGeo = new THREE.BoxGeometry(0.46, 0.09, 0.1);
  for (const sx of [-1, 1]) {
    const h = new THREE.Mesh(headGeo, head);
    h.position.set(sx * (W / 2 - 0.36), type === 'exotic' ? 0.6 : type === 'muscle' ? 0.72 : 0.64, L / 2 + (type === 'exotic' ? -0.3 : 0.06));
    h.rotation.y = sx * 0.12;
    body.add(h);
  }
  const gloss = new THREE.MeshPhysicalMaterial({ color: 0x050507, metalness: 0.4, roughness: 0.08, clearcoat: 1, envMap, envMapIntensity: 1.5 });
  const panel = new THREE.Mesh(new THREE.BoxGeometry(W - 0.2, 0.22, 0.04), gloss);
  panel.position.set(0, type === 'muscle' ? 0.76 : 0.72, -L / 2 - 0.1); body.add(panel);
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.12, 0.02), new THREE.MeshStandardMaterial({ color: 0xd8d8cc, emissive: 0x555548, roughness: 0.5 }));
  plate.position.set(0, 0.48, -L / 2 - 0.1); body.add(plate);
  for (let k = -2; k <= 2; k++) { const fin = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.12, 0.28), trim); fin.position.set(k * 0.28, 0.26, -L / 2 - 0.05); body.add(fin); }
  const tailBar = new THREE.Mesh(new THREE.BoxGeometry(W - 0.25, 0.06, 0.05), tail);
  tailBar.position.set(0, type === 'muscle' ? 0.78 : 0.74, -L / 2 - 0.125); body.add(tailBar);
  for (const sx of [-1, 1]) {
    const t = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.12, 0.05), tail);
    t.position.set(sx * (W / 2 - 0.26), type === 'muscle' ? 0.74 : 0.7, -L / 2 - 0.13); body.add(t);
  }

  // mirrors
  for (const sx of [-1, 1]) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.14), paint);
    m.position.set(sx * (W * 0.41 + 0.1), 0.98, 0.72); body.add(m);
  }

  // aero by class
  if (type === 'tuner') {
    const wing = new THREE.Mesh(new THREE.BoxGeometry(W - 0.1, 0.05, 0.38), trim);
    wing.position.set(0, 1.18, -L / 2 + 0.28); wing.rotation.x = -0.08; body.add(wing);
    for (const sx of [-0.55, 0.55]) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.3, 0.2), trim); s.position.set(sx, 1.0, -L / 2 + 0.3); body.add(s); }
    for (const sx of [-1, 1]) { const e = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.18, 0.42), paint); e.position.set(sx * (W / 2 - 0.05), 1.18, -L / 2 + 0.28); body.add(e); }
  } else if (type === 'muscle') {
    const scoop = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.12, 0.9), trim);
    scoop.position.set(0, 0.99, 1.25); body.add(scoop);
    const lip = new THREE.Mesh(new THREE.BoxGeometry(W - 0.3, 0.06, 0.16), paint);
    lip.position.set(0, 0.99, -L / 2 + 0.15); lip.rotation.x = 0.25; body.add(lip);
    // racing stripes
    const stripeMat = new THREE.MeshPhysicalMaterial({ color: 0xf2f2f2, metalness: 0.3, roughness: 0.3, clearcoat: 1, envMap });
    for (const sx of [-0.2, 0.2]) {
      const s = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.012, 1.9), stripeMat); s.position.set(sx, 0.962, 1.35); body.add(s);
      const s2 = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.012, 1.0), stripeMat); s2.position.set(sx, 1.4, -0.3); body.add(s2);
    }
  } else {
    const duck = new THREE.Mesh(new THREE.BoxGeometry(W - 0.25, 0.05, 0.26), trim);
    duck.position.set(0, 0.95, -L / 2 + 0.2); duck.rotation.x = 0.2; body.add(duck);
    for (const sx of [-1, 1]) { const intake = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.22, 0.6), trim); intake.position.set(sx * (W / 2 + 0.01), 0.62, -0.6); body.add(intake); }
  }

  // exhausts + nitro flames
  const flames = [];
  const flameMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.2, 1.8, 6), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, map: glowTex });
  for (const sx of type === 'muscle' ? [-0.6, -0.45, 0.45, 0.6] : [-0.42, 0.42]) {
    const ex = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.18, 10).rotateX(Math.PI / 2), chrome);
    ex.position.set(sx, 0.3, -L / 2 - 0.1); body.add(ex);
    const fl = new THREE.Mesh(new THREE.ConeGeometry(0.13, 1.2, 10, 1, true).rotateX(-Math.PI / 2).translate(0, 0, -0.6), flameMat);
    fl.position.set(sx, 0.3, -L / 2 - 0.18); fl.visible = false; body.add(fl);
    flames.push(fl);
  }

  // wheels
  const wheels = [];
  const tireGeo = new THREE.CylinderGeometry(R, R, 0.27, 28).rotateZ(Math.PI / 2);
  const rimGeo = new THREE.CylinderGeometry(R * 0.66, R * 0.66, 0.285, 20).rotateZ(Math.PI / 2);
  const spokeGeo = new THREE.BoxGeometry(0.03, R * 1.25, 0.07);
  const rimMat = type === 'muscle' ? chrome : new THREE.MeshStandardMaterial({ color: type === 'tuner' ? 0x1a1a1e : 0x3a3d44, metalness: 0.9, roughness: 0.3, envMap });
  for (const [sx, z, front] of [[-1, fz, true], [1, fz, true], [-1, rz, false], [1, rz, false]]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx * (W / 2 - 0.16), R, z);
    const spin = new THREE.Group();
    spin.add(new THREE.Mesh(tireGeo, tire));
    const rim = new THREE.Mesh(rimGeo, rimMat);
    spin.add(rim);
    for (let k = 0; k < 5; k++) {
      const sp = new THREE.Mesh(spokeGeo, rimMat);
      sp.position.x = sx * 0.13; sp.rotation.x = (k / 5) * Math.PI;
      spin.add(sp);
    }
    pivot.add(spin);
    group.add(pivot);
    wheels.push({ pivot, spin, front });
  }

  // underglow + contact shadow
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.7, L * 1.35).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: glowTex, color: 0x000000, transparent: true, opacity: 0.85, depthWrite: false }));
  shadow.position.y = 0.04; group.add(shadow);
  const glowColor = new THREE.Color(spec.glow);
  const under = new THREE.Mesh(new THREE.PlaneGeometry(W * 2.2, L * 1.4).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: glowTex, color: glowColor.clone().multiplyScalar(1.6), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  under.position.y = 0.06; group.add(under);

  // headlight
  const spot = new THREE.SpotLight(0xfff1dc, 1100, 140, 0.48, 0.6, 1.5);
  spot.position.set(0, 0.75, L / 2);
  spot.target.position.set(0, -1.2, L / 2 + 24);
  group.add(spot, spot.target);
  // visible beams
  const beamMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */`
      varying float vH; varying float vF;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * normal);
        vF = abs(dot(n, normalize(-mv.xyz)));
        vH = uv.y;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      varying float vH; varying float vF; uniform float uI;
      void main() { float a = pow(clamp(vH, 0.0, 1.0), 2.2) * pow(clamp(vF, 0.0, 1.0), 2.0) * 0.06 * uI; gl_FragColor = vec4(vec3(1.0, 0.95, 0.85) * a, 1.0); }`,
    uniforms: { uI: { value: 1 } },
  });
  for (const sx of [-1, 1]) {
    const beam = new THREE.Mesh(new THREE.ConeGeometry(2.6, 16, 20, 1, true).translate(0, -8, 0).rotateX(-Math.PI / 2 + 0.06), beamMat);
    beam.position.set(sx * (W / 2 - 0.36), 0.66, L / 2);
    body.add(beam);
  }

  group.traverse((o) => { if (o.isMesh) o.frustumCulled = true; });
  return { group, body, wheels, flames, tail, paint, spot, under, beamMat };
}

export class Car {
  constructor(type, color, envMap, name = 'YOU') {
    this.type = type; this.spec = CAR_CLASSES[type]; this.name = name;
    this.model = buildCarModel(type, color, envMap);
    this.obj = this.model.group;
    this.x = 0; this.y = 0; this.z = 0; this.h = 0;
    this.vx = 0; this.vz = 0; this.yaw = 0; this.steer = 0;
    this.vF = 0; this.vR = 0; this.speed = 0;
    this.drifting = false; this.driftTime = 0; this.slip = 0;
    this.nitro = 1; this.nitroOn = false;
    this.gear = 1; this.rpm = 900;
    this.wheelRot = 0; this.roll = 0; this.pitch = 0; this.slopePitch = 0;
    this.q = { i: 0 };
    this.lap = 0; this.passedHalf = true; this.rel = 0; this.progress = 0;
    this.finished = false; this.finishTime = 0;
    this.impact = 0; this.braking = false; this.acc = 0;
    this.wrongWay = 0;
  }

  place(track, idx, lat) {
    const p = track.pointAt(idx, lat);
    const i = Math.floor(idx) % track.N;
    this.x = p.x; this.z = p.z; this.y = p.y;
    this.h = Math.atan2(track.tx[i], track.tz[i]);
    this.vx = this.vz = this.yaw = this.steer = 0;
    this.drifting = false;
    track.project(this.x, this.z, -1, this.q);
    const L = track.length;
    this.rel = (this.q.s - track.startIdx * track.ds + L) % L;
    this.syncObj();
  }

  update(dt, inp, track) {
    const s = this.spec;
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    const rx = -fz, rz = fx;
    let vF = this.vx * fx + this.vz * fz;
    let vR = this.vx * rx + this.vz * rz;
    const speed = Math.hypot(this.vx, this.vz);

    // steering with speed-sensitive lock
    const st = inp.steer;
    this.steer += (st - this.steer) * Math.min(1, dt * (Math.abs(st) > Math.abs(this.steer) ? 7 : 12));
    const maxSteer = s.steer * (1 - Math.min(0.7, speed / 100));
    const angle = this.steer * maxSteer;

    // longitudinal forces
    this.nitroOn = inp.nitro && this.nitro > 0.01 && inp.throttle > 0.1 && vF > 2;
    const vmax = s.top * (this.nitroOn ? 1.17 : 1) * (inp.topMul ?? 1);
    let acc = 0;
    if (inp.throttle > 0 && vF > -1) acc += s.power * (inp.powerMul ?? 1) * inp.throttle * Math.max(0, 1 - Math.pow(Math.max(0, vF) / vmax, 2.4)) + (this.nitroOn ? 12 : 0);
    else if (inp.throttle > 0) acc += 22 * inp.throttle; // braking out of reverse
    this.braking = false;
    if (inp.brake > 0) {
      if (vF > 0.5) { acc -= 32 * inp.brake; this.braking = true; } else if (vF > -16) acc -= 10 * inp.brake;
    }
    acc -= 0.0011 * vF * Math.abs(vF);
    if (Math.abs(vF) > 0.2) acc -= Math.sign(vF) * 0.5;
    if (vF > s.top * 1.02 && !this.nitroOn) acc -= (vF - s.top) * 1.5;
    if (inp.handbrake && Math.abs(vF) > 0.5) acc -= Math.sign(vF) * 6;
    const vF0 = vF;
    vF += acc * dt;
    if (inp.throttle === 0 && inp.brake === 0 && Math.abs(vF) < 0.4) vF = 0;
    if (vF0 > 0 && vF < 0 && inp.brake > 0 && inp.throttle === 0 && Math.abs(vF0) > 0.5) vF = 0; // stop before reversing
    this.acc = acc;

    // drift state machine
    const slip = Math.atan2(vR, Math.max(Math.abs(vF), 1));
    this.slip = slip;
    if (!this.drifting && speed > 14 && vF > 0) {
      if (inp.handbrake) { this.drifting = true; this.driftTime = 0; this.yaw += this.steer * 1.1; }
      else if (inp.brake > 0.5 && inp.throttle > 0.5 && Math.abs(this.steer) > 0.6 && speed > 24) { this.drifting = true; this.driftTime = 0; this.yaw += this.steer * 0.7; }
    }
    if (this.drifting) {
      this.driftTime += dt;
      if ((Math.abs(slip) < 0.09 && !inp.handbrake && this.driftTime > 0.35) || speed < 7 || vF < 0) this.drifting = false;
    }

    // lateral grip
    const grip = this.drifting ? s.driftGrip * (inp.handbrake ? 0.6 : 1) : s.grip * (inp.handbrake ? 0.35 : 1);
    const vR2 = vR * Math.exp(-grip * dt);
    if (this.drifting && vF > 0 && vF < vmax) vF += Math.abs(vR - vR2) * 0.3 - Math.abs(slip) * 3.5 * dt;
    vR = vR2;

    // yaw
    let target = vF * Math.tan(angle) / 2.6;
    const aLim = s.aLat * (this.drifting ? 1.55 : 1) / Math.max(speed, 1);
    if (Math.abs(vF) > 3) target = Math.max(-aLim, Math.min(aLim, target));
    if (this.drifting) target *= 1.25;
    this.yaw += (target - this.yaw) * (1 - Math.exp(-dt * (this.drifting ? 3.4 : 9)));
    this.h -= this.yaw * dt;

    this.vx = fx * vF + rx * vR;
    this.vz = fz * vF + rz * vR;
    this.x += this.vx * dt;
    this.z += this.vz * dt;
    this.vF = vF; this.vR = vR; this.speed = Math.hypot(this.vx, this.vz);

    // keep on the road: guardrails / curbs
    const q = track.project(this.x, this.z, this.q.i, this.q);
    const lim = ROAD_HW - 1.05;
    this.impact = 0;
    if (Math.abs(q.lat) > lim) {
      const sign = Math.sign(q.lat), over = q.lat - sign * lim;
      this.x -= q.rx * over; this.z -= q.rz * over;
      const nx = q.rx * sign, nz = q.rz * sign;
      const vn = this.vx * nx + this.vz * nz;
      if (vn > 0) {
        this.vx -= nx * vn * 1.35; this.vz -= nz * vn * 1.35;
        const keep = 1 - Math.min(0.45, vn * 0.025);
        this.vx *= keep; this.vz *= keep;
        this.impact = vn;
        this.yaw *= 0.4;
        // align with the wall a bit
        const th = Math.atan2(q.tx, q.tz);
        const fwdDot = Math.sin(this.h) * q.tx + Math.cos(this.h) * q.tz;
        const ta = fwdDot >= 0 ? th : th + Math.PI;
        let dh = ((ta - this.h + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        this.h += dh * Math.min(1, vn * 0.02);
        if (vn > 5) this.drifting = false;
      }
    }
    this.y = q.y;
    this.slopePitch = Math.atan(q.slope) * (Math.sin(this.h) * q.tx + Math.cos(this.h) * q.tz);

    // lap bookkeeping relative to the start line
    const L = track.length, startS = track.startIdx * track.ds;
    const rel = (q.s - startS + L) % L;
    if (rel > L * 0.4 && rel < L * 0.6) this.passedHalf = true;
    if (this.rel > L * 0.8 && rel < L * 0.2) { if (this.passedHalf) { this.lap++; this.passedHalf = false; this.lapEvent = true; } }
    else if (this.rel < L * 0.2 && rel > L * 0.8) { this.lap--; this.passedHalf = true; }
    this.rel = rel;
    this.progress = (this.lap - 1) * L + rel;

    const along = Math.sin(this.h) * q.tx + Math.cos(this.h) * q.tz;
    this.wrongWay = along < -0.3 && this.speed > 6 ? this.wrongWay + dt : 0;

    // nitro bookkeeping
    if (this.nitroOn) this.nitro = Math.max(0, this.nitro - dt * 0.22);
    else this.nitro = Math.min(1, this.nitro + dt * (this.drifting ? 0.07 * Math.min(1, Math.abs(slip) * 3) : 0.012));

    // gearbox
    const ratios = [0.18, 0.34, 0.5, 0.66, 0.83, 1.05];
    const v = Math.abs(vF);
    let g = 0; while (g < 5 && v > ratios[g] * s.top) g++;
    const lo = g === 0 ? 0 : ratios[g - 1] * s.top, hi = ratios[g] * s.top;
    let rpm = 1000 + ((v - lo) / (hi - lo)) * 6900;
    if (g > 0) rpm = 3600 + ((v - lo) / (hi - lo)) * 4300;
    if (this.drifting) rpm += 700;
    if (inp.throttle > 0 && v < 3) rpm = 2500 + inp.throttle * 3500;
    this.gear = vF < -0.5 ? 'R' : g + 1;
    this.rpm += (Math.min(8200, rpm) - this.rpm) * Math.min(1, dt * 10);
  }

  syncObj(dt = 0.016, t = 0) {
    const o = this.obj;
    o.position.set(this.x, this.y, this.z);
    o.rotation.set(0, this.h, 0, 'YXZ');
    // visual suspension
    const latAcc = this.yaw * this.vF;
    this.roll += (Math.max(-0.07, Math.min(0.07, latAcc * 0.0022)) - this.roll) * Math.min(1, dt * 6);
    this.pitch += (Math.max(-0.05, Math.min(0.05, -this.acc * 0.0016)) - this.pitch) * Math.min(1, dt * 5);
    o.rotation.x = -this.slopePitch;
    this.model.body.rotation.set(this.pitch, 0, this.roll);
    this.model.body.position.y = Math.sin(t * 33) * 0.004 * Math.min(1, this.speed / 30);
    this.wheelRot += this.vF * dt / this.spec.wheelR;
    for (const w of this.model.wheels) {
      w.spin.rotation.x = this.wheelRot;
      if (w.front) w.pivot.rotation.y = -this.steer * 0.5;
    }
    const brake = this.braking || this.drifting;
    this.model.tail.color.setRGB(brake ? 2.2 : 0.9, brake ? 0.01 : 0.0, brake ? 0.03 : 0.02);
    for (const f of this.model.flames) {
      f.visible = this.nitroOn;
      if (this.nitroOn) f.scale.set(1, 1, 0.7 + Math.random() * 0.7);
    }
  }
}

// --- AI -------------------------------------------------------------------
export class AIDriver {
  constructor(car, track, { skill = 1, lane = 0, seed = 1 } = {}) {
    this.car = car; this.track = track; this.skill = skill; this.lane = lane; this.baseLane = lane;
    this.phase = seed * 1.7; this.avoid = 0; this.nitroCool = 0;
  }

  input(dt, cars, leaderGap, time) {
    const c = this.car, tr = this.track, N = tr.N;
    const q = c.q;
    const speed = c.speed;
    // rubber band: faster when the player is ahead
    const band = Math.max(0.86, Math.min(1.16, 1 + leaderGap * 0.0007));
    const sk = this.skill * band;
    // speed planning from curvature ahead
    const aLat = c.spec.aLat * 0.93;
    let vt = c.spec.top * Math.min(1.08, sk);
    const look = Math.min(260, 30 + speed * speed / 30);
    for (let d = 0; d < look; d += 4) {
      const j = (q.i + Math.round(d / tr.ds)) % N;
      const k = Math.abs(tr.curv[j]) + 1e-4;
      const vc = Math.sqrt(aLat * Math.min(1, sk) / k);
      const allowed = Math.sqrt(vc * vc + 2 * 20 * d);
      if (allowed < vt) vt = allowed;
    }
    // avoidance
    let shift = 0;
    const fx = Math.sin(c.h), fz = Math.cos(c.h);
    for (const o of cars) {
      if (o === c) continue;
      const dx = o.x - c.x, dz = o.z - c.z;
      const ahead = dx * fx + dz * fz, side = dx * -fz + dz * fx;
      if (ahead > 0 && ahead < 16 + speed * 0.3 && Math.abs(side) < 3.2) {
        shift += (side > 0 ? -1 : 1) * 4.5;
        if (ahead < 9 && o.speed < speed) vt = Math.min(vt, o.speed + 4);
      }
    }
    this.avoid += (shift - this.avoid) * Math.min(1, dt * 2);
    this.lane = this.baseLane + Math.sin(time * 0.13 + this.phase) * 2.2;
    let lat = Math.max(-ROAD_HW + 2.2, Math.min(ROAD_HW - 2.2, this.lane + this.avoid));
    const ahead = 6 + speed * 0.42;
    const p = tr.pointAt(q.i + q.f + ahead / tr.ds, lat);
    const dx = p.x - c.x, dz = p.z - c.z;
    const ang = Math.atan2(dx * -fz + dz * fx, dx * fx + dz * fz);
    let steer = Math.max(-1, Math.min(1, ang * 2.6));
    // our steer convention: + = right; the right vector is (-fz, fx)
    const throttle = speed < vt ? 1 : speed < vt + 1.5 ? 0.3 : 0;
    const brake = speed > vt + 2.5 ? Math.min(1, (speed - vt) / 8) : 0;
    this.nitroCool -= dt;
    const nitro = vt > speed + 12 && c.nitro > 0.3 && this.nitroCool < 0 && Math.random() < 0.02;
    if (nitro) this.nitroCool = 2.5;
    const nitroHold = this.nitroCool > 0.5 && vt > speed + 4;
    return { throttle, brake, steer, handbrake: false, nitro: nitroHold, powerMul: Math.min(1.1, sk), topMul: Math.min(1.06, sk) };
  }
}

// Two-circle car vs car collisions. Returns the strongest impact speed.
export function collideCars(cars, onHit) {
  for (let a = 0; a < cars.length; a++) for (let b = a + 1; b < cars.length; b++) {
    const A = cars[a], B = cars[b];
    const dx0 = B.x - A.x, dz0 = B.z - A.z;
    if (dx0 * dx0 + dz0 * dz0 > 49) continue;
    if (Math.abs(A.y - B.y) > 3) continue;
    for (const oa of [-1.15, 1.15]) for (const ob of [-1.15, 1.15]) {
      const ax = A.x + Math.sin(A.h) * oa, az = A.z + Math.cos(A.h) * oa;
      const bx = B.x + Math.sin(B.h) * ob, bz = B.z + Math.cos(B.h) * ob;
      const dx = bx - ax, dz = bz - az, d = Math.hypot(dx, dz), min = 2.05;
      if (d < min && d > 1e-4) {
        const nx = dx / d, nz = dz / d, push = (min - d) / 2;
        A.x -= nx * push; A.z -= nz * push; B.x += nx * push; B.z += nz * push;
        const rv = (B.vx - A.vx) * nx + (B.vz - A.vz) * nz;
        if (rv < 0) {
          const j = -rv * 0.6;
          A.vx -= nx * j; A.vz -= nz * j; B.vx += nx * j; B.vz += nz * j;
          A.yaw += (Math.random() - 0.5) * rv * 0.02; B.yaw += (Math.random() - 0.5) * rv * 0.02;
          onHit?.(A, B, -rv, (ax + bx) / 2, (A.y + B.y) / 2 + 0.6, (az + bz) / 2);
        }
      }
    }
  }
}
