import * as THREE from 'three';
import { Track } from './track.js';
import { Terrain } from './terrain.js';
import { buildWorld, SUN_DIR } from './world.js';
import { Kart, KartAI, CHARACTERS, CLASSES, collideKarts } from './kart.js';
import { ItemSystem, ITEM_ICON, ITEM_NAME } from './items.js';
import { Particles, createComposer } from './effects.js';
import { Audio } from './audio.js';
import { toonGradient, glowTexture, smokeTexture } from './textures.js';

const $ = (id) => document.getElementById(id);
const LAPS = 3;
const DIFF = { easy: 0.84, medium: 0.94, hard: 1.02 };
const settings = { char: 'mango', diff: 'medium', music: true, quality: 'high' };
try { Object.assign(settings, JSON.parse(localStorage.getItem('tiki-kart') || '{}')); } catch { /* ignore */ }
const save = () => localStorage.setItem('tiki-kart', JSON.stringify(settings));
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
const lerpAngle = (a, b, t) => a + ((((b - a) % (Math.PI * 2)) + Math.PI * 3) % (Math.PI * 2) - Math.PI) * t;
const fmt = (t) => { if (!isFinite(t)) return '--:--.--'; const m = Math.floor(t / 60), s = t - m * 60; return `${m}:${s < 10 ? '0' : ''}${s.toFixed(2)}`; };
const ord = (n) => (n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th');

// ---------------------------------------------------------------- renderer
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
const pixelRatio = () => (settings.quality === 'high' ? Math.min(devicePixelRatio, 1.5) : 0.85);
renderer.setPixelRatio(pixelRatio());
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.body.prepend(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(68, innerWidth / innerHeight, 0.2, 9000);
scene.add(new THREE.HemisphereLight(0xcfeaff, 0xc9a26b, 1.6));
const sun = new THREE.DirectionalLight(0xfff1d6, 2.6);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -70, right: 70, top: 70, bottom: -70, near: 1, far: 400 });
sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.6;
scene.add(sun, sun.target);

const audio = new Audio();
const G = {
  state: 'loading', karts: [], ais: [], player: null, time: 0, raceTime: 0, camMode: 0,
  cam: { ang: 0, y: 0, fov: 68 }, countdown: 0, lastCount: 4, firstGas: null, finishTimer: -1,
};
let track, terrain, world, items, gradient, glowTex, fx, post, minimapPath;

async function load() {
  const bar = $('loadbar'), txt = $('loadtext');
  const step = async (p, t) => { bar.style.width = p + '%'; txt.textContent = t; await nextFrame(); };
  await step(5, 'Waxing the surfboards');
  try { await Promise.race([document.fonts.load('800 60px "Baloo 2"'), new Promise((r) => setTimeout(r, 2500))]); } catch { /* offline */ }
  gradient = toonGradient(); glowTex = glowTexture();
  track = new Track();
  await step(20, 'Raising Tiki Island');
  terrain = new Terrain(track);
  scene.add(terrain.mesh);
  await step(45, 'Planting palm trees');
  world = buildWorld(scene, track, terrain, gradient);
  await step(70, 'Filling the item boxes');
  const smokeTex = smokeTexture();
  fx = {
    smoke: new Particles(700, smokeTex, { drag: 1.5, gravity: -1.2 }),
    dust: new Particles(500, smokeTex, { drag: 2.2, gravity: 0.5 }),
    fire: new Particles(400, glowTex, { additive: true, drag: 2, gravity: -3 }),
    spark: new Particles(300, glowTex, { additive: true, drag: 1, gravity: 9 }),
    volcano: new Particles(160, smokeTex, { drag: 0.2, gravity: -2 }),
  };
  for (const p of Object.values(fx)) scene.add(p.mesh);
  items = new ItemSystem(scene, track, gradient, fx);
  minimapPath = []; for (let i = 0; i < track.N; i += 3) minimapPath.push([track.px[i], track.pz[i]]);
  post = createComposer(renderer, scene, camera);
  buildMenu();
  applySettings();
  previewKart();
  await step(90, 'Warming up engines');
  updateCamera(0.016);
  try { await renderer.compileAsync(scene, camera); } catch { /* fine */ }
  await step(100, "Let's race!");
  $('loading').classList.add('hidden');
  enterMenu();
  requestAnimationFrame(loop);
}

// ---------------------------------------------------------------- input
const keys = new Set();
addEventListener('keydown', (e) => {
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) e.preventDefault();
  keys.add(e.code);
  if (!e.repeat) {
    // latch quick taps so they're never lost between frames
    if (['KeyE', 'KeyF', 'ControlLeft', 'ControlRight'].includes(e.code)) G.tapItem = true;
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') G.tapBoost = true;
    if (e.code === 'Space') G.tapDrift = true;
    onKey(e.code);
  }
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => keys.clear());
let inputOverride = null;
function activePad() { for (const p of navigator.getGamepads?.() || []) if (p && p.connected) return p; return null; }
function readInput() {
  if (inputOverride) return inputOverride;
  const k = (c) => keys.has(c);
  const inp = {
    throttle: k('KeyW') || k('ArrowUp') ? 1 : 0, brake: k('KeyS') || k('ArrowDown') ? 1 : 0,
    steer: (k('KeyD') || k('ArrowRight') ? 1 : 0) - (k('KeyA') || k('ArrowLeft') ? 1 : 0),
    drift: k('Space'), boost: k('ShiftLeft') || k('ShiftRight'), item: k('KeyE') || k('ControlLeft') || k('ControlRight') || k('KeyF'),
  };
  const gp = activePad();
  if (gp) {
    const ax = gp.axes[0] || 0;
    if (Math.abs(ax) > 0.15) inp.steer = Math.sign(ax) * (Math.abs(ax) - 0.15) / 0.85;
    if (gp.buttons[14]?.pressed) inp.steer = -1;
    if (gp.buttons[15]?.pressed) inp.steer = 1;
    inp.throttle = Math.max(inp.throttle, gp.buttons[0]?.pressed ? 1 : 0, gp.buttons[7]?.value || 0);
    inp.brake = Math.max(inp.brake, gp.buttons[6]?.value || 0);
    inp.drift ||= !!gp.buttons[5]?.pressed;
    inp.boost ||= !!gp.buttons[4]?.pressed;
    inp.item ||= !!(gp.buttons[1]?.pressed || gp.buttons[2]?.pressed);
  }
  inp.boost ||= !!G.tapBoost; inp.drift ||= !!G.tapDrift;
  return inp;
}
let padPrev = [];
function pollPad() {
  const gp = activePad();
  const st = $('padstatus');
  const label = gp ? 'Controller connected: ' + gp.id.replace(/\s*\(.*\)\s*$/, '').slice(0, 40) : 'No controller detected — plug one in and press any button.';
  if (st.textContent !== label) { st.textContent = label; st.classList.toggle('on', !!gp); }
  if (!gp) { padPrev = []; return; }
  const down = gp.buttons.map((b) => b.pressed), hit = (i) => down[i] && !padPrev[i];
  const ax = gp.axes[0] || 0, flick = Math.abs(ax) > 0.6 && !(Math.abs(padPrev.ax || 0) > 0.6) ? Math.sign(ax) : 0;
  const s = G.state;
  if (s === 'menu') {
    if (hit(0) || hit(9)) startRace();
    const dir = hit(14) ? -1 : hit(15) ? 1 : flick;
    if (dir) { const i = CHARACTERS.findIndex((c) => c.id === settings.char); settings.char = CHARACTERS[(i + dir + CHARACTERS.length) % CHARACTERS.length].id; save(); syncMenu(); previewKart(); }
  } else if (s === 'results') { if (hit(0) || hit(9)) startRace(); else if (hit(1)) enterMenu(); }
  else if (s === 'paused') { if (hit(9) || hit(1)) resume(); }
  else if (s === 'race' || s === 'countdown') {
    if (hit(1) || hit(2)) G.tapItem = true; if (hit(4)) G.tapBoost = true; if (hit(5)) G.tapDrift = true;
    if (hit(9)) pause(); if (hit(8)) rescue(); if (hit(3)) G.camMode = (G.camMode + 1) % 2; }
  padPrev = down; padPrev.ax = ax;
}
function onKey(code) {
  const s = G.state;
  if (code === 'KeyM') { settings.music = !settings.music; audio.musicOn = settings.music; save(); syncMenu(); }
  if (s === 'menu') {
    if (code === 'Enter') startRace();
    if (code === 'ArrowLeft' || code === 'ArrowRight') { const i = CHARACTERS.findIndex((c) => c.id === settings.char); settings.char = CHARACTERS[(i + (code === 'ArrowLeft' ? -1 : 1) + CHARACTERS.length) % CHARACTERS.length].id; save(); syncMenu(); previewKart(); }
    return;
  }
  if (s === 'results') { if (code === 'Enter') startRace(); if (code === 'Escape') enterMenu(); return; }
  if (s === 'paused') { if (code === 'Escape') resume(); return; }
  if (code === 'Escape') pause();
  if (code === 'KeyC') G.camMode = (G.camMode + 1) % 2;
  if (code === 'KeyR') rescue();
}

// ---------------------------------------------------------------- menu
function buildMenu() {
  $('chars').innerHTML = CHARACTERS.map((c) => {
    const st = CLASSES[c.cls].stats;
    return `<button class="char" data-char="${c.id}" style="--c:${c.kart}"><span class="em">${c.emoji}</span><b>${c.name}</b><small>${CLASSES[c.cls].label}</small>
      ${Object.entries(st).map(([n, v]) => `<div class="stat"><em>${n.toUpperCase()}</em><i style="--v:${v * 100}%"></i></div>`).join('')}</button>`;
  }).join('');
  document.querySelectorAll('.char').forEach((b) => b.onclick = () => { settings.char = b.dataset.char; save(); syncMenu(); previewKart(); });
  document.querySelectorAll('[data-diff]').forEach((b) => b.onclick = () => { settings.diff = b.dataset.diff; save(); syncMenu(); });
  $('optMusic').onclick = () => { audio.start(); settings.music = !settings.music; audio.musicOn = settings.music; save(); syncMenu(); };
  $('optQuality').onclick = () => { settings.quality = settings.quality === 'high' ? 'low' : 'high'; save(); applySettings(); };
  $('go').onclick = () => startRace();
  document.querySelectorAll('[data-act]').forEach((b) => b.onclick = () => { const a = b.dataset.act; if (a === 'resume') resume(); if (a === 'restart') startRace(); if (a === 'menu') enterMenu(); });
  syncMenu();
}
function syncMenu() {
  document.querySelectorAll('.char').forEach((b) => b.classList.toggle('sel', b.dataset.char === settings.char));
  document.querySelectorAll('[data-diff]').forEach((b) => b.classList.toggle('sel', b.dataset.diff === settings.diff));
  const c = CHARACTERS.find((x) => x.id === settings.char);
  $('charname').textContent = `${c.emoji} ${c.name}`; $('charblurb').textContent = c.blurb;
  $('optMusic').textContent = 'Music: ' + (settings.music ? 'ON' : 'OFF');
  $('optQuality').textContent = 'Graphics: ' + settings.quality.toUpperCase();
}
function applySettings() {
  renderer.setPixelRatio(pixelRatio());
  renderer.shadowMap.enabled = settings.quality === 'high';
  sun.castShadow = settings.quality === 'high';
  resize(); syncMenu();
}

function clearKarts() {
  for (const k of G.karts) scene.remove(k.obj);
  G.karts = []; G.ais = []; G.player = null; G.playerAI = null;
}
function previewKart() {
  if (G.state !== 'menu' && G.state !== 'loading') return;
  clearKarts();
  const ch = CHARACTERS.find((c) => c.id === settings.char);
  const k = new Kart(ch, gradient, glowTex, true);
  k.place(track, track.finishIdx - 3, 0);
  scene.add(k.obj); G.karts = [k]; G.player = k;
}
function enterMenu() {
  G.state = 'menu';
  ['pause', 'results'].forEach((id) => $(id).classList.add('hidden'));
  $('menu').classList.remove('hidden'); $('hud').classList.add('hidden');
  items?.clear();
  previewKart(); syncMenu();
}

function startRace() {
  audio.start(); audio.musicOn = settings.music;
  clearKarts(); items.clear();
  ['menu', 'pause', 'results'].forEach((id) => $(id).classList.add('hidden'));
  const me = CHARACTERS.find((c) => c.id === settings.char);
  const others = CHARACTERS.filter((c) => c !== me);
  const roster = [...others, me]; // player starts at the back of the grid
  const f = track.finishIdx, skill = DIFF[settings.diff];
  roster.forEach((ch, i) => {
    const isP = ch === me, k = new Kart(ch, gradient, glowTex, isP);
    const row = Math.floor(i / 2), side = i % 2 ? 3.4 : -3.4;
    k.place(track, f - 4 - row * 5, side);
    scene.add(k.obj); G.karts.push(k);
    if (isP) G.player = k;
    else G.ais.push(new KartAI(k, track, { skill: skill * (0.95 + 0.1 * ((i * 37) % 10) / 10), lane: side * 0.4, seed: i + 1 }));
  });
  G.state = 'countdown'; G.countdown = 3.999; G.lastCount = 4; G.firstGas = null;
  G.raceTime = 0; G.finishTimer = -1; G.lapStart = 0; G.bestLap = null;
  G.cam = { ang: G.player.h, y: G.player.y + 2.5, fov: 68 };
  $('hud').classList.remove('hidden');
  $('msg').classList.remove('show'); $('count').textContent = '';
}
function pause() { G.prev = G.state; G.state = 'paused'; $('pause').classList.remove('hidden'); }
function resume() { G.state = G.prev; $('pause').classList.add('hidden'); }
function rescue() {
  const p = G.player;
  if (G.state !== 'race' || !p || p.finished || p.respawnTimer > 0) return;
  p.respawnTimer = 0.8; p.respawnIdx = p.q.i; message('RESCUE!', 0.8);
}

let msgT = 0;
function message(text, dur = 1.6) { const el = $('msg'); el.textContent = text; el.classList.add('show'); msgT = dur; }
function popup(text, color = '#fff') { const el = $('pop'); el.textContent = text; el.style.color = color; el.classList.remove('show'); void el.offsetWidth; el.classList.add('show'); }

function standings() {
  return [...G.karts].sort((a, b) => {
    if (a.finished && b.finished) return a.finishTime - b.finishTime;
    if (a.finished) return -1; if (b.finished) return 1;
    return b.progress - a.progress;
  });
}

// ---------------------------------------------------------------- simulation
function handleEvents(k) {
  const me = k === G.player;
  for (const e of k.events) {
    if (e.type === 'turbo') {
      for (let n = 0; n < 2; n++) { const p = k.exhaustWorld(n); for (let j = 0; j < 4; j++) fx.fire.emit(p.x, p.y, p.z, (Math.random() - 0.5) * 3, 1 + Math.random() * 2, (Math.random() - 0.5) * 3, 0.3, 0.5, 1, 0.7, 0.5, 0.8, 1.6); }
      if (me) { audio.sfx('turbo', e.n); popup(e.perfect ? `PERFECT TURBO ×${e.n}!` : `TURBO ×${e.n}`, e.perfect ? '#ffd23f' : '#8fe3ff'); if (e.perfect) audio.sfx('perfect'); }
    } else if (e.type === 'fizzle' && me) { audio.sfx('fizzle'); popup('TOO EARLY!', '#ff6b6b'); }
    else if (e.type === 'hop' && me) audio.sfx('hop');
    else if (e.type === 'pad' && me) { audio.sfx('turbo', 2); popup('BOOST!', '#8fe3ff'); }
    else if (e.type === 'hangtime') { if (me) { popup(`HANG TIME ${e.t.toFixed(1)}s!`, '#ffd23f'); audio.sfx('turbo', 1); } }
    else if (e.type === 'wall' && me) audio.sfx('wall', e.v);
    else if (e.type === 'fall') { if (me) { audio.sfx('splash'); message('SPLASH!', 1.2); } for (let j = 0; j < 30; j++) fx.dust.emit(k.x, Math.max(0, k.y), k.z, (Math.random() - 0.5) * 8, 4 + Math.random() * 6, (Math.random() - 0.5) * 8, 1, 1.4, 2, 0.8, 0.85, 0.95, 1); }
    else if (e.type === 'hit') { if (me) { audio.sfx('hit'); message(e.kind === 'tnt' ? 'KA-BOOM!' : 'OUCH!', 1); } }
    else if (e.type === 'shieldpop' && me) { audio.sfx('shield'); popup('SHIELD SAVED YOU!', '#8fe3ff'); }
  }
}

function simulate(h) {
  if (G.state !== 'race') return;
  G.raceTime += h;
  const p = G.player, order = standings();
  let inp = p.finished && G.playerAI ? G.playerAI.input(h, G.karts, 0, G.raceTime) : readInput();
  p.throttleIn = inp.throttle;
  const itemDown = (inp.item && !G.itemPrev) || G.tapItem; G.itemPrev = inp.item;
  G.tapItem = G.tapBoost = G.tapDrift = false;
  p.update(h, inp, track);
  handleEvents(p);
  if (itemDown && p.item && !p.finished) items.use(p, order);
  for (const ai of G.ais) {
    const k = ai.k;
    const ip = ai.input(h, G.karts, k.finished ? -400 : p.progress - k.progress, G.raceTime);
    k.throttleIn = ip.throttle;
    k.update(h, ip, track);
    handleEvents(k);
    if (ip.item && k.item) items.use(k, order);
  }
  collideKarts(G.karts, (a, b, v) => { if ((a === p || b === p) && v > 4) audio.sfx('wall', v * 0.5); });
  items.update(h, G.karts, order, G.time);
  for (const e of items.events) {
    if (e.type === 'box' && e.kart === p) audio.sfx('box');
    else if (e.type === 'got' && e.kart === p) audio.sfx('got');
    else if (e.type === 'fruit' && e.kart === p) { audio.sfx('fruit'); if (p.fruit === 10) popup('10 FRUIT — TOP SPEED UP!', '#ff8a1f'); }
    else if (e.type === 'use' && (e.kart === p || dist(e.kart, p) < 60)) audio.sfx(e.item === 'shield' ? 'shield' : e.item === 'turbo' ? 'turbo' : 'fire', 3);
    else if (e.type === 'boom' && Math.hypot(e.x - p.x, e.z - p.z) < 90) audio.sfx('boom');
    else if (e.type === 'hit' && e.by === p && e.kart !== p) popup(`HIT ${e.kart.name}!`, '#ffd23f');
  }
  lapLogic();
}
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

function lapLogic() {
  const p = G.player;
  for (const k of G.karts) {
    if (!k.lapEvent) continue;
    k.lapEvent = false;
    if (k.lap > LAPS && !k.finished) {
      k.finished = true; k.finishTime = G.raceTime;
      if (k === p) {
        const pos = standings().indexOf(p) + 1;
        G.playerAI = new KartAI(p, track, { skill: 0.8 });
        G.finishTimer = 3.2;
        message(pos === 1 ? '🏆 YOU WIN!' : `${pos}${ord(pos).toUpperCase()} PLACE!`, 3);
        audio.sfx('lap');
        $('fade').style.opacity = 0.5; setTimeout(() => ($('fade').style.opacity = 0), 140);
      }
      continue;
    }
    if (k === p && k.lap > 1) {
      const lt = G.raceTime - G.lapStart; G.lapStart = G.raceTime;
      if (!G.bestLap || lt < G.bestLap) G.bestLap = lt;
      message(k.lap === LAPS ? 'FINAL LAP!' : `LAP ${k.lap}`, 1.8);
      audio.sfx('lap');
    }
  }
}

function showResults() {
  G.state = 'results';
  $('hud').classList.add('hidden');
  const p = G.player, raceLen = LAPS * track.length;
  const est = (k) => (k.finished ? k.finishTime : G.raceTime + Math.max(0, raceLen - k.progress) / Math.max(k.speed, 22));
  const rows = G.karts.map((k) => ({ k, t: est(k) })).sort((a, b) => a.t - b.t);
  const pos = rows.findIndex((r) => r.k === p) + 1;
  $('restitle').textContent = pos === 1 ? '🏆 VICTORY!' : `${pos}${ord(pos).toUpperCase()} PLACE`;
  $('resbody').innerHTML = rows.map((r, i) => `<div class="res ${r.k === p ? 'me' : ''}" style="--c:${r.k.ch.kart}"><b>${i + 1}</b><span class="em">${r.k.ch.emoji}</span><span>${r.k === p ? 'YOU (' + r.k.ch.name + ')' : r.k.ch.name}</span><span>${fmt(r.t)}</span></div>`).join('')
    + `<div style="text-align:center;margin-top:10px;font-weight:600">Best lap ${fmt(G.bestLap ?? NaN)}</div>`;
  $('results').classList.remove('hidden');
  const best = Number(localStorage.getItem('tiki.best.' + settings.diff) || 0);
  if (pos === 1 && (!best || G.raceTime < best)) localStorage.setItem('tiki.best.' + settings.diff, G.raceTime.toFixed(2));
  localStorage.setItem('tiki.wins', String(Number(localStorage.getItem('tiki.wins') || 0) + (pos === 1 ? 1 : 0)));
}

// ---------------------------------------------------------------- effects & camera
function kartEffects(k, dt) {
  if (k.respawnTimer > 0) return;
  const fx_ = Math.sin(k.h), fz = Math.cos(k.h);
  // exhaust: white puffs normally, black when the turbo meter is hot (CTR tell)
  const hot = k.drifting && k.meter >= 0.7 && !k.driftFailed;
  const rate = k.drifting ? 0.8 : k.throttleIn > 0 ? 0.12 : 0.04;
  for (let n = 0; n < 2; n++) if (Math.random() < rate) {
    const p = k.exhaustWorld(n);
    const c = hot ? 0.08 : k.driftFailed ? 0.5 : 0.95;
    fx.smoke.emit(p.x, p.y, p.z, -fx_ * 2 + (Math.random() - 0.5), 1.5 + Math.random(), -fz * 2 + (Math.random() - 0.5), 0.6, k.drifting ? 0.6 : 0.3, k.drifting ? 1.6 : 0.9, hot ? 0.85 : k.drifting ? 0.45 : 0.22, c, c, c);
  }
  // dust from the rear wheels while sliding
  if (k.drifting && !k.airborne) for (const s of [-1, 1]) if (Math.random() < 0.8) {
    const x = k.x - fx_ * 1 + -fz * s * 0.95, z = k.z - fz * 1 + fx_ * s * 0.95;
    fx.dust.emit(x, k.y + 0.2, z, (Math.random() - 0.5) * 2 - fx_ * 3, 1 + Math.random(), (Math.random() - 0.5) * 2 - fz * 3, 0.8, 0.8, 2.2, 0.5, 0.95, 0.8, 0.6);
  }
  if (k.boostTime > 0) for (let n = 0; n < 2; n++) if (Math.random() < 0.5) { const p = k.exhaustWorld(n); fx.fire.emit(p.x, p.y, p.z, -fx_ * 6, 0.5, -fz * 6, 0.15, 0.3, 0.3, 0.6, 0.45, 0.75, 1.5); }
  if (k.spinTime > 0 && Math.random() < 0.5) fx.spark.emit(k.x, k.y + 1.6, k.z, (Math.random() - 0.5) * 3, 3, (Math.random() - 0.5) * 3, 0.5, 0.5, 0, 1, 2.5, 2.3, 0.6);
}

function updateCamera(dt) {
  const p = G.player; if (!p) return;
  if (G.state === 'menu' || G.state === 'loading') {
    const a = G.time * 0.25 + 1.0, r = 6.2;
    camera.position.set(p.x + Math.sin(a) * r, p.y + 2.2, p.z + Math.cos(a) * r);
    camera.lookAt(p.x, p.y + 1.1, p.z);
    camera.fov = 50; camera.updateProjectionMatrix();
    return;
  }
  const C = G.cam;
  const target = p.h + (p.drifting ? p.yawOff * 0.35 : 0);
  C.ang = lerpAngle(C.ang, target, 1 - Math.exp(-dt * (p.airborne ? 2 : 5)));
  const far = G.camMode === 1;
  const dist = (far ? 8 : 5.6) + Math.max(0, p.speed) * 0.035;
  const cx = p.x - Math.sin(C.ang) * dist, cz = p.z - Math.cos(C.ang) * dist;
  C.y += (p.y + (far ? 3.4 : 2.3) - C.y) * (1 - Math.exp(-dt * 5));
  const ground = Math.max(terrain.height(cx, cz), track.project(cx, cz, p.q.i, {}).y) + 1;
  camera.position.set(cx, Math.max(C.y, ground), cz);
  camera.lookAt(p.x + Math.sin(p.h) * 4, p.y + 1.2, p.z + Math.cos(p.h) * 4);
  const fov = 66 + Math.max(0, p.speed) * 0.25 + (p.boostTime > 0 ? 8 : 0);
  C.fov += (fov - C.fov) * (1 - Math.exp(-dt * 4));
  camera.fov = C.fov; camera.updateProjectionMatrix();
}

function drawMinimap() {
  const g = $('minimap').getContext('2d'), S = 400, c = S / 2, p = G.player;
  g.clearRect(0, 0, S, S);
  // whole track, north-up, fitted to the canvas
  const sc = 0.62, ox = c, oz = c + 8;
  g.lineJoin = g.lineCap = 'round';
  for (const [w, col] of [[22, '#0b3b5f99'], [12, '#fff']]) {
    g.lineWidth = w; g.strokeStyle = col; g.beginPath();
    minimapPath.forEach(([x, z], i) => { const X = ox + x * sc, Y = oz + z * sc; i ? g.lineTo(X, Y) : g.moveTo(X, Y); });
    g.closePath(); g.stroke();
  }
  const fi = track.finishIdx;
  g.fillStyle = '#ffd23f'; g.beginPath(); g.arc(ox + track.px[fi] * sc, oz + track.pz[fi] * sc, 8, 0, 7); g.fill();
  for (const k of G.karts) {
    if (k === p) continue;
    g.fillStyle = k.ch.kart; g.strokeStyle = '#fff'; g.lineWidth = 3;
    g.beginPath(); g.arc(ox + k.x * sc, oz + k.z * sc, 9, 0, 7); g.fill(); g.stroke();
  }
  g.save(); g.translate(ox + p.x * sc, oz + p.z * sc); g.rotate(-p.h + Math.PI);
  g.fillStyle = p.ch.kart; g.strokeStyle = '#fff'; g.lineWidth = 4;
  g.beginPath(); g.moveTo(0, -16); g.lineTo(12, 12); g.lineTo(0, 6); g.lineTo(-12, 12); g.closePath(); g.fill(); g.stroke();
  g.restore();
}

function updateHud() {
  const p = G.player, order = standings(), pos = order.indexOf(p) + 1;
  $('lap').textContent = `${Math.max(1, Math.min(LAPS, p.lap))}/${LAPS}`;
  $('time').textContent = fmt(G.raceTime);
  $('fruitn').textContent = p.fruit;
  $('pos').textContent = pos; $('possuf').textContent = ord(pos);
  $('kmh').textContent = Math.round(Math.abs(p.speed) * 3.6);
  const box = $('itembox');
  if (p.rolling > 0) { const keysI = Object.keys(ITEM_ICON); $('itemicon').textContent = ITEM_ICON[keysI[Math.floor(G.time * 14) % keysI.length]]; $('itemname').textContent = ''; box.classList.add('roll'); if (Math.floor(G.time * 14) !== G.lastTick) { G.lastTick = Math.floor(G.time * 14); audio.sfx('tick'); } }
  else { box.classList.remove('roll'); $('itemicon').innerHTML = p.item ? ITEM_ICON[p.item] : '<span style="opacity:.25;font-size:46px">?</span>'; $('itemname').textContent = p.item ? ITEM_NAME[p.item] : ''; }
  const m = $('meter');
  m.classList.toggle('on', p.drifting);
  m.classList.toggle('hot', p.meter >= 0.7 && !p.driftFailed);
  $('meterfill').style.width = (p.meter * 100).toFixed(1) + '%';
  $('turbos').textContent = p.drifting ? '🔥'.repeat(p.boosts) : '';
  $('standings').innerHTML = order.map((k, i) => `<div class="${k === p ? 'me' : ''}" style="--c:${k.ch.kart}">${i + 1}. ${k.ch.emoji} ${k === p ? 'YOU' : k.ch.name}<em>${k.finished ? '🏁' : ''}</em></div>`).join('');
  drawMinimap();
}

// ---------------------------------------------------------------- loop
let last = performance.now();
function loop(now) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  G.time += dt;
  pollPad();
  const p = G.player, playing = G.state === 'race' || G.state === 'countdown';
  if (G.state === 'countdown') {
    G.countdown -= dt;
    const inp = readInput(); p.throttleIn = inp.throttle;
    if (inp.throttle && G.firstGas === null) G.firstGas = G.countdown;
    const n = Math.ceil(G.countdown);
    if (n !== G.lastCount) {
      G.lastCount = n;
      const el = $('count');
      el.textContent = n > 0 ? String(n) : 'GO!'; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
      audio.sfx('beep', n <= 0 ? 1 : 0);
      if (n <= 0) {
        G.state = 'race';
        // rocket start: hit the gas just before GO
        if (G.firstGas !== null && G.firstGas < 0.5) { p.boost(2, 1.0); popup('ROCKET START!', '#ffd23f'); audio.sfx('turbo', 2); }
        for (const ai of G.ais) if (Math.random() < 0.5 * ai.skill) ai.k.boost(1, 0.7);
      }
    }
  }
  if (G.state === 'race' && !G.freeze) {
    const n = Math.max(1, Math.ceil(dt / (1 / 120)));
    for (let i = 0; i < n; i++) simulate(dt / n);
    if (p.wrongWay > 1.2 && !p.finished) message('WRONG WAY!', 0.3);
    if (G.finishTimer > 0 && (G.finishTimer -= dt) <= 0) showResults();
  }
  if (G.state !== 'paused' && !G.freeze) {
    for (const k of G.karts) { k.syncObj(dt, G.time); if (G.state === 'race') kartEffects(k, dt); }
    if (Math.random() < 0.5) { const v = world.volcanoTop; fx.volcano.emit(v.x + (Math.random() - 0.5) * 14, v.y, v.z + (Math.random() - 0.5) * 14, 1.5 + Math.random(), 4 + Math.random() * 3, Math.random() - 0.5, 9, 20, 16, 0.5, 0.75, 0.72, 0.72); }
    for (const f of Object.values(fx)) f.update(dt);
    if (G.state === 'menu' || playing) updateCamera(dt);
    world.updaters.forEach((u) => u(G.time));
  }
  if (playing) updateHud();
  if (msgT > 0 && (msgT -= dt) <= 0) $('msg').classList.remove('show');
  audio.update(p, playing, p?.top);

  if (p) { sun.position.set(p.x + SUN_DIR.x * 150, p.y + SUN_DIR.y * 150, p.z + SUN_DIR.z * 150); sun.target.position.set(p.x, p.y, p.z); }
  world.sky.position.copy(camera.position);
  post.final.uniforms.uSpeed.value = playing && p ? Math.max(0, (p.speed - 20) / 20) : 0;
  post.final.uniforms.uBoost.value += ((p?.boostTime > 0 && playing ? 1 : 0) - post.final.uniforms.uBoost.value) * Math.min(1, dt * 6);
  post.composer.render(dt);
}

function resize() {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  if (post) { post.composer.setPixelRatio(renderer.getPixelRatio()); post.composer.setSize(innerWidth, innerHeight); }
}
addEventListener('resize', resize);

// test hook: step the race deterministically with a fixed input
window.__game = {
  G, settings, startRace, enterMenu, camera,
  get track() { return track; },
  advance(sec, input = {}) {
    if (G.state === 'countdown') { G.state = 'race'; $('count').textContent = ''; }
    inputOverride = { throttle: 0, brake: 0, steer: 0, drift: false, boost: false, item: false, ...input };
    for (let t = 0; t < sec; t += 1 / 60) {
      simulate(1 / 120); simulate(1 / 120);
      for (const k of G.karts) { k.syncObj(1 / 60, G.time); kartEffects(k, 1 / 60); }
      for (const f of Object.values(fx)) f.update(1 / 60);
      updateCamera(1 / 60); G.time += 1 / 60;
    }
    inputOverride = null;
    updateHud();
  },
};
load().catch((e) => { console.error(e); $('loadtext').textContent = 'Error: ' + e.message; });
