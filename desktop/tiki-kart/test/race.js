// Full headless race incl. items: 6 AI karts, 3 laps.
const stub = new Proxy(function () {}, { get: (t, k) => (k === Symbol.toPrimitive ? () => 0 : stub), apply: () => stub, set: () => true });
globalThis.document = { createElement: () => ({ getContext: () => stub }) };
const THREE = await import('three');
const { Track } = await import('../src/track.js');
const { Kart, KartAI, CHARACTERS, collideKarts } = await import('../src/kart.js');
const { ItemSystem } = await import('../src/items.js');
const track = new Track();
const P = { emit() {} }, fx = { fire: P, smoke: P, spark: P, dust: P };
const items = new ItemSystem(new THREE.Scene(), track, null, fx);
const karts = [], ais = [];
CHARACTERS.forEach((ch, i) => { const k = new Kart(ch, null, null); const side = i % 2 ? 3.4 : -3.4; k.place(track, track.finishIdx - 4 - Math.floor(i / 2) * 5, side); karts.push(k); ais.push(new KartAI(k, track, { skill: 0.94, lane: side * 0.4, seed: i + 1 })); });
const used = {}, hits = {}; let t = 0;
const order = () => [...karts].sort((a, b) => (a.finished && b.finished ? a.finishTime - b.finishTime : a.finished ? -1 : b.finished ? 1 : b.progress - a.progress));
while (t < 320 && karts.some((k) => !k.finished)) {
  t += 1 / 120; const o = order();
  karts.forEach((k, i) => { const ip = ais[i].input(1 / 120, karts, 0, t); k.update(1 / 120, ip, track); if (ip.item && k.item) { used[k.item] = (used[k.item] || 0) + 1; items.use(k, o); } if (k.lapEvent) { k.lapEvent = false; if (k.lap > 3 && !k.finished) { k.finished = true; k.finishTime = t; } } });
  collideKarts(karts); items.update(1 / 120, karts, o, t);
  for (const e of items.events) if (e.type === 'hit') hits[e.item] = (hits[e.item] || 0) + 1;
}
console.log('finish', karts.map((k) => `${k.ch.name}:${k.finished ? k.finishTime.toFixed(0) : 'DNF@' + k.lap}`).join(' '));
console.log('items used', JSON.stringify(used), 'hits', JSON.stringify(hits));
