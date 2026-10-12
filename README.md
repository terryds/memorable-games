# Memorable Mobile Games

The mobile classics you remember — rebuilt from scratch to play instantly in the browser.
Live at **https://games.terrydjony.com**

| # | Game | Path | Controls |
|---|------|------|----------|
| 1 | 🚗 Two Cars | `/two-cars/` | Tap left / right half (keyboard ← →) |
| 2 | 🟢 Doodle Jump | `/doodle-jump/` | Hold left / right or tilt, 💥 to shoot (keyboard ← → / Space) |
| 3 | 🍉 Fruit Ninja | `/fruit-ninja/` | Swipe to slice (mouse drag) |
| 4 | 🐦 Flappy Bird | `/flappy-bird/` | Tap to flap (Space / click) |
| 5 | 🎸 Guitar Hero | `/guitar-hero/` | Tap the frets (keyboard A S D F G, Space = Star Power) |

## How it's built

- **Zero dependencies, zero build step.** Every game is one self-contained `index.html`
  (HTML + CSS + canvas JS) plus a web-app manifest and an SVG icon.
- **All assets are made in code** — sprites, backgrounds and sound effects are drawn /
  synthesized at runtime. Guitar Hero's three songs are composed procedurally from a seed
  and played through a Web Audio synth band, so the note chart and the music always match.
- **Mobile-first**: touch controls, safe-area insets, no zoom/scroll bounce, and each game
  can be installed to the home screen (opens full-screen).
- **High scores** live in `localStorage` (per-game key prefixes: `twocars.`, `dj.`, `fn.`,
  `flappy.`, `gh.`), so the landing page can show your personal bests.

```
.
├── index.html          # landing page
├── assets/
│   ├── icon.svg        # site favicon
│   ├── og.png          # social share image (1200×630)
│   └── shots/*.jpg     # game thumbnails used on the landing page
├── two-cars/           # each game: index.html + manifest.json + icon.svg
├── doodle-jump/
├── fruit-ninja/
├── flappy-bird/
├── guitar-hero/
└── CNAME               # custom domain for GitHub Pages
```

All paths are relative, so the site works from any host or sub-path.

## Run locally

Any static file server works:

```bash
npx serve .            # or
python3 -m http.server 8080
```

Then open http://localhost:8080 (use your computer's LAN IP to test on a phone).

## Deploy to games.terrydjony.com

It's a plain static site — point any static host at the repo root, no build command,
output directory `/`.

**Cloudflare Pages / Netlify / Vercel**
1. Import the repo, framework preset "None", build command empty, output dir `/` (or `.`).
2. Add the custom domain `games.terrydjony.com` in the project settings.
3. At your DNS provider add a `CNAME` record: `games` → the target the host gives you
   (e.g. `<project>.pages.dev`, `<site>.netlify.app`, or `cname.vercel-dns.com`).

**GitHub Pages**
1. Settings → Pages → Deploy from branch → `main` / root.
2. The `CNAME` file already sets `games.terrydjony.com`.
3. DNS: `CNAME` record `games` → `<github-user>.github.io`. Enable "Enforce HTTPS".

The social preview (`og:image`, canonical URL) in `index.html` points at
`https://games.terrydjony.com/` — update those two URLs if you deploy elsewhere.

## Adding a game

1. Create `<slug>/index.html` (+ `manifest.json` with `"start_url": "./"`, `icon.svg`).
2. Add the `← All games` link (`<a class="homeLink" href="../">`) on its menu screens.
3. Add an entry to the `GAMES` array in the landing page and a thumbnail at
   `assets/shots/<slug>.jpg` (390×780 @1.5x screenshot works well).

## Disclaimer

Fan-made tributes built for fun. Not affiliated with, endorsed by, or connected to the
original games or their creators; all trademarks belong to their respective owners.
