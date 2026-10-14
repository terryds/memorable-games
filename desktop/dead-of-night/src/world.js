// Static world: ground, buildings, props, decals, practical lights. Everything that doesn't move
// (except flickering lights, fire and the safe-room door).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import * as M from './map.js';
import * as TX from './textures.js';

const C = M.CELL;
const isOpen = (c, r) => c >= 0 && r >= 0 && c < M.GW && r < M.GH && M.grid[r][c] !== '#';
const hash = (a, b) => { let h = Math.imul(a, 374761393) ^ Math.imul(b, 668265263); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };

function uvBox(w, h, d, tile = 16) {
  const g = new THREE.BoxGeometry(w, h, d), uv = g.attributes.uv;
  const fw = [d, d, w, w, w, w], fh = [h, h, d, d, h, h];
  for (let f = 0; f < 6; f++) for (let k = 0; k < 4; k++) { const v = f * 4 + k; uv.setXY(v, uv.getX(v) * fw[f] / tile, uv.getY(v) * fh[f] / tile); }
  return g;
}
const stdMat = (o) => new THREE.MeshStandardMaterial({ roughness: 0.9, metalness: 0, ...o });

export function buildWorld(scene, quality) {
  const W = { flicker: [], fires: [], door: null, alarm: null, boat: null, radioLed: null, lights: [] };
  const aniso = 8;
  // ---------------- ground per cell type
  const groundMats = {
    '.': stdMat({ map: TX.asphaltTexture(), roughness: 0.8 }),
    S: stdMat({ map: TX.concreteTexture(21, '#3e3a34') }),
    P: stdMat({ map: TX.grassTexture(), roughness: 1 }),
    G: stdMat({ map: TX.concreteTexture(23, '#47484a'), roughness: 0.75 }),
    W: stdMat({ map: TX.concreteTexture(25, '#3a3b3c'), roughness: 0.7 }),
    E: stdMat({ map: TX.plankTexture() }),
  };
  for (const m of Object.values(groundMats)) { m.map.repeat.set(1, 1); m.map.anisotropy = aniso; }
  const groundGeos = {};
  for (let r = 0; r < M.GH; r++) for (let c = 0; c < M.GW; c++) {
    const t = M.grid[r][c]; if (!groundMats[t]) continue;
    const g = new THREE.PlaneGeometry(C, C).rotateX(-Math.PI / 2).translate(c * C + C / 2, 0, r * C + C / 2);
    const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) + c) * (t === 'E' ? 0.5 : 0.25), (uv.getY(i) + r) * (t === 'E' ? 0.5 : 0.25));
    (groundGeos[t] ||= []).push(g);
  }
  for (const [t, gs] of Object.entries(groundGeos)) { const m = new THREE.Mesh(mergeGeometries(gs), groundMats[t]); m.receiveShadow = true; scene.add(m); }
  // sidewalks: a band along facades on the street
  const swGeo = [];
  for (let r = 0; r < M.GH; r++) for (let c = 0; c < M.GW; c++) {
    if (M.grid[r][c] !== '.') continue;
    for (const [dc, dr] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      if (isOpen(c + dc, r + dr)) continue;
      const w = dc ? 1.6 : C, d = dr ? 1.6 : C;
      const x = c * C + C / 2 + dc * (C / 2 - 0.8), z = r * C + C / 2 + dr * (C / 2 - 0.8);
      swGeo.push(new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2).translate(x, 0.012, z));
    }
  }
  const sw = new THREE.Mesh(mergeGeometries(swGeo), stdMat({ map: TX.sidewalkTexture() }));
  sw.material.map.repeat.set(0.4, 0.4); sw.receiveShadow = true; scene.add(sw);
  // water around the docks
  const water = new THREE.Mesh(new THREE.PlaneGeometry(600, 600).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x050a0d, roughness: 0.15, metalness: 0.4 }));
  water.position.set(-200, -1.2, 0); scene.add(water);
  W.water = water;
  // dock edge posts
  const pilings = [];
  for (let z = 6; z < 54; z += 3) pilings.push(new THREE.CylinderGeometry(0.18, 0.2, 2.4, 6).translate(3.6, -0.6, z));
  for (let x = 6; x < 38; x += 3) pilings.push(new THREE.CylinderGeometry(0.18, 0.2, 2.4, 6).translate(x, -0.6, 3.6));
  scene.add(new THREE.Mesh(mergeGeometries(pilings), stdMat({ color: 0x2a2219 })));

  // ---------------- buildings: every solid cell touching open space becomes a block
  const facades = [TX.facadeTexture(1, 'brick'), TX.facadeTexture(2, 'plaster'), TX.facadeTexture(3, 'concrete'), TX.facadeTexture(4, 'brick')];
  const metal = TX.metalTexture();
  const bMats = [...facades.map((t) => stdMat({ map: t, roughness: 0.95 })), stdMat({ map: metal, roughness: 0.6, color: 0x8a8e92 }), stdMat({ map: TX.concreteTexture(31, '#4a463e') })];
  bMats.forEach((m) => { m.map.anisotropy = aniso; });
  const bGeos = bMats.map(() => []);
  for (let r = 0; r < M.GH; r++) for (let c = 0; c < M.GW; c++) {
    if (M.grid[r][c] !== '#') continue;
    let touch = null;
    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) { if (isOpen(c + dc, r + dr)) { const t = M.grid[r + dr][c + dc]; if (t === 'W') touch = 'W'; else if (!touch || touch === 'w') touch = t; } }
    if (!touch) continue;
    const block = hash(Math.floor(c / 3), Math.floor(r / 3));
    let h = 9 + Math.floor(block * 3) * 4, mi = Math.floor(hash(Math.floor(c / 4), Math.floor(r / 2)) * 4);
    if (touch === 'W') { h = 9; mi = 4; } else if (touch === 'S') { mi = 5; h = Math.max(h, 9); } else if (touch === 'w') { h = 4; mi = 5; }
    const g = uvBox(C, h, C).translate(c * C + C / 2, h / 2, r * C + C / 2);
    // top face dark
    bGeos[mi].push(g);
  }
  bGeos.forEach((gs, i) => { if (!gs.length) return; const m = new THREE.Mesh(mergeGeometries(gs), bMats[i]); m.castShadow = true; m.receiveShadow = true; scene.add(m); });
  // ceilings of the safe room and the warehouse
  const ceil = { S: [], W: [] };
  for (let r = 0; r < M.GH; r++) for (let c = 0; c < M.GW; c++) { const t = M.grid[r][c]; if (ceil[t]) ceil[t].push(new THREE.BoxGeometry(C, 0.4, C).translate(c * C + C / 2, M.roofHeight(t) + 0.2, r * C + C / 2)); }
  for (const [t, gs] of Object.entries(ceil)) { const m = new THREE.Mesh(mergeGeometries(gs), t === 'W' ? stdMat({ map: metal, color: 0x55585c }) : stdMat({ map: TX.concreteTexture(33, '#38342e') })); m.castShadow = true; m.receiveShadow = true; scene.add(m); }
  // warehouse roof trusses
  const truss = [];
  for (let x = 46; x < 150; x += 8) truss.push(new THREE.BoxGeometry(0.3, 0.5, 20).translate(x, 6.6, 18));
  scene.add(new THREE.Mesh(mergeGeometries(truss), stdMat({ color: 0x2a2c2e, roughness: 0.5 })));

  // ---------------- props
  const mats = {
    car: [0x2c3a44, 0x4a2a24, 0x3a3a36, 0x55544a, 0x23282c, 0x3f4a3a].map((c) => stdMat({ color: c, roughness: 0.55, metalness: 0.2 })),
    burnt: stdMat({ color: 0x141210, roughness: 1 }), glass: stdMat({ color: 0x0a0e12, roughness: 0.1, metalness: 0.3 }), tire: stdMat({ color: 0x0c0c0c }),
    dumpster: stdMat({ color: 0x2b3a2a, roughness: 0.7 }), concrete: stdMat({ map: TX.concreteTexture(41, '#6a675f') }), wood: stdMat({ color: 0x5a4126 }),
    crate: stdMat({ color: 0x6b4f2e }), bark: stdMat({ color: 0x1e1712 }), leaf: stdMat({ color: 0x141c10 }), metal: stdMat({ color: 0x5d6064, roughness: 0.5, metalness: 0.2 }),
    red: stdMat({ color: 0x6e1612, roughness: 0.6 }), yellow: stdMat({ color: 0x9a7a14, roughness: 0.6 }), cloth: stdMat({ color: 0x3e4a3a }),
  };
  const add = (geo, mat, x, y, z, ry = 0, cast = true) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = cast; m.receiveShadow = true; scene.add(m); return m; };
  const glowTex = TX.glowTexture();
  let carI = 0;
  for (const b of M.boxes) {
    const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2, w = b.x1 - b.x0, d = b.z1 - b.z0, h = b.y1 - b.y0;
    switch (b.kind) {
      case 'car': {
        const g = new THREE.Group(); g.position.set(cx, 0, cz); g.rotation.y = b.along === 'x' ? Math.PI / 2 : 0;
        g.rotation.y += (hash(carI, 7) - 0.5) * 0.3;
        const body = b.burning ? mats.burnt : mats.car[carI++ % mats.car.length];
        const m1 = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.75, 4.4), body); m1.position.y = 0.62; g.add(m1);
        const m2 = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.6, 2.2), b.burning ? mats.burnt : mats.glass); m2.position.set(0, 1.25, -0.2); g.add(m2);
        for (const [sx, sz] of [[-0.9, 1.4], [0.9, 1.4], [-0.9, -1.4], [0.9, -1.4]]) { const t = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.25, 12).rotateZ(Math.PI / 2), mats.tire); t.position.set(sx, 0.35, sz); g.add(t); }
        g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
        scene.add(g);
        if (b.burning) {
          const l = new THREE.PointLight(0xff7a2a, 30, 16, 2); l.position.set(cx, 2, cz); scene.add(l);
          W.fires.push({ x: cx, z: cz, light: l, base: 30 }); W.lights.push(l);
        }
        if (b.alarm) {
          const lamps = [];
          for (const s of [-0.75, 0.75]) for (const e of [-2.2, 2.2]) { const lm = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.05), new THREE.MeshBasicMaterial({ color: 0x331a00 })); lm.position.set(s, 0.75, e); g.add(lm); lamps.push(lm); }
          W.alarm = { lamps, on: false, t: 0 };
        }
        break;
      }
      case 'dumpster': add(new THREE.BoxGeometry(w, h, d), mats.dumpster, cx, h / 2, cz); add(new THREE.BoxGeometry(w + 0.1, 0.08, d + 0.1), mats.dumpster, cx, h + 0.05, cz).rotation.x = 0.15; break;
      case 'barricade': add(new THREE.BoxGeometry(w, h, d * 0.6), mats.concrete, cx, h / 2, cz); add(new THREE.BoxGeometry(w * 0.98, 0.12, d), mats.red, cx, h * 0.8, cz); break;
      case 'crate': add(new THREE.BoxGeometry(w, h, d), mats.crate, cx, h / 2, cz); break;
      case 'table': add(new THREE.BoxGeometry(w, 0.08, d), mats.wood, cx, h - 0.04, cz); for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) add(new THREE.BoxGeometry(0.08, h, 0.08), mats.wood, cx + sx * (w / 2 - 0.1), h / 2, cz + sz * (d / 2 - 0.1)); break;
      case 'cot': add(new THREE.BoxGeometry(w, 0.15, d), mats.cloth, cx, 0.42, cz); add(new THREE.BoxGeometry(w, 0.35, d * 0.9), mats.metal, cx, 0.17, cz); break;
      case 'tree': {
        // dead, twisted trees
        const g = new THREE.Group(); g.position.set(cx, 0, cz);
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.32, 5, 6), mats.bark); trunk.position.y = 2.5; g.add(trunk);
        for (let k = 0; k < 6; k++) {
          const br = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.1, 2.4, 5), mats.bark);
          const a = hash(cx, k) * 6.28, tilt = 0.6 + hash(cz, k) * 0.6;
          br.position.set(Math.cos(a) * 0.6, 3.6 + k * 0.35, Math.sin(a) * 0.6); br.rotation.set(Math.sin(a) * tilt, 0, -Math.cos(a) * tilt); g.add(br);
        }
        if (hash(cx, cz) < 0.5) for (let k = 0; k < 3; k++) { const lf = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 0), mats.leaf); lf.position.set((hash(k, cx) - 0.5) * 2.4, 4.6 + k * 0.5, (hash(cz, k) - 0.5) * 2.4); g.add(lf); }
        g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
        scene.add(g); break;
      }
      case 'fountain': add(new THREE.CylinderGeometry(2.2, 2.4, 0.8, 20), mats.concrete, cx, 0.4, cz); add(new THREE.CylinderGeometry(1.95, 1.95, 0.1, 20), new THREE.MeshStandardMaterial({ color: 0x0a0f0c, roughness: 0.1 }), cx, 0.72, cz, 0, false); add(new THREE.CylinderGeometry(0.3, 0.4, 1.6, 10), mats.concrete, cx, 1.2, cz); break;
      case 'bench': add(new THREE.BoxGeometry(w, 0.08, d), mats.wood, cx, 0.45, cz); add(new THREE.BoxGeometry(w * 0.9, 0.45, d * 0.9), mats.metal, cx, 0.22, cz); break;
      case 'pump': add(new THREE.BoxGeometry(w, h, d), mats.red, cx, h / 2, cz); add(new THREE.BoxGeometry(w * 0.8, 0.35, 0.05), new THREE.MeshBasicMaterial({ color: 0x0a1410 }), cx, h * 0.72, cz + d / 2 + 0.03, 0, false); break;
      case 'pillar': add(new THREE.BoxGeometry(w, h, d), mats.metal, cx, h / 2, cz); break;
      case 'canopy': {
        add(new THREE.BoxGeometry(w, 0.4, d), mats.metal, cx, 4.6, cz);
        add(new THREE.BoxGeometry(w + 0.2, 0.7, 0.15), mats.red, cx, 4.6, b.z0, 0, false); add(new THREE.BoxGeometry(w + 0.2, 0.7, 0.15), mats.red, cx, 4.6, b.z1, 0, false);
        const tubeMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 2.4, 2.3) });
        const tubes = [];
        for (let k = 0; k < 4; k++) { const t = add(new THREE.BoxGeometry(0.15, 0.06, 3), tubeMat, cx - 6 + k * 4, 4.36, cz, 0, false); tubes.push(t); }
        const l = new THREE.PointLight(0xcfe6ff, 40, 22, 2); l.position.set(cx, 4, cz); scene.add(l);
        W.flicker.push({ light: l, base: 40, mats: [tubeMat], baseCol: tubeMat.color.clone(), rate: 0.6, seed: 3 }); W.lights.push(l);
        break;
      }
      case 'counter': add(new THREE.BoxGeometry(w, h, d), mats.wood, cx, h / 2, cz); break;
      case 'shelf': {
        for (const y of [0.05, 1.15, 2.25, 3.3]) add(new THREE.BoxGeometry(w, 0.08, d), mats.metal, cx, y, cz);
        for (const sz of [-1, 1]) for (const sx of [-1, 1]) add(new THREE.BoxGeometry(0.08, h, 0.08), mats.yellow, cx + sx * (w / 2 - 0.05), h / 2, cz + sz * (d / 2 - 0.05));
        for (let k = 0; k < 10; k++) { const bw = 0.6 + hash(cx, k) * 0.5; add(new THREE.BoxGeometry(bw * 0.9, 0.5 + hash(k, cz) * 0.4, bw), mats.crate, cx + (hash(k, 3) - 0.5) * 0.4, [0.4, 1.5, 2.6][k % 3], cz - d / 2 + 0.6 + (k / 10) * (d - 1.2)); }
        break;
      }
      case 'forklift': add(new THREE.BoxGeometry(w, 1.2, d), mats.yellow, cx, 0.6, cz); add(new THREE.BoxGeometry(w * 0.9, 1.0, 0.1), mats.metal, cx, 1.7, cz - d / 2 + 0.3); add(new THREE.BoxGeometry(0.1, 2.1, 0.1), mats.metal, cx, 1.05, cz + d / 2); break;
      case 'container': add(uvBox(w, h, d, 4), stdMat({ map: metal, color: b.tint ? 0x5a2a20 : 0x24405a, roughness: 0.6 }), cx, h / 2, cz); break;
      case 'radiocrate': {
        add(new THREE.BoxGeometry(w, h, d), mats.crate, cx, h / 2, cz);
        add(new THREE.BoxGeometry(0.6, 0.35, 0.4), mats.metal, cx, h + 0.18, cz);
        add(new THREE.CylinderGeometry(0.015, 0.015, 1.2, 4), mats.metal, cx + 0.22, h + 0.9, cz, 0, false);
        const led = add(new THREE.SphereGeometry(0.04, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff2010 }), cx - 0.2, h + 0.3, cz - 0.21, 0, false);
        W.radioLed = led;
        break;
      }
      case 'srdoor': {
        const pivot = new THREE.Group(); pivot.position.set(24, 0, 116.2); scene.add(pivot);
        const door = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.9, 3.6), stdMat({ color: 0x6a1a14, roughness: 0.5, metalness: 0.2 })); door.position.set(0, 1.45, 1.8); door.castShadow = true; pivot.add(door);
        const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.55), new THREE.MeshBasicMaterial({ map: TX.signTexture('SAFE ROOM', '#5a1410', '#e8dcc0'), color: 0x777777 }));
        sign.position.set(0.07, 2.2, 1.8); sign.rotation.y = Math.PI / 2; pivot.add(sign);
        const s2 = sign.clone(); s2.position.x = -0.07; s2.rotation.y = -Math.PI / 2; pivot.add(s2);
        W.door = { pivot, open: 0 };
        break;
      }
      default: break;
    }
  }
  // the safe room: warm steady light, cots, a red-lit sign over the door inside
  {
    const l = new THREE.PointLight(0xffc988, 70, 20, 2); l.position.set(14, 3.6, 118); scene.add(l); W.lights.push(l);
    W.flicker.push({ light: l, base: 70, rate: 0.03, seed: 9 });
    add(new THREE.BoxGeometry(0.5, 0.12, 0.5), new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 2.4, 1.6) }), 14, 4.1, 118, 0, false);
  }
  // street lamps: posts every ~16 m, a couple still (barely) working
  const postGeo = new THREE.CylinderGeometry(0.08, 0.12, 6, 6), headGeo = new THREE.BoxGeometry(0.5, 0.15, 0.3);
  const lampSpots = [[34, 105], [66, 105], [98, 105], [130, 105], [50, 126], [82, 126], [114, 126], [121, 84], [121, 70], [24, 22], [10, 40], [36, 10]];
  lampSpots.forEach(([x, z], i) => {
    add(postGeo, mats.metal, x, 3, z);
    const working = [1, 4, 7, 9].includes(i);
    const hm = new THREE.MeshBasicMaterial({ color: working ? new THREE.Color(2.4, 1.6, 0.8) : 0x111111 });
    add(headGeo, hm, x, 6, z, 0, false);
    if (working) {
      const l = new THREE.PointLight(0xffb070, 28, 20, 2); l.position.set(x, 5.6, z); scene.add(l); W.lights.push(l);
      W.flicker.push({ light: l, base: 28, mats: [hm], baseCol: hm.color.clone(), rate: i === 4 ? 0.5 : 0.15, seed: i });
    }
  });
  // warehouse emergency lights (slow red pulse) and the docks sodium lamp
  {
    const red = new THREE.PointLight(0xff2a1a, 22, 26, 2); red.position.set(90, 6, 12); scene.add(red); W.lights.push(red);
    W.pulse = red;
    const redMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.4, 0.08, 0.05) });
    for (const x of [60, 90, 120]) add(new THREE.BoxGeometry(0.4, 0.2, 0.4), redMat, x, 6.7, 12, 0, false);
  }
  // writing on the walls
  const decal = (tex, x, y, z, ry, w, h) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 1, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 })); m.position.set(x, y, z); m.rotation.y = ry; scene.add(m); };
  decal(TX.graffitiTexture('EVAC AT\nTHE DOCKS →'), 40, 2.8, 104.05, 0, 5, 2.5);
  decal(TX.graffitiTexture('THEY HEAR\nYOUR GUNS', '#8a1010'), 104, 2.6, 104.05, 0, 5, 2.5);
  decal(TX.graffitiTexture("DON'T GO IN\nTHE PARK", '#c8c8c0'), 119.95, 2.6, 80, Math.PI / 2, 5, 2.5);
  decal(TX.graffitiTexture('SHE CRIES\nLIGHTS OFF', '#9a1414'), 136.05, 2.8, 72, -Math.PI / 2, 5, 2.5);
  decal(TX.graffitiTexture('NO ONE\nIS COMING', '#7a1010'), 46, 3, 8.05, 0, 5, 2.5);
  decal(TX.graffitiTexture('RADIO →\nBOAT', '#d8d0b0'), 36.05, 2.5, 20, Math.PI / 2, 4, 2);
  decal(TX.signTexture('GAS'), 165, 5.6, 43.9, Math.PI, 4, 1);
  decal(TX.signTexture('WAREHOUSE 7', '#20282c'), 140, 4.5, 36.05, 0, 6, 1.5);
  // blood smears on the ground
  const bloodTex = [TX.bloodTexture(1), TX.bloodTexture(2), TX.bloodTexture(3)];
  const r = TX.rng(99);
  for (let i = 0; i < 70; i++) {
    let x, z, t = 0;
    do { x = r() * M.MAP_W; z = r() * M.MAP_H; t++; } while (t < 50 && (M.cellAt(x, z) === '#' || M.cellAt(x, z) === 'S' || M.cellAt(x, z) === 'w'));
    const s = 0.8 + r() * 2.2;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(s, s).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: bloodTex[i % 3], transparent: true, depthWrite: false, roughness: 0.3, polygonOffset: true, polygonOffsetFactor: -3 }));
    m.position.set(x, 0.02, z); m.rotation.y = r() * 6; scene.add(m);
  }
  // corpses (dark lumps) and debris
  const debris = [];
  for (let i = 0; i < 160; i++) {
    let x, z; do { x = r() * M.MAP_W; z = r() * M.MAP_H; } while (!M.clearAt(x, z, 0.3) || M.cellAt(x, z) === 'S');
    const s = 0.15 + r() * 0.45;
    debris.push(new THREE.BoxGeometry(s, s * 0.4, s * (0.6 + r())).rotateY(r() * 3).translate(x, s * 0.2, z));
  }
  scene.add(new THREE.Mesh(mergeGeometries(debris), stdMat({ color: 0x2a2724 })));
  // the rescue boat (slides in during the finale)
  {
    const g = new THREE.Group();
    const hull = new THREE.Mesh(new THREE.BoxGeometry(5, 1.6, 12), stdMat({ color: 0xd8d8d0, roughness: 0.6 })); hull.position.y = -0.2; g.add(hull);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.8, 4), stdMat({ color: 0x2a3640 })); cab.position.set(0, 1.4, -1.5); g.add(cab);
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 1, 0.2) })); beacon.position.set(0, 2.5, -1.5); g.add(beacon);
    const spot = new THREE.SpotLight(0xfff0d0, 200, 70, 0.4, 0.5, 1.5); spot.position.set(0, 2.4, 2); spot.target.position.set(14, 0, 0); g.add(spot, spot.target);
    g.position.set(-60, 0, M.EVAC.boatZ); g.visible = false; scene.add(g);
    W.boat = { g, beacon, spot };
  }
  // sky: overcast night, the moon smeared behind cloud
  const sky = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { uTime: { value: 0 } },
    vertexShader: 'varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }',
    fragmentShader: /* glsl */`
      varying vec3 vD; uniform float uTime;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      void main(){
        vec3 d = normalize(vD); float y = max(d.y, 0.0);
        vec3 col = mix(vec3(0.035, 0.045, 0.05), vec3(0.008, 0.01, 0.014), pow(y, 0.6));
        vec2 uv = d.xz / (d.y + 0.25) * 2.0 + vec2(uTime * 0.01, 0.0);
        float c = n(uv) * 0.6 + n(uv * 2.3) * 0.3 + n(uv * 5.1) * 0.1;
        vec3 moon = normalize(vec3(-0.6, 0.35, -0.4));
        float m = max(dot(d, moon), 0.0);
        col += vec3(0.25, 0.3, 0.32) * pow(m, 40.0) * 0.6 + vec3(0.12, 0.14, 0.15) * pow(m, 6.0) * 0.4;
        col = mix(col, col * 0.35 + vec3(0.02, 0.025, 0.028) * c, smoothstep(0.35, 0.75, c));
        gl_FragColor = vec4(col, 1.0);
      }`,
  }));
  sky.frustumCulled = false; sky.renderOrder = -10; scene.add(sky);
  W.sky = sky;
  return W;
}
