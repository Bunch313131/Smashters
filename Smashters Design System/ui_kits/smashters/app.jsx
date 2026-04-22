// Smashters UI kit — main app composition
// Shows: splash → waiver → main shell with tab nav + 4 screens.

const { useState, useEffect } = React;

const TABS = ['Schedule', 'Leaderboard', 'Individual', 'Scoring', 'Matches', 'Players'];

function ScheduleScreen() {
  return (
    <div className="screen">
      <Card header="Day 1 · Foursomes" headerRight="4 MATCHES">
        <MatchRow
          teamA={{ initials: 'PM', name: 'Phil / Nick' }}
          teamB={{ initials: 'RJ', name: 'Ryan / Jake' }}
          status="1 UP" statusTeam="a" thru={14}
        />
        <MatchRow
          teamA={{ initials: 'DB', name: 'Dan / Bill' }}
          teamB={{ initials: 'MT', name: 'Mike / Tom' }}
          status="AS" statusTeam="as" thru={9}
        />
        <MatchRow
          teamA={{ initials: 'JS', name: 'Jon / Sam' }}
          teamB={{ initials: 'CK', name: 'Chris / Kyle' }}
          status="2 UP" statusTeam="b" thru={11}
        />
        <MatchRow
          teamA={{ initials: 'TW', name: 'Tiger / Woz' }}
          teamB={{ initials: 'LB', name: 'Luke / Brooks' }}
          status="3 & 1" statusTeam="a"
        />
      </Card>
      <Card header="Day 2 · Four-Ball" headerRight="4 MATCHES">
        <EmptyState message="Matchups revealed day of play"/>
      </Card>
    </div>
  );
}

function LeaderboardScreen() {
  return (
    <div className="screen">
      <TeamTotals a="8½" b="7½"/>
      <Card header="Live Matches" headerRight="DAY 1 · FOURSOMES">
        <MatchRow
          teamA={{ initials: 'PM', name: 'Phil / Nick' }}
          teamB={{ initials: 'RJ', name: 'Ryan / Jake' }}
          status="1 UP" statusTeam="a" thru={14}
        />
        <MatchRow
          teamA={{ initials: 'DB', name: 'Dan / Bill' }}
          teamB={{ initials: 'MT', name: 'Mike / Tom' }}
          status="AS" statusTeam="as" thru={9}
        />
        <MatchRow
          teamA={{ initials: 'JS', name: 'Jon / Sam' }}
          teamB={{ initials: 'CK', name: 'Chris / Kyle' }}
          status="2 UP" statusTeam="b" thru={11}
        />
      </Card>
      <Card header="Completed" headerRight="1 MATCH">
        <MatchRow
          teamA={{ initials: 'TW', name: 'Tiger / Woz' }}
          teamB={{ initials: 'LB', name: 'Luke / Brooks' }}
          status="3 & 1" statusTeam="a"
        />
      </Card>
    </div>
  );
}

function ScoringScreen({ onToast }) {
  const [hole, setHole] = useState(8);
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const pars = [4, 3, 5, 4, 4, 3, 4, 4, 5, 4, 4, 3, 5, 4, 4, 4, 3, 4];
  const par = pars[hole - 1];
  const save = () => {
    onToast && onToast(`Hole ${hole} · Saved`, 'ok');
    setHole(h => Math.min(18, h + 1));
  };
  return (
    <div className="screen">
      <Card>
        <HoleStrip current={hole} played={hole - 1} birdies={[2, 6]} eagles={[4]}/>
      </Card>
      <DrumPicker hole={hole} par={par} aScore={a} bScore={b}/>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, margin: '6px 0' }}>
        <Btn variant="outline" onClick={() => setA(s => Math.max(1, s - 1))}>A −</Btn>
        <Btn variant="outline" onClick={() => setA(s => s + 1)}>A +</Btn>
        <Btn variant="outline" onClick={() => setB(s => Math.max(1, s - 1))}>B −</Btn>
        <Btn variant="outline" onClick={() => setB(s => s + 1)}>B +</Btn>
      </div>
      <Btn variant="primary" block onClick={save}>Save · Next Hole</Btn>
      <div className="h-gap-10"/>
      <Btn variant="danger" block onClick={() => onToast(`Hole ${hole} cleared`, 'err')}>Clear Hole {hole} Scores</Btn>
    </div>
  );
}

function PlayersScreen() {
  const roster = [
    { t: 'a', name: 'Phil Mickelson', hcp: '12.4' },
    { t: 'a', name: 'Nick Faldo',     hcp: '8.1'  },
    { t: 'a', name: 'Dan Bunch',      hcp: '15.2' },
    { t: 'a', name: 'Bill Murray',    hcp: '22.0' },
    { t: 'b', name: 'Ryan Reynolds',  hcp: '10.9' },
    { t: 'b', name: 'Jake Peralta',   hcp: '14.6' },
    { t: 'b', name: 'Mike Yeung',     hcp: '6.3'  },
    { t: 'b', name: 'Tom Brady',      hcp: '18.8' },
  ];
  return (
    <div className="screen">
      <Card header="Team Bunch" headerRight="4 PLAYERS">
        {roster.filter(p => p.t === 'a').map(p => (
          <div className="match-row" key={p.name} style={{ gridTemplateColumns: '44px 1fr 60px' }}>
            <Avatar initials={p.name.split(' ').map(n => n[0]).join('')} team="a"/>
            <span className="player-name">{p.name}</span>
            <span className="match-thru">HCP<b>{p.hcp}</b></span>
          </div>
        ))}
      </Card>
      <Card header="Team Yeung" headerRight="4 PLAYERS">
        {roster.filter(p => p.t === 'b').map(p => (
          <div className="match-row" key={p.name} style={{ gridTemplateColumns: '44px 1fr 60px' }}>
            <Avatar initials={p.name.split(' ').map(n => n[0]).join('')} team="b"/>
            <span className="player-name">{p.name}</span>
            <span className="match-thru">HCP<b>{p.hcp}</b></span>
          </div>
        ))}
      </Card>
    </div>
  );
}

function App() {
  const [stage, setStage] = useState(() => localStorage.getItem('sm.stage') || 'splash1');
  const [tab, setTab] = useState('Leaderboard');
  const [bottomTab, setBottomTab] = useState('Leaderboard');
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => { localStorage.setItem('sm.stage', stage); }, [stage]);

  useEffect(() => {
    if (stage === 'splash1') { const t = setTimeout(() => setStage('splash2'), 1400); return () => clearTimeout(t); }
    if (stage === 'splash2') { const t = setTimeout(() => setStage('waiver'), 1600); return () => clearTimeout(t); }
  }, [stage]);

  const showToast = (text, kind = 'ok') => {
    setToast({ text, kind });
    setTimeout(() => setToast(null), 1800);
  };

  const syncTabs = (t) => { setTab(t); setBottomTab(t); };

  return (
    <div className="stage">
      <div className="phone">
        <div className="phone-screen">
          <StatusBar/>
          {stage === 'app' && (
            <>
              <AppHeader onMenu={() => setModal(true)}/>
              <TabNav tabs={TABS} active={tab} onChange={syncTabs}/>
              <div className="content">
                {tab === 'Schedule'    && <ScheduleScreen/>}
                {tab === 'Leaderboard' && <LeaderboardScreen/>}
                {tab === 'Individual'  && <div className="screen"><EmptyState message="Individual stats — drafted after Day 1"/></div>}
                {tab === 'Scoring'     && <ScoringScreen onToast={showToast}/>}
                {tab === 'Matches'     && <div className="screen"><EmptyState message="Edit matchups from host device"/></div>}
                {tab === 'Players'     && <PlayersScreen/>}
              </div>
              <BottomNav active={bottomTab === 'Scoring' ? 'Scoring' : bottomTab === 'Matches' ? 'Matches' : bottomTab === 'Schedule' ? 'Schedule' : bottomTab === 'Leaderboard' ? 'Leaderboard' : 'More'} onChange={(t) => {
                if (t === 'More') setModal(true);
                else syncTabs(t);
              }}/>
            </>
          )}

          {(stage === 'splash1' || stage === 'splash2') && <SplashScreen phase={stage === 'splash1' ? 1 : 2}/>}
          {stage === 'waiver' && (
            <WaiverScreen
              onAccept={() => { setStage('app'); showToast('Welcome to the Tournament', 'ok'); }}
              onDecline={() => showToast('Cannot proceed without acceptance', 'err')}
            />
          )}
          {modal && stage === 'app' && (
            <JoinHostModal
              onJoin={({ code, name }) => {
                if (!code || code.length < 4) { showToast('Incorrect code', 'err'); return; }
                setModal(false);
                showToast(`Joined · ${code}`, 'ok');
              }}
              onHost={() => { setModal(false); showToast('Hosting · A4K92Z', 'info'); }}
              onClose={() => setModal(false)}
            />
          )}
          <Toast text={toast?.text} kind={toast?.kind}/>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
