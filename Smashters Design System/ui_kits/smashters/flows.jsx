// Smashters UI kit — full-screen flows (Splash, Waiver, Host modal)
// These are higher-level components composed from components.jsx primitives.

const { useState: _useState, useEffect: _useEffect } = React;

function SplashScreen({ phase = 1 }) {
  // phase 1 — DFGC presents ;  phase 2 — Smashters title reveal
  if (phase === 1) {
    return (
      <div className="splash">
        <img className="crest" src="assets/DFGC Logo.png" alt="DFGC"/>
        <div className="presents">presents</div>
      </div>
    );
  }
  return (
    <div className="splash">
      <div className="title">Smashters</div>
      <div className="year">Dumpster Fire GC · 2026</div>
    </div>
  );
}

function WaiverScreen({ onAccept, onDecline }) {
  return (
    <div className="waiver-screen">
      <div className="hero">
        <img src="assets/Phone Size DFCG No Background.png" alt=""/>
        <div className="t">Smashters</div>
        <div className="s">Welcome to the Tournament</div>
      </div>
      <div className="body">
        <h3>Waiver of Responsibility</h3>
        <p>By tapping "I Accept," you acknowledge that the Dumpster Fire Golf Club (DFGC) is not responsible for any damage to your ego, your handicap, your marriage, or your dignity.</p>
        <p>You voluntarily assume all risks including but not limited to: devastating shanks, questionable side bets, unsolicited swing advice, and decisions that seemed brilliant on the 10th tee.</p>
        <p>What happens at DFGC stays at DFGC. Unless it's on video.</p>
      </div>
      <div className="footer">
        <Btn variant="outline" onClick={onDecline}>Nope</Btn>
        <div style={{ flex: 1 }}/>
        <Btn variant="primary" onClick={onAccept}>I Accept</Btn>
      </div>
    </div>
  );
}

function JoinHostModal({ onJoin, onHost, onClose }) {
  const [tab, setTab] = _useState('join');
  const [code, setCode] = _useState('');
  const [name, setName] = _useState('');
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={onClose}>
      <div style={{ background: '#fff', borderRadius: 12, width: '100%', boxShadow: 'var(--modal-shadow)', overflow: 'hidden' }} onClick={(e) => e.stopPropagation()}>
        <SectionHeader title={tab === 'join' ? 'Join a Game' : 'Host a Game'} right={<span onClick={onClose} style={{ cursor: 'pointer' }}>×</span>}/>
        <div style={{ padding: 14 }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
            <Btn variant={tab === 'join' ? 'primary' : 'outline'} onClick={() => setTab('join')}>Join</Btn>
            <Btn variant={tab === 'host' ? 'primary' : 'outline'} onClick={() => setTab('host')}>Host</Btn>
          </div>
          {tab === 'join' ? (
            <>
              <div className="field">
                <label>Room Code</label>
                <input className="code" value={code} placeholder="A4K92Z" maxLength="6" onChange={e => setCode(e.target.value.toUpperCase())}/>
              </div>
              <div className="field">
                <label>Your Name</label>
                <input value={name} placeholder="Phil Mickelson" onChange={e => setName(e.target.value)}/>
              </div>
              <Btn block onClick={() => onJoin({ code, name })}>Join Game</Btn>
            </>
          ) : (
            <>
              <div className="field">
                <label>Event Name</label>
                <input placeholder="Pinehurst 2026" defaultValue="Pinehurst 2026"/>
              </div>
              <div className="field">
                <label>Host Password</label>
                <input type="password" placeholder="••••••"/>
              </div>
              <Btn block onClick={onHost}>Host Live Game</Btn>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SplashScreen, WaiverScreen, JoinHostModal });
