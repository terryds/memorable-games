import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { HW } from './track.js';
import { fbm, smooth, VOLCANO } from './terrain.js';
import * as T from './textures.js';

export const SUN_DIR = new THREE.Vector3(-0.45, 0.75, 0.48).normalize();
const HORIZON = new THREE.Color('#bfe6ff');

function colorize(geo, color) {
  const n = geo.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = color.r; a[i * 3 + 1] = color.g; a[i * 3 + 2] = color.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3));
  return geo;
}
const prep = (g) => { if (g.attributes.uv) g.deleteAttribute('uv'); return g.index ? g.toNonIndexed() : g; };

export function buildWorld(scene, track, terrain, gradient) {
  const r = T.rng(99);
  const N = track.N;
  const world = { updaters: [] };
  const toon = (opts) => new THREE.MeshToonMaterial({ gradientMap: gradient, ...opts });

  scene.background = HORIZON.clone();
  scene.fog = new THREE.Fog(HORIZON, 380, 2300);

  // ---------- sky ----------
  const sky = new THREE.Mesh(new THREE.SphereGeometry(4000, 32, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { uSun: { value: SUN_DIR } },
    vertexShader: 'varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }',
    fragmentShader: /* glsl */`
      varying vec3 vD; uniform vec3 uSun;
      void main(){
        vec3 d = normalize(vD); float h = max(d.y, 0.0);
        vec3 col = mix(vec3(0.75, 0.9, 1.0), vec3(0.22, 0.52, 0.96), pow(h, 0.55));
        float s = max(dot(d, uSun), 0.0);
        col += vec3(1.0, 0.9, 0.6) * (pow(s, 600.0) * 4.0 + pow(s, 12.0) * 0.25);
        if (d.y < 0.0) col = vec3(0.75, 0.9, 1.0);
        gl_FragColor = vec4(col, 1.0);
      }`,
  }));
  sky.frustumCulled = false; sky.renderOrder = -10;
  scene.add(sky);
  world.sky = sky;
  // clouds
  const clouds = new THREE.Group();
  const cloudTex = [T.cloudTexture(1), T.cloudTexture(2), T.cloudTexture(3)];
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2 + r() * 0.2, d = 1500 + r() * 900;
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: cloudTex[i % 3], fog: false, depthWrite: false, transparent: true }));
    const w = 320 + r() * 380;
    s.scale.set(w, w / 2, 1);
    s.position.set(Math.cos(a) * d, 140 + r() * 320, Math.sin(a) * d);
    clouds.add(s);
  }
  scene.add(clouds);
  world.updaters.push((t) => { clouds.rotation.y = t * 0.004; });

  // ---------- ocean ----------
  const water = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000).rotateX(-Math.PI / 2), new THREE.ShaderMaterial({
    fog: true,
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uDepth: { value: null }, uSize: { value: terrain.SIZE }, uTime: { value: 0 }, uSun: { value: SUN_DIR } }]),
    vertexShader: /* glsl */`
      varying vec3 vW;
      #include <fog_pars_vertex>
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */`
      varying vec3 vW; uniform sampler2D uDepth; uniform float uSize, uTime; uniform vec3 uSun;
      #include <fog_pars_fragment>
      void main(){
        vec2 uv = (vW.xz + uSize * 0.5) / uSize;
        float h = (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) ? -10.0 : texture2D(uDepth, uv).r * 20.0 - 10.0;
        float depth = max(0.0, -h);
        vec3 col = mix(vec3(0.3, 0.92, 0.86), vec3(0.04, 0.62, 0.82), smoothstep(0.0, 3.5, depth));
        col = mix(col, vec3(0.02, 0.3, 0.62), smoothstep(4.0, 10.0, depth));
        float w1 = sin(vW.x * 0.15 + uTime * 1.2) * cos(vW.z * 0.13 - uTime * 0.9);
        float w2 = sin((vW.x + vW.z) * 0.31 + uTime * 1.7);
        vec3 n = normalize(vec3(w1 * 0.16 + w2 * 0.08, 1.0, w2 * 0.12 - w1 * 0.07));
        vec3 V = normalize(cameraPosition - vW);
        float spec = pow(max(dot(n, normalize(V + uSun)), 0.0), 220.0) * 3.0;
        float edge = 1.0 - smoothstep(0.0, 1.0, depth);
        float band = step(0.55, fract(depth * 0.9 - uTime * 0.3)) * (1.0 - smoothstep(0.6, 2.6, depth)) * 0.55;
        col = mix(col, vec3(1.0), clamp(edge * 0.85 + band, 0.0, 1.0));
        col = mix(col, vec3(0.7, 0.88, 1.0), pow(1.0 - max(V.y, 0.0), 4.0) * 0.4);
        col += spec;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,
  }));
  water.material.uniforms.uDepth.value = terrain.depthTex;
  scene.add(water);
  world.updaters.push((t) => { water.material.uniforms.uTime.value = t; });

  // ---------- road ----------
  const roadTex = T.dirtRoadTexture();
  const plain = track.runs((i) => !(track.flags[i] & (1 | 8)));
  const road = new THREE.Mesh(track.sweep([[-HW, 0], [HW, 0]], plain, { uvAcross: [0, 1], vScale: 1 / 24 }), new THREE.MeshLambertMaterial({ map: roadTex }));
  road.receiveShadow = true;
  scene.add(road);
  // kerbs on the bends
  const kerbRuns = track.runs((i) => Math.abs(track.curv[i]) > 0.011 && !(track.flags[i] & (1 | 8 | 4)));
  const kerbTex = T.kerbTexture();
  const kerbs = new THREE.Mesh(mergeGeometries([
    track.sweep([[-HW - 0.9, 0.02], [-HW + 0.7, 0.07]], kerbRuns, { uvAcross: [0, 1], vScale: 1 / 6 }),
    track.sweep([[HW - 0.7, 0.07], [HW + 0.9, 0.02]], kerbRuns, { uvAcross: [0, 1], vScale: 1 / 6 }),
  ]), new THREE.MeshLambertMaterial({ map: kerbTex }));
  kerbs.receiveShadow = true;
  scene.add(kerbs);

  // low striped barriers along the open road
  const barRuns = track.runs((i) => !(track.flags[i] & (1 | 8 | 4)));
  const barTex = T.kerbTexture();
  const barrier = new THREE.Mesh(mergeGeometries([
    track.sweep([[-HW - 1.4, -0.4], [-HW - 1.4, 0.75], [-HW - 1.1, 0.95], [-HW - 0.8, 0.75], [-HW - 0.8, -0.4]], barRuns, { uvAcross: [0, 0.3, 0.5, 0.7, 1], vScale: 1 / 8 }),
    track.sweep([[HW + 0.8, -0.4], [HW + 0.8, 0.75], [HW + 1.1, 0.95], [HW + 1.4, 0.75], [HW + 1.4, -0.4]], barRuns, { uvAcross: [0, 0.3, 0.5, 0.7, 1], vScale: 1 / 8 }),
  ]), toon({ map: barTex }));
  barrier.castShadow = true; barrier.receiveShadow = true;
  scene.add(barrier);

  // ---------- rope bridge ----------
  const bridgeRuns = track.runs((i) => (track.flags[i] & 8) !== 0);
  const plank = T.plankTexture();
  const deck = new THREE.Mesh(track.sweep([[-HW, 0.05], [HW, 0.05], [HW, -0.6], [-HW, -0.6], [-HW, 0.05]], bridgeRuns, { uvAcross: [0, 1, 1.05, 1.1, 1.15], vScale: 1 / 6 }), new THREE.MeshLambertMaterial({ map: plank }));
  deck.castShadow = true; deck.receiveShadow = true;
  scene.add(deck);
  const ropeMat = toon({ color: '#c99a5b' });
  const ropes = new THREE.Mesh(mergeGeometries([
    track.sweep([[-HW - 0.2, 1.05], [-HW - 0.2, 1.2]], bridgeRuns), track.sweep([[HW + 0.2, 1.05], [HW + 0.2, 1.2]], bridgeRuns),
    track.sweep([[-HW - 0.2, 0.55], [-HW - 0.2, 0.62]], bridgeRuns), track.sweep([[HW + 0.2, 0.55], [HW + 0.2, 0.62]], bridgeRuns),
  ]), new THREE.MeshLambertMaterial({ color: '#c99a5b', side: THREE.DoubleSide }));
  scene.add(ropes);
  {
    const posts = [], stilts = [];
    for (const [a, b] of bridgeRuns) for (let k = a; k <= b; k += 2) {
      const i = k % N;
      for (const s of [-1, 1]) {
        posts.push([track.px[i] + track.rightX(i) * s * (HW + 0.2), track.py[i], track.pz[i] + track.rightZ(i) * s * (HW + 0.2)]);
        if (k % 4 === 0) stilts.push([track.px[i] + track.rightX(i) * s * (HW - 1), track.py[i], track.pz[i] + track.rightZ(i) * s * (HW - 1)]);
      }
    }
    const m = new THREE.Matrix4();
    const pm = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.12, 0.14, 1.5, 6).translate(0, 0.6, 0), ropeMat, posts.length);
    posts.forEach((p, i) => pm.setMatrixAt(i, m.makeTranslation(p[0], p[1], p[2])));
    const sm = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.3, 0.35, 1, 7).translate(0, -0.5, 0), toon({ color: '#7a5230' }), stilts.length);
    stilts.forEach((p, i) => sm.setMatrixAt(i, m.compose(new THREE.Vector3(p[0], p[1] - 0.5, p[2]), new THREE.Quaternion(), new THREE.Vector3(1, p[1] + 5, 1))));
    pm.castShadow = sm.castShadow = true;
    scene.add(pm, sm);
  }

  // ---------- temple tunnel ----------
  const tunRuns = track.runs((i) => (track.flags[i] & 4) !== 0);
  {
    const R = HW + 1.6, prof = [];
    for (let k = 0; k <= 14; k++) { const a = Math.PI * (k / 14); prof.push([-Math.cos(a) * R, Math.sin(a) * 8.5 - 0.2]); }
    const rock = T.rockTexture();
    const arch = new THREE.Mesh(track.sweep(prof, tunRuns, { vScale: 1 / 10 }), new THREE.MeshLambertMaterial({ map: rock, color: '#b59c7a', side: THREE.DoubleSide }));
    arch.castShadow = true; arch.receiveShadow = true;
    scene.add(arch);
    // temple gates at both ends + torches inside
    const stone = toon({ color: '#b8a27c' }), dark = toon({ color: '#5c4a36' });
    const torchMat = new THREE.SpriteMaterial({ map: T.glowTexture(), color: new THREE.Color(3, 1.5, 0.4), blending: THREE.AdditiveBlending, depthWrite: false });
    for (const [a, b] of tunRuns) {
      for (const i of [a % N, b % N]) {
        const g = new THREE.Group();
        for (const s of [-1, 1]) {
          const p = new THREE.Mesh(new THREE.BoxGeometry(2.6, 11, 2.6), stone); p.position.set(s * (HW + 2.4), 5.5, 0); g.add(p);
          const cap = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1, 3.4), dark); cap.position.set(s * (HW + 2.4), 11.3, 0); g.add(cap);
          const eye = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.2), toon({ color: '#ffde3b', emissive: '#ff9f1c', emissiveIntensity: 0.6 }));
          for (const e of [-0.6, 0.6]) { const m2 = eye.clone(); m2.position.set(s * (HW + 2.4) + e, 8.6, 1.35); g.add(m2); }
        }
        const lintel = new THREE.Mesh(new THREE.BoxGeometry(2 * HW + 8, 2.4, 3), stone); lintel.position.y = 12.4; g.add(lintel);
        const ban = new THREE.Mesh(new THREE.PlaneGeometry(14, 2), new THREE.MeshBasicMaterial({ map: T.bannerTexture('TEMPLE RUN', '#2f9a3c') }));
        ban.position.set(0, 12.4, 1.55); g.add(ban);
        const ban2 = ban.clone(); ban2.position.z = -1.55; ban2.rotation.y = Math.PI; g.add(ban2);
        g.position.set(track.px[i], track.py[i], track.pz[i]);
        g.rotation.y = Math.atan2(track.tx[i], track.tz[i]);
        g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
        scene.add(g);
      }
      for (let k = a + 4; k < b - 2; k += 7) {
        const i = k % N;
        for (const s of [-1, 1]) {
          const t = new THREE.Sprite(torchMat); t.scale.set(1.5, 2, 1);
          t.position.set(track.px[i] + track.rightX(i) * s * (HW - 0.2), track.py[i] + 2.6, track.pz[i] + track.rightZ(i) * s * (HW - 0.2));
          scene.add(t);
        }
      }
    }
  }

  // ---------- start arch ----------
  {
    const i = (track.startIdx + 8) % N;
    const g = new THREE.Group();
    const bamboo = toon({ color: '#d9c06a' });
    for (const s of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 10, 10), bamboo); p.position.set(s * (HW + 1.2), 5, 0); g.add(p);
      for (let y = 1.5; y < 10; y += 2) { const ring = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.09, 6, 14), toon({ color: '#9a8340' })); ring.rotation.x = Math.PI / 2; ring.position.set(s * (HW + 1.2), y, 0); g.add(ring); }
      const tiki = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.2, 1.6), toon({ color: '#8b5a2b' })); tiki.position.set(s * (HW + 1.2), 11, 0); g.add(tiki);
    }
    const ban = new THREE.Mesh(new THREE.PlaneGeometry(2 * HW + 2, 2.6), new THREE.MeshBasicMaterial({ map: T.bannerTexture('TIKI KART RALLY'), side: THREE.DoubleSide }));
    ban.position.y = 8.6; g.add(ban);
    g.position.set(track.px[i], track.py[i], track.pz[i]);
    g.rotation.y = Math.atan2(track.tx[i], track.tz[i]);
    g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    scene.add(g);
    const chk = new THREE.CanvasTexture((() => { const [c, x] = T.canvas(128, 32); for (let a = 0; a < 16; a++) for (let b = 0; b < 4; b++) { x.fillStyle = (a + b) % 2 ? '#111' : '#fff'; x.fillRect(a * 8, b * 8, 8, 8); } return c; })());
    chk.colorSpace = THREE.SRGBColorSpace; chk.magFilter = THREE.NearestFilter;
    const line = new THREE.Mesh(track.sweep([[-HW, 0.04], [HW, 0.04]], [[i, i + 1]], { uvAcross: [0, 1], vScale: 0.5 }), new THREE.MeshLambertMaterial({ map: chk }));
    scene.add(line);
    world.finishIdx = i;
  }

  // ---------- boost pads ----------
  {
    const tex = T.boostPadTexture(); tex.repeat.set(1, 1);
    const mat = new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(1.6, 1.6, 1.6) });
    world.pads = [];
    for (const { i, lat } of track.pads) {
      const pad = new THREE.Mesh(track.sweep([[lat - 2.6, 0.06], [lat + 2.6, 0.06]], [[i, i + 3]], { uvAcross: [0, 1], vScale: 1 / 6 }), mat);
      scene.add(pad);
      world.pads.push({ i, lat });
    }
    world.updaters.push((t) => { tex.offset.y = -t * 1.5; });
  }

  // ---------- waterfall into the ravine ----------
  {
    const rv = terrain.rav, side = 95;
    const rx = -rv.tz, rz = rv.tx;
    const x = rv.x + rx * side, z = rv.z + rz * side;
    const top = Math.max(terrain.height(x + rx * 12, z + rz * 12), 20);
    const tex = T.waterfallTexture(); tex.repeat.set(3, 2);
    const fall = new THREE.Mesh(new THREE.PlaneGeometry(22, top + 3), new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.92, color: new THREE.Color(1.1, 1.1, 1.1) }));
    fall.position.set(x, (top + 3) / 2 - 1.5, z);
    fall.rotation.y = Math.atan2(-rx, -rz);
    scene.add(fall);
    world.updaters.push((t) => { tex.offset.y = t * 1.2; });
    world.waterfall = new THREE.Vector3(x, 0.5, z);
  }

  // ---------- vegetation ----------
  const nearRoad = (x, z, m) => { const n = track.nearestCoarse(x, z); return n && n.d < HW + m; };
  const place = (count, tries, test) => {
    const out = [];
    for (let k = 0; k < tries && out.length < count; k++) {
      let x, z;
      if (r() < 0.65) {
        const i = Math.floor(r() * N), s = r() < 0.5 ? -1 : 1, off = HW + 4 + r() * 70;
        x = track.px[i] + track.rightX(i) * s * off + (r() - 0.5) * 10; z = track.pz[i] + track.rightZ(i) * s * off + (r() - 0.5) * 10;
      } else { x = (r() - 0.5) * 1000; z = (r() - 0.5) * 760 - 20; }
      const h = terrain.height(x, z);
      if (test(x, z, h)) out.push([x, h, z]);
    }
    return out;
  };
  const instance = (geo, mat, spots, scaleFn) => {
    const im = new THREE.InstancedMesh(geo, mat, spots.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0);
    spots.forEach((p, i) => { const s = scaleFn(); q.setFromAxisAngle(up, r() * 6.28); im.setMatrixAt(i, m.compose(new THREE.Vector3(p[0], p[1] - 0.2, p[2]), q, new THREE.Vector3(s, s * (0.85 + r() * 0.3), s))); });
    im.castShadow = true; im.receiveShadow = true;
    scene.add(im);
    return im;
  };
  // palms
  {
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.4, 3, 0), new THREE.Vector3(1.3, 6.5, 0), new THREE.Vector3(2.4, 9.4, 0)]);
    const parts = [colorize(new THREE.TubeGeometry(curve, 10, 0.3, 7), new THREE.Color('#a8784a'))];
    for (let f = 0; f < 8; f++) {
      const a = (f / 8) * Math.PI * 2 + 0.2, fr = [];
      for (let k = 0; k <= 8; k++) {
        const t = k / 8, len = 4.8 * t, droop = -2.4 * t * t + t * 0.8, w = Math.sin(Math.PI * t) * 0.9;
        const cx = Math.cos(a) * len, cz = Math.sin(a) * len, px = -Math.sin(a) * w, pz = Math.cos(a) * w;
        fr.push(cx + px, droop, cz + pz, cx - px, droop, cz - pz);
      }
      const idx = []; for (let k = 0; k < 8; k++) { const v = k * 2; idx.push(v, v + 1, v + 2, v + 1, v + 3, v + 2); }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(fr, 3)); g.setIndex(idx); g.computeVertexNormals();
      g.translate(2.4, 9.4, 0);
      parts.push(colorize(g, new THREE.Color(f % 2 ? '#3fae3a' : '#55c94a')));
    }
    for (let c = 0; c < 3; c++) parts.push(colorize(new THREE.SphereGeometry(0.32, 6, 5).translate(2.2 + (c - 1) * 0.35, 9.0, (c % 2) * 0.3), new THREE.Color('#6b4a22')));
    const geo = mergeGeometries(parts.map(prep));
    const spots = place(320, 9000, (x, z, h) => h > 0.6 && h < 7 && !nearRoad(x, z, 3) && terrain.slope(x, z) < 0.5);
    instance(geo, toon({ vertexColors: true, side: THREE.DoubleSide }), spots, () => 0.8 + r() * 0.5);
  }
  // jungle trees
  {
    const parts = [colorize(new THREE.CylinderGeometry(0.35, 0.55, 6, 7).translate(0, 3, 0), new THREE.Color('#7b5532'))];
    const greens = ['#2f9a3c', '#3fb24a', '#279032', '#4cc257'].map((c) => new THREE.Color(c));
    for (let b = 0; b < 4; b++) parts.push(colorize(new THREE.IcosahedronGeometry(2.6 - b * 0.25, 0).translate((b % 2 - 0.5) * 2, 6.5 + b * 1.2, (b > 1 ? 1 : -1) * 1.2), greens[b]));
    const geo = mergeGeometries(parts.map(prep));
    const spots = place(700, 14000, (x, z, h) => h > 5 && h < 85 && !nearRoad(x, z, 6) && terrain.slope(x, z) < 0.65 && Math.hypot(x - VOLCANO.x, z - VOLCANO.z) > 95);
    instance(geo, toon({ vertexColors: true, }), spots, () => 0.8 + r() * 0.8);
  }
  // bushes & rocks near the road
  {
    const bush = mergeGeometries([0, 1, 2].map((k) => prep(colorize(new THREE.IcosahedronGeometry(1.1 - k * 0.15, 0).translate((k - 1) * 0.9, 0.7, (k % 2) * 0.5), new THREE.Color(['#4cc257', '#3fae3a', '#5fd56a'][k])))));
    instance(bush, toon({ vertexColors: true, }), place(900, 12000, (x, z, h) => h > 2 && !nearRoad(x, z, 2.5) && nearRoad(x, z, 30) && terrain.slope(x, z) < 0.8), () => 0.7 + r() * 0.9);
    const rockGeo = new THREE.DodecahedronGeometry(1.4, 0);
    instance(rockGeo, toon({ color: '#9b8f80', }), place(220, 6000, (x, z, h) => h > -1 && !nearRoad(x, z, 3)), () => 0.6 + r() * 2.2);
  }
  // beach huts & tiki statues by the track
  {
    const hutParts = [colorize(new THREE.BoxGeometry(5, 3, 4).translate(0, 1.5, 0), new THREE.Color('#d9b07a')),
      colorize(new THREE.ConeGeometry(4.4, 3.4, 4).rotateY(Math.PI / 4).translate(0, 4.7, 0), new THREE.Color('#e7c25a')),
      colorize(new THREE.BoxGeometry(1.2, 2, 0.1).translate(0, 1, 2.01), new THREE.Color('#5c3b1e'))];
    for (const [sx, sy] of [[-1.8, 0], [1.8, 0]]) hutParts.push(colorize(new THREE.CylinderGeometry(0.18, 0.18, 1.2, 6).translate(sx * 1.3, -0.4 + sy, 1.8), new THREE.Color('#7b5532')));
    const hut = mergeGeometries(hutParts.map(prep));
    instance(hut, toon({ vertexColors: true, }), place(12, 4000, (x, z, h) => h > 1 && h < 4 && !nearRoad(x, z, 8) && nearRoad(x, z, 40)), () => 1);
    const tikiParts = [colorize(new THREE.BoxGeometry(1.4, 3.2, 1.2).translate(0, 1.6, 0), new THREE.Color('#9a6234')),
      colorize(new THREE.BoxGeometry(1.6, 0.3, 1.4).translate(0, 2.4, 0), new THREE.Color('#6b3f1c')),
      colorize(new THREE.BoxGeometry(0.35, 0.35, 0.1).translate(-0.35, 2.0, 0.62), new THREE.Color('#ffffff')),
      colorize(new THREE.BoxGeometry(0.35, 0.35, 0.1).translate(0.35, 2.0, 0.62), new THREE.Color('#ffffff')),
      colorize(new THREE.BoxGeometry(0.9, 0.3, 0.1).translate(0, 1.1, 0.62), new THREE.Color('#d8322b'))];
    const tiki = mergeGeometries(tikiParts.map(prep));
    const spots = [];
    for (let k = 0; k < 18; k++) {
      const i = Math.floor(((k + 0.5) / 18) * N), s = k % 2 ? 1 : -1;
      if (track.flags[i] & (1 | 4 | 8)) continue;
      const x = track.px[i] + track.rightX(i) * s * (HW + 4), z = track.pz[i] + track.rightZ(i) * s * (HW + 4);
      spots.push([x, terrain.height(x, z), z]);
    }
    const im = instance(tiki, toon({ vertexColors: true }), spots, () => 1.3);
    // statues look at the road
    const m = new THREE.Matrix4();
    spots.forEach((p, k) => {
      const n = track.nearestCoarse(p[0], p[2]); if (!n) return;
      const a = Math.atan2(track.px[n.i] - p[0], track.pz[n.i] - p[2]);
      im.setMatrixAt(k, m.compose(new THREE.Vector3(p[0], p[1] - 0.2, p[2]), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), a), new THREE.Vector3(1.3, 1.3, 1.3)));
    });
  }

  // ---------- volcano smoke ----------
  world.volcanoTop = new THREE.Vector3(VOLCANO.x, terrain.height(VOLCANO.x + 26, VOLCANO.z) + 4, VOLCANO.z);
  void fbm; void smooth;
  return world;
}
