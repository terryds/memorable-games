# Memorable Mobile Games

The mobile classics you remember — rebuilt from scratch to play instantly in the browser.
Live at **https://games.terrydjony.com**

| # | Game | Path | Controls |
|---|------|------|----------|
| 1 | 🍉 Fruit Ninja | `/fruit-ninja/` | Swipe to slice (mouse drag) |
| 2 | 🐦 Flappy Bird | `/flappy-bird/` | Tap to flap (Space / click) |
| 3 | 🟢 Doodle Jump | `/doodle-jump/` | Tilt your phone (default) or hold left / right, tap to shoot (keyboard ← → / Space) |
| 4 | 🚗 Two Cars | `/two-cars/` | Tap left / right half (keyboard ← →) |
| 5 | 🎸 Guitar Hero | `/guitar-hero/` | Tap the frets (keyboard A S D F G, Space = Star Power) |
| 6 | 🔢 2048 | `/2048/` | Swipe to slide tiles (arrow keys / WASD, U = undo) |

## How it's built

- **Zero dependencies, zero build step.** Every game is one self-contained `index.html`
  (HTML + CSS + canvas JS) plus a web-app manifest and an SVG icon.
- **All assets are made in code** — sprites, backgrounds and sound effects are drawn /
  synthesized at runtime. Guitar Hero's three songs are composed procedurally from a seed
  and played through a Web Audio synth band, so the note chart and the music always match.
- **Mobile-first**: touch controls, safe-area insets, no zoom/scroll bounce, and each game
  can be installed to the home screen (opens full-screen).
- **High scores** live in `localStorage` (per-game key prefixes: `twocars.`, `dj.`, `fn.`,
  `flappy.`, `gh.`, `g2048.`), so the landing page can show your personal bests.

```
.
├── wrangler.jsonc        # Cloudflare Workers config (serves ./public as static assets)
└── public/               # everything that gets deployed
    ├── index.html        # landing page
    ├── 404.html          # "Game over" not-found page
    ├── assets/
    │   ├── icon.svg      # site favicon
    │   ├── og.png        # social share image (1200×630)
    │   └── shots/*.jpg   # game thumbnails used on the landing page
    ├── fruit-ninja/      # each game: index.html + manifest.json + icon.svg
    ├── two-cars/
    ├── doodle-jump/
    ├── flappy-bird/
    ├── guitar-hero/
    └── 2048/
```

All paths inside `public/` are relative, so the site works from any host or sub-path.

## Run locally

Any static file server pointed at `public/` works:

```bash
npx serve public          # or: python3 -m http.server 8080 -d public
npx wrangler dev          # same as production, via Cloudflare's local runtime (Node 22+)
```

## Deploy (Cloudflare Workers) → games.terrydjony.com

Connect the repo in **Cloudflare dashboard → Workers & Pages → Create → Import a repository**:

| Field | Value |
|-------|-------|
| Project name | `memorable-mobile-games` (must match `name` in `wrangler.jsonc`) |
| Build command | *(leave empty)* |
| Deploy command | `npx wrangler deploy` |
| Preview command | `npx wrangler preview` (or leave the default) |

Every push to `main` redeploys. Then add the domain: **Worker → Settings → Domains & Routes →
Add → Custom domain → `games.terrydjony.com`** (works automatically when `terrydjony.com` uses
Cloudflare DNS).

`wrangler.jsonc` serves `public/` as static assets: `/two-cars` redirects to `/two-cars/`,
and unknown paths get `404.html`. Nothing outside `public/` (README, config, `.git`) is ever
uploaded.

The social preview (`og:image`, canonical URL) in `public/index.html` points at
`https://games.terrydjony.com/` — update those URLs if you deploy elsewhere.

## Adding a game

1. Create `public/<slug>/index.html` (+ `manifest.json` with `"start_url": "./"`, `icon.svg`).
2. Add the `← All games` link (`<a class="homeLink" href="../">`) on its menu screens.
3. Add an entry to the `GAMES` array in the landing page and a thumbnail at
   `public/assets/shots/<slug>.jpg` (390×780 @1.5x screenshot works well).

## Disclaimer

Fan-made tributes built for fun. Not affiliated with, endorsed by, or connected to the
original games or their creators; all trademarks belong to their respective owners.
