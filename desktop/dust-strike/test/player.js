// Player-input checks: buying, planting at a site, defusing, recoil climb and knife.
import { Game } from '../src/sim.js';
const idle = (o = {}) => ({ fwd: 0, side: 0, jump: false, crouch: false, walk: false, fire: false, alt: false, reload: false, use: false, slot: null, drop: false, yaw: 0, pitch: 0, ...o });
const freezeBots = (g) => g.brains.forEach((b) => { b.think = () => ({ ...b.inp, fwd: 0, side: 0, fire: false, use: false }); });
const run = (g, sec, inp) => { for (let t = 0; t < sec; t += 1 / 120) g.update(1 / 120, inp); };
let ok = true; const check = (c, msg) => { console.log((c ? 'PASS ' : 'FAIL ') + msg); if (!c) ok = false; };

// T player plants at A
let g = new Game({ playerTeam: 'T' }); g.start(); freezeBots(g);
let p = g.player;
g.agents.forEach((a) => { if (a.inv.c4) a.inv.c4 = false; }); p.inv.c4 = true; g.bomb.carrier = p.id;
check(g.buy(p, 'ak47') === 'Not enough money', 'cannot afford AK on $800');
check(g.buy(p, 'vest') === null && p.armor === 100, 'buys kevlar');
run(g, 6.1, idle());
check(g.phase === 'live', 'freeze ends');
Object.assign(p, { x: 122, z: 24 });
run(g, 3.4, idle({ use: true }));
check(g.bomb.state === 'planted' && g.phase === 'planted', 'player planted the bomb (state ' + g.bomb.state + ')');

// CT player defuses
g = new Game({ playerTeam: 'CT' }); g.start(); freezeBots(g); p = g.player;
run(g, 6.1, idle());
const t = g.agents.find((a) => a.inv.c4);
Object.assign(t, { x: 20, z: 24 }); t.input = idle(); g.applyInput(t, idle({ use: true }), 0.01);
for (let i = 0; i < 400 && g.bomb.state !== 'planted'; i++) { g.applyInput(t, idle({ use: true }), 1 / 120); }
check(g.bomb.state === 'planted', 'bot-held bomb planted at B');
g.phase = 'planted';
// kill all Ts so only the clock matters, then defuse
for (const a of g.agents) if (a.team === 'T') g.kill(a, null, 'knife', false);
Object.assign(p, { x: g.bomb.x + 0.5, z: g.bomb.z });
run(g, 10.2, idle({ use: true }));
check(g.bomb.state === 'defused' && g.winner === 'CT', 'player defused without a kit (10 s)');

// recoil climbs during a spray, knife kills a frozen bot
g = new Game({ playerTeam: 'CT' }); g.start(); freezeBots(g); p = g.player; p.money = 9000; g.buy(p, 'm4a1');
run(g, 6.2, idle());
run(g, 1.0, idle({ fire: true }));
check(p.punchP > 0.1 && p.inv.primary.mag < 25, `spray climbs (punch ${p.punchP.toFixed(3)}, mag ${p.inv.primary.mag})`);
const v = g.agents.find((a) => a.team === 'T');
Object.assign(p, { x: 70, z: 50, yaw: 0 }); Object.assign(v, { x: 70, z: 48.8, yaw: Math.PI });
run(g, 0.7, idle({ slot: 'knife' }));
for (let i = 0; i < 6 && v.alive; i++) run(g, 1.05, idle({ alt: true, yaw: 0 }));
check(!v.alive, 'knife stabs kill');
process.exit(ok ? 0 : 1);
