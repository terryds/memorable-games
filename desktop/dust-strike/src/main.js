import * as THREE from 'three';
import { Game, PLANT_TIME, BUY_TIME, ROUND_TIME } from './sim.js';
import { WEAPONS, GEAR, BUY_MENU } from './weapons.js';
import { MAP_W, MAP_H, GW, GH, grid, CELL, siteAt, rayWorld } from './map.js';
import { buildWorld } from './world.js';
import { Soldier, makeGun, makeViewArms } from './models.js';
import { Particles, Tracers, Decals, SmokeClouds } from './fx.js';
import { Sfx } from './audio.js';
import * as TX from './textures.js';

const $ = (id) => document.getElementById(id);
const settings = { team: 'CT', diff: 'normal', rounds: 8, sens: 1, voice: true, quality: 'high', invert: false, volume: 0.8 };
try { Object.assign(settings, JSON.parse(localStorage.getItem('dust-strike') || '{}')); } catch { /* ignore */ }
const save = () => localStorage.setItem('dust-strike', JSON.stringify(settings));
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const fmt = (t) => { t = Math.max(0, Math.ceil(t)); return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`; };
const TEAM_NAME = { T: 'Terrorists', CT: 'Counter-Terrorists' };
const STEP = 1 / 120;
const SLOT_ORDER = ['primary', 'secondary', 'knife', 'nade', 'c4'];

// ---------------------------------------------------------------- renderer & scene
const renderer = new THREE.WebGLRenderer({ antialias: settings.quality === 'high', powerPreference: 'high-performance' });
const pixelRatio = () => (settings.quality === 'high' ? Math.min(devicePixelRatio, 1.5) : 0.8);
renderer.setPixelRatio(pixelRatio());
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.autoClear = false;
document.body.prepend(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xdcc9a4, 80, 300);
const camera = new THREE.PerspectiveCamera(74, innerWidth / innerHeight, 0.05, 2000);
camera.rotation.order = 'YXZ';
scene.add(new THREE.HemisphereLight(0xd4e6ff, 0xb08a58, 1.25));
const SUN_DIR = new THREE.Vector3(0.45, 1, 0.28).normalize();
const sun = new THREE.DirectionalLight(0xffe4bd, 2.7);
sun.castShadow = true;
sun.position.set(MAP_W / 2, 0, MAP_H / 2).addScaledVector(SUN_DIR, 150);
sun.target.position.set(MAP_W / 2, 0, MAP_H / 2);
Object.assign(sun.shadow.camera, { left: -105, right: 105, top: 105, bottom: -105, near: 10, far: 320 });
sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.05;
scene.add(sun, sun.target);
const applyShadowSize = () => {
  const s = settings.quality === 'high' ? 4096 : 2048;
  if (sun.shadow.map && sun.shadow.mapSize.x !== s) { sun.shadow.map.dispose(); sun.shadow.map = null; }
  sun.shadow.mapSize.set(s, s);
};
applyShadowSize();

// first-person viewmodel: own scene drawn on top after a depth clear (never clips into walls)
const vScene = new THREE.Scene();
const vCam = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, 0.01, 10);
vScene.add(new THREE.HemisphereLight(0xd4e6ff, 0x9a7a55, 2.1));
const vSun = new THREE.DirectionalLight(0xffe4bd, 2.6); vSun.position.set(0.6, 1, 0.3); vScene.add(vSun);
const vRoot = new THREE.Group(); vScene.add(vRoot);

const sfx = new Sfx();
const G = { state: 'loading', game: null, yaw: 0, pitch: 0, freeze: false, spec: 0, deathAt: 0, killer: null, msgs: [], shake: 0, menuT: 0 };
let world, fx, tracers, decals, smokes, soldiers = new Map(), dropMeshes = new Map(), nadeMeshes = new Map(), bombMesh, bombLed, flashSprites = [];
let acc = 0, last = performance.now();

// ---------------------------------------------------------------- input
const keys = new Set();
const edge = { reload: false, slot: null, drop: false };
const mouse = { l: false, r: false, dx: 0, dy: 0 };
let kbLocked = false, buyOpen = false;
const locked = () => document.pointerLockElement === renderer.domElement;
function lockPointer() { try { const p = renderer.domElement.requestPointerLock({ unadjustedMovement: true }); if (p && p.catch) p.catch(() => renderer.domElement.requestPointerLock()); } catch { renderer.domElement.requestPointerLock(); } }

addEventListener('keydown', (e) => {
  if (e.code === 'Tab') e.preventDefault();
  if (G.state === 'menu' && e.code === 'Enter') { startMatch(); return; }
  if (G.state !== 'playing') return;
  if (kbLocked && (e.ctrlKey || e.metaKey)) e.preventDefault();
  if (e.repeat) { keys.add(e.code); return; }
  keys.add(e.code);
  const me = G.game?.player;
  if (e.code === 'KeyR') edge.reload = true;
  if (e.code === 'KeyG') edge.drop = true;
  if (/^Digit[1-5]$/.test(e.code)) edge.slot = SLOT_ORDER[+e.code.slice(5) - 1];
  if (e.code === 'KeyQ' && me) edge.slot = me.last;
  if (e.code === 'KeyB') toggleBuy();
  if (e.code === 'Escape' && buyOpen) toggleBuy(false);
  if (e.code === 'Space' && me && !me.alive) nextSpec(1);
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => { keys.clear(); mouse.l = mouse.r = false; });
renderer.domElement.addEventListener('mousedown', (e) => {
  if (G.state !== 'playing') return;
  if (!locked()) { if (!buyOpen) lockPointer(); return; }
  if (e.button === 0) mouse.l = true;
  if (e.button === 2) mouse.r = true;
  const me = G.game?.player;
  if (me && !me.alive && e.button === 0) nextSpec(1);
});
addEventListener('mouseup', (e) => { if (e.button === 0) mouse.l = false; if (e.button === 2) mouse.r = false; });
addEventListener('contextmenu', (e) => e.preventDefault());
addEventListener('mousemove', (e) => {
  if (!locked() || G.state !== 'playing') return;
  const me = G.game.player;
  const zoom = me.scope === 2 ? 0.2 : me.scope === 1 ? 0.45 : 1;
  const k = 0.0021 * settings.sens * zoom;
  G.yaw -= e.movementX * k;
  G.pitch = clamp(G.pitch - e.movementY * k * (settings.invert ? -1 : 1), -1.5, 1.5);
  mouse.dx += e.movementX; mouse.dy += e.movementY;
});
addEventListener('wheel', (e) => {
  if (G.state !== 'playing' || !locked()) return;
  const me = G.game.player, have = SLOT_ORDER.filter((s) => me.has(s));
  const i = have.indexOf(me.cur);
  edge.slot = have[(i + (e.deltaY > 0 ? 1 : -1) + have.length) % have.length];
}, { passive: true });
document.addEventListener('pointerlockchange', () => {
  if (G.state === 'playing' && !locked() && !buyOpen) pause();
  $('clickToPlay').classList.toggle('hidden', !(G.state === 'playing' && !locked() && !buyOpen));
});
document.addEventListener('pointerlockerror', () => { if (G.state === 'playing' && !buyOpen) $('clickToPlay').classList.remove('hidden'); });
$('clickToPlay').addEventListener('click', () => lockPointer());

function buildInput() {
  const me = G.game.player;
  const crouch = keys.has('KeyC') || (kbLocked && (keys.has('ControlLeft') || keys.has('ControlRight')));
  const inp = {
    fwd: (keys.has('KeyW') ? 1 : 0) - (keys.has('KeyS') ? 1 : 0),
    side: (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0),
    jump: keys.has('Space'), crouch, walk: keys.has('ShiftLeft') || keys.has('ShiftRight'),
    fire: mouse.l && !buyOpen && locked(), alt: mouse.r && !buyOpen && locked(),
    reload: edge.reload, use: keys.has('KeyE'), slot: edge.slot, drop: edge.drop, yaw: G.yaw, pitch: G.pitch,
  };
  if (!me.alive) { inp.fwd = inp.side = 0; inp.fire = inp.alt = false; }
  return inp;
}
const clearEdges = () => { edge.reload = false; edge.slot = null; edge.drop = false; };

// ---------------------------------------------------------------- loading
async function load() {
  const bar = $('loadbar'), txt = $('loadtext');
  const step = async (p, t) => { bar.style.width = p + '%'; txt.textContent = t; await nextFrame(); };
  await step(5, 'Sweeping the sand off the bombsites');
  try { await Promise.race([document.fonts.load('600 40px Teko'), new Promise((r) => setTimeout(r, 2500))]); } catch { /* offline */ }
  await step(20, 'Building Dust');
  world = buildWorld(scene, renderer.capabilities.getMaxAnisotropy());
  await step(55, 'Stacking crates');
  const smokeTex = TX.smokeTexture(), glowTex = TX.glowTexture();
  fx = {
    dust: new Particles(500, smokeTex, { drag: 2.5, gravity: 1.5 }),
    blood: new Particles(300, smokeTex, { drag: 3, gravity: 6 }),
    fire: new Particles(200, glowTex, { additive: true, drag: 2.5, gravity: -2 }),
    smoke: new Particles(300, smokeTex, { drag: 1.2, gravity: -0.6 }),
    debris: new Particles(300, glowTex, { drag: 0.6, gravity: 14 }),
  };
  for (const p of Object.values(fx)) scene.add(p.mesh);
  tracers = new Tracers(scene);
  decals = new Decals(scene, TX.holeTexture());
  smokes = new SmokeClouds(scene, smokeTex);
  bombMesh = makeGun('c4'); bombMesh.scale.setScalar(1.6); bombMesh.visible = false;
  bombLed = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 6), new THREE.MeshBasicMaterial({ color: 0x330000 }));
  bombLed.position.set(-0.05, 0.045, 0.02); bombMesh.add(bombLed); scene.add(bombMesh);
  const flashTex = TX.flashTexture();
  for (let i = 0; i < 6; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: flashTex, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0.8 }));
    s.visible = false; s.userData.t = 0; scene.add(s); flashSprites.push(s);
  }
  vFlash = new THREE.Sprite(new THREE.SpriteMaterial({ map: flashTex, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, depthTest: false, opacity: 0.75 }));
  vFlash.visible = false; vScene.add(vFlash);
  await step(80, 'Briefing the bots');
  buildMenu();
  await step(92, 'Warming up shaders');
  menuCamera(0);
  try { renderer.render(scene, camera); await renderer.compileAsync(scene, camera); } catch { /* fine */ }
  $('loading').classList.add('hidden');
  enterMenu();
}

// ---------------------------------------------------------------- menu
function buildMenu() {
  const sel = (rowId, val, key, parse = (v) => v) => {
    const row = $(rowId);
    row.querySelectorAll('.pill').forEach((b) => {
      b.classList.toggle('sel', String(settings[key]) === b.dataset.v);
      b.onclick = () => { settings[key] = parse(b.dataset.v); save(); sel(rowId, settings[key], key, parse); };
    });
  };
  sel('diffs', settings.diff, 'diff');
  sel('rounds', settings.rounds, 'rounds', Number);
  document.querySelectorAll('.team').forEach((b) => {
    b.classList.toggle('sel', b.dataset.team === settings.team);
    b.onclick = () => { settings.team = b.dataset.team; save(); buildMenu(); };
    b.ondblclick = () => startMatch();
  });
  const sens = (id, lab) => { const el = $(id); el.value = settings.sens; $(lab).textContent = (+settings.sens).toFixed(2); el.oninput = () => { settings.sens = +el.value; save(); $('sensv').textContent = $('sensv2').textContent = settings.sens.toFixed(2); $('sens').value = $('sens2').value = settings.sens; }; };
  sens('sens', 'sensv'); sens('sens2', 'sensv2');
  $('vol').value = settings.volume; $('vol').oninput = () => { settings.volume = +$('vol').value; sfx.setVolume(settings.volume); save(); };
  const tog = (id, label, get, flip) => { const b = $(id); b.textContent = label(); b.onclick = () => { flip(); save(); b.textContent = label(); }; };
  tog('optVoice', () => `Radio voice: ${settings.voice ? 'ON' : 'OFF'}`, () => {}, () => { settings.voice = !settings.voice; });
  tog('optInvert', () => `Invert Y: ${settings.invert ? 'ON' : 'OFF'}`, () => {}, () => { settings.invert = !settings.invert; });
  tog('optQuality', () => `Graphics: ${settings.quality.toUpperCase()}`, () => {}, () => { settings.quality = settings.quality === 'high' ? 'low' : 'high'; renderer.setPixelRatio(pixelRatio()); applyShadowSize(); });
  $('go').onclick = () => startMatch();
  $('resume').onclick = () => resume();
  $('quit').onclick = () => { $('pause').classList.add('hidden'); enterMenu(); };
  $('again').onclick = () => startMatch();
  $('toMenu').onclick = () => enterMenu();
  const wins = +localStorage.getItem('dust.wins') || 0, matches = +localStorage.getItem('dust.matches') || 0;
  $('best').textContent = matches ? `🏆 Matches won: ${wins} / ${matches}` : '';
}

function enterMenu() {
  G.state = 'menu'; buyOpen = false;
  if (document.pointerLockElement) document.exitPointerLock();
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  for (const id of ['hud', 'pause', 'over', 'clickToPlay']) $(id).classList.add('hidden');
  $('menu').classList.remove('hidden');
  buildMenu();
  clearMatch();
}

function clearMatch() {
  for (const s of soldiers.values()) scene.remove(s.root);
  soldiers.clear();
  for (const m of dropMeshes.values()) scene.remove(m); dropMeshes.clear();
  for (const m of nadeMeshes.values()) scene.remove(m); nadeMeshes.clear();
  smokes?.clear(); decals?.clear();
  if (bombMesh) bombMesh.visible = false;
  G.game = null;
}

async function startMatch(opts = {}) {
  sfx.start(); sfx.setVolume(settings.volume); sfx.voice = settings.voice;
  clearMatch();
  const game = G.game = new Game({ playerTeam: settings.team, difficulty: settings.diff, winRounds: settings.rounds, ...opts });
  for (const a of game.agents) {
    const s = new Soldier(a.team);
    s.tag = nameTag(a.name, a.team);
    s.tag.visible = false;
    s.root.add(s.tag);
    scene.add(s.root); soldiers.set(a.id, s);
  }
  game.start();
  G.yaw = game.player ? game.player.yaw : 0; G.pitch = 0;
  G.state = 'playing'; G.msgs = []; G.killer = null; acc = 0;
  for (const id of ['menu', 'pause', 'over']) $(id).classList.add('hidden');
  $('hud').classList.remove('hidden');
  $('killfeed').innerHTML = ''; $('banner').style.display = 'none';
  vBuilt = null;
  if (!opts.noLock) {
    try {
      if (!document.fullscreenElement) await document.documentElement.requestFullscreen({ navigationUI: 'hide' });
      if (navigator.keyboard?.lock) { await navigator.keyboard.lock(); kbLocked = true; }
    } catch { kbLocked = false; }
    lockPointer();
    setTimeout(() => { if (G.state === 'playing' && !locked() && !buyOpen) $('clickToPlay').classList.remove('hidden'); }, 400);
  }
  processEvents();
}
document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement) kbLocked = false; });

function pause() { if (G.state !== 'playing') return; G.state = 'paused'; mouse.l = mouse.r = false; keys.clear(); $('pause').classList.remove('hidden'); }
function resume() { $('pause').classList.add('hidden'); G.state = 'playing'; last = performance.now(); acc = 0; lockPointer(); }

function nameTag(name, team) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 48;
  const g = c.getContext('2d');
  g.font = '600 34px Rajdhani, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = 5; g.strokeStyle = 'rgba(0,0,0,0.7)'; g.strokeText(name, 128, 26);
  g.fillStyle = team === 'T' ? '#f0b54a' : '#8cc0ee'; g.fillText(name, 128, 26);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, fog: false }));
  s.scale.set(1.3, 0.24, 1); s.position.y = 2.15;
  return s;
}

// ---------------------------------------------------------------- buy menu
function toggleBuy(force) {
  const me = G.game?.player; if (!me) return;
  const open = force ?? !buyOpen;
  if (open && !G.game.canBuy(me)) { toast(me.alive ? (G.game.buyOpen ? 'You must be in your spawn to buy' : 'Buy time is over') : ''); return; }
  buyOpen = open;
  $('buymenu').classList.toggle('hidden', !open);
  if (open) { mouse.l = mouse.r = false; renderBuy(); document.exitPointerLock(); }
  else {
    lockPointer();
    // auto-close (buy time over) has no user gesture, so the lock may be refused
    setTimeout(() => { if (G.state === 'playing' && !locked() && !buyOpen) $('clickToPlay').classList.remove('hidden'); }, 150);
  }
}

function renderBuy() {
  const g = G.game, me = g.player, el = $('buymenu');
  const owned = (id) => me.inv.primary?.id === id || me.inv.secondary?.id === id || (GEAR[id] && ((id === 'vest' && me.armor >= 100) || (id === 'vesthelm' && me.armor >= 100 && me.helmet) || (id === 'kit' && me.kit)));
  const left = Math.max(0, g.phase === 'freeze' ? BUY_TIME + g.phaseT : BUY_TIME - (ROUND_TIME - g.roundT));
  el.innerHTML = `<h2>BUY MENU <span>$${me.money}</span></h2><div class="bcats">${BUY_MENU.map((c) => `
    <div class="bcat"><h4>${c.cat}</h4>${c.items.filter((id) => { const t = (WEAPONS[id] || GEAR[id]).team; return !t || t === me.team; }).map((id) => {
      const it = WEAPONS[id] || GEAR[id];
      let price = it.price; if (id === 'vesthelm' && me.armor >= 100 && !me.helmet) price = 350;
      const cls = (me.money < price ? ' no' : '') + (owned(id) ? ' own' : '');
      return `<button class="bitem${cls}" data-id="${id}">${it.name}<small>$${price}${owned(id) ? ' · owned' : ''}</small></button>`;
    }).join('')}</div>`).join('')}</div>
    <div class="bfoot">Click to buy · B / Esc to close · ${Math.ceil(left)}s of buy time left</div>`;
  el.querySelectorAll('.bitem').forEach((b) => b.addEventListener('click', () => {
    const err = g.buy(me, b.dataset.id);
    if (err) toast(err); else { $('money').classList.remove('flash'); void $('money').offsetWidth; }
    renderBuy(); processEvents();
  }));
}

// ---------------------------------------------------------------- events → sound, fx, hud
function toast(t) { const el = $('toast'); el.textContent = t; clearTimeout(toast.h); toast.h = setTimeout(() => { el.textContent = ''; }, 1800); }
function centerMsg(html, ttl = 2.5) { G.msgs.push({ html, t: ttl }); }
const pos = (a) => [a.x, a.eyeY, a.z];
const isMe = (id) => G.game.player && id === G.game.player.id;

function muzzleWorld(a) {
  const s = soldiers.get(a.id);
  if (s?.gun) { s.root.updateMatrixWorld(true); return s.gun.localToWorld(s.gun.userData.muzzle.clone()); }
  return new THREE.Vector3(a.x, a.eyeY - 0.2, a.z);
}

function processEvents() {
  const g = G.game; if (!g) return;
  const me = g.player;
  for (const e of g.events) {
    switch (e.type) {
      case 'shot': {
        const a = g.agents[e.a], own = isMe(e.a);
        sfx.gun(e.w, own ? null : pos(a));
        if (own) {
          vKick = 1; vFlashT = 0.045;
          if (Math.random() < 0.5) {
            const start = camera.localToWorld(new THREE.Vector3(0.18, -0.15, -0.6));
            tracers.add(start.x, start.y, start.z, e.hx, e.hy, e.hz);
          }
        } else {
          const m = muzzleWorld(a);
          tracers.add(m.x, m.y, m.z, e.hx, e.hy, e.hz);
          const fs = flashSprites.find((s) => !s.visible) || flashSprites[0];
          fs.position.copy(m); fs.visible = true; fs.userData.t = 0.05; fs.scale.setScalar(0.35 + Math.random() * 0.2); fs.material.rotation = Math.random() * 6;
        }
        break;
      }
      case 'impact': {
        decals.add(e.x, e.y, e.z, e.nx, e.ny, e.nz);
        const wood = e.kind === 'crate' || e.kind === 'door' || e.kind === 'crate2';
        for (let i = 0; i < 4; i++) fx.dust.emit(e.x + e.nx * 0.05, e.y + e.ny * 0.05, e.z + e.nz * 0.05, e.nx * 2 + (Math.random() - 0.5) * 1.5, e.ny * 2 + Math.random() * 1.5, e.nz * 2 + (Math.random() - 0.5) * 1.5, 0.5 + Math.random() * 0.4, 0.12, 0.6, 0.6, wood ? 0.55 : 0.85, wood ? 0.4 : 0.72, wood ? 0.25 : 0.52);
        break;
      }
      case 'hurt': {
        const v = g.agents[e.v];
        for (let i = 0; i < 5; i++) fx.blood.emit(v.x, v.y + (e.zone === 'head' ? v.height * 0.9 : e.zone === 'legs' ? 0.5 : 1.15), v.z, e.dx * 2 + (Math.random() - 0.5) * 1.5, Math.random() * 1.5, e.dz * 2 + (Math.random() - 0.5) * 1.5, 0.35, 0.12, 0.5, 0.85, 0.55, 0.05, 0.04);
        if (isMe(e.a) && e.w !== 'c4') {
          const hm = $('hitmark'); hm.className = ''; void hm.offsetWidth; hm.className = 'on' + (e.zone === 'head' ? ' head' : '');
          sfx.hit(e.zone === 'head' && e.armored);
        }
        if (isMe(e.v)) {
          sfx.hurt(); G.hurtT = 0.5;
          const src = g.agents[e.a];
          if (src && src !== me) {
            const ang = Math.atan2(-(src.x - me.x), -(src.z - me.z)) - G.yaw;
            const d = document.createElement('div'); d.style.transform = `rotate(${-ang}rad)`;
            $('dmgdir').appendChild(d); setTimeout(() => d.remove(), 1100);
          }
          G.shake = Math.max(G.shake, 0.3);
        }
        break;
      }
      case 'kill': {
        const k = g.agents[e.k], v = g.agents[e.v];
        const row = document.createElement('div');
        if (me && (isMe(e.k) || isMe(e.v))) row.className = 'me';
        const wn = WEAPONS[e.w]?.name || (e.w === 'c4' ? 'C4' : e.w);
        row.innerHTML = k && k !== v ? `<span class="${k.team}">${k.name}</span><span class="w">${wn}${e.head ? ' ⌖' : ''}</span><span class="${v.team}">${v.name}</span>` : `<span class="w">☠</span><span class="${v.team}">${v.name}</span>`;
        const kf = $('killfeed'); kf.prepend(row); while (kf.children.length > 6) kf.lastChild.remove();
        setTimeout(() => row.remove(), 7000);
        if (isMe(e.v)) { G.deathAt = performance.now(); G.killer = k && k !== v ? { name: k.name, team: k.team, w: wn, head: e.head, hp: k.hp, id: k.id } : null; mouse.l = false; G.spec = 0; }
        if (isMe(e.k) && v.team !== me.team) centerMsg(`<small>+$${WEAPONS[e.w]?.kill ?? 300}</small>`, 1.2);
        break;
      }
      case 'step': if (!isMe(e.a)) sfx.step(pos(g.agents[e.a])); else sfx.step(null, true); break;
      case 'land': sfx.land(pos(g.agents[e.a]), isMe(e.a)); break;
      case 'reload': { const a = g.agents[e.a]; sfx.reload(WEAPONS[a.weaponId()].reload, isMe(e.a), pos(a)); break; }
      case 'dry': if (isMe(e.a)) sfx.dry(); break;
      case 'switch': if (isMe(e.a)) sfx.switchW(); break;
      case 'zoom': if (isMe(e.a)) sfx.zoom(); break;
      case 'knife': sfx.knife(pos(g.agents[e.a])); if (isMe(e.a)) vSwing = 1; break;
      case 'throw': sfx.throwN(pos(g.agents[e.a])); if (isMe(e.a)) { vSwing = 1; if (e.kind === 'he') sfx.say('Fire in the hole!'); } break;
      case 'bounce': sfx.bounce([e.x, e.y, e.z]); break;
      case 'he': {
        sfx.explosion([e.x, e.y, e.z], false);
        for (let i = 0; i < 26; i++) { const a = Math.random() * 6.28, s = Math.random() * 7; fx.fire.emit(e.x, e.y + 0.3, e.z, Math.cos(a) * s, Math.random() * 6, Math.sin(a) * s, 0.35, 0.9, 2, 0.35, 1, 0.6, 0.25); }
        for (let i = 0; i < 18; i++) { const a = Math.random() * 6.28, s = Math.random() * 3; fx.smoke.emit(e.x, e.y + 0.5, e.z, Math.cos(a) * s, 1 + Math.random() * 2, Math.sin(a) * s, 2.5, 1.5, 1.6, 0.55, 0.35, 0.32, 0.3); }
        for (let i = 0; i < 20; i++) { const a = Math.random() * 6.28, s = 4 + Math.random() * 8; fx.debris.emit(e.x, e.y + 0.3, e.z, Math.cos(a) * s, 3 + Math.random() * 6, Math.sin(a) * s, 0.9, 0.06, 0, 0.6, 0.9, 0.7, 0.4); }
        decals.add(e.x, 0.01, e.z, 0, 1, 0, 14);
        if (me) G.shake = Math.max(G.shake, clamp(1.2 - Math.hypot(me.x - e.x, me.z - e.z) / 20, 0, 1));
        break;
      }
      case 'flash': {
        sfx.flashPop([e.x, e.y, e.z]);
        for (let i = 0; i < 6; i++) fx.fire.emit(e.x, e.y, e.z, (Math.random() - 0.5) * 3, Math.random() * 2, (Math.random() - 0.5) * 3, 0.25, 1.4, 4, 0.5, 1, 1, 1);
        if (me && me.flash > 0.5 && me.alive) sfx.ring(me.flash);
        break;
      }
      case 'smoke': sfx.smokePop([e.x, e.y, e.z]); break;
      case 'plantStart': sfx.plantBeeps(pos(g.agents[e.a])); break;
      case 'planted': {
        sfx.say('Bomb has been planted.');
        centerMsg(`💣 The bomb has been planted at <b>${e.site}</b><small>${me?.team === 'CT' ? 'Find it and hold E to defuse' : 'Defend the bomb!'}</small>`, 3.5);
        break;
      }
      case 'beep': sfx.beep([e.x, e.y + 0.2, e.z]); G.ledT = 0.12; break;
      case 'defuseStart': sfx.defuse(pos(g.agents[e.a])); break;
      case 'defused': sfx.say('Bomb has been defused.'); break;
      case 'explode': {
        sfx.explosion([e.x, e.y, e.z], true);
        for (let i = 0; i < 60; i++) { const a = Math.random() * 6.28, s = Math.random() * 16; fx.fire.emit(e.x, e.y + 0.5, e.z, Math.cos(a) * s, Math.random() * 14, Math.sin(a) * s, 0.7, 3, 5, 0.4, 1, 0.55, 0.2); }
        for (let i = 0; i < 50; i++) { const a = Math.random() * 6.28, s = Math.random() * 6; fx.smoke.emit(e.x, e.y + 1, e.z, Math.cos(a) * s, 2 + Math.random() * 5, Math.sin(a) * s, 5, 4, 3, 0.6, 0.3, 0.27, 0.25); }
        decals.add(e.x, 0.01, e.z, 0, 1, 0, 40);
        if (me) G.shake = Math.max(G.shake, clamp(1.6 - Math.hypot(me.x - e.x, me.z - e.z) / 40, 0.2, 1.5));
        G.boomT = 0.6;
        break;
      }
      case 'bombDropped': if (me?.team === 'T') toast('The bomb has been dropped!'); break;
      case 'bombPickup': if (isMe(e.a)) toast('You picked up the bomb'); break;
      case 'buy': if (isMe(e.a)) { sfx.buy(); const m = $('money'); m.classList.remove('flash'); void m.offsetWidth; m.classList.add('flash'); } break;
      case 'pickup': if (isMe(e.a)) { sfx.pickup(); toast(`Picked up ${WEAPONS[e.w].name}`); } break;
      case 'roundStart': {
        decals.clear(); G.killer = null; G.spec = 0;
        $('banner').style.display = 'none';
        if (me) { G.yaw = me.yaw; G.pitch = 0; }
        if (me?.inv.c4) toast('You have the bomb — plant it at A or B');
        break;
      }
      case 'go': sfx.say(me?.team === 'CT' ? 'Go, go, go!' : 'Let\'s move out!'); break;
      case 'roundEnd': {
        const b = $('banner');
        const why = { elim: e.winner === 'T' ? 'All Counter-Terrorists eliminated' : 'All Terrorists eliminated', bomb: 'The bomb exploded', defuse: 'The bomb has been defused', time: 'Time ran out — target saved' }[e.reason];
        b.className = e.winner; b.innerHTML = `${TEAM_NAME[e.winner]} Win<small>${why}</small>`; b.style.display = 'block';
        sfx.roundEnd(!me || me.team === e.winner);
        sfx.say(e.winner === 'T' ? 'Terrorists win.' : 'Counter-terrorists win.');
        if (buyOpen) toggleBuy(false);
        break;
      }
      case 'matchOver': setTimeout(() => matchOver(e.winner), 600); break;
    }
  }
  g.events.length = 0;
}

function matchOver(winner) {
  const g = G.game; if (!g) return;
  G.state = 'over'; buyOpen = false;
  if (document.pointerLockElement) document.exitPointerLock();
  const me = g.player, won = !me || winner === me.team;
  localStorage.setItem('dust.matches', (+localStorage.getItem('dust.matches') || 0) + 1);
  if (won) localStorage.setItem('dust.wins', (+localStorage.getItem('dust.wins') || 0) + 1);
  const mvp = [...g.agents].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths)[0];
  $('overTitle').textContent = won ? 'VICTORY' : 'DEFEAT';
  $('overTitle').style.color = won ? '#7fd47f' : '#e0533d';
  $('overScore').innerHTML = `<span style="color:var(--t)">${g.score.T}</span> : <span style="color:var(--ct)">${g.score.CT}</span>`;
  $('overStats').innerHTML = (me ? `You: <b>${me.kills}</b> kills · <b>${me.deaths}</b> deaths · <b>${me.kills ? Math.round(me.hs / me.kills * 100) : 0}%</b> headshots<br>` : '') + `MVP: <b>${mvp.name}</b> (${mvp.kills} kills)`;
  $('hud').classList.add('hidden');
  $('over').classList.remove('hidden');
}

function nextSpec(d) {
  const g = G.game, mates = g.agents.filter((a) => a.alive && a.team === g.player.team);
  const pool = mates.length ? mates : g.agents.filter((a) => a.alive);
  if (!pool.length) return;
  G.spec = ((G.spec + d) % pool.length + pool.length) % pool.length;
}

// ---------------------------------------------------------------- viewmodel
let vBuilt = null, vGun = null, vKick = 0, vFlash = null, vFlashT = 0, vSwing = 0, vBob = 0;
const vSway = { x: 0, y: 0 };
const VPOS = { rifle: [0.19, -0.22, -0.47], pistol: [0.16, -0.19, -0.44], knife: [0.17, -0.19, -0.36], nade: [0.17, -0.17, -0.34], c4: [0.05, -0.24, -0.38] };
const vClass = (id) => (id === 'knife' ? 'knife' : id === 'c4' ? 'c4' : WEAPONS[id].nade ? 'nade' : WEAPONS[id].slot === 'secondary' ? 'pistol' : 'rifle');

function updateViewmodel(me, dt) {
  const id = me.weaponId(), key = me.team + id;
  if (vBuilt !== key) {
    vRoot.clear(); vScene.add(vFlash);
    vGun = makeGun(id);
    vGun.add(makeViewArms(me.team, id));
    vGun.traverse((o) => { o.castShadow = false; });
    vGun.scale.setScalar(0.85);
    vRoot.add(vGun); vBuilt = key;
  }
  const cls = vClass(id), base = VPOS[cls], w = WEAPONS[id];
  const sp = Math.min(1, me.moveSpeed / 6.4) * (me.onGround ? 1 : 0.2);
  vBob += dt * (5 + sp * 6);
  vSway.x += (clamp(-mouse.dx * 0.0006, -0.05, 0.05) - vSway.x) * Math.min(1, dt * 10);
  vSway.y += (clamp(mouse.dy * 0.0006, -0.05, 0.05) - vSway.y) * Math.min(1, dt * 10);
  mouse.dx = 0; mouse.dy = 0;
  vKick *= Math.exp(-dt * 16); vSwing = Math.max(0, vSwing - dt * 3);
  let x = base[0] + Math.sin(vBob) * 0.012 * sp + vSway.x, y = base[1] - Math.abs(Math.cos(vBob)) * 0.012 * sp - vSway.y, z = base[2] + vKick * (cls === 'rifle' ? 0.05 : 0.035);
  let rx = vKick * (cls === 'pistol' ? 0.22 : 0.07), ry = 0, rz = 0;
  if (me.switchT > 0) { const k = clamp(me.switchT / 0.55, 0, 1); y -= 0.25 * k; rx -= 0.7 * k; }
  if (me.reloadT > 0 && w.reload) { const p = 1 - me.reloadT / w.reload, d = Math.sin(p * Math.PI); y -= 0.1 * d; rx += 0.45 * d; rz += 0.35 * d; }
  if (cls === 'knife') { const s = Math.sin(vSwing * Math.PI); ry += s * 0.9; rx -= s * 0.4; x -= s * 0.08; z -= s * 0.08; }
  if (cls === 'nade') { if (me.nadeHeld) { z += 0.08; y += 0.04; rx += 0.3; } const s = Math.sin(vSwing * Math.PI); rx -= s * 1.2; z -= s * 0.15; }
  if (me.plantT > 0) { y -= 0.08; rx += 0.6; }
  vRoot.position.set(x, y, z); vRoot.rotation.set(rx, ry, rz);
  vRoot.visible = me.alive && !me.scope && me.defuseT <= 0;
  if (vFlashT > 0 && cls !== 'knife' && vGun) {
    vFlashT -= dt;
    vRoot.updateMatrixWorld(true);
    vFlash.position.copy(vGun.localToWorld(vGun.userData.muzzle.clone()));
    vFlash.scale.setScalar(0.09 + Math.random() * 0.05); vFlash.material.rotation = Math.random() * 6;
    vFlash.visible = vRoot.visible && !(id === 'usp' || id === 'm4a1' || id === 'mp5'); // suppressed guns: no flash
  } else vFlash.visible = false;
}

// ---------------------------------------------------------------- radar
let radarBase = null;
const RS = 220 / MAP_W;
function buildRadar() {
  const c = document.createElement('canvas'); c.width = 220; c.height = Math.ceil(MAP_H * RS);
  const g = c.getContext('2d');
  for (let r = 0; r < GH; r++) for (let cc = 0; cc < GW; cc++) {
    const ch = grid[r][cc];
    g.fillStyle = ch === '#' ? 'rgba(0,0,0,0)' : ch === 'A' || ch === 'B' ? 'rgba(200,120,90,0.55)' : ch === 'T' ? 'rgba(220,170,90,0.4)' : ch === 'C' ? 'rgba(110,160,220,0.4)' : 'rgba(210,190,150,0.42)';
    g.fillRect(cc * CELL * RS, r * CELL * RS, CELL * RS + 0.5, CELL * RS + 0.5);
  }
  g.font = '600 20px Teko, sans-serif'; g.fillStyle = 'rgba(255,230,200,0.9)'; g.textAlign = 'center';
  g.fillText('A', 124 * RS, 26 * RS); g.fillText('B', 18 * RS, 26 * RS);
  radarBase = c;
}
function drawRadar(me, viewer) {
  if (!radarBase) buildRadar();
  const g = G.game, cv = $('radar'), ctx = cv.getContext('2d');
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.drawImage(radarBase, 0, 0);
  const team = me ? me.team : 'CT';
  for (const s of g.smokes) { ctx.fillStyle = 'rgba(200,200,200,0.5)'; ctx.beginPath(); ctx.arc(s.x * RS, s.z * RS, g.smokeRadius(s) * RS, 0, 7); ctx.fill(); }
  const b = g.bomb;
  if (b && (team === 'T' || b.state === 'planted' || (b.state === 'dropped' && g.time - (b.seen || -9) < 2))) {
    if (b.state !== 'carried' || team === 'T') {
      ctx.fillStyle = b.state === 'planted' ? (Math.floor(g.time * 4) % 2 ? '#ff4030' : '#ffd040') : '#ff9a30';
      ctx.fillRect(b.x * RS - 3, b.z * RS - 3, 6, 6);
    }
  }
  for (const a of g.agents) {
    if (a === viewer) continue;
    const mate = a.team === team;
    if (!mate && !(a.alive && g.time - a.spotted[team] < 1)) continue;
    ctx.fillStyle = !a.alive ? 'rgba(255,255,255,0.25)' : mate ? (team === 'T' ? '#f0b54a' : '#8cc0ee') : '#ff4a3a';
    if (!a.alive && !mate) continue;
    ctx.beginPath(); ctx.arc(a.x * RS, a.z * RS, a.alive ? 3 : 2.2, 0, 7); ctx.fill();
  }
  if (viewer) {
    ctx.save(); ctx.translate(viewer.x * RS, viewer.z * RS); ctx.rotate(-(viewer === me ? G.yaw : viewer.yaw));
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(0, -6); ctx.lineTo(4, 4); ctx.lineTo(0, 2); ctx.lineTo(-4, 4); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
}

// ---------------------------------------------------------------- HUD
const hudCache = {};
const setText = (id, v) => { if (hudCache[id] !== v) { hudCache[id] = v; $(id).textContent = v; } };
const setHTML = (id, v) => { if (hudCache[id] !== v) { hudCache[id] = v; $(id).innerHTML = v; } };

function updateHud(dt) {
  const g = G.game, me = g.player;
  const viewer = specTarget();
  const who = me && me.alive ? me : viewer || me;
  // timer
  const tEl = $('timer');
  if (g.phase === 'freeze') { setText('timer', fmt(g.phaseT)); tEl.className = ''; }
  else if (g.phase === 'planted') { setText('timer', '💣'); tEl.className = 'bomb'; }
  else if (g.phase === 'live') { setText('timer', fmt(g.roundT)); tEl.className = g.roundT < 10 ? 'bomb' : ''; }
  else setText('timer', g.phase === 'end' ? fmt(0) : '');
  setText('scT', String(g.score.T)); setText('scCT', String(g.score.CT));
  const dots = (team) => g.agents.filter((a) => a.team === team).map((a) => `<i class="${a.alive ? '' : 'dead'}"></i>`).join('');
  setHTML('aliveT', dots('T')); setHTML('aliveCT', dots('CT'));
  if (!who) return;
  setText('hpv', String(Math.max(0, who.hp)));
  setText('arv', String(who.armor) + (who.helmet ? 'H' : ''));
  $('hpv').classList.toggle('low', who.hp > 0 && who.hp <= 25);
  setText('kit', who.kit ? '✂ KIT' : '');
  setText('money', '$' + (me ? me.money : 0));
  const id = who.weaponId(), w = WEAPONS[id], gun = who.gun();
  setText('wname', w.name.toUpperCase());
  if (gun) { setText('mag', String(gun.mag)); setText('res', '/ ' + gun.reserve); $('ammo').classList.toggle('empty', gun.mag === 0); $('ammo').style.display = ''; }
  else { $('ammo').style.display = 'none'; }
  const sl = [];
  if (who.inv.primary) sl.push(['primary', '1 ' + WEAPONS[who.inv.primary.id].name]);
  if (who.inv.secondary) sl.push(['secondary', '2 ' + WEAPONS[who.inv.secondary.id].name]);
  sl.push(['knife', '3 Knife']);
  if (who.inv.nades.length) sl.push(['nade', '4 ' + who.inv.nades.map((n) => WEAPONS[n].name.split(' ')[0]).join(' · ')]);
  if (who.inv.c4) sl.push(['c4', '5 C4']);
  setHTML('slots', sl.map(([s, t]) => `<div class="${s === who.cur ? 'cur' : ''}">${t}</div>`).join(''));
  $('bombIcon').classList.toggle('hidden', !who.inv.c4);

  // crosshair
  const cross = $('cross');
  const showCross = me && me.alive && !me.scope && !(WEAPONS[me.weaponId()].scope);
  cross.style.display = showCross ? '' : 'none';
  if (showCross) {
    const inacc = g.inaccuracy(me);
    const px = clamp(Math.tan(inacc) / Math.tan(camera.fov * Math.PI / 360) * innerHeight * 0.5, 0, 120);
    const gap = 3 + px;
    cross.children[0].style.top = `${-gap - 9}px`; cross.children[1].style.top = `${gap}px`;
    cross.children[2].style.left = `${-gap - 9}px`; cross.children[3].style.left = `${gap}px`;
  }
  $('scope').style.display = me && me.alive && me.scope ? 'block' : 'none';

  // flash, hurt
  const f = who.flash > 0 ? Math.min(1, who.flash / Math.max(0.01, who.flashMax * 0.55)) : 0;
  $('flash').style.opacity = String(Math.max(f, G.boomT > 0 ? G.boomT * 0.6 : 0));
  G.hurtT = Math.max(0, (G.hurtT || 0) - dt);
  $('hurt').style.opacity = String(Math.min(1, G.hurtT * 2.2));
  G.boomT = Math.max(0, (G.boomT || 0) - dt);

  // progress & hints
  const prog = $('progress');
  if (me && me.plantT > 0) { prog.style.display = 'block'; prog.querySelector('span').textContent = 'PLANTING THE BOMB…'; prog.querySelector('i').style.width = (me.plantT / PLANT_TIME * 100) + '%'; }
  else if (me && me.defuseT > 0) { prog.style.display = 'block'; prog.querySelector('span').textContent = me.kit ? 'DEFUSING (KIT)…' : 'DEFUSING…'; prog.querySelector('i').style.width = (me.defuseT / (me.kit ? 5 : 10) * 100) + '%'; }
  else prog.style.display = 'none';
  let hint = '';
  if (me && me.alive) {
    const b = g.bomb;
    if (me.team === 'CT' && b.state === 'planted' && Math.hypot(me.x - b.x, me.z - b.z) < 1.6 && me.defuseT <= 0) hint = `Hold E to defuse${me.kit ? '' : ' (no kit: 10 s)'}`;
    else if (me.inv.c4 && siteAt(me.x, me.z) && g.phase === 'live' && me.plantT <= 0) hint = 'Hold E to plant the bomb';
    else if (g.canBuy(me) && !buyOpen) hint = g.phase === 'freeze' ? 'Press B to buy' : `Press B to buy · ${Math.ceil(BUY_TIME - (ROUND_TIME - g.roundT))}s`;
    else {
      const d = g.drops.find((d) => Math.hypot(me.x - d.x, me.z - d.z) < 1.8);
      if (d) hint = `Press E to pick up ${WEAPONS[d.id].name}`;
    }
  }
  setText('hint', hint);
  // spectating / death
  let spec = '';
  if (me && !me.alive && g.phase !== 'over') {
    const since = (performance.now() - G.deathAt) / 1000;
    if (since < 2.5 && G.killer) spec = `Killed by <b style="color:var(--${G.killer.team.toLowerCase()})">${G.killer.name}</b> · ${G.killer.w}${G.killer.head ? ' · headshot' : ''}<small>${G.killer.hp > 0 ? `they have ${G.killer.hp} HP left` : ''}</small>`;
    else if (viewer && viewer !== me) spec = `Spectating <b style="color:var(--${viewer.team.toLowerCase()})">${viewer.name}</b><small>Click / Space to switch</small>`;
  }
  setHTML('spec', spec);
  // centre messages
  let html = '';
  if (g.phase === 'freeze' && me) html = `<small>Round ${g.round} · buy time</small>${Math.ceil(g.phaseT)}`;
  G.msgs = G.msgs.filter((m) => (m.t -= dt) > 0);
  if (G.msgs.length) html = G.msgs[G.msgs.length - 1].html;
  setHTML('center', html);
  if (buyOpen) { if (!g.canBuy(me)) toggleBuy(false); else if (Math.floor(g.time * 2) !== hudCache.buyTick) { hudCache.buyTick = Math.floor(g.time * 2); renderBuy(); } }
  // scoreboard
  const showScores = keys.has('Tab') || g.phase === 'end' && false;
  $('scores').classList.toggle('hidden', !showScores);
  if (showScores && Math.floor(g.time * 4) !== hudCache.scTick) {
    hudCache.scTick = Math.floor(g.time * 4);
    const rows = (team) => g.agents.filter((a) => a.team === team).sort((a, b) => b.kills - a.kills).map((a) => `<tr class="${team}${a.alive ? '' : ' dead'}${a === me ? ' me' : ''}"><td>${a.name}${a.inv.c4 && (!me || me.team === 'T') ? ' 💣' : ''}</td><td>${a.kills}</td><td>${a.deaths}</td><td>${a.kills ? Math.round(a.hs / a.kills * 100) : 0}%</td><td>${!me || a.team === me.team ? '$' + a.money : ''}</td><td>${a.alive ? '' : 'DEAD'}</td></tr>`).join('');
    $('scores').innerHTML = `<h2>SCOREBOARD <span style="font-size:22px;color:#fffa">Round ${g.round} · first to ${g.opts.winRounds}</span></h2><table><tr><th>Player</th><th>K</th><th>D</th><th>HS</th><th>Money</th><th></th></tr>
      <tr class="hdr"><td colspan="6" style="color:var(--ct)">Counter-Terrorists · ${g.score.CT}</td></tr>${rows('CT')}
      <tr class="hdr"><td colspan="6" style="color:var(--t)">Terrorists · ${g.score.T}</td></tr>${rows('T')}</table>`;
  }
  drawRadar(me, who);
}

function specTarget() {
  const g = G.game, me = g.player;
  if (me && me.alive) return me;
  if (me && (performance.now() - G.deathAt) / 1000 < 2.5) return null;
  const mates = g.agents.filter((a) => a.alive && (!me || a.team === me.team));
  const pool = mates.length ? mates : g.agents.filter((a) => a.alive);
  return pool.length ? pool[G.spec % pool.length] : null;
}

// ---------------------------------------------------------------- per-frame sync
function syncWorld(dt) {
  const g = G.game, me = g.player, viewer = specTarget();
  for (const a of g.agents) {
    const s = soldiers.get(a.id);
    s.update(a, dt);
    const firstPerson = a === me && me.alive;
    s.root.visible = !firstPerson;
    if (s.gun) s.gun.visible = a.alive;
    s.tag.visible = !!me && a.alive && a.team === me.team && a !== me && a !== viewer;
  }
  // dropped guns
  for (const d of g.drops) {
    if (!dropMeshes.has(d)) { const m = makeGun(d.id); m.position.set(d.x, d.y + 0.05, d.z); m.rotation.set(0, d.yaw, Math.PI / 2); scene.add(m); dropMeshes.set(d, m); }
  }
  for (const [d, m] of dropMeshes) if (!g.drops.includes(d)) { scene.remove(m); dropMeshes.delete(d); }
  // grenades in flight
  for (const n of g.grenades) {
    let m = nadeMeshes.get(n);
    if (!m) { m = makeGun(n.kind); m.scale.setScalar(1.3); scene.add(m); nadeMeshes.set(n, m); }
    m.position.set(n.x, n.y, n.z); if (!n.rest) { m.rotation.x += dt * 12; m.rotation.z += dt * 7; }
  }
  for (const [n, m] of nadeMeshes) if (!g.grenades.includes(n)) { scene.remove(m); nadeMeshes.delete(n); }
  // bomb
  const b = g.bomb;
  bombMesh.visible = !!b && (b.state === 'dropped' || b.state === 'planted');
  if (bombMesh.visible) {
    bombMesh.position.set(b.x, b.y + 0.06, b.z); bombMesh.rotation.y = 0.6;
    G.ledT = Math.max(0, (G.ledT || 0) - dt);
    bombLed.material.color.setHex(b.state === 'planted' && G.ledT > 0 ? 0xff2010 : 0x330000);
    if (me && me.team === 'T' || b.state === 'planted') b.seen = g.time;
    if (me && b.state === 'dropped' && Math.hypot(me.x - b.x, me.z - b.z) < 40) b.seen = g.time;
  }
  smokes.sync(g, dt);
  for (const p of Object.values(fx)) p.update(dt);
  tracers.update(dt);
  for (const s of flashSprites) if (s.visible && (s.userData.t -= dt) <= 0) s.visible = false;
}

const tmpV = new THREE.Vector3();
function updateCamera(dt) {
  const g = G.game, me = g.player;
  G.shake = Math.max(0, G.shake - dt * 1.8);
  const sh = G.shake * G.shake * 0.04, rs = () => (Math.random() - 0.5) * sh;
  let fov = 74;
  if (me && me.alive) {
    camera.position.set(me.x, me.eyeY, me.z);
    camera.rotation.set(G.pitch + me.punchP + rs(), G.yaw + me.punchY + rs(), 0);
    if (me.scope === 1) fov = 40; else if (me.scope === 2) fov = 15;
  } else {
    const t = specTarget();
    if (!t && me) {
      // death cam: look at the killer from above the body
      const k = G.killer ? g.agents[G.killer.id] : null;
      camera.position.set(me.x, me.y + 2.2, me.z);
      if (k) camera.lookAt(k.x, k.eyeY, k.z); else camera.rotation.set(-0.6, me.yaw, 0);
    } else if (t) {
      const [dx, dy, dz] = [-Math.sin(t.yaw) * Math.cos(t.pitch), Math.sin(t.pitch), -Math.cos(t.yaw) * Math.cos(t.pitch)];
      let back = 2.6;
      const hit = rayWorld(t.x, t.eyeY + 0.3, t.z, -dx, -dy, -dz, back);
      if (hit) back = Math.max(0.3, hit.t - 0.25);
      tmpV.set(t.x - dx * back, t.eyeY + 0.3 - dy * back, t.z - dz * back);
      camera.position.lerp(tmpV, 1 - Math.exp(-dt * 14));
      camera.rotation.set(t.pitch, t.yaw, 0);
    }
  }
  if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
  sfx.listener(camera.position.x, camera.position.y, camera.position.z, camera.rotation.y);
}

function menuCamera(t) {
  const a = t * 0.04;
  camera.position.set(MAP_W / 2 + Math.cos(a) * 30, 34, MAP_H / 2 + Math.sin(a) * 24);
  camera.lookAt(MAP_W / 2 + Math.cos(a + 1.2) * 40, 2, MAP_H / 2 + Math.sin(a + 1.2) * 30);
  if (camera.fov !== 60) { camera.fov = 60; camera.updateProjectionMatrix(); }
}

// ---------------------------------------------------------------- loop
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (G.state === 'playing' && G.game && !G.freeze) {
    acc += dt;
    let n = 0;
    while (acc >= STEP && n < 10) { G.game.update(STEP, buildInput()); clearEdges(); acc -= STEP; n++; }
    if (n === 10) acc = 0;
    processEvents();
  }
  render(dt);
  requestAnimationFrame(frame);
}

function render(dt) {
  renderer.clear();
  if (G.game && (G.state === 'playing' || G.state === 'paused' || G.state === 'over')) {
    syncWorld(G.state === 'playing' ? dt : 0);
    updateCamera(dt);
    if (G.state !== 'over') updateHud(dt);
    renderer.render(scene, camera);
    const me = G.game.player;
    if (me && me.alive) {
      updateViewmodel(me, dt);
      vCam.aspect = camera.aspect; vCam.updateProjectionMatrix();
      renderer.clearDepth();
      renderer.render(vScene, vCam);
    }
  } else {
    G.menuT += dt;
    menuCamera(G.menuT);
    for (const p of Object.values(fx || {})) p.update(dt);
    renderer.render(scene, camera);
  }
}

function resize() {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
}
addEventListener('resize', resize);

// test hook: drive the match deterministically
window.__game = {
  G, settings, camera, startMatch, enterMenu,
  get game() { return G.game; },
  advance(sec, input = {}) {
    const g = G.game;
    for (let t = 0; t < sec; t += STEP) {
      g.update(STEP, { ...buildInput(), ...input, yaw: input.yaw ?? G.yaw, pitch: input.pitch ?? G.pitch });
      if (input.yaw !== undefined) G.yaw = input.yaw;
      if (input.pitch !== undefined) G.pitch = input.pitch;
    }
    processEvents();
    render(0.016);
  },
};

load();
requestAnimationFrame(frame);
