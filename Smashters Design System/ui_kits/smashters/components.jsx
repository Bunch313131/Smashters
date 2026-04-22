// Smashters UI kit — shared components
// Global-scope React (loaded via <script type="text/babel">).
// All components are exported to window at the bottom so other
// Babel script tags can import them.

const { useState, useEffect, useRef } = React;

// ─── Status bar ───────────────────────────────────────────────────
function StatusBar({ time = "2:47" }) {
  return (
    <div className="status-bar">
      <span>{time}</span>
      <span className="r"><span>●●●●</span><span>📶</span><span>100%</span></span>
    </div>
  );
}

// ─── App header ──────────────────────────────────────────────────
function AppHeader({ subtitle = "Dumpster Fire GC · 2026", onMenu }) {
  return (
    <header className="app-header">
      <button className="menu-btn" onClick={onMenu} aria-label="Menu">
        <span/><span/><span/>
      </button>
      <div style={{ textAlign: 'center', flex: 1 }}>
        <div className="logo">Smashters</div>
        <div className="sub">{subtitle}</div>
      </div>
      <img className="crest" src="assets/Phone Size DFCG No Background.png" alt="DFGC"/>
    </header>
  );
}

// ─── Tab nav ─────────────────────────────────────────────────────
function TabNav({ tabs, active, onChange }) {
  return (
    <nav className="tab-nav">
      {tabs.map(t => (
        <button
          key={t}
          className={`tab ${t === active ? 'active' : ''}`}
          onClick={() => onChange(t)}
        >{t}</button>
      ))}
    </nav>
  );
}

// ─── Section header bar ──────────────────────────────────────────
function SectionHeader({ title, right }) {
  return (
    <div className="section-header">
      <span>{title}</span>
      {right && <span className="right">{right}</span>}
    </div>
  );
}

// ─── Avatar (team-colored initials) ──────────────────────────────
function Avatar({ initials, team }) {
  return <div className={`avatar ${team}`}>{initials}</div>;
}

// ─── Match row (leaderboard row + schedule row) ──────────────────
function MatchRow({ teamA, teamB, status, statusTeam = 'as', thru }) {
  return (
    <div className="match-row">
      <div className="team">
        <Avatar initials={teamA.initials} team="a"/>
        <span className="player-name">{teamA.name}</span>
      </div>
      <div className={`match-status ${statusTeam}`}>{status}</div>
      <div className="match-vs">VS</div>
      <div className="match-thru">{thru != null ? <>THRU<b>{thru}</b></> : <>FINAL</>}</div>
      <div className="team r">
        <span className="player-name">{teamB.name}</span>
        <Avatar initials={teamB.initials} team="b"/>
      </div>
    </div>
  );
}

// ─── Team totals ─────────────────────────────────────────────────
function TeamTotals({ a, b }) {
  return (
    <div className="team-totals">
      <div className="col">
        <span className="name">Team Bunch</span>
        <span className="pts a">{a}</span>
      </div>
      <img className="vs-logo" src="assets/Phone Size DFCG No Background.png" alt=""/>
      <div className="col">
        <span className="name">Team Yeung</span>
        <span className="pts b">{b}</span>
      </div>
    </div>
  );
}

// ─── Button ──────────────────────────────────────────────────────
function Btn({ variant = 'primary', block, children, ...rest }) {
  return (
    <button
      className={`btn btn-${variant} ${block ? 'btn-block' : ''}`}
      onClick={(e) => {
        try { navigator.vibrate && navigator.vibrate(10); } catch (_) {}
        rest.onClick && rest.onClick(e);
      }}
    >
      {children}
    </button>
  );
}

// ─── Bottom nav ──────────────────────────────────────────────────
function BottomNav({ active, onChange }) {
  const items = [
    { id: 'Schedule', icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    )},
    { id: 'Leaderboard', icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="12" width="5" height="9"/><rect x="9.5" y="7" width="5" height="14"/><rect x="16" y="3" width="5" height="18"/></svg>
    )},
    { id: 'Scoring', icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><line x1="12" y1="2" x2="12" y2="12"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>
    )},
    { id: 'Matches', icon: (
      <svg viewBox="0 0 24 24"><circle cx="6" cy="7" r="3"/><circle cx="18" cy="7" r="3"/><path d="M6 14c-3 0-4 2-4 4v2h8"/><path d="M18 14c-3 0-4 2-4 4v2h8"/></svg>
    )},
    { id: 'More', icon: (
      <svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>
    )},
  ];
  return (
    <nav className="bottom-nav">
      {items.map(it => (
        <button
          key={it.id}
          className={`bn-tab ${it.id === active ? 'active' : ''}`}
          onClick={() => onChange(it.id)}
        >
          {it.icon}
          {it.id}
        </button>
      ))}
    </nav>
  );
}

// ─── Hole strip ──────────────────────────────────────────────────
function HoleStrip({ current = 8, played = 7, birdies = [2, 6], eagles = [4] }) {
  const holes = Array.from({ length: 18 }, (_, i) => i + 1);
  return (
    <div className="hole-strip">
      {holes.map(h => {
        const cls = ['hole-dot'];
        if (h === current) cls.push('current');
        else if (h <= played) cls.push('played');
        if (birdies.includes(h)) cls.push('birdie');
        if (eagles.includes(h)) cls.push('eagle');
        return <div key={h} className={cls.join(' ')}>{h}</div>;
      })}
    </div>
  );
}

// ─── Drum score picker ───────────────────────────────────────────
function DrumPicker({ hole = 8, par = 4, aScore = 3, bScore = 4 }) {
  const rel = (s) => {
    const d = s - par;
    if (d <= -2) return { cls: 'eagle', lbl: d === -2 ? 'EAGLE' : d === -3 ? 'ALBATROSS' : `${d}` };
    if (d === -1) return { cls: 'under', lbl: 'BIRDIE' };
    if (d === 0)  return { cls: '',     lbl: 'PAR' };
    if (d === 1)  return { cls: 'over', lbl: 'BOGEY' };
    return { cls: 'over', lbl: `+${d}` };
  };
  const a = rel(aScore), b = rel(bScore);
  return (
    <div className="drum">
      <div className="drum-head">
        <span className="hole">Hole {hole}</span>
        <span className="par">Par {par} · HCP 7</span>
      </div>
      <div className="wheels">
        <div className="wheel">
          <div className="who">Team A · Phil</div>
          <div className={`val ${a.cls}`}>{aScore}</div>
          <div className="relpar">{a.lbl}</div>
        </div>
        <div className="wheel">
          <div className="who">Team B · Ryan</div>
          <div className={`val ${b.cls}`}>{bScore}</div>
          <div className="relpar">{b.lbl}</div>
        </div>
      </div>
    </div>
  );
}

// ─── Card wrapper ────────────────────────────────────────────────
function Card({ header, headerRight, children }) {
  return (
    <div className="card">
      {header && <SectionHeader title={header} right={headerRight}/>}
      {children}
    </div>
  );
}

// ─── Empty state with watermark ──────────────────────────────────
function EmptyState({ message }) {
  return (
    <div className="empty-state">
      <div className="wm">
        <img src="assets/Phone Size DFCG No Background.png" alt=""/>
      </div>
      <div className="msg">{message}</div>
    </div>
  );
}

// ─── Toast ───────────────────────────────────────────────────────
function Toast({ text, kind = 'ok' }) {
  if (!text) return null;
  return <div className={`toast ${kind === 'err' ? 'err' : kind === 'info' ? 'info' : ''}`}>{text}</div>;
}

Object.assign(window, {
  StatusBar, AppHeader, TabNav, SectionHeader,
  Avatar, MatchRow, TeamTotals, Btn, BottomNav,
  HoleStrip, DrumPicker, Card, EmptyState, Toast,
});
