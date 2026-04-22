# Smashters UI kit

Reusable JSX recreation of the Smashters phone app.

## Files
- `index.html` — clickable entry point (phone-frame mockup, splash → waiver → app shell)
- `kit.css` — full stylesheet (imports `colors_and_type.css` + local Azalea @font-face)
- `components.jsx` — low-level primitives: `StatusBar`, `AppHeader`, `TabNav`, `SectionHeader`, `Avatar`, `MatchRow`, `TeamTotals`, `Btn`, `BottomNav`, `HoleStrip`, `DrumPicker`, `Card`, `EmptyState`, `Toast`
- `flows.jsx` — full-screen moments: `SplashScreen`, `WaiverScreen`, `JoinHostModal`
- `app.jsx` — composition: click-through from splash → waiver → tabbed app (Schedule, Leaderboard, Scoring, Players)

## What the click-thru does
1. DFGC splash ("presents") → Smashters title reveal (auto-advances, ~1.5s each).
2. Waiver of Responsibility — tap **I Accept** to enter the app.
3. The **Leaderboard** tab lands first with live team totals, active match rows and a completed match.
4. **Scoring** tab has a live hole strip + a drum-wheel picker. +/− buttons mutate the score; **Save · Next Hole** advances hole and fires a toast (with haptic on supported devices).
5. **Schedule / Players** show populated mock data. **Individual / Matches** show the watermarked empty state.
6. Burger menu / **More** opens a Join/Host modal with the room-code input style.

## What's faithful
- Exact Masters green + broadcast-gold palette
- Azalea for logo + splash + waiver hero only
- Trebuchet MS tracked-caps section headers (gold on green)
- 3px gold underline + red 5px active tab underline
- Match row grid with team colors, AS / UP / & status shorthand
- DFGC crest as header glyph, splash mark, empty-state watermark (18%), scoreboard center
- Primary/outline/danger buttons + `scale(0.97)` active state + `navigator.vibrate`

## What's intentionally left blank
- Firebase realtime sync (the real app persists through Firebase)
- Draft screen + TV/broadcast modes (out of scope for a kit — the real app handles these via `?tv=1`)
- Settings / password config flows
- Handicap + Stableford math (mocked)

## Reusing the kit
Drop any component into a new screen:

```jsx
<Card header="Day 3 · Singles" headerRight="8 MATCHES">
  <MatchRow teamA={{ initials: 'JS', name: 'Jon' }} teamB={{ initials: 'MY', name: 'Mike' }} status="AS" statusTeam="as" thru={7}/>
</Card>
```
