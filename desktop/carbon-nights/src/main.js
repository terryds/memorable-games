import * as THREE from 'three';
import { Track } from './track.js';
import { Terrain, createTrees } from './terrain.js';
import { createSky, MOON_DIR } from './sky.js';
import { buildWorld } from './world.js';
import { PlanarReflection } from './reflection.js';
import { Car, AIDriver, collideCars, CAR_CLASSES } from './car.js';
import { Rain, makeSmoke, makeSparks, makeSplash, Skidmarks, createComposer } from './effects.js';
import { Audio } from './audio.js';
import { HUD, fmtTime, ORD } from './hud.js';
import { puddleTexture } from './textures.js';

const $ = (id) => document.getElementById(id);
const PAINTS = ['#0b5cff', '#e8e9ee', '#c8102e', '#ff6a00', '#0fd18c', '#8a2be2', '#ffcc00', '#141418'];
const RIVALS = [
  { name: 'KAITO', type: 'tuner', color: '#e8e9ee', skill: 0.97, accent: '#7cff4f' },
  { name: 'VEX', type: 'exotic', color: '#b0101f', skill: 1.0, accent: '#ff3355' },
  { name: 'MONA', type: 'muscle', color: '#2430b8', skill: 0.95, accent: '#b14bff' },
];
const settings = { mode: 'race', cls: 'tuner', paint: PAINTS[0], quality: 'high', rain: true, music: true };
try { Object.assign(settings, JSON.parse(localStorage.getItem('carbon-nights') || '{}')); } catch { /* ignore */ }
const save = () => localStorage.setItem('carbon-nights', JSON.stringify(settings));
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
const lerpAngle = (a, b, t) => a + ((((b - a) % (Math.PI * 2)) + Math.PI * 3) % (Math.PI * 2) - Math.PI) * t;

// ---------------------------------------------------------------- renderer
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', stencil: false });
const pixelRatio = () => (settings.quality === 'high' ? Math.min(devicePixelRatio, 1.5) : Math.min(devicePixelRatio, 1) * 0.8);
renderer.setPixelRatio(pixelRatio());
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
document.body.prepend(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0d0b20, 0.00085);
const camera = new THREE.PerspectiveCamera(64, innerWidth / innerHeight, 0.15, 7000);
scene.add(new THREE.HemisphereLight(0x46558f, 0x140c14, 0.9));
const moon = new THREE.DirectionalLight(0xa9bcff, 0.9);
moon.position.copy(MOON_DIR).multiplyScalar(1000);
scene.add(moon);

const shared = { uTime: { value: 0 }, uWet: { value: 1 }, uPuddle: { value: null } };
const audio = new Audio();
const G = {
  state: 'loading', cars: [], ais: [], player: null, labels: [],
  time: 0, raceTime: 0, countdown: 0, laps: 2, camMode: 0,
  sb: 1, sbOn: false, slow: 0, shake: 0, lapStart: 0, bestLap: null,
  drift: { total: 0, chain: 0, mult: 1, active: false, idle: 0, time: 0, best: 0 },
  finishTimer: -1, prevState: null, nitroWas: false, gearWas: 1, topSpeed: 0,
};
let track, terrain, world, sky, refl, rain, smoke, sparks, splash, skids, envMap, hud, post;

async function load() {
  const bar = $('loadbar'), txt = $('loadtext');
  const step = async (p, t) => { bar.style.width = p + '%'; txt.textContent = t; await nextFrame(); };
  await step(4, 'Loading fonts');
  try { await Promise.race([Promise.all([document.fonts.load('700 100px "Orbitron"'), document.fonts.load('700 100px "Rajdhani"')]), new Promise((r) => setTimeout(r, 2500))]); } catch { /* offline */ }
  await step(10, 'Laying asphalt');
  track = new Track();
  shared.uPuddle.value = puddleTexture();
  await step(22, 'Carving the canyon');
  terrain = new Terrain(track);
  scene.add(terrain.mesh);
  await step(40, 'Planting forests');
  const trees = createTrees(terrain, track);
  scene.add(trees);
  sky = createSky();
  scene.add(sky);
  await step(52, 'Raising the skyline');
  refl = new PlanarReflection(0.5);
  world = buildWorld(scene, track, terrain, refl, shared, settings.quality);
  refl.hidden.push(...world.hideInReflection, trees);
  await step(72, 'Capturing reflections');
  const pmrem = new THREE.PMREMGenerator(renderer);
  const capture = new THREE.Vector3(-60, 7, 150);
  sky.position.copy(capture);
  // the reflection target hasn't been drawn yet: clear it and keep it out of the env capture
  renderer.setRenderTarget(refl.rt); renderer.setClearColor(0x000000, 1); renderer.clear(); renderer.setRenderTarget(null);
  refl.uniforms.uReflOn.value = 0;
  envMap = pmrem.fromScene(scene, 0.03, 0.5, 6000, { position: capture }).texture;
  await step(80, 'Tuning engines');
  rain = new Rain(9000); scene.add(rain.mesh);
  smoke = makeSmoke(); scene.add(smoke.mesh);
  sparks = makeSparks(); scene.add(sparks.mesh);
  splash = makeSplash(); scene.add(splash.mesh);
  skids = new Skidmarks(); scene.add(skids.mesh);
  refl.hidden.push(rain.mesh, smoke.mesh, splash.mesh, skids.mesh);
  post = createComposer(renderer, scene, camera);
  hud = new HUD(track);
  applySettings();
  resize();
  buildMenu();
  previewCar();
  await step(90, 'Compiling shaders');
  updateCamera(0.016);
  try { await renderer.compileAsync(scene, camera); } catch { /* older drivers */ }
  await step(100, 'Ready');
  $('loading').classList.add('hidden');
  enterMenu();
  requestAnimationFrame(loop);
}

// ---------------------------------------------------------------- input
const keys = new Set();
addEventListener('keydown', (e) => {
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) e.preventDefault();
  keys.add(e.code);
  if (e.repeat) return;
  onKey(e.code);
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => keys.clear());

function readInput() {
  if (readInputOverride) return readInputOverride();
  const k = (c) => keys.has(c);
  let throttle = k('KeyW') || k('ArrowUp') ? 1 : 0;
  let brake = k('KeyS') || k('ArrowDown') ? 1 : 0;
  let steer = (k('KeyD') || k('ArrowRight') ? 1 : 0) - (k('KeyA') || k('ArrowLeft') ? 1 : 0);
  let handbrake = k('Space');
  let nitro = k('ShiftLeft') || k('ShiftRight');
  const gp = activePad();
  if (gp) {
    if (Math.abs(gp.axes[0]) > 0.12) steer = Math.sign(gp.axes[0]) * (Math.abs(gp.axes[0]) - 0.12) / 0.88;
    if (gp.buttons[14]?.pressed) steer = -1;
    if (gp.buttons[15]?.pressed) steer = 1;
    throttle = Math.max(throttle, gp.buttons[7]?.value || 0);
    brake = Math.max(brake, gp.buttons[6]?.value || 0);
    handbrake ||= !!gp.buttons[0]?.pressed;
    nitro ||= !!(gp.buttons[1]?.pressed || gp.buttons[2]?.pressed);
  }
  return { throttle, brake, steer, handbrake, nitro };
}

// ---------------------------------------------------------------- gamepad
function activePad() {
  for (const p of navigator.getGamepads?.() || []) if (p && p.connected) return p;
  return null;
}
let padPrev = [];
function pollPad() {
  const gp = activePad();
  const st = $('padstatus');
  if (st) {
    const label = gp ? 'Controller connected: ' + gp.id.replace(/\s*\(.*\)\s*$/, '').slice(0, 40) : 'No controller detected — plug one in and press any button.';
    if (st.textContent !== label) { st.textContent = label; st.classList.toggle('on', !!gp); }
  }
  if (!gp) { padPrev = []; return; }
  const down = gp.buttons.map((b) => b.pressed);
  const hit = (i) => down[i] && !padPrev[i];
  const s = G.state;
  if (s === 'menu') { if (hit(0) || hit(9)) { audio.start(); startEvent(); } }
  else if (s === 'results') { if (hit(0) || hit(9)) startEvent(); else if (hit(1)) enterMenu(); }
  else if (s === 'paused') { if (hit(9) || hit(1)) resume(); }
  else if (s === 'race' || s === 'countdown') {
    if (hit(9)) onKey('Escape');
    if (hit(3)) onKey('KeyQ');
    if (hit(5)) onKey('KeyC');
    if (hit(8)) onKey('KeyR');
  }
  padPrev = down;
}

function onKey(code) {
  const s = G.state;
  if (code === 'KeyM') { settings.music = audio.toggleMusic(); save(); syncSettingButtons(); }
  if (s === 'menu') {
    if (code === 'Enter') startEvent();
    return;
  }
  if (s === 'results') {
    if (code === 'Enter') startEvent();
    if (code === 'Escape') enterMenu();
    return;
  }
  if (s === 'paused') { if (code === 'Escape') resume(); return; }
  if (code === 'Escape') { pause(); return; }
  if (code === 'KeyC') G.camMode = (G.camMode + 1) % 3;
  if (code === 'KeyR' && G.state === 'race' && !G.player.finished) resetPlayer();
  if (code === 'KeyQ' && G.state === 'race') {
    if (G.sbOn) G.sbOn = false;
    else if (G.sb > 0.15) { G.sbOn = true; audio.whoosh(); }
  }
}

// ---------------------------------------------------------------- menu
function buildMenu() {
  const cls = $('classes');
  cls.innerHTML = Object.entries(CAR_CLASSES).map(([k, c]) => `
    <button class="card cls" data-cls="${k}"><b>${c.name}</b><small>${c.model}</small>
      ${Object.entries(c.stats).map(([n, v]) => `<div class="stat"><em>${n.toUpperCase()}</em><i style="--v:${v * 100}%"></i></div>`).join('')}
    </button>`).join('');
  $('swatches').innerHTML = PAINTS.map((p) => `<button class="sw" data-paint="${p}" style="background:${p}"></button>`).join('');
  document.querySelectorAll('.mode').forEach((b) => b.onclick = () => { settings.mode = b.dataset.mode; save(); syncMenu(); });
  document.querySelectorAll('.cls').forEach((b) => b.onclick = () => { settings.cls = b.dataset.cls; save(); syncMenu(); previewCar(); });
  document.querySelectorAll('.sw').forEach((b) => b.onclick = () => { settings.paint = b.dataset.paint; save(); syncMenu(); previewCar(); });
  $('optQuality').onclick = () => { settings.quality = settings.quality === 'high' ? 'low' : 'high'; save(); applySettings(); };
  $('optRain').onclick = () => { settings.rain = !settings.rain; save(); applySettings(); };
  $('optMusic').onclick = () => { audio.start(); settings.music = audio.toggleMusic(); save(); syncSettingButtons(); };
  $('go').onclick = () => startEvent();
  document.querySelectorAll('[data-act]').forEach((b) => b.onclick = () => {
    const a = b.dataset.act;
    if (a === 'resume') resume();
    if (a === 'restart') startEvent();
    if (a === 'menu') enterMenu();
  });
  syncMenu();
}
function syncMenu() {
  document.querySelectorAll('.mode').forEach((b) => b.classList.toggle('sel', b.dataset.mode === settings.mode));
  document.querySelectorAll('.cls').forEach((b) => b.classList.toggle('sel', b.dataset.cls === settings.cls));
  document.querySelectorAll('.sw').forEach((b) => b.classList.toggle('sel', b.dataset.paint === settings.paint));
  const c = CAR_CLASSES[settings.cls];
  $('carname').textContent = c.model;
  $('carblurb').textContent = c.blurb;
  syncSettingButtons();
}
function syncSettingButtons() {
  $('optQuality').textContent = 'Graphics: ' + settings.quality.toUpperCase();
  $('optRain').textContent = 'Rain: ' + (settings.rain ? 'ON' : 'OFF');
  $('optMusic').textContent = 'Music: ' + (settings.music ? 'ON' : 'OFF');
}
function applySettings() {
  refl.enabled = settings.quality === 'high';
  rain.mesh.visible = settings.rain;
  shared.uWet.value = settings.rain ? 1 : 0.55;
  rain.uniforms.uAmt.value = settings.quality === 'high' ? 1 : 0.5;
  audio.musicOn = settings.music;
  renderer.setPixelRatio(pixelRatio());
  resize();
  syncSettingButtons();
}

function clearCars() {
  for (const c of G.cars) scene.remove(c.obj);
  for (const l of G.labels) scene.remove(l);
  G.cars = []; G.ais = []; G.labels = []; G.player = null; G.playerAI = null;
}

function previewCar() {
  if (G.state !== 'menu' && G.state !== 'loading') return;
  clearCars();
  const p = new Car(settings.cls, settings.paint, envMap, 'YOU');
  p.place(track, track.startIdx - 6, 0);
  scene.add(p.obj);
  G.player = p; G.cars = [p];
  p.syncObj();
}

function enterMenu() {
  G.state = 'menu';
  ['pause', 'results'].forEach((id) => $(id).classList.add('hidden'));
  $('menu').classList.remove('hidden');
  hud.show(false);
  G.sbOn = false;
  previewCar();
  syncMenu();
}

function label(name, color) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64;
  const g = c.getContext('2d');
  g.font = '700 38px Orbitron, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.shadowColor = color; g.shadowBlur = 14; g.fillStyle = '#fff'; g.fillText(name, 128, 34);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, color: new THREE.Color(1.6, 1.6, 1.6) }));
  s.scale.set(3.4, 0.85, 1);
  return s;
}

function startEvent() {
  audio.start();
  audio.musicOn = settings.music;
  clearCars();
  ['menu', 'pause', 'results'].forEach((id) => $(id).classList.add('hidden'));
  const mode = settings.mode, s = track.startIdx;
  G.mode = mode;
  G.laps = mode === 'free' ? 1 : 2;
  const player = new Car(settings.cls, settings.paint, envMap, 'YOU');
  player.accent = '#00e5ff';
  if (mode === 'race') {
    const slots = [[s - 5, -4.3], [s - 5, 4.3], [s - 14, -4.3], [s - 14, 4.3]];
    RIVALS.forEach((r, i) => {
      const car = new Car(r.type, r.color, envMap, r.name);
      car.accent = r.accent;
      car.place(track, slots[i][0], slots[i][1]);
      const ai = new AIDriver(car, track, { skill: r.skill, lane: slots[i][1] * 0.6, seed: i + 1 });
      ai.delay = 0.1 + Math.random() * 0.35;
      G.ais.push(ai);
      G.cars.push(car);
      scene.add(car.obj);
      const l = label(r.name, r.accent); scene.add(l); G.labels.push(l); car.label = l;
    });
    player.place(track, slots[3][0], slots[3][1]);
  } else player.place(track, s - 6, 0);
  G.cars.push(player);
  scene.add(player.obj);
  G.player = player;
  for (const c of G.cars) c.syncObj();
  G.state = 'countdown'; G.countdown = 3.999; G.lastCount = 4;
  G.raceTime = 0; G.lapStart = 0; G.bestLap = null; G.finishTimer = -1;
  G.sb = 1; G.sbOn = false; G.topSpeed = 0;
  G.drift = { total: 0, chain: 0, mult: 1, active: false, idle: 0, time: 0, best: 0 };
  G.cam = { ang: player.h, y: player.y + 2, fov: 64 };
  hud.setMode(mode, G.laps);
  hud.show(true);
  hud.chain('');
  $('hint').textContent = mode === 'free' ? 'FREE ROAM — ESC for menu' : '';
  if (mode === 'free') { G.countdown = 0; G.state = 'race'; hud.message('FREE ROAM', 2); }
}

function pause() { G.prevState = G.state; G.state = 'paused'; $('pause').classList.remove('hidden'); }
function resume() { G.state = G.prevState; $('pause').classList.add('hidden'); }

function resetPlayer() {
  const p = G.player;
  p.place(track, p.q.i + 1, 0);
  hud.message('RESET', 0.8);
}

// ---------------------------------------------------------------- simulation
function onCarHit(a, b, v, x, y, z) {
  if (v > 3) {
    for (let k = 0; k < Math.min(30, v * 2); k++) sparks.emit(x, y, z, (Math.random() - 0.5) * 9, Math.random() * 5, (Math.random() - 0.5) * 9, 0.4 + Math.random() * 0.3, 0.12);
    if (a === G.player || b === G.player) { audio.impact(v); G.shake = Math.min(1, G.shake + v * 0.05); }
  }
}

function simulate(h) {
  const p = G.player;
  const racing = G.state === 'race';
  if (!racing) return;
  G.raceTime += h;
  let inp;
  if (p.finished && G.playerAI) inp = G.playerAI.input(h, G.cars, 0, G.raceTime);
  else inp = readInput();
  p.throttleIn = inp.throttle;
  p.update(h, inp, track);
  for (const ai of G.ais) {
    const c = ai.car;
    if (G.raceTime < ai.delay) { c.update(h, { throttle: 0, brake: 1, steer: 0 }, track); continue; }
    const gap = p.progress - c.progress;
    const ip = ai.input(h, G.cars, c.finished ? -400 : gap, G.raceTime);
    c.update(h, ip, track);
  }
  collideCars(G.cars, onCarHit);
}

function lapLogic() {
  const p = G.player;
  for (const c of G.cars) {
    if (!c.lapEvent) continue;
    c.lapEvent = false;
    if (G.mode === 'free') continue;
    if (c.lap > G.laps && !c.finished) {
      c.finished = true; c.finishTime = G.raceTime;
      if (c === p) onPlayerFinish();
      continue;
    }
    if (c === p && c.lap > 1) {
      const lt = G.raceTime - G.lapStart;
      G.lapStart = G.raceTime;
      const best = !G.bestLap || lt < G.bestLap;
      if (best) G.bestLap = lt;
      hud.message(c.lap === G.laps ? `FINAL LAP · ${fmtTime(lt)}` : `LAP ${c.lap} · ${fmtTime(lt)}`, 2.5);
    }
  }
}

function onPlayerFinish() {
  const p = G.player;
  if (G.mode === 'drift') bankDrift();
  G.playerAI = new AIDriver(p, track, { skill: 0.75, lane: 0 });
  G.finishTimer = 3;
  G.sbOn = false;
  const pos = G.mode === 'race' ? standings().findIndex((c) => c === p) + 1 : 1;
  hud.message(G.mode === 'race' ? (pos === 1 ? '1ST — YOU OWN THE NIGHT' : `${ORD(pos).toUpperCase()} PLACE`) : 'FINISH', 3);
  $('flash').style.opacity = 0.35; setTimeout(() => ($('flash').style.opacity = 0), 120);
}

function standings() {
  return [...G.cars].sort((a, b) => {
    if (a.finished && b.finished) return a.finishTime - b.finishTime;
    if (a.finished) return -1; if (b.finished) return 1;
    return b.progress - a.progress;
  });
}

function showResults() {
  G.state = 'results';
  hud.show(false);
  const res = $('results'), body = $('resbody');
  res.classList.remove('hidden');
  const p = G.player;
  if (G.mode === 'race') {
    const raceLen = G.laps * track.length;
    const order = standings();
    const est = (c) => c.finished ? c.finishTime : G.raceTime + Math.max(0, raceLen - c.progress) / Math.max(c.speed, 35);
    const rows = order.map((c) => ({ c, t: est(c) })).sort((a, b) => a.t - b.t);
    const pos = rows.findIndex((r) => r.c === p) + 1;
    $('restitle').textContent = pos === 1 ? 'VICTORY' : `${ORD(pos).toUpperCase()} PLACE`;
    body.innerHTML = rows.map((r, i) => `<div class="res ${r.c === p ? 'me' : ''}" style="--c:${r.c.accent}"><b>${i + 1}</b><span>${r.c.name}</span><span>${r.c.spec.model}</span><span>${fmtTime(r.t)}</span></div>`).join('')
      + `<div class="sub" style="margin-top:14px">BEST LAP ${fmtTime(G.bestLap ?? NaN)}</div>`;
  } else if (G.mode === 'drift') {
    const best = Number(localStorage.getItem('cn-drift-best') || 0);
    const score = Math.floor(G.drift.total);
    if (score > best) localStorage.setItem('cn-drift-best', score);
    $('restitle').textContent = 'DRIFT ATTACK';
    body.innerHTML = `<div class="sub">TOTAL SCORE</div><div class="bigscore">${score.toLocaleString()}</div>
      <div class="sub">BEST CHAIN ${Math.floor(G.drift.best).toLocaleString()} · TIME ${fmtTime(p.finishTime)}</div>
      <div class="sub">${score > best ? 'NEW PERSONAL BEST!' : 'PERSONAL BEST ' + best.toLocaleString()}</div>`;
  }
}

function bankDrift() {
  const D = G.drift;
  if (!D.active) return;
  const pts = D.chain * D.mult;
  D.total += pts; D.best = Math.max(D.best, pts); D.active = false;
  if (pts > 50) hud.chain(`+${Math.floor(pts).toLocaleString()}<small>DRIFT BANKED</small>`, 'bank', 1.6);
  else hud.chain('');
}

function driftLogic(dt) {
  const p = G.player, D = G.drift;
  if (G.mode === 'race' || G.state !== 'race' || p.finished) return;
  if (p.drifting && p.speed > 11 && Math.abs(p.slip) > 0.12) {
    if (!D.active) { D.active = true; D.chain = 0; D.time = 0; }
    D.time += dt; D.idle = 0;
    D.chain += dt * p.speed * Math.abs(p.slip) * 9;
    D.mult = Math.min(5, 1 + Math.floor(D.time / 1.6));
    hud.chain(`${Math.floor(D.chain).toLocaleString()} <span style="color:#ffb000">×${D.mult}</span><small>DRIFT</small>`, '', 0);
  } else if (D.active) {
    D.idle += dt;
    if (D.idle > 0.7) bankDrift();
  }
  if (D.active && p.impact > 3) { D.active = false; hud.chain('CHAIN LOST<small>WATCH THE WALLS</small>', 'lost', 1.4); }
}

// ---------------------------------------------------------------- effects
const _v = new THREE.Vector3();
function carEffects(c, dt) {
  const fx = Math.sin(c.h), fz = Math.cos(c.h), rx = -fz, rz = fx;
  const W = c.spec.W, rzOff = -c.spec.L / 2 + 1.05;
  const sliding = c.speed > 6 && (c.drifting || Math.abs(c.slip) > 0.22 || (c.braking && c.speed > 25 && c.throttleIn > 0.5));
  const burnout = c.throttleIn > 0.9 && c.speed < 10 && c.speed > 0.5 && c === G.player;
  for (const side of [-1, 1]) {
    const lx = side * (W / 2 - 0.16);
    const x = c.x + rx * lx + fx * rzOff, z = c.z + rz * lx + fz * rzOff, y = c.y;
    const key = c.name + side;
    if (sliding || burnout) {
      skids.add(key, x, y + 0.035, z, rx, rz, Math.min(1, Math.abs(c.slip) * 3 + 0.4));
      if (Math.random() < (c.drifting ? 0.7 : 0.3)) smoke.emit(x + (Math.random() - 0.5) * 0.4, y + 0.3, z + (Math.random() - 0.5) * 0.4, c.vx * 0.25 + (Math.random() - 0.5) * 2, 0.5 + Math.random(), c.vz * 0.25 + (Math.random() - 0.5) * 2, 1.1 + Math.random() * 0.9, 1.0, 2.2, Math.min(0.3, 0.1 + Math.abs(c.slip) * 0.6));
    } else skids.break(key);
    if (settings.rain && c.speed > 10 && Math.random() < 0.8) {
      splash.emit(x - fx * 0.5, y + 0.2, z - fz * 0.5, c.vx * 0.55 + rx * side * 1.5 + (Math.random() - 0.5) * 2, 0.8 + Math.random() * 1.6, c.vz * 0.55 + rz * side * 1.5 + (Math.random() - 0.5) * 2, 0.35 + Math.random() * 0.25, 0.35, 1.6, Math.min(0.16, c.speed / 300));
    }
  }
  if (c.impact > 2) {
    const sgn = Math.sign(c.q.lat);
    const x = c.x + c.q.rx * sgn * W / 2, z = c.z + c.q.rz * sgn * W / 2;
    for (let k = 0; k < Math.min(40, c.impact * 3); k++) sparks.emit(x + fx * (Math.random() - 0.5) * 3, c.y + 0.5, z + fz * (Math.random() - 0.5) * 3, c.vx * 0.4 + (Math.random() - 0.5) * 6, Math.random() * 4, c.vz * 0.4 + (Math.random() - 0.5) * 6, 0.35 + Math.random() * 0.3, 0.1);
    if (c === G.player) { audio.impact(c.impact); G.shake = Math.min(1, G.shake + c.impact * 0.04); }
  }
}

function gapText(d, v) {
  const t = Math.abs(d) / Math.max(v, 25);
  return (d >= 0 ? '▲ ' : '▼ ') + t.toFixed(1) + 's';
}

// ---------------------------------------------------------------- camera
function updateCamera(dt) {
  const p = G.player;
  if (!p) return;
  if (G.state === 'menu' || G.state === 'loading') {
    const a = G.time * 0.11 + 2.2;
    const r = 7.6;
    camera.position.set(p.x + Math.sin(a) * r, p.y + 1.7 + Math.sin(G.time * 0.21) * 0.4, p.z + Math.cos(a) * r);
    camera.lookAt(p.x - Math.sin(a) * 0.6, p.y + 0.7, p.z - Math.cos(a) * 0.6);
    camera.fov = 50; camera.updateProjectionMatrix();
    return;
  }
  const C = G.cam;
  const fx = Math.sin(p.h), fz = Math.cos(p.h);
  if (G.camMode === 2) {
    camera.position.set(p.x + fx * 0.2, p.y + 1.22, p.z + fz * 0.2);
    camera.lookAt(p.x + fx * 30, p.y + 0.9 + Math.sin(p.slopePitch) * 30, p.z + fz * 30);
  } else {
    const velAng = Math.atan2(p.vx, p.vz);
    let target = p.h;
    if (p.speed > 4 && p.vF > 0) target = lerpAngle(p.h, velAng, 0.5);
    C.ang = lerpAngle(C.ang, target, 1 - Math.exp(-dt * 5.5));
    const far = G.camMode === 1;
    const dist = (far ? 9.4 : 6.3) + p.speed * 0.022 + (p.nitroOn ? 0.7 : 0);
    const height = far ? 3.1 : 1.95;
    const cx = p.x - Math.sin(C.ang) * dist, cz = p.z - Math.cos(C.ang) * dist;
    C.y += (p.y + height - C.y) * (1 - Math.exp(-dt * 6));
    const ground = Math.max(terrain.height(cx, cz), track.project(cx, cz, p.q.i, {}).y) + 0.9;
    let cy = Math.max(C.y, ground);
    const sh = G.shake * 0.25 + Math.max(0, p.speed - 55) * 0.0012 + (p.nitroOn ? 0.03 : 0);
    camera.position.set(cx + (Math.random() - 0.5) * sh, cy + (Math.random() - 0.5) * sh, cz + (Math.random() - 0.5) * sh);
    camera.lookAt(p.x + fx * 3.5, p.y + (far ? 1.3 : 1.05), p.z + fz * 3.5);
  }
  const fov = 62 + Math.min(p.speed, 95) * 0.17 + (p.nitroOn ? 7 : 0) - G.slow * 6;
  C.fov += (fov - C.fov) * (1 - Math.exp(-dt * 4));
  camera.fov = C.fov; camera.updateProjectionMatrix();
  G.shake = Math.max(0, G.shake - dt * 2.5);
}

// ---------------------------------------------------------------- loop
let last = performance.now();
function loop(now) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  pollPad();
  G.time += dt;
  const p = G.player;
  const playing = G.state === 'race' || G.state === 'countdown';

  if (G.state === 'countdown') {
    G.countdown -= dt;
    const n = Math.ceil(G.countdown);
    if (n !== G.lastCount) {
      G.lastCount = n;
      if (n > 0) { hud.countdown(String(n)); audio.beep(false); } else { hud.countdown('GO!'); audio.beep(true); G.state = 'race'; }
    }
    const inp = readInput();
    p.throttleIn = inp.throttle;
    p.rpm += ((900 + inp.throttle * 6500) - p.rpm) * Math.min(1, dt * 8);
  }

  // speedbreaker
  if (G.state === 'race') {
    if (G.sbOn) { G.sb -= dt * 0.22; if (G.sb <= 0) { G.sb = 0; G.sbOn = false; } }
    else G.sb = Math.min(1, G.sb + dt * (0.012 + (p.drifting ? 0.05 : 0) + (p.speed > 60 ? 0.012 : 0)));
  }
  G.slow += ((G.sbOn ? 1 : 0) - G.slow) * Math.min(1, dt * 5);
  const timeScale = 1 - G.slow * 0.62;

  if (G.state === 'race') {
    const simDt = dt * timeScale;
    const n = Math.max(1, Math.ceil(simDt / (1 / 120)));
    for (let i = 0; i < n; i++) simulate(simDt / n);
    lapLogic();
    driftLogic(simDt);
    if (p.nitroOn && !G.nitroWas) audio.whoosh();
    G.nitroWas = p.nitroOn;
    if (typeof p.gear === 'number' && p.gear > G.gearWas) audio.shift();
    G.gearWas = p.gear;
    G.topSpeed = Math.max(G.topSpeed, p.speed);
    if (p.wrongWay > 1.2 && !p.finished) hud.message('WRONG WAY', 0.3);
    if (G.finishTimer > 0 && (G.finishTimer -= dt) <= 0) showResults();
  }

  if (playing || G.state === 'menu' || G.state === 'results') {
    for (const c of G.cars) {
      c.syncObj(dt * (G.state === 'race' ? timeScale : 1), G.time);
      if (G.state === 'race') carEffects(c, dt * timeScale);
      if (c.label) {
        c.label.position.set(c.x, c.y + 2.3, c.z);
        const d = Math.hypot(c.x - camera.position.x, c.z - camera.position.z);
        c.label.visible = d < 160 && d > 4;
      }
    }
  }
  if (G.state !== 'paused') {
    smoke.update(dt * timeScale); sparks.update(dt * timeScale); splash.update(dt * timeScale);
    if (G.state !== 'results') updateCamera(dt);
  }

  // HUD
  if (playing && p) {
    const order = standings();
    const pos = order.indexOf(p) + 1;
    hud.update({
      pos, total: G.cars.length, lap: Math.max(1, p.lap), time: G.raceTime, best: G.bestLap,
      standings: G.mode === 'race' ? order.map((c, i) => ({ pos: i + 1, name: c.name, color: c.accent, me: c === p, gap: c === p ? '' : gapText(c.progress - p.progress, p.speed) })) : null,
      drift: G.mode === 'drift' ? G.drift.total : null,
    });
    hud.drawSpeedo(p, G.sb, G.sbOn);
    hud.drawMinimap(G.cars, p, G.cars.map((c) => c.accent));
  }
  hud?.tick(dt);
  audio.update(p, playing && G.state !== 'paused', timeScale);

  // render
  shared.uTime.value = G.time;
  sky.material.uniforms.uTime.value = G.time;
  sky.position.copy(camera.position);
  world.update(G.time);
  _v.set(p ? p.vx : 0, 0, p ? p.vz : 0);
  rain.update(G.time, camera.position, _v);
  post.final.uniforms.uTime.value = G.time;
  post.final.uniforms.uSpeed.value = p && playing ? Math.max(0, (p.speed - 35) / 55) : 0;
  post.final.uniforms.uNitro.value += ((p?.nitroOn ? 1 : 0) - post.final.uniforms.uNitro.value) * Math.min(1, dt * 6);
  post.final.uniforms.uSlow.value = G.slow;
  post.final.uniforms.uHit.value = G.shake;
  refl.update(renderer, scene, camera);
  post.composer.render(dt);
}

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h; camera.updateProjectionMatrix();
  if (post) { post.composer.setPixelRatio(renderer.getPixelRatio()); post.composer.setSize(w, h); }
  if (refl) { const s = renderer.getDrawingBufferSize(new THREE.Vector2()); refl.setSize(s.x, s.y); }
}
addEventListener('resize', resize);

window.__game = {
  G, settings, startEvent, enterMenu, camera, scene, renderer, keys,
  get track() { return track; },
  // test hook: advance the simulation synchronously with a fixed input
  advance(sec, input = {}) {
    if (G.state === 'countdown') { G.state = 'race'; $('count').textContent = ''; }
    const inp = { throttle: 0, brake: 0, steer: 0, handbrake: false, nitro: false, ...input };
    const orig = readInputOverride; readInputOverride = () => inp;
    for (let t = 0; t < sec; t += 1 / 60) {
      for (let i = 0; i < 2; i++) simulate(1 / 120);
      lapLogic(); driftLogic(1 / 60);
      for (const c of G.cars) { c.syncObj(1 / 60, G.time); carEffects(c, 1 / 60); }
      smoke.update(1 / 60); sparks.update(1 / 60); splash.update(1 / 60);
      updateCamera(1 / 60); G.time += 1 / 60;
    }
    readInputOverride = orig;
  },
};
let readInputOverride = null;
load().catch((e) => { console.error(e); $('loadtext').textContent = 'Error: ' + e.message; });
