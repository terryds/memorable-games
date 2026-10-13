const $ = (id) => document.getElementById(id);

export function fmtTime(t) {
  if (!isFinite(t)) return '--:--.--';
  const m = Math.floor(t / 60), s = t - m * 60;
  return `${m}:${s < 10 ? '0' : ''}${s.toFixed(2)}`;
}
const ORD = (n) => n + (['th', 'st', 'nd', 'rd'][(n % 100 > 10 && n % 100 < 14) ? 0 : n % 10] || 'th');
export { ORD };

export class HUD {
  constructor(track) {
    this.track = track;
    this.speedo = $('speedo').getContext('2d');
    this.nos = $('nos').getContext('2d');
    this.mini = $('minimap').getContext('2d');
    this.msgTimer = 0;
    this.chainTimer = 0;
    // cache a decimated centerline for the minimap
    this.path = [];
    for (let i = 0; i < track.N; i += 3) this.path.push([track.px[i], track.pz[i]]);
  }

  show(on) { $('hud').classList.toggle('hidden', !on); }

  message(text, dur = 2) {
    const el = $('msg'); el.textContent = text; el.classList.add('show'); this.msgTimer = dur;
  }
  countdown(text) {
    const el = $('count'); el.textContent = text; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
  }
  chain(html, cls = '', dur = 0) {
    const el = $('chain'); el.innerHTML = html; el.className = cls; this.chainTimer = dur;
  }

  tick(dt) {
    if (this.msgTimer > 0 && (this.msgTimer -= dt) <= 0) $('msg').classList.remove('show');
    if (this.chainTimer > 0 && (this.chainTimer -= dt) <= 0) $('chain').innerHTML = '';
  }

  setMode(mode, laps) {
    $('posbox').classList.toggle('hidden', mode !== 'race');
    $('lapbox').classList.toggle('hidden', mode === 'free');
    $('standings').classList.toggle('hidden', mode !== 'race');
    $('driftbox').classList.toggle('hidden', mode !== 'drift');
    $('timebox').classList.toggle('hidden', mode === 'free');
    this.laps = laps;
  }

  update({ pos, total, lap, time, best, standings, drift }) {
    if (pos != null) { $('pos').textContent = pos; $('posof').textContent = '/' + total; }
    $('lap').textContent = `${Math.max(1, Math.min(lap, this.laps))}/${this.laps}`;
    $('time').textContent = fmtTime(time);
    $('best').textContent = best ? 'BEST LAP ' + fmtTime(best) : '';
    if (standings) $('standings').innerHTML = standings.map((s) => `<div class="${s.me ? 'me' : ''}" style="--c:${s.color}"><span>${s.pos}</span><span>${s.name}</span><em>${s.gap}</em></div>`).join('');
    if (drift != null) $('driftscore').textContent = Math.floor(drift).toLocaleString();
  }

  drawSpeedo(car, sb, sbOn) {
    const g = this.speedo, W = 520, cx = 270, cy = 270;
    g.clearRect(0, 0, W, W);
    const a0 = Math.PI * 0.75, a1 = Math.PI * 2.25, maxRpm = 9000;
    const ang = (rpm) => a0 + (a1 - a0) * Math.min(1, rpm / maxRpm);
    // backing disc
    const bg = g.createRadialGradient(cx, cy, 40, cx, cy, 230);
    bg.addColorStop(0, 'rgba(6,8,20,0.85)'); bg.addColorStop(0.85, 'rgba(6,8,20,0.55)'); bg.addColorStop(1, 'rgba(6,8,20,0)');
    g.fillStyle = bg; g.beginPath(); g.arc(cx, cy, 230, 0, Math.PI * 2); g.fill();
    // track arc
    g.lineCap = 'butt';
    g.lineWidth = 14; g.strokeStyle = 'rgba(255,255,255,0.1)';
    g.beginPath(); g.arc(cx, cy, 196, a0, a1); g.stroke();
    g.strokeStyle = 'rgba(255,40,70,0.55)';
    g.beginPath(); g.arc(cx, cy, 196, ang(7400), a1); g.stroke();
    // live rpm arc
    const grd = g.createLinearGradient(40, 400, 480, 120);
    grd.addColorStop(0, '#00e5ff'); grd.addColorStop(0.7, '#ff2bd6'); grd.addColorStop(1, '#ff3355');
    g.strokeStyle = grd; g.shadowColor = '#00e5ff'; g.shadowBlur = 16;
    g.beginPath(); g.arc(cx, cy, 196, a0, ang(car.rpm)); g.stroke();
    g.shadowBlur = 0;
    // ticks
    g.fillStyle = '#dfe8ff'; g.font = '600 24px Orbitron'; g.textAlign = 'center'; g.textBaseline = 'middle';
    for (let k = 0; k <= 9; k++) {
      const a = ang(k * 1000);
      g.strokeStyle = k >= 8 ? '#ff3355' : 'rgba(255,255,255,0.75)'; g.lineWidth = 4;
      g.beginPath(); g.moveTo(cx + Math.cos(a) * 172, cy + Math.sin(a) * 172); g.lineTo(cx + Math.cos(a) * 184, cy + Math.sin(a) * 184); g.stroke();
      g.fillStyle = k >= 8 ? '#ff3355' : 'rgba(255,255,255,0.8)';
      g.fillText(k, cx + Math.cos(a) * 148, cy + Math.sin(a) * 148);
      if (k < 9) {
        const am = ang(k * 1000 + 500);
        g.lineWidth = 2; g.strokeStyle = 'rgba(255,255,255,0.35)';
        g.beginPath(); g.moveTo(cx + Math.cos(am) * 178, cy + Math.sin(am) * 178); g.lineTo(cx + Math.cos(am) * 184, cy + Math.sin(am) * 184); g.stroke();
      }
    }
    // needle
    const na = ang(car.rpm);
    g.strokeStyle = '#ff7a1a'; g.lineWidth = 6; g.shadowColor = '#ff7a1a'; g.shadowBlur = 18;
    g.beginPath(); g.moveTo(cx + Math.cos(na) * 40, cy + Math.sin(na) * 40); g.lineTo(cx + Math.cos(na) * 192, cy + Math.sin(na) * 192); g.stroke();
    g.shadowBlur = 0;
    // speed
    const kmh = Math.round(Math.abs(car.vF) * 3.6);
    g.fillStyle = '#fff'; g.font = '900 88px Orbitron'; g.textAlign = 'center';
    g.shadowColor = 'rgba(0,229,255,0.7)'; g.shadowBlur = 20;
    g.fillText(kmh, cx, cy + 6);
    g.shadowBlur = 0;
    g.font = '600 20px Orbitron'; g.fillStyle = 'rgba(255,255,255,0.6)'; g.fillText('KM/H', cx, cy + 62);
    g.font = '900 40px Orbitron'; g.fillStyle = '#ff7a1a'; g.fillText(car.gear, cx, cy - 74);
    // nitro + speedbreaker bars
    const bar = (y, v, c, label, on) => {
      g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(cx - 90, y, 180, 10);
      g.fillStyle = c; g.shadowColor = c; g.shadowBlur = on ? 18 : 6; g.fillRect(cx - 90, y, 180 * v, 10); g.shadowBlur = 0;
      g.font = '600 14px Orbitron'; g.fillStyle = 'rgba(255,255,255,0.7)'; g.textAlign = 'left'; g.fillText(label, cx - 90, y - 10); g.textAlign = 'center';
    };
    bar(cy + 128, sb, '#ffb000', 'SPEEDBREAKER', sbOn);
    this.drawNos(car);
  }

  // Three nitrous bottles: each holds a third of the tank and drains right-to-left.
  drawNos(car) {
    const g = this.nos, W = 240, H = 340, n = 3, bw = 58, gap = 18, x0 = (W - (n * bw + (n - 1) * gap)) / 2;
    const top = 70, bottom = 290, t = performance.now() / 1000;
    g.clearRect(0, 0, W, H);
    for (let k = 0; k < n; k++) {
      const x = x0 + k * (bw + gap), fill = Math.max(0, Math.min(1, car.nitro * n - k));
      const active = car.nitroOn && fill > 0 && fill < 1 || (car.nitroOn && fill === 1 && car.nitro * n - k < 1.02);
      const body = () => {
        g.beginPath();
        g.moveTo(x + bw * 0.3, top - 18); g.lineTo(x + bw * 0.7, top - 18);       // neck
        g.lineTo(x + bw * 0.7, top - 4);
        g.quadraticCurveTo(x + bw, top, x + bw, top + 24);                       // shoulder
        g.lineTo(x + bw, bottom - 10); g.quadraticCurveTo(x + bw, bottom, x + bw - 10, bottom);
        g.lineTo(x + 10, bottom); g.quadraticCurveTo(x, bottom, x, bottom - 10);
        g.lineTo(x, top + 24); g.quadraticCurveTo(x, top, x + bw * 0.3, top - 4);
        g.closePath();
      };
      // valve + cap
      g.fillStyle = 'rgba(200,210,230,0.75)'; g.fillRect(x + bw * 0.36, top - 34, bw * 0.28, 16);
      g.fillStyle = fill > 0 ? '#3dfcff' : 'rgba(255,255,255,0.25)'; g.fillRect(x + bw * 0.22, top - 42, bw * 0.56, 9);
      // glass
      body(); g.fillStyle = 'rgba(8,12,28,0.75)'; g.fill();
      // liquid
      if (fill > 0) {
        g.save(); body(); g.clip();
        const y = bottom - (bottom - top + 18) * fill;
        const grd = g.createLinearGradient(0, y, 0, bottom);
        grd.addColorStop(0, active ? '#e6fdff' : '#7af6ff'); grd.addColorStop(0.35, '#1fb8ff'); grd.addColorStop(1, '#2a3cff');
        g.fillStyle = grd; g.shadowColor = '#3dfcff'; g.shadowBlur = active ? 30 : 12;
        g.fillRect(x - 4, y + (active ? Math.sin(t * 40 + k) * 2 : 0), bw + 8, bottom - y + 4);
        // bubbles while burning
        if (car.nitroOn) { g.fillStyle = 'rgba(255,255,255,0.6)'; for (let b = 0; b < 4; b++) { const by = bottom - ((t * 160 + b * 57 + k * 31) % (bottom - y)); g.beginPath(); g.arc(x + 12 + ((b * 13 + k * 7) % (bw - 24)), by, 3, 0, 6.3); g.fill(); } }
        g.restore();
      }
      // outline + label band
      body(); g.lineWidth = 3; g.strokeStyle = fill > 0 ? 'rgba(61,252,255,0.9)' : 'rgba(255,255,255,0.25)'; g.shadowColor = '#3dfcff'; g.shadowBlur = fill > 0 ? 10 : 0; g.stroke(); g.shadowBlur = 0;
      g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(x + 3, top + 60, bw - 6, 34);
      g.save(); g.translate(x + bw / 2, top + 77);
      g.font = '900 17px Orbitron'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = fill > 0 ? '#fff' : 'rgba(255,255,255,0.35)'; g.fillText('N₂O', 0, 1); g.restore();
    }
    g.font = '700 26px Orbitron'; g.textAlign = 'center'; g.fillStyle = car.nitroOn ? '#e6fdff' : 'rgba(255,255,255,0.75)';
    g.shadowColor = '#3dfcff'; g.shadowBlur = car.nitroOn ? 18 : 0; g.fillText('NOS', W / 2, 328); g.shadowBlur = 0;
  }

  drawMinimap(cars, player, colors) {
    const g = this.mini, S = 440, c = S / 2, scale = 0.2;
    g.clearRect(0, 0, S, S);
    g.save();
    g.beginPath(); g.arc(c, c, c - 6, 0, Math.PI * 2); g.clip();
    g.fillStyle = 'rgba(5,7,18,0.72)'; g.fillRect(0, 0, S, S);
    const fx = Math.sin(player.h), fz = Math.cos(player.h), rx = -fz, rz = fx;
    // player's right (world) maps to screen right, heading points up
    const map = (x, z) => { const dx = x - player.x, dz = z - player.z; return [c + (dx * rx + dz * rz) * scale, c - (dx * fx + dz * fz) * scale]; };
    g.lineJoin = 'round'; g.lineCap = 'round';
    for (const [w, col] of [[20, 'rgba(0,229,255,0.18)'], [9, 'rgba(210,225,255,0.85)']]) {
      g.lineWidth = w; g.strokeStyle = col; g.beginPath();
      this.path.forEach(([x, z], i) => { const [sx, sy] = map(x, z); i ? g.lineTo(sx, sy) : g.moveTo(sx, sy); });
      g.closePath(); g.stroke();
    }
    // start line
    const t = this.track, si = t.startIdx;
    const [s1x, s1y] = map(t.px[si] + t.rightX(si) * 12, t.pz[si] + t.rightZ(si) * 12), [s2x, s2y] = map(t.px[si] - t.rightX(si) * 12, t.pz[si] - t.rightZ(si) * 12);
    g.strokeStyle = '#ffb000'; g.lineWidth = 5; g.beginPath(); g.moveTo(s1x, s1y); g.lineTo(s2x, s2y); g.stroke();
    cars.forEach((car, i) => {
      if (car === player) return;
      const [sx, sy] = map(car.x, car.z);
      g.fillStyle = colors[i]; g.shadowColor = colors[i]; g.shadowBlur = 12;
      g.beginPath(); g.arc(sx, sy, 9, 0, Math.PI * 2); g.fill(); g.shadowBlur = 0;
    });
    // player arrow
    g.fillStyle = '#fff'; g.shadowColor = '#00e5ff'; g.shadowBlur = 16;
    g.beginPath(); g.moveTo(c, c - 16); g.lineTo(c + 11, c + 12); g.lineTo(c, c + 6); g.lineTo(c - 11, c + 12); g.closePath(); g.fill();
    g.restore();
    g.strokeStyle = 'rgba(0,229,255,0.5)'; g.lineWidth = 3; g.beginPath(); g.arc(c, c, c - 6, 0, Math.PI * 2); g.stroke();
  }
}
