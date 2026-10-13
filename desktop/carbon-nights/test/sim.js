// Headless physics check: 3 AI + an AI-driven "player" race 2 laps.
const noop = () => stub;
const stub = new Proxy(function () {}, { get: (t, k) => (k === 'canvas' ? {} : k === Symbol.toPrimitive ? () => 0 : stub), apply: () => stub, set: () => true });
globalThis.document = { createElement: () => ({ width: 0, height: 0, getContext: () => stub }) };
const { Track } = await import('../src/track.js');
const { Car, AIDriver, collideCars } = await import('../src/car.js');
const track = new Track();
console.log('track length', track.length.toFixed(0), 'samples', track.N, 'start', track.startIdx);
let maxK = 0; for (let i = 0; i < track.N; i++) maxK = Math.max(maxK, Math.abs(track.curv[i]));
console.log('min radius', (1 / maxK).toFixed(1));
const s = track.startIdx;
const slots = [[s - 5, -4.3], [s - 5, 4.3], [s - 14, -4.3], [s - 14, 4.3]];
const types = ['tuner', 'exotic', 'muscle', process.argv[2] || 'tuner'];
const skills = [0.97, 1.0, 0.95, +(process.argv[3] || 1.0)];
const cars = [], ais = [];
types.forEach((t, i) => {
  const c = new Car(t, '#fff', null, 'C' + i); c.place(track, slots[i][0], slots[i][1]); cars.push(c);
  ais.push(new AIDriver(c, track, { skill: skills[i], lane: slots[i][1] * 0.6, seed: i + 1 }));
});
let time = 0, hits = cars.map(() => 0), maxSpeed = cars.map(() => 0), carHits = 0;
const dt = 1 / 120;
while (time < 400 && cars.some((c) => !c.finished)) {
  time += dt;
  cars.forEach((c, i) => {
    const ip = ais[i].input(dt, cars, i === 3 ? 0 : cars[3].progress - c.progress, time);
    c.update(dt, ip, track);
    if (c.impact > 2) { hits[i]++; if (process.env.V) console.log("hit", c.name, time.toFixed(1), "i", c.q.i, "v", (c.speed*3.6).toFixed(0), "imp", c.impact.toFixed(1), "lat", c.q.lat.toFixed(1), "curv", track.curv[c.q.i].toFixed(4)); }
    maxSpeed[i] = Math.max(maxSpeed[i], c.speed);
    if (c.lapEvent) { c.lapEvent = false; if (c.lap > 2 && !c.finished) { c.finished = true; c.finishTime = time; } }
  });
  collideCars(cars, () => carHits++);
  if (Math.abs(time % 20) < dt) console.log('t', time.toFixed(0), cars.map((c) => `${c.name} lap${c.lap} ${(c.progress).toFixed(0)}m ${(c.speed * 3.6).toFixed(0)}kmh y${c.y.toFixed(0)}`).join(' | '));
}
console.log('finish', cars.map((c) => c.name + ' ' + (c.finished ? c.finishTime.toFixed(1) : 'DNF')).join(', '));
console.log('wall hits', hits, 'car contacts', carHits, 'vmax km/h', maxSpeed.map((v) => (v * 3.6).toFixed(0)));
