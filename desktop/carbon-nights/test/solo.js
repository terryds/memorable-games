const stub = new Proxy(function () {}, { get: (t, k) => (k === Symbol.toPrimitive ? () => 0 : stub), apply: () => stub, set: () => true });
globalThis.document = { createElement: () => ({ getContext: () => stub }) };
const { Track } = await import('../src/track.js');
const { Car, AIDriver } = await import('../src/car.js');
const track = new Track();
for (const type of ['tuner', 'muscle', 'exotic']) {
  const c = new Car(type, '#fff', null, type); c.place(track, track.startIdx - 5, 0);
  const ai = new AIDriver(c, track, { skill: 1, lane: 0, seed: 1 });
  let t = 0, hits = 0, maxLat = 0, maxSlip = 0;
  while (t < 200 && c.lap < 3) {
    t += 1 / 120; c.update(1 / 120, ai.input(1 / 120, [c], 0, t), track);
    if (c.impact > 2) hits++;
    maxSlip = Math.max(maxSlip, Math.abs(c.slip));
  }
  console.log(type, 'lap2 done at', t.toFixed(1), 'hits', hits, 'maxSlip', maxSlip.toFixed(2));
}
