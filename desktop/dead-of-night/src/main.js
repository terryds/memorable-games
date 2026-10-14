import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Game, WEAPONS, FINALE_TIME } from './sim.js';
import { BotBrain } from './bots.js';
import * as M from './map.js';
import { buildWorld } from './world.js';
import { SurvivorModel, Horde, makeSpecial, updateSpecial, makeGun, makeViewArms, makeItem } from './models.js';
import { Particles, Tracers, Decals } from './fx.js';
import { Sound } from './audio.js';
import * as TX from './textures.js';

const $ = (id) => document.getElementById(id);
const settings = { diff: 'normal', sens: 1, volume: 0.8, quality: 'high', invert: false };
try { Object.assign(settings, JSON.parse(localStorage.getItem('dead-of-night') || '{}')); } catch { /* ignore */ }
const save = () => localStorage.setItem('dead-of-night', JSON.stringify(settings));
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const STEP = 1 / 60;
const SLOTS = ['primary', 'secondary', 'throw', 'med', 'pills'];
const fmt = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

// ---------------------------------------------------------------- renderer
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
const pixelRatio = () => (settings.quality === 'high' ? Math.min(devicePixelRatio, 1.5) : 0.8);
renderer.setPixelRatio(pixelRatio());
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.4;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.autoClear = false;
document.body.prepend(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050708);
scene.fog = new THREE.FogExp2(0x0c1113, 0.034);
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.05, 1200);
camera.rotation.order = 'YXZ';
scene.add(camera);
const hemi = new THREE.HemisphereLight(0x4a6078, 0x14120e, 1.5); scene.add(hemi);
const moon = new THREE.DirectionalLight(0x9ab4d0, 1.3); moon.position.set(M.MAP_W / 2 - 70, 140, M.MAP_H / 2 - 50); moon.target.position.set(M.MAP_W / 2, 0, M.MAP_H / 2);
moon.castShadow = true; moon.shadow.mapSize.set(2048, 2048); Object.assign(moon.shadow.camera, { left: -130, right: 130, top: 110, bottom: -110, near: 10, far: 400 }); moon.shadow.bias = -0.0008;
moon.shadow.autoUpdate = false; // the town never moves: render the moon shadows once
scene.add(moon, moon.target);
// the flashlight: a cookie-textured spot that casts shadows — the main light in this game
const flash = new THREE.SpotLight(0xfff2dc, 20, 55, 0.44, 0.45, 0.8); // gentle falloff: lights the street without blowing out faces
flash.map = TX.flashlightCookie();
flash.castShadow = true; flash.shadow.mapSize.set(1024, 1024); flash.shadow.camera.near = 0.3; flash.shadow.camera.far = 48; flash.shadow.bias = -0.0005; flash.shadow.normalBias = 0.04;
flash.position.set(0.25, -0.2, 0.1); camera.add(flash); camera.add(flash.target); flash.target.position.set(0.05, -0.15, -10);
const muzzleLight = new THREE.PointLight(0xffc070, 0, 12, 2); scene.add(muzzleLight);

// first-person viewmodel in its own scene (drawn after a depth clear)
const vScene = new THREE.Scene(), vCam = new THREE.PerspectiveCamera(56, innerWidth / innerHeight, 0.01, 10);
vScene.add(new THREE.HemisphereLight(0x5a6a7a, 0x111111, 1.0));
const vLight = new THREE.SpotLight(0xfff2dc, 6, 3, 0.8, 0.6, 1); vLight.position.set(0.3, 0.1, 0.3); vLight.target.position.set(0, -0.2, -1); vScene.add(vLight, vLight.target);
const vMuzzle = new THREE.PointLight(0xffb060, 0, 2, 2); vMuzzle.position.set(0.1, -0.05, -0.6); vScene.add(vMuzzle);
const vRoot = new THREE.Group(); vScene.add(vRoot);

const sound = new Sound();
const G = { state: 'loading', game: null, brains: [], yaw: -Math.PI / 2, pitch: 0, acc: 0, shake: 0, bob: 0, recoil: 0, models: [], specials: new Map(), items: new Map(), throws: new Map(), menuT: 0, msgs: [], subT: 0, hitT: 0 };
let world, horde, fx, tracers, decals, bloodDecals, composer, finalPass, glowTex, botLights = [];

// ---------------------------------------------------------------- post-processing: grain, vignette, grade, damage, bile
const Final = {
  uniforms: { tDiffuse: { value: null }, uT: { value: 0 }, uHurt: { value: 0 }, uLow: { value: 0 }, uBile: { value: 0 }, uIncap: { value: 0 }, uFlash: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform float uT, uHurt, uLow, uBile, uIncap, uFlash; varying vec2 vUv;
    float rnd(vec2 c){ return fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5; float r = length(c);
      vec2 wob = uBile * 0.006 * vec2(sin(vUv.y * 30.0 + uT * 3.0), cos(vUv.x * 25.0 + uT * 2.0));
      float ca = 0.0015 + r * r * 0.006 + uHurt * 0.01;
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + wob - c * ca).r;
      col.g = texture2D(tDiffuse, vUv + wob).g;
      col.b = texture2D(tDiffuse, vUv + wob + c * ca).b;
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      // sickly grade: teal-green shadows, sodium highlights
      col = mix(col, col * vec3(0.85, 1.05, 1.0), 0.5);
      col = mix(col, vec3(l), 0.18 + uLow * 0.6 + uIncap * 0.4);
      col = mix(col, col * vec3(0.55, 1.25, 0.45) + vec3(0.02, 0.06, 0.0), uBile * 0.6);
      // vignette (tighter when hurt), red rim on damage
      float vig = smoothstep(0.85, 0.25, r);
      col *= mix(0.25, 1.0, vig);
      col += vec3(0.45, 0.0, 0.0) * smoothstep(0.42, 0.85, r) * min(0.8, uHurt * 0.6 + uIncap * 0.35 + uLow * 0.3);
      col += uFlash * 0.08;
      col += (rnd(vUv * 900.0 + uT * 60.0) - 0.5) * 0.035;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`,
};
function makeComposer() {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: settings.quality === 'high' ? 4 : 0 });
  composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new ShaderPass({ uniforms: { tDiffuse: { value: null } }, vertexShader: Final.vertexShader, fragmentShader: 'uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0,0.0,0.0,1.0); gl_FragColor = vec4(min(c.rgb, vec3(12.0)), 1.0); }' }));
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.4, 0.6, 1.0));
  finalPass = new ShaderPass(Final); composer.addPass(finalPass);
  composer.addPass(new OutputPass());
}

// ---------------------------------------------------------------- input
const keys = new Set(), mouse = { l: false, r: false };
const edge = { reload: false, slot: null, flash: false };
const locked = () => document.pointerLockElement === renderer.domElement;
function lockPointer() { try { const p = renderer.domElement.requestPointerLock({ unadjustedMovement: true }); if (p?.catch) p.catch(() => renderer.domElement.requestPointerLock()); } catch { renderer.domElement.requestPointerLock(); } }
addEventListener('keydown', (e) => {
  if (['Tab', 'Space'].includes(e.code)) e.preventDefault();
  if (G.state === 'menu' && e.code === 'Enter') { start(); return; }
  if (G.state === 'over') { if (e.code === 'Enter') start(); if (e.code === 'Escape') enterMenu(); return; }
  if (G.state !== 'playing') return;
  keys.add(e.code);
  if (e.repeat) return;
  if (e.code === 'KeyR') edge.reload = true;
  if (e.code === 'KeyF') edge.flash = true;
  if (/^Digit[1-5]$/.test(e.code)) edge.slot = SLOTS[+e.code.slice(5) - 1];
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => { keys.clear(); mouse.l = mouse.r = false; });
renderer.domElement.addEventListener('mousedown', (e) => {
  if (G.state !== 'playing') return;
  if (!locked()) { lockPointer(); return; }
  if (e.button === 0) mouse.l = true; if (e.button === 2) mouse.r = true;
});
addEventListener('mouseup', (e) => { if (e.button === 0) mouse.l = false; if (e.button === 2) mouse.r = false; });
addEventListener('contextmenu', (e) => e.preventDefault());
addEventListener('mousemove', (e) => {
  if (!locked() || G.state !== 'playing') return;
  const k = 0.0021 * settings.sens;
  G.yaw -= e.movementX * k; G.pitch = clamp(G.pitch - e.movementY * k * (settings.invert ? -1 : 1), -1.45, 1.45);
  G.swayX = (G.swayX || 0) + e.movementX * 0.00025; G.swayY = (G.swayY || 0) + e.movementY * 0.00025;
});
addEventListener('wheel', (e) => {
  if (G.state !== 'playing' || !locked()) return;
  const p = G.game.player, have = SLOTS.filter((s) => p.has(s)), i = have.indexOf(p.cur);
  edge.slot = have[(i + (e.deltaY > 0 ? 1 : -1) + have.length) % have.length];
}, { passive: true });
document.addEventListener('pointerlockchange', () => {
  if (G.state === 'playing' && !locked()) pause();
  $('clickToPlay').classList.toggle('hidden', !(G.state === 'playing' && !locked()));
});
$('clickToPlay').addEventListener('click', () => lockPointer());
function playerInput() {
  const p = G.game.player;
  return {
    fwd: (keys.has('KeyW') ? 1 : 0) - (keys.has('KeyS') ? 1 : 0), side: (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0),
    jump: keys.has('Space'), crouch: keys.has('KeyC') || keys.has('ControlLeft'), walk: keys.has('ShiftLeft') || keys.has('ShiftRight'),
    fire: mouse.l && locked(), alt: mouse.r && locked(), use: keys.has('KeyE'), reload: edge.reload, slot: edge.slot, flash: edge.flash,
    yaw: G.yaw, pitch: G.pitch, _p: p,
  };
}

// ---------------------------------------------------------------- loading
async function load() {
  const bar = $('loadbar'), txt = $('loadtext');
  const step = async (p, t) => { bar.style.width = p + '%'; txt.textContent = t; await nextFrame(); };
  await step(5, 'the radio crackles');
  try { await Promise.race([document.fonts.load('40px "Special Elite"'), new Promise((r) => setTimeout(r, 2500))]); } catch { /* fine */ }
  await step(25, 'the streets are empty. almost.');
  world = buildWorld(scene, settings.quality);
  horde = new Horde(scene, 90);
  await step(60, 'something is crying in the park');
  glowTex = TX.glowTexture();
  const smoke = TX.smokeTexture();
  fx = {
    blood: new Particles(500, smoke, { drag: 3, gravity: 7 }),
    dust: new Particles(300, smoke, { drag: 2.5, gravity: 1 }),
    fire: new Particles(400, glowTex, { additive: true, drag: 2, gravity: -3 }),
    smoke: new Particles(300, smoke, { drag: 1, gravity: -0.8 }),
    bile: new Particles(200, smoke, { drag: 2, gravity: 5 }),
    ash: new Particles(400, glowTex, { additive: true, drag: 0.3, gravity: 0.05 }),
  };
  for (const p of Object.values(fx)) scene.add(p.mesh);
  tracers = new Tracers(scene, 64);
  decals = new Decals(scene, TX.holeTexture(), 200);
  bloodDecals = new Decals(scene, TX.bloodTexture(5), 160);
  bloodDecals.mesh.geometry = new THREE.PlaneGeometry(0.9, 0.9);
  for (let i = 0; i < 3; i++) { const l = new THREE.SpotLight(0xfff0d8, 8, 34, 0.45, 0.5, 0.8); l.map = flash.map; scene.add(l, l.target); botLights.push(l); }
  makeComposer();
  buildMenu();
  await step(85, 'lock the door behind you');
  menuCamera(0);
  try { await renderer.compileAsync(scene, camera); } catch { /* fine */ }
  moon.shadow.needsUpdate = true;
  await step(100, '');
  $('loading').classList.add('hidden');
  enterMenu();
  requestAnimationFrame(loop);
}

// ---------------------------------------------------------------- menu & flow
function buildMenu() {
  const pills = (rowId, key) => $(rowId).querySelectorAll('.pill').forEach((b) => { b.classList.toggle('sel', settings[key] === b.dataset.v); b.onclick = () => { settings[key] = b.dataset.v; save(); pills(rowId, key); }; });
  pills('diffs', 'diff');
  $('sens').value = settings.sens; $('sensv').textContent = (+settings.sens).toFixed(2);
  $('sens').oninput = () => { settings.sens = +$('sens').value; $('sensv').textContent = settings.sens.toFixed(2); save(); };
  $('vol').value = settings.volume; $('volv').textContent = Math.round(settings.volume * 100) + '%';
  $('vol').oninput = () => { settings.volume = +$('vol').value; $('volv').textContent = Math.round(settings.volume * 100) + '%'; sound.setVolume(settings.volume); save(); };
  const tog = (id, label, flip) => { const b = $(id); b.textContent = label(); b.onclick = () => { flip(); save(); b.textContent = label(); }; };
  tog('optQuality', () => `Graphics: ${settings.quality.toUpperCase()}`, () => { settings.quality = settings.quality === 'high' ? 'low' : 'high'; applyQuality(); });
  tog('optInvert', () => `Invert Y: ${settings.invert ? 'ON' : 'OFF'}`, () => { settings.invert = !settings.invert; });
  $('go').onclick = () => start();
  document.querySelectorAll('[data-act]').forEach((b) => b.onclick = () => { const a = b.dataset.act; if (a === 'resume') resume(); if (a === 'restart') start(); if (a === 'menu') enterMenu(); });
}
function applyQuality() {
  renderer.setPixelRatio(pixelRatio());
  flash.castShadow = settings.quality === 'high';
  botLights.forEach((l) => { l.visible = settings.quality === 'high'; });
  makeComposer(); resize();
}
function enterMenu() {
  G.state = 'menu';
  if (document.pointerLockElement) document.exitPointerLock();
  ['pause', 'over'].forEach((id) => $(id).classList.add('hidden'));
  $('hud').classList.add('hidden'); $('menu').classList.remove('hidden');
  sound.playing = true; sound.tank(false); sound.setHeart(0);
  newGame(true);
}
function start() {
  sound.start(); sound.setVolume(settings.volume); sound.playing = true;
  ['menu', 'pause', 'over'].forEach((id) => $(id).classList.add('hidden'));
  $('hud').classList.remove('hidden');
  newGame(false);
  G.state = 'playing';
  lockPointer();
  subtitle('MARCUS', "Radio said boats are pickin' up at the docks. Let's move.", 5);
  objective('Get to the docks. Open the safe room door (E).');
}
function pause() { if (G.state !== 'playing') return; G.state = 'paused'; $('pause').classList.remove('hidden'); $('clickToPlay').classList.add('hidden'); }
function resume() { $('pause').classList.add('hidden'); G.state = 'playing'; lockPointer(); }

function newGame(demo) {
  // tear down old renderables
  for (const m of G.models) scene.remove(m.root);
  for (const [, g] of G.specials) scene.remove(g);
  for (const [, g] of G.items) scene.remove(g);
  for (const [, g] of G.throws) scene.remove(g);
  G.models = []; G.specials.clear(); G.items.clear(); G.throws.clear();
  decals.clear(); bloodDecals.clear();
  const g = G.game = new Game({ diff: settings.diff, seed: (Math.random() * 1e9) | 0 });
  G.brains = g.survivors.map((s, i) => (i ? new BotBrain(s, g, i) : null));
  for (const s of g.survivors) { const m = new SurvivorModel(s.id); m.root.traverse((o) => { if (o.isMesh) o.castShadow = true; }); scene.add(m.root); G.models.push(m); }
  G.models[0].root.visible = false;
  G.yaw = -Math.PI / 2; G.pitch = 0; G.acc = 0; G.shake = 0; G.lastHp = 100; G.over = null; G.stepT = 0;
  if (world.door) { world.door.open = 0; world.door.pivot.rotation.y = 0; }
  world.boat.g.visible = false;
  if (world.alarm) world.alarm.on = false;
  sound.tank(false);
  setViewWeapon(null);
}

// ---------------------------------------------------------------- HUD helpers
function subtitle(who, text, dur = 3.5) {
  const s = G.game.survivors.find((q) => q.name === who);
  const col = s ? '#' + new THREE.Color(s.color).offsetHSL(0, 0, 0.25).getHexString() : '#d8d2c4';
  $('sub').innerHTML = `<b style="color:${col}">${who}:</b>${text}`; G.subT = dur;
}
function objective(text) { $('objective').textContent = text; }
const say = (lines) => { const alive = G.game.survivors.filter((s) => s.alive && !s.isPlayer); if (!alive.length) return; const s = alive[Math.floor(Math.random() * alive.length)]; subtitle(s.name, lines[Math.floor(Math.random() * lines.length)]); };

let lastTeamHtml = '';
function updateHud() {
  const g = G.game, p = g.player;
  const html = [p, ...g.survivors.filter((s) => !s.isPlayer)].map((s) => {
    const hpv = s.dead ? 0 : s.incap ? s.incapHp / 300 : s.hp / 100;
    const col = s.incap ? '#c8302a' : s.hp > 60 ? '#5a9a4a' : s.hp > 30 ? '#c8a030' : '#c8402a';
    const tags = [s.medkit ? '✚' : '', s.pills ? '💊' : '', s.throwable === 'pipe' ? '💣' : s.throwable === 'molotov' ? '🔥' : ''].join(' ');
    const state = s.dead ? 'DEAD' : s.pinnedBy ? 'PINNED!' : s.incap ? 'DOWN' : s.incaps >= 2 ? 'B&W' : Math.ceil(s.hp);
    return `<div class="mate ${s.isPlayer ? 'me' : ''} ${s.incap || s.pinnedBy ? 'down' : ''} ${s.dead ? 'dead' : ''}" style="--c:#${new THREE.Color(s.color).getHexString()}"><div class="nm"><span>${s.name}</span><em>${tags} ${state}</em></div><div class="hp"><i style="width:${(hpv * 100).toFixed(0)}%;background:${col}"></i></div></div>`;
  }).join('');
  if (html !== lastTeamHtml) { $('team').innerHTML = html; lastTeamHtml = html; }
  const w = p.weapon(), W = WEAPONS[w.id];
  const util = p.cur === 'throw' || p.cur === 'med' || p.cur === 'pills';
  $('mag').textContent = util ? '' : w.mag; $('res').textContent = util ? '' : w.reserve === Infinity ? '∞' : w.reserve;
  $('wname').textContent = util ? { throw: p.throwable === 'pipe' ? 'Pipe Bomb' : 'Molotov', med: 'First Aid Kit — hold fire', pills: 'Pain Pills — fire to use' }[p.cur] : W.name;
  $('slots').innerHTML = SLOTS.map((s, i) => `<div class="${p.cur === s ? 'on' : ''}" style="opacity:${p.has(s) ? 1 : 0.25}"><small>${i + 1}</small>${['🔫', '🔫', p.throwable === 'molotov' ? '🔥' : '💣', '✚', '💊'][i]}</div>`).join('');
  // prompts & progress bars
  let prompt = '', barT = null, barLabel = '';
  if (p.reviving) { barT = p.reviveT / 4; barLabel = `Reviving ${p.reviving.name}…`; }
  else if (p.healT > 0) { barT = p.healT / 5; barLabel = 'Healing…'; }
  else if (p.up) {
    const near = (x, z, r) => Math.hypot(x - p.x, z - p.z) < r;
    const down = g.survivors.find((o) => o !== p && o.incap && !o.dead && near(o.x, o.z, 2.2));
    if (down) prompt = `Hold <kbd>E</kbd> to revive ${down.name}`;
    else if (!g.doorOpen && near(24, 118, 3)) prompt = 'Press <kbd>E</kbd> to open the door';
    else if (!g.finale.started && near(26, 26, 2.6)) prompt = 'Press <kbd>E</kbd> to use the radio';
    else {
      const fy = Math.sin(p.yaw), fz = Math.cos(p.yaw);
      const it = g.items.find((q) => !q.taken && near(q.x, q.z, 2.4) && (-fy * (q.x - p.x) - fz * (q.z - p.z)) > -0.4 * Math.hypot(q.x - p.x, q.z - p.z));
      if (it) prompt = `<kbd>E</kbd> ${it.type === 'weapon' ? 'Take ' + WEAPONS[it.wid].name : it.type === 'ammo' ? 'Refill ammo' : 'Take ' + { medkit: 'First Aid Kit', pills: 'Pain Pills', pipe: 'Pipe Bomb', molotov: 'Molotov' }[it.type]}`;
    }
  } else if (p.incap && !p.dead) prompt = p.pinnedBy ? 'PINNED — your team has to save you!' : 'You are down. Hold on — your team will revive you.';
  else if (p.pinnedBy) prompt = 'PINNED — your team has to save you!';
  $('prompt').innerHTML = prompt;
  const bar = $('bar'); bar.style.display = barT !== null ? 'block' : 'none';
  if (barT !== null) { $('barfill').style.width = (clamp(barT, 0, 1) * 100).toFixed(0) + '%'; $('bartext').textContent = barLabel; }
  // finale
  const F = g.finale;
  $('finale').textContent = F.boat ? 'THE BOAT IS HERE — GET ON THE DOCK!' : F.started ? `Rescue arrives in ${fmt(Math.max(0, FINALE_TIME - F.t))}` : '';
  // crosshair spread
  const sp = (W.spread + p.spread) * 260 + Math.min(1, p.moveSpeed / 5) * 10 + 6;
  const c = $('cross').children;
  c[0].style.top = `${-sp - 8}px`; c[1].style.top = `${sp}px`; c[2].style.left = `${-sp - 8}px`; c[3].style.left = `${sp}px`;
  $('cross').style.display = p.cur === 'med' || p.cur === 'pills' ? 'none' : '';
}

// ---------------------------------------------------------------- viewmodel
let vGun = null, vArms = null, vId = null, vFlash;
function setViewWeapon(id) {
  if (id === vId) return; vId = id;
  if (vGun) vRoot.remove(vGun); if (vArms) vRoot.remove(vArms);
  vGun = vArms = null; if (!id) return;
  vGun = makeGun(id); vArms = makeViewArms(id);
  vGun.add(vArms); vGun.scale.setScalar(0.85);
  vRoot.add(vGun);
  G.switchAnim = 1;
}
function updateViewmodel(dt) {
  const p = G.game.player;
  const id = p.dead || p.pinnedBy ? null : p.weaponId();
  setViewWeapon(id);
  if (!vGun) return;
  G.switchAnim = Math.max(0, (G.switchAnim || 0) - dt * 3);
  G.swayX = (G.swayX || 0) * Math.exp(-8 * dt); G.swayY = (G.swayY || 0) * Math.exp(-8 * dt);
  G.recoil = Math.max(0, G.recoil - dt * 6);
  const mv = Math.min(1, p.moveSpeed / 5.4);
  const bx = Math.sin(G.bob) * 0.012 * mv, by = Math.abs(Math.cos(G.bob)) * 0.012 * mv;
  const pistol = id === 'pistol', util = ['pipe', 'molotov', 'medkit', 'pills'].includes(id);
  const reload = p.reloadT > 0 ? Math.sin(Math.min(1, p.reloadT / (WEAPONS[p.weapon().id].shell ? 0.6 : WEAPONS[p.weapon().id].reload)) * Math.PI) : 0;
  const shove = p.shoveCd > 0.45 ? Math.sin((0.75 - p.shoveCd) / 0.3 * Math.PI) : 0;
  const heal = p.healT > 0 ? 1 : 0;
  vRoot.position.set((pistol ? 0.16 : util ? 0.17 : 0.19) + bx - G.swayX - shove * 0.12, (pistol ? -0.19 : util ? -0.17 : -0.22) - by + G.swayY - G.switchAnim * 0.3 - reload * 0.08 - heal * 0.1, (pistol ? -0.44 : util ? -0.36 : -0.47) + G.recoil * 0.05 + shove * -0.1);
  vRoot.rotation.set(G.recoil * 0.12 + reload * 0.5 + G.swayY * 2 + heal * -0.6, G.swayX * 2 + shove * 0.9, reload * -0.4 + shove * 0.5);
  if (util) { vRoot.position.y += 0.04; vRoot.rotation.x += 0.3; }
  if (p.incap) { vRoot.position.y -= 0.05; vRoot.rotation.z += 0.3; }
  vMuzzle.intensity = Math.max(0, vMuzzle.intensity - dt * 60);
  if (vFlash) { vFlash.visible = vMuzzle.intensity > 0.5; }
  vLight.intensity = p.flash ? 6 : 0.6;
}

// ---------------------------------------------------------------- events -> sound, particles, HUD
function handleEvents() {
  const g = G.game, p = g.player;
  for (const e of g.events) {
    switch (e.type) {
      case 'shot': {
        const local = e.who === p;
        sound.gun(e.id, e.who.x, e.who.z, local);
        if (local) { G.recoil = 1; vMuzzle.intensity = 3; muzzleLight.position.set(p.x, p.eye, p.z); muzzleLight.intensity = 25; G.shake = Math.max(G.shake, e.id === 'pump' || e.id === 'auto' || e.id === 'rifle' ? 0.4 : 0.15); }
        else { muzzleLight.position.set(e.who.x, e.who.eye, e.who.z); muzzleLight.intensity = Math.max(muzzleLight.intensity, 12); }
        break;
      }
      case 'tracer': tracers.add(e.x0, e.y0, e.z0, e.x1, e.y1, e.z1); break;
      case 'impact': decals.add(e.x, e.y, e.z, e.nx, e.ny, e.nz, 1); for (let k = 0; k < 4; k++) fx.dust.emit(e.x, e.y, e.z, e.nx * 2 + (Math.random() - 0.5) * 2, e.ny * 2 + Math.random(), e.nz * 2 + (Math.random() - 0.5) * 2, 0.5, 0.15, 0.4, 0.4, 0.5, 0.48, 0.44); break;
      case 'blood': {
        for (let k = 0; k < (e.head ? 10 : 5); k++) fx.blood.emit(e.x, e.y, e.z, e.dx * 3 + (Math.random() - 0.5) * 3, Math.random() * 3, e.dz * 3 + (Math.random() - 0.5) * 3, 0.5 + Math.random() * 0.3, e.head ? 0.22 : 0.15, 0.3, 0.9, 0.25, 0.02, 0.02);
        if (Math.random() < 0.25) { const h = M.rayWorld(e.x, e.y, e.z, e.dx, -0.4, e.dz, 4); if (h) bloodDecals.add(e.x + e.dx * h.t, e.y - 0.4 * h.t, e.z + e.dz * h.t, h.nx, h.ny, h.nz, 1 + Math.random()); }
        if (e.head && Math.hypot(e.x - p.x, e.z - p.z) < 40) sound.flesh(e.x, e.y, e.z, true);
        G.hitT = 0.12;
        break;
      }
      case 'zdeath': if (Math.random() < 0.5) bloodDecals.add(e.z.x, 0.03, e.z.z, 0, 1, 0, 1.4); break;
      case 'groan': { const z = e.z, d = Math.hypot(z.x - p.x, z.z - p.z); if (d < 40) sound.groan(z.x, z.z, z.state === 'chase'); break; }
      case 'zscream': if (Math.hypot(e.z.x - p.x, e.z.z - p.z) < 45) sound.scream(e.z.x, e.z.z); break;
      case 'zhit': sound.zhit(e.z.x, e.z.z); break;
      case 'hurt': if (e.who === p) { G.hurtFlash = Math.min(0.8, (G.hurtFlash || 0) + e.amt * 0.04 + 0.1); G.shake = Math.max(G.shake, 0.25); if (Math.random() < 0.3) sound.hurt(); } break;
      case 'shove': if (e.who === p) sound.shove(); break;
      case 'shoved': sound.zhit(e.z.x, e.z.z); break;
      case 'reload': if (e.who === p) sound.reload(); break;
      case 'shell': if (e.who === p) sound.click(0.08, 1600); break;
      case 'pickup': if (e.who === p) { sound.pickup(); if (e.what) G.flashMsg = e.what; } break;
      case 'door': sound.door(); objective('Make your way through town to the docks.'); say(['Door\'s open. Stay close.', 'Here we go…', 'Watch your corners.']); break;
      case 'incap': if (e.who === p) { sound.sting(); } else subtitle(e.who.name, ['I\'m down! Help me up!', 'Somebody help me!', 'I can\'t get up!'][Math.floor(Math.random() * 3)]); break;
      case 'revived': if (e.who !== p) subtitle(e.who.name, 'Thanks. I owe you.'); break;
      case 'death': if (e.who !== p) subtitle('', `${e.who.name} is dead.`, 3); break;
      case 'healed': if (e.who !== p) subtitle(e.who.name, 'Patching myself up.'); break;
      case 'special': {
        const t = e.sp.type;
        if (t === 'tank') { sound.tankRoar(e.sp.x, e.sp.z); sound.tank(true); setTimeout(() => say(['TANK! Run!', 'Oh no… it\'s a Tank!', 'TANK! Everybody shoot it!']), 1500); }
        break;
      }
      case 'sdeath': {
        const t = e.sp.type;
        if (t === 'tank' && !G.game.specials.some((q) => q.type === 'tank' && !q.dead)) { sound.tank(false); say(['The Tank is dead!', 'Got the big one!']); }
        if (t === 'witch') say(['Witch is dead. Thank God.']);
        if (t === 'hunter') say(['Hunter down.', 'Got the Hunter.']);
        break;
      }
      case 'pounce': sound.hunterScreech(e.h.x, e.h.z); break;
      case 'hunterwarn': sound.hunterScreech(e.h.x, e.h.z); break;
      case 'huntergrowl': if (Math.hypot(e.h.x - p.x, e.h.z - p.z) < 45) sound.hunterGrowl(e.h.x, e.h.z); break;
      case 'hunterclaw': sound.zhit(e.h.x, e.h.z); break;
      case 'pinned': if (e.who === p) { sound.sting(); G.shake = 0.6; } else subtitle(e.who.name, ['Get it off me!', 'HUNTER! Help!', 'Aaagh! Get it off!'][Math.floor(Math.random() * 3)]); break;
      case 'boomergurgle': if (Math.hypot(e.b.x - p.x, e.b.z - p.z) < 40) sound.boomerGurgle(e.b.x, e.b.z); break;
      case 'vomit': sound.vomit(e.b.x, e.b.z); break;
      case 'boomerpop': sound.splat(e.x, e.z); for (let k = 0; k < 40; k++) fx.bile.emit(e.x, 1.2, e.z, (Math.random() - 0.5) * 9, Math.random() * 6, (Math.random() - 0.5) * 9, 1.2, 0.5, 1.2, 0.8, 0.35, 0.45, 0.12); break;
      case 'biled': if (e.who === p) { say(['You got puked on! Here they come!', 'Boomer bile! Horde incoming!']); sound.hordeCue(); } break;
      case 'witchrage': sound.witchShriek(e.w.x, e.w.z); say(['WITCH!', 'You startled the Witch!', 'RUN! The Witch!']); break;
      case 'witchhit': sound.scream(e.w.x, e.w.z); break;
      case 'tankpunch': sound.splat(e.t.x, e.t.z); if (e.who === p) G.shake = 1.2; break;
      case 'tankstep': if (Math.hypot(e.t.x - p.x, e.t.z - p.z) < 60) { sound.tankStep(e.t.x, e.t.z); const d = Math.hypot(e.t.x - p.x, e.t.z - p.z); G.shake = Math.max(G.shake, Math.max(0, 0.25 - d * 0.008)); } break;
      case 'horde': sound.hordeCue(); setTimeout(() => say(['Here they come!', 'HORDE! Get ready!', 'Oh, here we go…', 'They\'re coming!']), 1800); break;
      case 'alarm': sound.alarm(84, 107); if (world.alarm) { world.alarm.on = true; world.alarm.t = 0; } say(['Who set off the car alarm?!', 'Great. Car alarm. Here they come!']); break;
      case 'throw': if (e.who !== p) subtitle(e.who.name, e.type === 'pipe' ? 'Pipe bomb out!' : 'Molotov out!'); break;
      case 'beep': sound.beep(e.x, e.z); break;
      case 'explode': sound.explosion(e.x, e.z); for (let k = 0; k < 60; k++) fx.fire.emit(e.x, e.y + 0.5, e.z, (Math.random() - 0.5) * 14, Math.random() * 10, (Math.random() - 0.5) * 14, 0.5 + Math.random() * 0.4, 1.4, 2, 0.9, 2.4, 1.2, 0.3); for (let k = 0; k < 20; k++) fx.smoke.emit(e.x, e.y + 1, e.z, (Math.random() - 0.5) * 4, 2 + Math.random() * 3, (Math.random() - 0.5) * 4, 3, 2.5, 2, 0.6, 0.2, 0.2, 0.2); G.shake = Math.max(G.shake, Math.max(0, 1 - Math.hypot(e.x - p.x, e.z - p.z) / 20)); break;
      case 'ignite': sound.fireWhoosh(e.x, e.z); break;
      case 'radio': sound.radio(); objective('Hold out until the boat arrives!'); setTimeout(() => subtitle('RADIO', '"…we read you. Boat\'s on its way. Hold out two and a half minutes…"', 6), 600); setTimeout(() => sound.hordeCue(), 4000); break;
      case 'boat': say(['THE BOAT! Get to the dock!', 'Boat\'s here! GO GO GO!']); objective('Get on the dock by the boat!'); world.boat.g.visible = true; break;
      case 'over': onOver(e); break;
    }
  }
  g.events.length = 0;
}

function onOver(e) {
  const g = G.game, p = g.player;
  G.over = e; G.state = 'over';
  if (document.pointerLockElement) document.exitPointerLock();
  sound.tank(false); sound.setHeart(0);
  if (e.win) sound.rescue(); else sound.sting();
  setTimeout(() => {
    $('overtitle').textContent = e.win ? 'RESCUED' : 'YOU DIED';
    $('overreason').textContent = e.win ? `You made it off Harbor Town. ${e.reason}` : e.reason;
    const kills = g.survivors.reduce((a, s) => a + s.stats.kills, 0);
    $('overstats').innerHTML = [['Time', fmt(g.t)], ['Your kills', p.stats.kills], ['Specials killed', p.stats.specials], ['Team kills', kills], ['Damage taken', Math.round(p.stats.dmg)], ['Times downed', p.stats.incaps], ['Difficulty', settings.diff], ['Survivors', g.survivors.filter((s) => s.alive).length + '/4']]
      .map(([k, v]) => `<div>${k}<b>${v}</b></div>`).join('');
    $('over').classList.remove('hidden'); $('hud').classList.add('hidden');
    if (e.win) { const best = +localStorage.getItem('dead.best.' + settings.diff) || 0; if (!best || g.t < best) localStorage.setItem('dead.best.' + settings.diff, Math.round(g.t)); localStorage.setItem('dead.wins', String((+localStorage.getItem('dead.wins') || 0) + 1)); }
  }, e.win ? 1500 : 2200);
}

// ---------------------------------------------------------------- world sync
function syncWorld(dt, t) {
  const g = G.game, p = g.player;
  // survivors
  g.survivors.forEach((s, i) => G.models[i].update(s, dt));
  // bot flashlights
  g.survivors.slice(1).forEach((s, i) => {
    const l = botLights[i]; if (!l) return;
    l.visible = s.alive && settings.quality === 'high';
    const fy = -Math.sin(s.yaw) * Math.cos(s.pitch), fz = -Math.cos(s.yaw) * Math.cos(s.pitch), py = Math.sin(s.pitch);
    l.position.set(s.x + fy * 0.3, s.eye - 0.3, s.z + fz * 0.3);
    l.target.position.set(s.x + fy * 10, s.eye - 0.3 + py * 10, s.z + fz * 10);
  });
  // the horde
  horde.update(g.zombies, t, camera.position.x, camera.position.z);
  // specials
  for (const sp of g.specials) {
    let m = G.specials.get(sp);
    if (!m) { m = makeSpecial(sp.type); scene.add(m); G.specials.set(sp, m); }
    updateSpecial(m, sp, dt, t);
  }
  for (const [sp, m] of G.specials) if (!g.specials.includes(sp)) { scene.remove(m); G.specials.delete(sp); }
  // the witch sobs
  const witch = g.specials.find((q) => q.type === 'witch' && !q.dead);
  if (witch && witch.sitting) {
    G.sobT = (G.sobT || 0) - dt;
    const d = Math.hypot(witch.x - p.x, witch.z - p.z);
    if (G.sobT <= 0 && d < 60) { G.sobT = 1.0 + Math.random() * 1.4 - witch.startle * 0.6; sound.witchSob(witch.x, witch.z, witch.startle); }
    if (d < 20 && !G.witchWarned) { G.witchWarned = true; say(['Shh… you hear that? Witch. Lights off, don\'t startle her.', 'Witch nearby. Kill your flashlight.']); }
  }
  // items
  for (const it of g.items) {
    let m = G.items.get(it);
    if (!m && !it.taken) { m = makeItem(it); m.position.set(it.x, it.y, it.z); scene.add(m); G.items.set(it, m); const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0x8a9a7a, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 })); halo.scale.set(1.2, 1.2, 1); m.add(halo); m.userData.halo = halo; }
    if (m) {
      m.visible = !it.taken || it.type === 'weapon' || it.type === 'ammo';
      const d = Math.hypot(it.x - p.x, it.z - p.z);
      m.userData.halo.material.opacity = d < 8 && m.visible ? 0.25 * (1 - d / 8) : 0;
    }
  }
  // throwables in flight
  for (const th of g.throws) {
    let m = G.throws.get(th);
    if (!m) { m = makeGun(th.type); m.scale.setScalar(1.6); const led = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: 0xff2010, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true })); led.scale.set(0.5, 0.5, 1); m.add(led); m.userData.led = led; scene.add(m); G.throws.set(th, m); }
    m.position.set(th.x, th.y, th.z); m.rotation.x += dt * 8;
    m.userData.led.visible = th.type === 'pipe' && Math.floor(th.t * (1.5 + th.t)) % 2 === 0;
    if (th.type === 'molotov') fx.fire.emit(th.x, th.y + 0.15, th.z, 0, 0.5, 0, 0.2, 0.25, 0.3, 0.8, 2, 1, 0.2);
  }
  for (const [th, m] of G.throws) if (!g.throws.includes(th)) { scene.remove(m); G.throws.delete(th); }
  // molotov fires and burning cars
  for (const f of g.fires) for (let k = 0; k < 4; k++) { const a = Math.random() * 6.28, r = Math.sqrt(Math.random()) * f.r; fx.fire.emit(f.x + Math.cos(a) * r, 0.2, f.z + Math.sin(a) * r, 0, 1.5 + Math.random() * 2, 0, 0.5 + Math.random() * 0.4, 0.9, 1.5, 0.7, 2.2, 0.9, 0.2); }
  for (const f of world.fires) {
    f.light.intensity = f.base * (0.75 + Math.random() * 0.45);
    if (Math.random() < 0.7) fx.fire.emit(f.x + (Math.random() - 0.5) * 1.6, 1.3, f.z + (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 0.4, 2 + Math.random() * 2, (Math.random() - 0.5) * 0.4, 0.6 + Math.random() * 0.4, 1.0, 1.2, 0.7, 2.2, 0.9, 0.25);
    if (Math.random() < 0.15) fx.smoke.emit(f.x, 2.5, f.z, 0.3, 2.5, 0.2, 4, 2, 2, 0.5, 0.12, 0.12, 0.12);
  }
  // flickering practicals
  for (const f of world.flicker) {
    const on = Math.random() > f.rate * dt * 8 ? 1 : 0.05;
    f.cur = on < 1 ? 0.06 : Math.min(1, (f.cur ?? 1) + dt * 6);
    const v = f.cur * (0.92 + Math.random() * 0.08);
    f.light.intensity = f.base * v;
    if (f.mats) f.mats.forEach((m) => m.color.copy(f.baseCol).multiplyScalar(Math.max(0.05, v)));
  }
  if (world.pulse) world.pulse.intensity = 22 * (0.4 + 0.6 * Math.max(0, Math.sin(t * 1.6)));
  if (world.radioLed) world.radioLed.visible = g.finale.started || Math.floor(t * 2) % 2 === 0;
  if (world.alarm?.on) { world.alarm.t += dt; const on = Math.floor(world.alarm.t * 3) % 2 === 0 && world.alarm.t < 9; world.alarm.lamps.forEach((l) => l.material.color.setRGB(on ? 4 : 0.2, on ? 2.4 : 0.1, 0)); }
  // safe room door swings open
  if (world.door && g.doorOpen && world.door.open < 1) { world.door.open = Math.min(1, world.door.open + dt * 1.5); world.door.pivot.rotation.y = -world.door.open * 1.7; }
  // the boat glides in
  if (g.finale.boat) { world.boat.g.position.x = g.finale.boatX; world.boat.g.position.y = Math.sin(t * 1.3) * 0.1; world.boat.beacon.visible = Math.floor(t * 2) % 2 === 0; }
  muzzleLight.intensity = Math.max(0, muzzleLight.intensity - dt * 400);
  // ash drifting in the beam
  for (let k = 0; k < 2; k++) fx.ash.emit(camera.position.x + (Math.random() - 0.5) * 14, camera.position.y + (Math.random() - 0.3) * 4, camera.position.z + (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 0.3, -0.05, (Math.random() - 0.5) * 0.3, 6, 0.03, 0, 0.35, 0.8, 0.78, 0.7);
  tracers.update(dt);
  for (const f of Object.values(fx)) f.update(dt);
  world.sky.material.uniforms.uTime.value = t;
  world.sky.position.copy(camera.position);
}

// ---------------------------------------------------------------- camera
function menuCamera(t) {
  // drifting slowly through the park, toward the crying
  // creeping down the main street toward the burning wreck
  camera.position.set(30 + (t * 0.35) % 14, 1.75 + Math.sin(t * 0.3) * 0.05, 114 + Math.sin(t * 0.1) * 1.5);
  camera.rotation.set(-0.04, -Math.PI / 2 + 0.08 + Math.sin(t * 0.07) * 0.12, Math.sin(t * 0.2) * 0.01);
  camera.fov = 70; camera.updateProjectionMatrix();
}
function updateCamera(dt) {
  const p = G.game.player;
  G.bob += dt * Math.min(1, p.moveSpeed / 5.4) * 9;
  const mv = Math.min(1, p.moveSpeed / 5.4);
  let eye = p.eye;
  camera.position.set(p.x, eye + Math.abs(Math.sin(G.bob)) * 0.04 * mv, p.z);
  G.shake = Math.max(0, G.shake - dt * 2.2);
  const sh = G.shake * G.shake * 0.08;
  let yaw = G.yaw, pitch = G.pitch, roll = 0;
  if (p.pinnedBy) { const h = p.pinnedBy; yaw = Math.atan2(-(h.x - p.x), -(h.z - p.z)); pitch = -0.3; roll = Math.sin(G.game.t * 20) * 0.08; }
  if (p.incap) roll = 0.25;
  camera.rotation.set(pitch + (Math.random() - 0.5) * sh, yaw + (Math.random() - 0.5) * sh, roll + (Math.random() - 0.5) * sh * 0.5);
  camera.fov = 75; camera.updateProjectionMatrix();
  flash.visible = p.flash && p.alive;
  // footsteps
  if (p.onGround && p.moveSpeed > 1.5) { G.stepT = (G.stepT || 0) - dt * p.moveSpeed / 5.4; if (G.stepT <= 0) { G.stepT = 0.38; sound.step(M.cellAt(p.x, p.z)); } }
}

// ---------------------------------------------------------------- loop
let last = performance.now();
function loop(now) {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  G.menuT += dt;
  const g = G.game;
  if (G.state === 'playing' || G.state === 'over') {
    if (G.state === 'playing') {
      G.acc += dt;
      while (G.acc >= STEP) {
        G.acc -= STEP;
        const inputs = [playerInput(), ...G.brains.slice(1).map((b) => b.think(STEP))];
        g.step(STEP, inputs);
        edge.reload = false; edge.slot = null; edge.flash = false;
        handleEvents();
        if (G.state !== 'playing') break;
      }
    }
    syncWorld(dt, g.t);
    updateCamera(dt);
    updateViewmodel(dt);
    updateHud();
    // damage & status effects
    const p = g.player;
    G.hurtFlash = Math.max(0, (G.hurtFlash || 0) - dt * 1.4);
    finalPass.uniforms.uHurt.value = G.hurtFlash;
    finalPass.uniforms.uLow.value = p.up && p.hp < 40 ? (40 - p.hp) / 40 : p.incaps >= 2 ? 0.8 : 0;
    finalPass.uniforms.uIncap.value = p.incap || p.dead ? 1 : 0;
    finalPass.uniforms.uBile.value += ((p.bile > 0 ? 1 : 0) - finalPass.uniforms.uBile.value) * Math.min(1, dt * 2);
    sound.setHeart(p.alive && (p.incap || p.hp < 30) ? (p.incap ? 1 : (30 - p.hp) / 30 * 0.8 + 0.2) : 0);
    if (G.subT > 0 && (G.subT -= dt) <= 0) $('sub').innerHTML = '';
    if (G.hitT > 0) { G.hitT -= dt; $('hitmark').style.opacity = G.hitT > 0 ? 0.8 : 0; }
  } else if (G.state === 'menu') {
    menuCamera(G.menuT);
    syncWorld(dt, G.menuT);
    if (Math.random() < dt * 0.6) { sound.ctx && sound.witchSob(92, 56, 0); }
    finalPass.uniforms.uHurt.value = 0; finalPass.uniforms.uLow.value = 0; finalPass.uniforms.uIncap.value = 0; finalPass.uniforms.uBile.value = 0;
    flash.visible = false;
  }
  sound.listener(camera);
  finalPass.uniforms.uT.value = G.menuT;
  renderer.clear();
  composer.render(dt);
  if ((G.state === 'playing' || G.state === 'paused') && vGun) {
    vCam.aspect = camera.aspect; vCam.updateProjectionMatrix();
    renderer.clearDepth();
    renderer.render(vScene, vCam);
  }
}

function resize() {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  if (composer) { composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(innerWidth, innerHeight); }
}
addEventListener('resize', resize);

// test hooks
window.__game = {
  G, settings, start, enterMenu, camera, sound,
  advance(sec, input = {}) {
    for (let t = 0; t < sec; t += STEP) {
      const inputs = [{ yaw: G.yaw, pitch: G.pitch, ...input }, ...G.brains.slice(1).map((b) => b.think(STEP))];
      G.game.step(STEP, inputs); handleEvents();
      syncWorld(STEP, G.game.t); updateCamera(STEP); updateViewmodel(STEP);
    }
    updateHud();
  },
};
load().catch((e) => { console.error(e); $('loadtext').textContent = 'Error: ' + e.message; });
