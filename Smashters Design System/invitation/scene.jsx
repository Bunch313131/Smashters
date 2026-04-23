// Smashters 2026 invitation — unboxing scene.
// One green envelope, a DFGC wax seal, and the invitation card inside.
// All timing is keyframed against the global playhead via useTime().

const { useState: _us, useEffect: _ue, useRef: _ur } = React;

// ─── Background: dark Masters gradient + tiled DFGC crest wallpaper ─
function BgWallpaper() {
  const t = useTime();
  const drift = interpolate([0, 17], [0, -40], Easing.linear)(t);
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at center, #0a5638 0%, #00432e 45%, #001a10 100%)',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: '-10%',
        backgroundImage: "url('assets/Phone Size DFCG No Background.png')",
        backgroundSize: '180px',
        opacity: 0.06,
        transform: `rotate(-15deg) translateY(${drift}px)`,
      }}/>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)',
      }}/>
    </div>
  );
}

// ─── Opening headline: fades in then out before envelope drops ─────
function OpeningCopy() {
  const t = useTime();
  const opacity = interpolate([0, 0.4, 1.5, 2.0], [0, 1, 1, 0], Easing.easeInOutQuad)(t);
  if (opacity < 0.01) return null;
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity,
      pointerEvents: 'none',
    }}>
      <div style={{
        fontFamily: "'Trebuchet MS', sans-serif",
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 6,
        textTransform: 'uppercase',
        color: 'rgba(251, 243, 8, 0.85)',
      }}>Board of Governors · Dumpster Fire Golf Club</div>
      <div style={{
        fontFamily: "'Azalea', Georgia, serif",
        fontSize: 56,
        letterSpacing: 3,
        color: '#FBF308',
        marginTop: 10,
        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
      }}>A Delivery Has Arrived</div>
    </div>
  );
}

// ─── Envelope + seal + card ─────────────────────────────────────────
// Overall shot choreography:
//   1.6s – 3.2s : envelope drops, settles flat
//   3.4s – 5.4s : wax seal lifts off, flap rotates open
//   5.6s – 8.6s : invitation card rises straight up out of envelope
//   8.6s –11.0s : card scales up and centers in frame; envelope fades
//  11.0s –15.0s : card text fades in line by line
//  15.0s –17.0s : RSVP seal pulse; final hold
function EnvelopeCard() {
  const t = useTime();

  // ── Envelope drop + settle ───────────────────────────────────
  const envY      = interpolate([1.6, 2.8, 3.2], [-560, 30, 0], [Easing.easeOutQuad, Easing.easeOutBack])(t);
  const envOpaIn  = interpolate([1.5, 2.0], [0, 1], Easing.easeOutQuad)(t);

  // ── Envelope exit: fades + slides away once card has risen ──
  const envShiftY = interpolate([8.6, 10.5], [0, 260], Easing.easeInOutCubic)(t);
  const envShiftX = interpolate([8.6, 10.5], [0, -260], Easing.easeInOutCubic)(t);
  const envRotEx  = interpolate([8.6, 10.5], [0, -18], Easing.easeInOutCubic)(t);
  const envOpaOut = interpolate([8.6, 10.5], [1, 0], Easing.easeInOutQuad)(t);

  // ── Flap open — scaleY 1→-1 so clip path inverts (tip down→up) ──
  const flapScale = interpolate([3.4, 5.4], [1, -1], Easing.easeInOutCubic)(t);

  // ── Seal lifting off, tumbling, fading ──────────────────────
  const sealLift   = interpolate([3.4, 3.8], [0, -14], Easing.easeOutQuad)(t);
  const sealTumble = interpolate([3.8, 4.6], [0, 220], Easing.easeInQuad)(t);
  const sealRot    = interpolate([3.6, 4.6], [0, 65], Easing.easeInQuad)(t);
  const sealFade   = interpolate([4.2, 4.8], [1, 0], Easing.easeOutQuad)(t);

  // ── Card: single Y keyframe. Anchored to stage center via left/top 50%. ──
  //  phase A (5.6→8.6): rise out of envelope from y=0 to y=-200  (peek then pop out)
  //  phase B (8.6→11.0): return to y=0 and scale up — center-of-stage big view
  const cardY     = interpolate([5.6, 8.6, 11.0], [0, -200, 0], [Easing.easeOutCubic, Easing.easeInOutCubic])(t);
  const cardOpa   = interpolate([3.8, 4.6], [0, 1], Easing.easeOutQuad)(t);
  const cardScale = interpolate([8.6, 11.0], [1.0, 2.2], Easing.easeInOutCubic)(t);

  // Card shadow grows as it rises
  const cardShadow = interpolate([5.6, 8.6], [0.2, 0.55], Easing.easeInOutQuad)(t);

  // Background dim while card is featured
  const focusDim = interpolate([8.6, 10.8], [0, 0.6], Easing.easeInOutQuad)(t);

  const envW = 460;
  const envH = 330;
  const flapH = envH * 0.55;

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      perspective: '2000px',
    }}>
      {/* Focus dim BEHIND card but OVER background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.9)',
        opacity: focusDim,
        pointerEvents: 'none',
        zIndex: 1,
      }}/>

      {/* ── Envelope shell (back + flap + seal only) ── */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: envW,
        height: envH,
        marginLeft: -envW / 2,
        marginTop: -envH / 2,
        opacity: envOpaIn * envOpaOut,
        transform: `translate(${envShiftX}px, ${envY + envShiftY}px) rotate(${envRotEx}deg)`,
        transformStyle: 'preserve-3d',
        filter: `drop-shadow(0 18px 40px rgba(0,0,0,0.6))`,
        zIndex: 2,
      }}>

        {/* Envelope body (back) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(160deg, #0a5e40 0%, #006747 40%, #00432e 100%)',
          borderRadius: 10,
          boxShadow: 'inset 0 0 0 2px rgba(251, 243, 8, 0.08), inset 0 0 40px rgba(0,0,0,0.35)',
          overflow: 'hidden',
        }}>
          {/* Envelope pocket shading to sell depth (bottom edge darker) */}
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0, height: '30%',
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)',
          }}/>
        </div>

        {/* Envelope FLAP — scaleY 1→-1 pivoting at the seam (bottom center).
            The clip-path triangle automatically inverts as scaleY goes negative,
            so the tip goes from pointing down (closed) to pointing up (open).
            No 3D needed — filter on parent flattens 3D contexts anyway. */}
        <div style={{
          position: 'absolute',
          left: 0, right: 0, top: 0,
          height: flapH,
          transformOrigin: 'top center',
          transform: `scaleY(${flapScale})`,
          zIndex: (t < 5.5) ? 5 : -1,
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, #006747 0%, #00432e 100%)',
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            boxShadow: 'inset 0 -4px 12px rgba(0,0,0,0.4)',
          }}>
            {/* Gold edge highlight */}
            <div style={{
              position: 'absolute',
              inset: 0,
              clipPath: 'polygon(2% 0, 98% 0, 50% 96%, 48% 90%, 7% 5%, 93% 5%, 52% 90%)',
              background: 'linear-gradient(180deg, rgba(251, 243, 8, 0.4) 0%, rgba(251, 243, 8, 0.1) 100%)',
              mixBlendMode: 'screen',
              opacity: 0.7,
            }}/>
          </div>
        </div>

      </div>

      {/* ── Invitation CARD — separate from envelope, same anchor ── */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: envW - 40,
        height: envH - 10,
        marginLeft: -(envW - 40) / 2,
        marginTop: -(envH - 10) / 2,
        transform: `translateY(${envY + cardY}px) scale(${cardScale})`,
        transformOrigin: 'center center',
        opacity: cardOpa,
        zIndex: (t < 9.2) ? 3 : 5,
        filter: `drop-shadow(0 18px 40px rgba(0,0,0,${cardShadow}))`,
      }}>
        <InvitationCard />
      </div>

      {/* Wax seal — rendered as sibling above EnvelopeCoverMask (zIndex 5) */}
      <WaxSeal envW={envW} envH={envH} flapH={flapH} />

      {/* Clip mask: hide card where it's still "inside" envelope before rising.
          Implemented by a second envelope body drawn ON TOP of the card
          but only in the lower half of the envelope's position, up until
          card has risen above. */}
      <EnvelopeCoverMask envW={envW} envH={envH} flapH={flapH} />
    </div>
  );
}

// Wax seal rendered outside the envelope shell so it isn't clipped by
// EnvelopeCoverMask (which lives at zIndex 4). Positioned to match the
// flap-seam location of the envelope and animates independently.
function WaxSeal({ envW, envH, flapH }) {
  const t = useTime();
  if (t < 1.5) return null;

  const envY     = interpolate([1.6, 2.8, 3.2], [-560, 30, 0], [Easing.easeOutQuad, Easing.easeOutBack])(t);
  const envOpaIn = interpolate([1.5, 2.0], [0, 1], Easing.easeOutQuad)(t);

  const sealLift   = interpolate([3.4, 3.8], [0, -14], Easing.easeOutQuad)(t);
  const sealTumble = interpolate([3.8, 4.6], [0, 220], Easing.easeInQuad)(t);
  const sealRot    = interpolate([3.6, 4.6], [0, 65], Easing.easeInQuad)(t);
  const sealFade   = interpolate([4.2, 4.8], [1, 0], Easing.easeOutQuad)(t);

  if (sealFade < 0.01 && t > 4.8) return null;

  // Seal center Y from stage center when envelope is at rest (envY=0):
  //   envelope top from center = -envH/2
  //   seal sits at top: flapH-4 within envelope, with translate(-50%,-50%) centering it
  const sealRestY = -envH / 2 + flapH - 4 - 43;

  return (
    <div style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 86, height: 86,
      marginLeft: -43,
      marginTop: sealRestY,
      opacity: envOpaIn * sealFade,
      transform: `translateY(${envY + sealLift + sealTumble}px) rotate(${sealRot}deg)`,
      zIndex: 5,
      filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.55))',
      pointerEvents: 'none',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 35% 30%, #aa1436 0%, #8a0d28 55%, #5a0818 100%)',
        borderRadius: '50%',
        boxShadow: 'inset -4px -5px 10px rgba(0,0,0,0.55), inset 3px 4px 8px rgba(255,255,255,0.28)',
      }}/>
      <div style={{
        position: 'absolute', inset: 5,
        border: '1px dashed rgba(255,220,120,0.35)',
        borderRadius: '50%',
      }}/>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Azalea', 'Georgia', serif",
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 22,
        letterSpacing: 1,
        color: '#FBF308',
        textShadow: '0 1px 2px rgba(0,0,0,0.6)',
      }}>DFGC</div>
    </div>
  );
}

// Draws an opaque envelope body overlay that covers the card where it's
// still "inside" the envelope pocket. Positioned identically to the envelope
// back, but rendered AFTER the card so it visually occludes the card's lower
// half. Only shown while envelope is still on stage.
function EnvelopeCoverMask({ envW, envH, flapH }) {
  const t = useTime();
  if (t < 1.5 || t > 9.2) return null;

  const envY      = interpolate([1.6, 2.8, 3.2], [-560, 30, 0], [Easing.easeOutQuad, Easing.easeOutBack])(t);
  const envShiftY = interpolate([8.6, 10.5], [0, 260], Easing.easeInOutCubic)(t);
  const envShiftX = interpolate([8.6, 10.5], [0, -260], Easing.easeInOutCubic)(t);
  const envRotEx  = interpolate([8.6, 10.5], [0, -18], Easing.easeInOutCubic)(t);
  const envOpaIn  = interpolate([1.5, 2.0], [0, 1], Easing.easeOutQuad)(t);
  const envOpaOut = interpolate([8.6, 10.5], [1, 0], Easing.easeInOutQuad)(t);

  // Cover rectangle: lower portion of envelope (from flapH down to bottom)
  return (
    <div style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: envW,
      height: envH,
      marginLeft: -envW / 2,
      marginTop: -envH / 2,
      opacity: envOpaIn * envOpaOut,
      transform: `translate(${envShiftX}px, ${envY + envShiftY}px) rotate(${envRotEx}deg)`,
      zIndex: 4,
      pointerEvents: 'none',
    }}>
      <div style={{
        position: 'absolute',
        left: 0, right: 0,
        top: flapH,
        bottom: 0,
        background: 'linear-gradient(180deg, #006747 0%, #00432e 100%)',
        borderRadius: '0 0 10px 10px',
        boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.35)',
      }}>
        {/* Subtle pocket rim shadow */}
        <div style={{
          position: 'absolute', left: 8, right: 8, top: 0, height: 3,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.4), transparent)',
        }}/>
      </div>
    </div>
  );
}

// ─── The invitation card itself ─────────────────────────────────────
function InvitationCard() {
  const t = useTime();

  // Content reveals progressively, but starts as soon as card begins rising
  // so you can see something coming out of the envelope.
  const stagger = (i) => {
    const start = 6.4 + i * 0.45;
    return interpolate([start, start + 0.55], [0, 1], Easing.easeOutQuad)(t);
  };
  const yLift = (i) => {
    const start = 6.4 + i * 0.45;
    return interpolate([start, start + 0.55], [4, 0], Easing.easeOutQuad)(t);
  };

  const rsvpGlow = interpolate([14.0, 15.0, 16.5, 17.0], [0, 1, 1, 0.6], Easing.easeInOutQuad)(t);

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, #fdfcf6 0%, #f6f1e3 100%)',
      borderRadius: 6,
      padding: '14px 18px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      color: '#1a1a1a',
      overflow: 'hidden',
      boxShadow:
        'inset 0 0 0 1px rgba(251, 243, 8, 0.45), inset 0 0 0 3px rgba(0, 103, 71, 0.5), inset 0 0 0 4px rgba(251, 243, 8, 0.2)',
    }}>
      {/* Corner filigree — tiny gold accents */}
      {['tl','tr','bl','br'].map(corner => (
        <div key={corner} style={{
          position: 'absolute',
          width: 18, height: 18,
          border: '1.2px solid #006747',
          borderColor: corner.includes('t') ? '#006747' : 'transparent',
          ...(corner === 'tl' && { top: 6, left: 6, borderRight: 'none', borderBottom: 'none' }),
          ...(corner === 'tr' && { top: 6, right: 6, borderLeft: 'none', borderBottom: 'none', borderColor: '#006747 #006747 transparent transparent' }),
          ...(corner === 'bl' && { bottom: 6, left: 6, borderRight: 'none', borderTop: 'none', borderColor: 'transparent transparent #006747 #006747' }),
          ...(corner === 'br' && { bottom: 6, right: 6, borderLeft: 'none', borderTop: 'none', borderColor: 'transparent #006747 #006747 transparent' }),
        }}/>
      ))}

      <img
        src="assets/smashters-logo-green.png"
        style={{
          width: 58,
          height: 58,
          objectFit: 'contain',
          marginTop: 2,
          opacity: stagger(0),
          transform: `translateY(${yLift(0)}px)`,
        }}
      />

      <div style={{
        fontFamily: "'Georgia', serif",
        fontStyle: 'italic',
        fontSize: 7.5,
        color: '#006747',
        marginTop: 4,
        opacity: stagger(1),
        transform: `translateY(${yLift(1)}px)`,
        textAlign: 'center',
        lineHeight: 1.35,
      }}>
        The Board of Governors<br/>
        of the
      </div>

      <div style={{
        fontFamily: "'Azalea', Georgia, serif",
        fontSize: 15,
        letterSpacing: 1,
        color: '#00432e',
        marginTop: 2,
        opacity: stagger(2),
        transform: `translateY(${yLift(2)}px)`,
        textAlign: 'center',
        lineHeight: 1.05,
      }}>
        Dumpster Fire Golf Club
      </div>

      <div style={{
        fontFamily: "'Georgia', serif",
        fontStyle: 'italic',
        fontSize: 7,
        color: '#2a2a2a',
        marginTop: 6,
        opacity: stagger(3),
        transform: `translateY(${yLift(3)}px)`,
        textAlign: 'center',
        lineHeight: 1.4,
      }}>
        respectfully requests<br/>
        the honor of your presence at the
      </div>

      <div style={{
        fontFamily: "'Azalea', Georgia, serif",
        fontSize: 12,
        color: '#00432e',
        marginTop: 4,
        opacity: stagger(4),
        transform: `translateY(${yLift(4)}px)`,
        letterSpacing: 1,
        textAlign: 'center',
        lineHeight: 1.1,
      }}>
        Two Thousand and Twenty-Six<br/>
        Smashters Tournament
      </div>

      <div style={{
        fontFamily: "'Georgia', serif",
        fontStyle: 'italic',
        fontSize: 7,
        color: '#2a2a2a',
        marginTop: 6,
        opacity: stagger(5),
        transform: `translateY(${yLift(5)}px)`,
        textAlign: 'center',
        lineHeight: 1.4,
      }}>
        to be held at
      </div>
      <div style={{
        fontFamily: "'Azalea', Georgia, serif",
        fontSize: 12,
        color: '#006747',
        marginTop: 1,
        letterSpacing: 0.5,
        opacity: stagger(5),
        transform: `translateY(${yLift(5)}px)`,
        textAlign: 'center',
      }}>
        El Macero Country Club
      </div>
      <div style={{
        fontFamily: "'Georgia', serif",
        fontStyle: 'italic',
        fontSize: 7,
        color: '#2a2a2a',
        marginTop: 4,
        opacity: stagger(6),
        transform: `translateY(${yLift(6)}px)`,
        textAlign: 'center',
        lineHeight: 1.4,
      }}>
        the fourteenth through the sixteenth<br/>
        of May
      </div>

      <div style={{
        width: '42%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, #006747 20%, #FBF308 50%, #006747 80%, transparent)',
        margin: '6px 0 3px',
        opacity: stagger(7),
      }}/>

      <div style={{
        fontFamily: "'Georgia', serif",
        fontStyle: 'italic',
        fontSize: 6.5,
        color: '#2a2a2a',
        opacity: stagger(7),
        transform: `translateY(${yLift(7)}px)`,
        textAlign: 'center',
        lineHeight: 1.4,
      }}>
        Andrew Donald, Ian Bolnik, and Brian Bunch
      </div>
      <div style={{
        fontFamily: "'Trebuchet MS', sans-serif",
        fontWeight: 'bold',
        fontSize: 5.5,
        letterSpacing: 2.5,
        textTransform: 'uppercase',
        color: '#666',
        marginTop: 2,
        opacity: stagger(7),
      }}>Chairmen</div>

      <div style={{
        marginTop: 'auto',
        fontFamily: "'Trebuchet MS', sans-serif",
        fontSize: 6.5,
        letterSpacing: 3,
        fontWeight: 'bold',
        color: '#006747',
        padding: '3px 12px',
        border: '1px solid #006747',
        borderRadius: 2,
        opacity: Math.max(stagger(8), 0),
        transform: `translateY(${yLift(8)}px)`,
        boxShadow: `0 0 ${rsvpGlow * 18}px rgba(251, 243, 8, ${rsvpGlow * 0.85})`,
        background: `rgba(251, 243, 8, ${rsvpGlow * 0.2})`,
      }}>
        R · S · V · P
      </div>
    </div>
  );
}

function InvitationScene() {
  return (
    <div data-screen-label="01 Invitation — Unboxing Video" style={{ position: 'absolute', inset: 0 }}>
      <BgWallpaper />
      <OpeningCopy />
      <EnvelopeCard />
    </div>
  );
}

Object.assign(window, {
  InvitationScene, BgWallpaper, OpeningCopy, EnvelopeCard, InvitationCard, WaxSeal, EnvelopeCoverMask,
});
