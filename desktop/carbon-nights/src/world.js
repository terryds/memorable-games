import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { ROAD_HW, CITY } from './track.js';
import { WATER_Y } from './terrain.js';
import * as T from './textures.js';
import { addReflection } from './reflection.js';

const HW = ROAD_HW;
const NEON = ['#ff2bd6', '#00e5ff', '#ff3355', '#ffb000', '#7cff4f', '#b14bff', '#ff7a1a', '#3dfcff'];
const WORDS = ['NOODLES', 'HOTEL', 'ラーメン', '24H', 'CLUB', 'KARAOKE', 'TATTOO', 'DINER', 'PACHINKO', 'SUSHI', 'ARCADE', 'MOTEL', 'CAFE', '寿司', 'カラオケ', 'GARAGE', 'NITRO', 'BAR', 'LIQUOR', 'DRIFT'];

function colorize(geo, color) {
  const n = geo.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = color.r; a[i * 3 + 1] = color.g; a[i * 3 + 2] = color.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3));
  return geo;
}

function buildingGeo(w, h, d, uo, vo, tint) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const faceW = [d, d, w, w, w, w];
  for (let f = 0; f < 6; f++) for (let k = 0; k < 4; k++) {
    const v = f * 4 + k;
    if (f === 2 || f === 3) { uv.setXY(v, 0.003, 0.003); continue; }
    uv.setXY(v, uo + uv.getX(v) * faceW[f] / 34, vo + uv.getY(v) * h / 50);
  }
  colorize(g, tint);
  return g;
}

export function buildWorld(scene, track, terrain, refl, shared, quality) {
  const r = T.rng(2024);
  const world = { hideInReflection: [], update: () => {} };
  const N = track.N;

  // ---------- road ----------
  const roadTex = T.roadTexture();
  const roadMat = new THREE.MeshStandardMaterial({ map: roadTex, roughness: 0.34, metalness: 0.0, color: 0xc8c8d0 });
  addReflection(roadMat, refl, shared, 'road');
  const road = new THREE.Mesh(track.sweep([[-HW, 0], [HW, 0]], [[0, N + 1]], { uvAcross: [0, 1], vScale: 1 / 40 }), roadMat);
  road.name = 'road';
  scene.add(road);

  const cityRuns = track.runs((i) => track.city[i] === 1);
  const openRuns = track.runs((i) => track.city[i] === 0);

  // shoulders out on the open road
  const gravelMat = new THREE.MeshStandardMaterial({ color: 0x1b1a1a, roughness: 0.95, map: T.rockTexture() });
  const shoulders = new THREE.Mesh(mergeGeometries([
    track.sweep([[-HW - 4.5, -0.9], [-HW - 0.6, 0.0], [-HW, 0.0]], openRuns, { vScale: 1 / 4 }),
    track.sweep([[HW, 0.0], [HW + 0.6, 0.0], [HW + 4.5, -0.9]], openRuns, { vScale: 1 / 4 }),
  ]), gravelMat);
  scene.add(shoulders);

  // sidewalks downtown
  const concrete = T.concreteTexture();
  const walkMat = new THREE.MeshStandardMaterial({ map: concrete, color: 0x9a98a4, roughness: 0.6 });
  addReflection(walkMat, refl, shared, 'road');
  const walks = new THREE.Mesh(mergeGeometries([
    track.sweep([[HW, 0], [HW, 0.22], [HW + 0.3, 0.22], [HW + 5, 0.22], [HW + 5, -1]], cityRuns, { vScale: 1 / 4 }),
    track.sweep([[-HW - 5, -1], [-HW - 5, 0.22], [-HW - 0.3, 0.22], [-HW, 0.22], [-HW, 0]], cityRuns, { vScale: 1 / 4 }),
  ]), walkMat);
  scene.add(walks);

  // guardrails + posts
  const railMat = new THREE.MeshStandardMaterial({ color: 0x8a8f99, roughness: 0.35, metalness: 0.55, side: THREE.DoubleSide });
  const rails = new THREE.Mesh(mergeGeometries([
    track.sweep([[HW + 0.9, 0.5], [HW + 0.75, 0.68], [HW + 0.9, 0.86]], openRuns, { vScale: 1 / 4 }),
    track.sweep([[-HW - 0.9, 0.86], [-HW - 0.75, 0.68], [-HW - 0.9, 0.5]], openRuns, { vScale: 1 / 4 }),
  ]), railMat);
  scene.add(rails);
  {
    const posts = [], reflectors = [];
    for (const [a, b] of openRuns) for (let k = a; k < b; k += 2) {
      const i = k % N;
      for (const side of [-1, 1]) {
        posts.push([track.px[i] + track.rightX(i) * side * (HW + 1.0), track.py[i], track.pz[i] + track.rightZ(i) * side * (HW + 1.0)]);
        if (k % 8 === 0) reflectors.push([track.px[i] + track.rightX(i) * side * (HW + 0.85), track.py[i] + 0.98, track.pz[i] + track.rightZ(i) * side * (HW + 0.85), side]);
      }
    }
    const pm = new THREE.InstancedMesh(new THREE.BoxGeometry(0.16, 1.0, 0.16).translate(0, 0.5, 0), new THREE.MeshStandardMaterial({ color: 0x55585e, roughness: 0.6, metalness: 0.4 }), posts.length);
    const m = new THREE.Matrix4();
    posts.forEach((p, i) => pm.setMatrixAt(i, m.makeTranslation(p[0], p[1], p[2])));
    scene.add(pm);
    const rm = new THREE.InstancedMesh(new THREE.BoxGeometry(0.12, 0.08, 0.12), new THREE.MeshBasicMaterial({ color: 0xffffff }), reflectors.length);
    const col = new THREE.Color();
    reflectors.forEach((p, i) => { rm.setMatrixAt(i, m.makeTranslation(p[0], p[1], p[2])); rm.setColorAt(i, p[3] > 0 ? col.setRGB(3, 0.25, 0.1) : col.setRGB(3, 1.6, 0.3)); });
    scene.add(rm);
  }

  // ---------- water ----------
  const waterN = T.normalNoiseTexture(41, [8, 16, 32, 64], 2.5);
  waterN.repeat.set(220, 220);
  const waterMat = new THREE.MeshStandardMaterial({ color: 0x020711, roughness: 0.12, metalness: 0.1, normalMap: waterN, normalScale: new THREE.Vector2(0.6, 0.6) });
  addReflection(waterMat, refl, shared, 'water');
  const water = new THREE.Mesh(new THREE.PlaneGeometry(10000, 10000).rotateX(-Math.PI / 2), waterMat);
  water.position.set(0, WATER_Y, 2500);
  water.name = 'water';
  scene.add(water);

  // ---------- buildings ----------
  const buildings = []; // {x,z,rad}
  const warmParts = [], coolParts = [], crownParts = [], roofLights = [];
  const blocked = (x, z, rad) => {
    for (const b of buildings) { const dx = b.x - x, dz = b.z - z; if (dx * dx + dz * dz < (b.rad + rad) * (b.rad + rad) * 0.42) return true; }
    return false;
  };
  const clearOfRoad = (x, z, w, d, rot, margin) => {
    const c = Math.cos(rot), s = Math.sin(rot);
    for (let a = -1; a <= 1; a += 0.5) for (let b = -1; b <= 1; b += 0.5) {
      const lx = a * w / 2, lz = b * d / 2;
      const px = x + lx * c + lz * s, pz = z - lx * s + lz * c;
      const near = track.nearestCoarse(px, pz);
      if (near && near.d < HW + margin) return false;
    }
    return true;
  };
  const tints = [new THREE.Color(0.42, 0.45, 0.55), new THREE.Color(0.55, 0.48, 0.42), new THREE.Color(0.34, 0.38, 0.42), new THREE.Color(0.46, 0.46, 0.5), new THREE.Color(0.4, 0.35, 0.5)];
  const crownColors = NEON.map((c) => new THREE.Color(c).multiplyScalar(3.5));
  const addBuilding = (x, z, w, d, h, rot, baseY = 0, list = null) => {
    const tint = tints[Math.floor(r() * tints.length)];
    const parts = list ?? (r() < 0.55 ? warmParts : coolParts);
    const uo = Math.floor(r() * 16) / 16, vo = Math.floor(r() * 16) / 16;
    const geos = [buildingGeo(w, h, d, uo, vo, tint).translate(0, h / 2, 0)];
    let topY = h;
    if (h > 40 && r() < 0.55) { // setback tower
      const w2 = w * (0.55 + r() * 0.25), d2 = d * (0.55 + r() * 0.25), h2 = h * (0.15 + r() * 0.3);
      geos.push(buildingGeo(w2, h2, d2, uo + 0.25, vo, tint).translate(0, h + h2 / 2, 0));
      topY = h + h2;
      if (r() < 0.7) crownParts.push(colorize(new THREE.BoxGeometry(w2 + 0.3, 0.7, d2 + 0.3).translate(0, topY - 0.5, 0), crownColors[Math.floor(r() * crownColors.length)]).rotateY(rot).translate(x, baseY, z));
    } else if (h > 25 && r() < 0.45) {
      crownParts.push(colorize(new THREE.BoxGeometry(w + 0.3, 0.6, d + 0.3).translate(0, h - 0.6, 0), crownColors[Math.floor(r() * crownColors.length)]).rotateY(rot).translate(x, baseY, z));
    }
    if (h > 18 && r() < 0.6) geos.push(buildingGeo(3 + r() * 4, 2 + r() * 2, 3 + r() * 4, 0, 0, tint).translate((r() - 0.5) * w * 0.4, topY + 1, (r() - 0.5) * d * 0.4));
    if (topY > 55) {
      const ah = 6 + r() * 14;
      const ant = colorize(new THREE.BoxGeometry(0.4, ah, 0.4).translate(0, topY + ah / 2, 0), new THREE.Color(0.15, 0.15, 0.16));
      ant.attributes.uv.array.fill(0.003);
      geos.push(ant);
      roofLights.push(new THREE.Vector3(x, baseY + topY + ah, z));
    }
    for (const g of geos) { g.rotateY(rot); g.translate(x, baseY, z); parts.push(g); }
    buildings.push({ x, z, rad: Math.hypot(w, d) / 2 });
    return topY;
  };
  const downtown = (x, z) => Math.exp(-((x + 110) ** 2 + (z + 20) ** 2) / (2 * 260 * 260));

  // neon blade signs and facade signs
  const signTex = new Map();
  const getSign = (word, color, vertical) => {
    const k = word + color + vertical;
    if (!signTex.has(k)) signTex.set(k, new THREE.MeshBasicMaterial({ map: T.neonSign(word, color, { vertical }), color: new THREE.Color(2.4, 2.4, 2.4), side: THREE.DoubleSide }));
    return signTex.get(k);
  };
  const signs = new THREE.Group();
  scene.add(signs);

  // roadside buildings
  for (const side of [-1, 1]) {
    for (let i = 0; i < N; i += 0) {
      const step = 9 + Math.floor(r() * 7);
      i += step;
      const k = i % N;
      if (!track.city[k]) continue;
      const w = 14 + r() * 16, d = 14 + r() * 14;
      const dt = downtown(track.px[k], track.pz[k]);
      const h = 10 + r() * 22 + dt * Math.pow(r(), 1.5) * 120;
      const off = HW + 5 + 1.2 + d / 2;
      const x = track.px[k] + track.rightX(k) * side * off, z = track.pz[k] + track.rightZ(k) * side * off;
      const rot = Math.atan2(-track.tz[k], track.tx[k]);
      if (!clearOfRoad(x, z, w, d, rot, 5.6)) continue;
      if (blocked(x, z, Math.hypot(w, d) / 2)) continue;
      addBuilding(x, z, w, d, h, rot);
      // signage facing the street
      const fx = track.px[k] + track.rightX(k) * side * (HW + 5 + 1.2), fz = track.pz[k] + track.rightZ(k) * side * (HW + 5 + 1.2);
      if (r() < 0.55) {
        const color = NEON[Math.floor(r() * NEON.length)], word = WORDS[Math.floor(r() * WORDS.length)];
        const mat = getSign(word, color, true);
        const along = (r() < 0.5 ? -1 : 1) * (w / 2 - 1.5);
        const sh = 7 + r() * 4, sw = sh / 4;
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), mat);
        plane.position.set(fx + track.tx[k] * along - track.rightX(k) * side * 1.6, Math.max(sh / 2 + 3, Math.min(h - sh / 2 - 1, 5 + sh / 2 + r() * 4)), fz + track.tz[k] * along - track.rightZ(k) * side * 1.6);
        plane.rotation.y = Math.atan2(track.tx[k], track.tz[k]); // blade sign: readable along the street
        signs.add(plane);
      }
      if (r() < 0.45) {
        const color = NEON[Math.floor(r() * NEON.length)], word = WORDS[Math.floor(r() * WORDS.length)];
        const sw = Math.min(w - 3, 9 + r() * 5), sh = sw * 0.31;
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), getSign(word, color, false));
        plane.position.set(fx - track.rightX(k) * side * 0.15, 4.2 + r() * 2, fz - track.rightZ(k) * side * 0.15);
        plane.rotation.y = Math.atan2(-track.rightX(k) * side, -track.rightZ(k) * side);
        signs.add(plane);
      }
    }
  }
  // fill the blocks behind
  for (let x = CITY.x0 - 60; x < CITY.x1 + 60; x += 30) for (let z = CITY.z0 - 60; z < CITY.z1 + 30; z += 30) {
    if (r() < 0.12) continue;
    const px = x + (r() - 0.5) * 14, pz = z + (r() - 0.5) * 14;
    const near = track.nearestCoarse(px, pz);
    const rot = near ? Math.atan2(-track.tz[near.i], track.tx[near.i]) : 0;
    const w = 14 + r() * 16, d = 14 + r() * 16;
    if (!clearOfRoad(px, pz, w, d, rot, 7)) continue;
    if (blocked(px, pz, Math.hypot(w, d) / 2)) continue;
    if (terrain.height(px, pz) > 1.5) continue;
    const dt = downtown(px, pz);
    const h = 12 + r() * 26 + dt * Math.pow(r(), 1.3) * 170;
    addBuilding(px, pz, w, d, h, rot);
  }
  // skyline across the bay
  const farWarm = [], farCool = [];
  for (let x = -1500; x < 1500; x += 34) for (let z = 1270; z < 1560; z += 34) {
    if (r() < 0.3) continue;
    const c = Math.exp(-((x - 250) ** 2) / (2 * 380 * 380));
    const h = 15 + r() * 40 + c * Math.pow(r(), 1.2) * 230;
    const w = 16 + r() * 18, d = 16 + r() * 18;
    addBuilding(x + (r() - 0.5) * 10, z + (r() - 0.5) * 10, w, d, h, (r() - 0.5) * 0.3, 1.5, r() < 0.5 ? farWarm : farCool);
  }

  const winWarm = T.windowTexture(5, true), winCool = T.windowTexture(9, false);
  const bMat = (tex, ei) => new THREE.MeshStandardMaterial({ map: tex, emissiveMap: tex, emissive: 0xffffff, emissiveIntensity: ei, vertexColors: true, roughness: 0.55, metalness: 0.35 });
  const mats = [bMat(winWarm, 1.05), bMat(winCool, 1.05)];
  const farMat = [bMat(winWarm, 2.6), bMat(winCool, 2.6)];
  for (const [parts, mat] of [[warmParts, mats[0]], [coolParts, mats[1]], [farWarm, farMat[0]], [farCool, farMat[1]]]) {
    if (!parts.length) continue;
    const mesh = new THREE.Mesh(mergeGeometries(parts.map((g) => g.index ? g.toNonIndexed() : g)), mat);
    scene.add(mesh);
  }
  if (crownParts.length) {
    const crowns = new THREE.Mesh(mergeGeometries(crownParts.map((g) => { g.deleteAttribute('uv'); g.deleteAttribute('normal'); return g.toNonIndexed(); })), new THREE.MeshBasicMaterial({ vertexColors: true }));
    scene.add(crowns);
  }
  // blinking aircraft-warning lights
  const blinkMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(6, 0.3, 0.2) });
  const blinks = new THREE.InstancedMesh(new THREE.SphereGeometry(0.7, 8, 6), blinkMat, roofLights.length);
  roofLights.forEach((p, i) => blinks.setMatrixAt(i, new THREE.Matrix4().makeTranslation(p.x, p.y, p.z)));
  scene.add(blinks);

  // ---------- street lamps ----------
  const lamps = []; // {x,y,z, hx,hz, rot, warm}
  for (const [a, b] of cityRuns) for (let k = a + 4; k < b - 2; k += 17) {
    const i = k % N, side = (Math.floor(k / 17) % 2) ? 1 : -1;
    lamps.push(mkLamp(i, side, HW + 1.2, 8.6, 'city'));
  }
  for (const [a, b] of openRuns) for (let k = a + 10; k < b - 4; k += 38) {
    const i = k % N;
    const side = track.curv[i] > 0.002 ? -1 : track.curv[i] < -0.002 ? 1 : ((k / 38) % 2 ? 1 : -1);
    lamps.push(mkLamp(i, side, HW + 1.6, 10, 'open'));
  }
  function mkLamp(i, side, lat, height, kind) {
    const x = track.px[i] + track.rightX(i) * side * lat, z = track.pz[i] + track.rightZ(i) * side * lat;
    const dx = -track.rightX(i) * side, dz = -track.rightZ(i) * side; // toward road
    const arm = 2.6;
    return { x, y: track.py[i] + (kind === 'city' ? 0.22 : 0), z, h: height, hx: x + dx * arm, hz: z + dz * arm, rot: Math.atan2(-dz, dx), kind };
  }
  {
    const poleGeo = mergeGeometries([
      new THREE.CylinderGeometry(0.11, 0.17, 1, 8).translate(0, 0.5, 0),
    ]);
    const armGeo = new THREE.BoxGeometry(2.8, 0.12, 0.14).translate(1.3, 0, 0);
    const headGeo = new THREE.BoxGeometry(0.9, 0.12, 0.38);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x2a2c33, roughness: 0.5, metalness: 0.6 });
    const poles = new THREE.InstancedMesh(poleGeo, poleMat, lamps.length);
    const arms = new THREE.InstancedMesh(armGeo, poleMat, lamps.length);
    const heads = new THREE.InstancedMesh(headGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }), lamps.length);
    const glowTex = T.glowTexture();
    const pools = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, color: 0xffffff, polygonOffset: true, polygonOffsetFactor: -2 }), lamps.length);
    // built at real proportions and scaled uniformly, so the normals used for the soft edges stay correct
    const coneGeo = new THREE.ConeGeometry(5.2, 8.5, 28, 1, true).translate(0, -4.25, 0);
    const coneMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uRain: shared.uWet },
      vertexShader: /* glsl */`
        varying float vH; varying float vF; varying vec3 vCol;
        void main() {
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          vec3 n = normalize(mat3(modelViewMatrix * instanceMatrix) * normal);
          vF = abs(dot(n, normalize(-mv.xyz)));
          vH = -position.y / 8.5;
          vCol = instanceColor;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */`
        varying float vH; varying float vF; varying vec3 vCol; uniform float uRain;
        void main() {
          float a = pow(clamp(1.0 - vH, 0.0, 1.0), 1.6) * pow(clamp(vF, 0.0, 1.0), 2.0) * (0.05 + 0.08 * uRain);
          gl_FragColor = vec4(vCol * a, 1.0);
        }`,
    });
    const cones = new THREE.InstancedMesh(coneGeo, coneMat, lamps.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    const c = new THREE.Color();
    lamps.forEach((L, i) => {
      q.setFromAxisAngle(up, L.rot);
      poles.setMatrixAt(i, m.compose(p.set(L.x, L.y, L.z), q, s.set(1, L.h, 1)));
      arms.setMatrixAt(i, m.compose(p.set(L.x, L.y + L.h - 0.1, L.z), q, s.set(1, 1, 1)));
      heads.setMatrixAt(i, m.compose(p.set(L.hx, L.y + L.h - 0.22, L.hz), q, s.set(1, 1, 1)));
      const warm = L.kind === 'open' ? c.setRGB(1.0, 0.5, 0.16) : (i % 5 === 0 ? c.setRGB(0.75, 0.85, 1.0) : c.setRGB(1.0, 0.72, 0.42));
      heads.setColorAt(i, c.clone().multiplyScalar(9));
      const roadY = track.project(L.hx, L.hz, -1).y;
      pools.setMatrixAt(i, m.compose(p.set(L.hx, roadY + 0.06, L.hz), q.identity(), s.set(22, 1, 22)));
      pools.setColorAt(i, c.clone().multiplyScalar(0.55));
      const coneH = L.y + L.h - 0.3 - roadY;
      cones.setMatrixAt(i, m.compose(p.set(L.hx, L.y + L.h - 0.3, L.hz), q.identity(), s.setScalar(coneH / 8.5)));
      cones.setColorAt(i, c);
    });
    scene.add(poles, arms, heads, pools, cones);
    world.hideInReflection.push(pools);
  }

  // ---------- palms along the waterfront ----------
  {
    const trunkCurve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.3, 3, 0), new THREE.Vector3(1.1, 6.5, 0), new THREE.Vector3(2.2, 9.5, 0)]);
    const parts = [colorize(new THREE.TubeGeometry(trunkCurve, 10, 0.24, 6), new THREE.Color(0.16, 0.12, 0.09))];
    for (let f = 0; f < 8; f++) {
      const pts = [], a = (f / 8) * Math.PI * 2 + 0.3;
      const fr = [];
      for (let k = 0; k <= 8; k++) {
        const t = k / 8, len = 4.2 * t, droop = -2.2 * t * t;
        const w = Math.sin(Math.PI * t) * 0.65;
        const cx = Math.cos(a) * len, cz = Math.sin(a) * len;
        const px = -Math.sin(a) * w, pz = Math.cos(a) * w;
        fr.push(cx + px, droop + t * 0.6, cz + pz, cx - px, droop + t * 0.6, cz - pz);
      }
      const idx = [];
      for (let k = 0; k < 8; k++) { const v = k * 2; idx.push(v, v + 1, v + 2, v + 1, v + 3, v + 2); }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(fr, 3));
      g.setIndex(idx); g.computeVertexNormals();
      g.translate(2.2, 9.5, 0);
      parts.push(colorize(g, new THREE.Color(0.05, 0.1, 0.05)));
      void pts;
    }
    const geo = mergeGeometries(parts.map((g) => { g.deleteAttribute('uv'); return g.index ? g.toNonIndexed() : g; }));
    const palmSpots = [];
    for (let i = 0; i < N; i += 11) {
      if (track.city[i] || track.pz[i] < 250 || track.py[i] > 6) continue;
      for (const side of [-1, 1]) {
        if (r() < 0.25) continue;
        const lat = side * (HW + 3.5 + r() * 2);
        palmSpots.push([track.px[i] + track.rightX(i) * lat, track.py[i] - 0.3, track.pz[i] + track.rightZ(i) * lat]);
      }
    }
    // a few along the avenue median-side sidewalks downtown
    for (let i = 0; i < N; i += 13) {
      if (!track.city[i] || track.pz[i] < 140 || track.px[i] > 200) continue;
      const side = (i / 13) % 2 ? 1 : -1;
      const lat = side * (HW + 3.6);
      palmSpots.push([track.px[i] + track.rightX(i) * lat, 0.2, track.pz[i] + track.rightZ(i) * lat]);
    }
    const palms = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, side: THREE.DoubleSide }), palmSpots.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0);
    palmSpots.forEach((p, i) => {
      const sc = 0.85 + r() * 0.45;
      q.setFromAxisAngle(up, r() * Math.PI * 2);
      palms.setMatrixAt(i, m.compose(new THREE.Vector3(...p), q, new THREE.Vector3(sc, sc, sc)));
    });
    scene.add(palms);
  }

  // ---------- start / finish gantry ----------
  {
    const i = track.startIdx;
    const g = new THREE.Group();
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x1c1d22, roughness: 0.4, metalness: 0.7 });
    for (const side of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.8, 8.5, 0.8), pillarMat);
      p.position.set(side * (HW + 1.6), 4.25, 0);
      g.add(p);
    }
    const beam = new THREE.Mesh(new THREE.BoxGeometry(2 * HW + 4, 1.6, 0.9), pillarMat);
    beam.position.y = 8.2; g.add(beam);
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(14, 1.35), new THREE.MeshBasicMaterial({ map: T.neonSign('CARBON NIGHTS', '#00e5ff', { font: '700 100px "Orbitron", sans-serif' }), color: new THREE.Color(2.5, 2.5, 2.5) }));
    banner.position.set(0, 8.2, -0.47); banner.rotation.y = Math.PI; g.add(banner);
    const banner2 = banner.clone(); banner2.position.z = 0.47; banner2.rotation.y = 0; g.add(banner2);
    const stripMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 1.2, 0.2) });
    for (const y of [7.35, 9.05]) { const s = new THREE.Mesh(new THREE.BoxGeometry(2 * HW + 4, 0.08, 1.0), stripMat); s.position.y = y; g.add(s); }
    g.position.set(track.px[i], track.py[i], track.pz[i]);
    g.rotation.y = Math.atan2(track.tx[i], track.tz[i]);
    scene.add(g);
    const chk = T.checkerTexture(); chk.wrapS = chk.wrapT = THREE.RepeatWrapping;
    const line = new THREE.Mesh(track.sweep([[-HW, 0.03], [HW, 0.03]], [[i, i + 1]], { uvAcross: [0, 1], vScale: 0.5 }), new THREE.MeshStandardMaterial({ map: chk, roughness: 0.5 }));
    scene.add(line);
  }

  // ---------- roadside billboards on the open road ----------
  {
    const ads = [['NOS', '#3dfcff'], ['DRIFT KINGS', '#ff2bd6'], ['CANYON', '#ffb000'], ['PALM BAY', '#ff3355'], ['TUNER CREW', '#7cff4f'], ['MIDNIGHT', '#b14bff']];
    let a = 0;
    for (const [s, e] of openRuns) for (let k = s + 60; k < e - 30; k += 230) {
      const i = k % N, side = track.curv[i] > 0 ? -1 : 1;
      const lat = side * (HW + 9);
      const [word, color] = ads[a++ % ads.length];
      const x = track.px[i] + track.rightX(i) * lat, z = track.pz[i] + track.rightZ(i) * lat, y = track.py[i];
      const b = new THREE.Group();
      const board = new THREE.Mesh(new THREE.PlaneGeometry(12, 3.75), new THREE.MeshBasicMaterial({ map: T.neonSign(word, color), color: new THREE.Color(2, 2, 2), side: THREE.DoubleSide }));
      board.position.y = 6.5; b.add(board);
      for (const px of [-4, 4]) { const post = new THREE.Mesh(new THREE.BoxGeometry(0.3, 5, 0.3), new THREE.MeshStandardMaterial({ color: 0x222228 })); post.position.set(px, 2.5, 0); b.add(post); }
      b.position.set(x, y, z);
      // face oncoming traffic, angled slightly toward the road
      b.rotation.y = Math.atan2(-track.tx[i], -track.tz[i]) + side * 0.5;
      scene.add(b);
    }
  }

  // ---------- suspension bridge across the bay ----------
  {
    const bx = -330, z0 = 330, z1 = 1300, deckY = 16, towers = [600, 1080], th = 110;
    const g = new THREE.Group();
    const steel = new THREE.MeshStandardMaterial({ color: 0x3a2a30, roughness: 0.6, metalness: 0.4 });
    const deck = new THREE.Mesh(new THREE.BoxGeometry(26, 2.4, z1 - z0), steel);
    deck.position.set(bx, deckY, (z0 + z1) / 2); g.add(deck);
    for (const tz of towers) for (const sx of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(3.2, th + 20, 3.2), steel);
      leg.position.set(bx + sx * 12, (th + 20) / 2 - 18, tz); g.add(leg);
      for (const y of [deckY + 30, th - 6]) { const beam = new THREE.Mesh(new THREE.BoxGeometry(26, 3, 3), steel); beam.position.set(bx, y, tz); g.add(beam); }
    }
    for (const tz of towers) { const pier = new THREE.Mesh(new THREE.BoxGeometry(34, 30, 14), steel); pier.position.set(bx, -10, tz); g.add(pier); }
    // cable + deck lights as glowing points
    const pts = [], cols = [];
    const cable = (z) => {
      const [a, b] = towers;
      if (z < a) { const t = (z - z0) / (a - z0); return deckY + 3 + (th - deckY - 3) * t * t; }
      if (z > b) { const t = (z1 - z) / (z1 - b); return deckY + 3 + (th - deckY - 3) * t * t; }
      const t = (z - a) / (b - a); return deckY + 4 + (th - deckY - 4) * Math.pow(2 * t - 1, 2);
    };
    const cableGeo = [];
    for (const sx of [-1, 1]) {
      const line = [];
      for (let z = z0; z <= z1; z += 6) {
        const y = cable(z);
        line.push(new THREE.Vector3(bx + sx * 12, y, z));
        if ((z - z0) % 18 === 0) { pts.push(bx + sx * 12, y, z); cols.push(1.4, 1.5, 2.2); }
        if ((z - z0) % 12 === 0) { pts.push(bx + sx * 13, deckY + 1.6, z); cols.push(2.4, 1.3, 0.5); }
        if ((z - z0) % 24 === 0) cableGeo.push(new THREE.BoxGeometry(0.15, Math.max(0.1, y - deckY), 0.15).translate(bx + sx * 12, (y + deckY) / 2, z));
      }
      cableGeo.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(line), 160, 0.5, 5));
    }
    for (const tz of towers) for (const sx of [-1, 1]) { pts.push(bx + sx * 12, th + 2.2, tz); cols.push(6, 0.3, 0.2); }
    const cables = new THREE.Mesh(mergeGeometries(cableGeo.map((c) => { c.deleteAttribute('uv'); return c.index ? c.toNonIndexed() : c; })), steel);
    g.add(cables);
    const pg = new THREE.BufferGeometry();
    pg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    pg.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    const lights = new THREE.Points(pg, new THREE.PointsMaterial({ size: 3.2, map: T.glowTexture(), vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    g.add(lights);
    scene.add(g);
  }

  world.update = (t) => {
    blinkMat.color.setRGB(6 * (Math.sin(t * 3) > 0.6 ? 1 : 0.08), 0.3, 0.2);
  };
  world.hideInReflection.push(road, shoulders, walks, water);
  return world;
}
