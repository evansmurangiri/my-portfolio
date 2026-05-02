export default function Education() {
  return (
    <section id="education" style={{ padding: '80px 48px', position: 'relative', zIndex: 1 }}>
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">EDUCATION</h2>
        <div className="section-line" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'var(--border)' }}>
        {/* DEGREE */}
        <div style={{ background: 'var(--card)', padding: '36px 32px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
            2020 — 2024
          </div>
          <div style={{ fontFamily: 'var(--display)', fontSize: 32, color: 'var(--white)', marginBottom: 8, letterSpacing: '0.04em' }}>
            BSc. Software Development
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
            KCA University · Nairobi, Kenya
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--text)' }}>
            Four-year programme covering software engineering, data structures, algorithms, database systems,
            and modern web technologies. Built a strong foundation in both theory and practical development.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
            {['Algorithms', 'Databases', 'Web Dev', 'Data Structures', 'OOP', 'Networks'].map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--mono)', fontSize: 9, padding: '4px 10px',
                border: '1px solid var(--border)', color: 'var(--muted)',
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* SKILLS HIGHLIGHT */}
        <div style={{ background: 'var(--card)', padding: '36px 32px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
            Self-Taught & Ongoing
          </div>
          <div style={{ fontFamily: 'var(--display)', fontSize: 32, color: 'var(--white)', marginBottom: 8, letterSpacing: '0.04em' }}>
            Continuous Learning
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', marginBottom: 20 }}>
            Online Courses · Personal Projects · Open Source
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--text)' }}>
            Beyond the degree, I invest in self-directed learning — building real products,
            contributing to open source, and staying current with modern frameworks and industry trends.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
            {['React', 'Django', 'React Native', 'Data Science', 'Machine Learning', 'REST APIs'].map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--mono)', fontSize: 9, padding: '4px 10px',
                border: '1px solid rgba(0,212,170,0.3)', color: 'var(--accent)',
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
