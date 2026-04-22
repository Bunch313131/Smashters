# Smashters Design System

> Ryder-Cup-style golf event manager for **The Smashters**, the traveling tournament of the **Dumpster Fire Golf Club (DFGC)**. The brand is a loving, tongue-in-cheek riff on the Masters broadcast — deep tournament green, Augusta-broadcast gold-yellow, a scripted display face, and two team colors (red vs. blue) borrowed from the Ryder Cup.

## Source

- **GitHub repo:** `Bunch313131/Smashters` (branch `main`). The entire app lives in a single `index.html` (~11.5k lines, 520KB) with all CSS/JS inline. See `index.html` and `assets/` in the project root — the original files have been imported for reference.
- **Production URL:** `smashters.com` (CNAME).
- **Sibling repo `Bunch313131/BunchBets`** — different app (Nassau/Vegas scoring, dark theme), different design system. `Template.html` in this project is a Bunch Bets artifact that leaked into the Smashters repo; **ignore it**.
- No Figma, no component library, no tokens file — the design system is inline CSS variables inside `index.html`. This project canonicalises it.

## The product

**Smashters** is a single product: a PWA ("add to home screen") that runs a multi-day Ryder-Cup-style golf tournament for friend-group trips. One HTML file, Firebase realtime DB for live sync, no build step. Installable on iOS/Android; also has TV/broadcast display modes (`?tv=1`, `?tv=draft`, `?tv=matchup`) that turn a laptop or iPad into a clubhouse scoreboard.

Tabs the app exposes:

| Tab | What it does |
|---|---|
| Schedule | Day-by-day sessions (Foursomes / Four-Ball / Singles) |
| Leaderboard | Ryder-Cup broadcast scoreboard, team totals, match rows |
| Individual | Per-player scoring stats |
| Scoring | Hole-by-hole entry with a drum-wheel picker |
| Matches | Set up + edit match pairings |
| Players | Roster + handicaps + team assignment |
| Draft | Snake draft w/ live TV mode |
| Settings | Course holes/par/HCP, passwords, event config |

Three broadcast ("TV") modes mirror the phone app on a big screen:

- `?tv=1` — leaderboard scoreboard + spotlight match + probability chart
- `?tv=draft` — live draft board (roster A / available / roster B)
- `?tv=matchup` — matchup reveal board

## Two brand marks, one system

The visual system stacks two logos:

1. **SMASHTERS** — a Masters-style word mark with a golf flag, set in the Azalea script, laid over an outline of the continental US with state-line "drips". Green on white (primary) or green on yellow map (secondary).
2. **Dumpster Fire Golf Club (DFGC)** — an ornate heraldic crest: gold filigree frame, crowned shield, a burning dumpster flanked by crossed irons, red pennants, and a gold ribbon with the full name. Used as the "label" / "presents" mark in splash screens, watermarks, ticker chips, and iconography on matchup cards.

Both run on the same green/gold Masters palette — DFGC adds maroon/gold highlights you should read as illustration-only, not tokens.

## Content fundamentals

**Voice:** Broadcast-golf reverence **pointedly undercut** by irreverence. The UI surfaces sound like CBS-at-Augusta ("LEADERBOARD", "THRU", "HOLE HALVED", "MATCH COMPLETE"), and the legal/flavor copy takes the piss. Examples from the app:

> **Waiver of Responsibility** — By tapping "I Accept," you acknowledge that the Dumpster Fire Golf Club (DFGC) is not responsible for any damage to your ego, your handicap, your marriage, or your dignity.
>
> You voluntarily assume all risks including but not limited to: devastating shanks, questionable side bets, unsolicited swing advice, and decisions that seemed brilliant on the 10th tee.
>
> What happens at DFGC stays at DFGC. Unless it's on video.

**Casing rules:**
- Micro-labels, button text, nav items, section headers: `ALL CAPS, TRACKED` (letter-spacing 0.5–2px). Trebuchet MS, bold, 0.65–0.85rem.
- Body / legal / course copy: Title Case or Sentence case, Georgia serif.
- Logo / event name / splash: the Azalea script — *do not uppercase* it; Azalea is already stylised caps-only in its glyph design.

**Person:** Second-person ("You voluntarily assume..."), imperative for actions ("Clear Hole 7 Scores", "Host Live Game", "I Accept"). Never "we". Never "our". The app is a tool, not a company voice.

**Emoji:** Not used — no emoji in UI. Occasional Unicode icons only: `←` `→` `×` `&middot;` `&#x1F512;` (lock). All navigation icons are inline SVG line-work (stroke-width 2, rounded caps).

**Numbers, golf notation, event years:** Tabular numerals, uppercase short forms. `THRU 14` · `1 UP` · `2 & 1` · `AS` · `DAY 1 · FOURSOMES` · `PAR 4 · HCP 7`.

**Vibe phrases that should feel on-brand:**
- "Match Complete — Team Bunch wins 3 & 1"
- "Waiting for matchups to begin"
- "Draft is live"
- "Incorrect password" (toast)
- "Hosting: A4K92Z"

## Visual foundations

**Palette family.** Two greens (`#00432e` dark header / `#006747` workhorse), one almost-neon broadcast yellow (`#FBF308` — it's identical to `--masters-gold`; the variable is an alias), red `#CE1141` and blue `#004F9E` as *the* team colors, and a dangerous-but-rare `#C8A951` gold for eagles. White is the body background (originally cream `#F5F1E8` — the author switched to white "for a cleaner look" and that decision is baked in). Full tokens: `colors_and_type.css`.

**Type.** Azalea (custom OTF/TTF in `fonts/`) is a Masters-style display script — use only for the word "Smashters", modals labelled "Menu", splash text, and broadcast event names. **Trebuchet MS** is the system font; uppercase + letter-spaced is the default treatment for anything that looks like a label or header. **Georgia** is only for long prose (waiver, body legal, course-table inputs). No Inter, no Roboto, no system-ui.

**Backgrounds.** Body is solid white. Dark surfaces (header, splash, TV mode, slide-menu) use a three-stop diagonal gradient: `linear-gradient(160deg, #00432e 0%, #006747 40%, #00432e 100%)`. The broadcast spotlight adds a **rotated wallpaper of blurred DFGC crest stamps** at 4–8% opacity — this is the one "texture" motif in the system. No photos, no hand-drawn illustrations, no repeating patterns besides this crest wallpaper.

**Imagery tone.** B-roll is warm and green-dominant; the two logo crests are high-contrast (deep green + gold filigree + red accents). No grain, no photo backgrounds, no duotones. The DFGC crest is frequently shown semi-transparent as a watermark (`opacity: 0.18`) behind empty states and ticker strips.

**Animation.** Spare but tactile. Tab switches are 3D cube rotations (600ms, `cubic-bezier(0.4, 0.0, 0.2, 1)`). Buttons and score wheels respond to `:active` with `transform: scale(0.97)` + haptic vibration (`navigator.vibrate(10)`). Match wins trigger a confetti burst in the winning team's color + patterned haptic `[50,100,50]`. A drum-wheel score picker snaps with a 180ms spring + a tiny 1800Hz audio "click". Splash sequence: DFGC logo + "Presents" → Jacket video → Smashters wordmark over green gradient. No fade-throughs, no slow reveals — everything is crisp and broadcast-paced.

**Hover / press.** Hover on cards: `box-shadow` grows from `--card-shadow` to `--card-shadow-hover`. Hover on primary button: background darkens from `--masters-green` to `--masters-dark`. Press: `transform: scale(0.97); opacity: 0.9;` — scale-in-by-3% + 10% opacity dip is the universal tap response. Outline buttons invert colors on hover (green bg, white text).

**Borders.** Cards use shadows, not borders. Where borders exist: `1px solid #eee` (row dividers), `2px solid #ddd` (form inputs), `2px solid var(--masters-green)` (focus + selected chips), `3px solid var(--masters-yellow)` (tab nav divider — the broadcast accent line). Active tabs add `border-bottom: 5px solid var(--masters-red)`.

**Shadows.** Four canonical levels:
- `--card-shadow: 0 2px 8px rgba(0,0,0,0.1)` — resting
- `--card-shadow-hover: 0 4px 16px rgba(0,0,0,0.15)` — hover
- `--card-shadow-big: 0 4px 20px rgba(0,0,0,0.25)` — floating white cards on dark (TV mode)
- `--modal-shadow: 0 8px 32px rgba(0,0,0,0.3)` — modals, toast

No inner shadows except inside the drum-wheel picker (where they simulate a real slot-machine bezel).

**Corner radii.** `8px` is default, `12px` is "bigger card" (`--radius-lg`), `50%` is circles (avatars, hole dots, nav buttons), `999px` never — this system prefers squircle-to-rectangle over full pills.

**Transparency & blur.** Blur is *not* used (no `backdrop-filter`). Transparency appears in: the emboss-wallpaper crest stamps (4–8%), empty-state watermarks (18%), muted dividers (3–6% black), overlay scrims (50% black on modals, 40% on menus), and `rgba(255,255,255, X)` on text layered over the header gradient (60–85% depending on role).

**Layout rules.** Mobile-first; max content width `900px`. Sticky header + sticky bottom nav on mobile, tab nav on desktop. The broadcast (TV) mode is fixed-position fullscreen and rearranges on portrait vs landscape (`@media (orientation: portrait)`). Content padding: `16px` mobile, `24px` desktop. Grid gap is always `12px`.

**Hit targets.** 44×44 min on all touch controls. Hole-number dots on the scoring strip are 28×28 but kept inside a scrollable 44-tall strip.

**Cards.** White background, 8 or 12px radius, soft drop shadow, no border, no left-accent-stripe. Headers on cards are often a green-on-green bar with gold uppercase text (`settings-section-header`, `match-setup-header`).

## Iconography

**Approach:** Minimal. The brand leans on **logos + type**, not icons. When icons are needed the system reaches for inline SVG line-work at `stroke-width: 2`, rounded caps and joins. The bottom-nav icons (Leaderboard, Scoring, Matches, More) are the only reliable sprite set and are inlined directly in `index.html`. Unicode is used for `←` `→` `×` `·` `🔒`. **No emoji, no Lucide, no Heroicons, no icon font.**

The two logo crests (Smashters map + DFGC crest) do a lot of the work — they appear as:
- Header lockup (Smashters green map + DFGC mini crest on mobile right)
- Splash phase 1 (DFGC) and phase 2 (Smashters)
- Broadcast wallpaper (tiled blurred DFGC crests, `-15deg` rotation, 4–8% opacity)
- Empty state watermark (DFGC phone-size crest at 18% opacity)
- Scorecard centre column (Smashters logo between Team A / Team B total bars)
- Favicon + PWA icon (apple-touch-icon.png — solid green Smashters mark)

**Recommended icon set if you need more:** If a new screen genuinely needs symbolic icons, use **Lucide** (stroke 2, rounded, `lucide-react` or the CDN SVG sprite) to match the existing bottom-nav style. Flag substitutions to the user. Do not hand-roll SVGs.

**Asset inventory** (see `assets/` and `ui_kits/smashters/assets/`):
- `smashters-logo-green.png` — primary Smashters word-and-map mark (green on transparent)
- `smashters-logo.jpg` — secondary Smashters mark with yellow map fill (red flag)
- `DFGC Logo.png` — full DFGC heraldic crest (1800×1800-ish, PNG w/ white bg)
- `dfgc-logo-transparent.png` — same crest on transparent
- `Phone Size DFCG No Background.png` — cropped square DFGC crest for phone/watermark
- `apple-touch-icon.png` — 180px PWA icon

## Index

Root files:

- `README.md` — this file
- `SKILL.md` — portable skill prompt for Claude Code
- `colors_and_type.css` — all color + type tokens
- `fonts/Azalea.otf`, `fonts/Azalea.ttf` — display face
- `assets/images/…` — logos + brand marks
- `index.html` — the full production Smashters app, imported verbatim for reference. Search this when you need exact component markup.
- `Template.html` — **ignore** (stray Bunch Bets file from the same repo)
- `manifest.json`, `CNAME` — PWA + deploy config

Design system surface:

- `preview/` — swatch/specimen cards that render in the Design System tab
- `ui_kits/smashters/` — reusable JSX components + `index.html` interactive kit

## Caveats

- **Font substitution:** Azalea is included as a custom OTF/TTF (the author's file). It's a Masters-broadcast-style calligraphic script. If the file is ever missing, the nearest free Google Fonts match is **Cormorant SC** (for small-caps feel) or **Pinyon Script** (for calligraphic feel) — neither is perfect. Flag to user.
- **No component library / Figma:** everything is inline. The UI kit in `ui_kits/smashters/` is a faithful recreation of the live CSS, not an independent source of truth.
- **DFGC crest art** is a raster PNG (presumably DALL·E / commission). We do not regenerate it.
- **Sibling apps** `Bunch313131/BunchBets`, `Bunch313131/WorkCompanion`, `Bunch313131/nassau-app` have unrelated design systems — don't cross-reference.
