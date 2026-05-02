import profilePic from '../assets/prof1.png'

export default function Hero() {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '100px 48px 60px',
      gap: 60,
      position: 'relative',
      zIndex: 1,
    }}>
      {/* LEFT */}
      <div>
        {/* STATUS BADGE */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)',
          border: '1px solid var(--border)', padding: '6px 14px',
          marginBottom: 28, letterSpacing: '0.08em',
          animation: 'fadeInUp 0.6s ease 0.1s forwards', opacity: 0,
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: 'var(--accent)', display: 'inline-block',
            animation: 'pulse 2s infinite',
          }} />
          Available for hire · Nairobi, KE 🇰🇪
        </div>

        {/* NAME */}
        <h1 style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(64px, 8vw, 110px)',
          lineHeight: 0.9,
          color: 'var(--white)',
          letterSpacing: '0.02em',
          marginBottom: 8,
          animation: 'fadeInUp 0.6s ease 0.25s forwards', opacity: 0,
        }}>
          EVANS
          <span style={{
            display: 'block',
            WebkitTextStroke: '2px var(--accent)',
            color: 'transparent',
          }}>
            MURANGIRI
          </span>
        </h1>

        {/* TITLE */}
        <p style={{
          fontFamily: 'var(--mono)', fontSize: 13,
          color: 'var(--muted)', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: 28,
          animation: 'fadeInUp 0.6s ease 0.4s forwards', opacity: 0,
        }}>
          Full-Stack Engineer ·{' '}
          <span style={{ color: 'var(--accent2)' }}>Data Scientist</span>
        </p>

        {/* BIO */}
        <p style={{
          fontSize: 15, lineHeight: 1.75, color: 'var(--text)',
          maxWidth: 440, marginBottom: 40,
          animation: 'fadeInUp 0.6s ease 0.55s forwards', opacity: 0,
        }}>
          KCA University graduate building high-performance web apps with{' '}
          <span style={{ color: 'var(--accent)' }}>React & Django</span>, shipping
          data-driven products with Python, and crafting cross-platform mobile experiences
          with React Native. I turn complex problems into clean, scalable code.
        </p>

        {/* BUTTONS */}
        <div style={{
          display: 'flex', gap: 16, flexWrap: 'wrap',
          animation: 'fadeInUp 0.6s ease 0.7s forwards', opacity: 0,
        }}>
          <a href="#projects" className="btn-primary">View My Work →</a>
          <a
            href="https://github.com/evansmurangiri"
            target="_blank" rel="noreferrer"
            className="btn-ghost"
          >
            <GithubIcon /> GitHub
          </a>
        </div>

        {/* SCROLL HINT */}
        <div style={{
          marginTop: 60, display: 'flex', alignItems: 'center', gap: 12,
          fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          animation: 'fadeInUp 0.6s ease 0.85s forwards', opacity: 0,
        }}>
          <span style={{ display: 'block', width: 40, height: 1, background: 'var(--muted)' }} />
          Scroll to explore
        </div>
      </div>

      {/* RIGHT — PROFILE CARD */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: 320 }}>
          {/* FRAME */}
          <div style={{
            position: 'relative', width: '100%', aspectRatio: '3/4',
            border: '1px solid var(--border)', overflow: 'hidden',
            background: 'var(--card)',
          }}>
            {/* CORNER BRACKETS */}
            {['tl','tr','bl','br'].map(pos => (
              <span key={pos} style={{
                position: 'absolute', width: 20, height: 20, zIndex: 3,
                top: pos.includes('t') ? -1 : undefined,
                bottom: pos.includes('b') ? -1 : undefined,
                left: pos.includes('l') ? -1 : undefined,
                right: pos.includes('r') ? -1 : undefined,
                borderTop: pos.includes('t') ? '2px solid var(--accent)' : undefined,
                borderBottom: pos.includes('b') ? '2px solid var(--accent)' : undefined,
                borderLeft: pos.includes('l') ? '2px solid var(--accent)' : undefined,
                borderRight: pos.includes('r') ? '2px solid var(--accent)' : undefined,
              }} />
            ))}

            {/* PHOTO */}
            <img
              src={profilePic}
              alt="Evans Murangiri"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={e => { e.target.style.display = 'none' }}
            />

            {/* OVERLAY GRADIENT */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, transparent 60%, rgba(0,212,170,0.12))',
              zIndex: 2,
            }} />

            {/* NAME TAG */}
            <div style={{
              position: 'absolute', bottom: -1, left: -1, right: -1,
              background: 'rgba(8,12,16,0.92)', borderTop: '1px solid var(--border)',
              padding: '14px 16px', zIndex: 4,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--white)' }}>Evans Murangiri</div>
                <div style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.08em' }}>SOFTWARE ENGINEER</div>
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)' }}>KCA Univ.</div>
            </div>
          </div>

          {/* FLOATING STATS */}
          <FloatStat num="5+" label="Languages" style={{ top: 20, right: -55 }} />
          <FloatStat num="10+" label="Projects" style={{ bottom: 80, left: -55 }} />
        </div>
      </div>

      {/* STATS BAR */}
      <div style={{
        gridColumn: '1 / -1',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        background: 'var(--surface)', marginTop: 40,
      }}>
        {[
          { num: '4', unit: 'yr', label: 'CS Degree' },
          { num: '6', unit: '+', label: 'Tech Stacks' },
          { num: '5', unit: '+', label: 'Real Projects' },
          { num: '∞', unit: '', label: 'Drive to Build' },
        ].map((s, i) => (
          <div key={i} style={{
            padding: '28px 32px',
            borderRight: i < 3 ? '1px solid var(--border)' : undefined,
          }}>
            <div style={{ fontFamily: 'var(--display)', fontSize: 42, color: 'var(--white)', lineHeight: 1, marginBottom: 4 }}>
              {s.num}<span style={{ fontSize: 24, color: 'var(--accent)' }}>{s.unit}</span>
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function FloatStat({ num, label, style }) {
  return (
    <div style={{
      position: 'absolute', background: 'var(--card)',
      border: '1px solid var(--border)', padding: '12px 16px', ...style,
    }}>
      <div style={{ fontFamily: 'var(--display)', fontSize: 28, color: 'var(--accent)', lineHeight: 1 }}>{num}</div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>{label}</div>
    </div>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}
