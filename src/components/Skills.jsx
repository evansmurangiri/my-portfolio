const skills = [
  {
    icon: '⚛️',
    name: 'Frontend',
    desc: 'Building fast, beautiful UIs',
    tags: ['React', 'React Native', 'HTML/CSS', 'JavaScript'],
    hot: ['React', 'React Native'],
  },
  {
    icon: '🐍',
    name: 'Backend',
    desc: 'APIs, databases, server logic',
    tags: ['Django', 'Python', 'REST APIs', 'SQL'],
    hot: ['Django', 'Python'],
  },
  {
    icon: '📊',
    name: 'Data Science',
    desc: 'Insights from complex datasets',
    tags: ['Pandas', 'NumPy', 'Scikit-learn', 'Data Analysis'],
    hot: ['Pandas', 'Scikit-learn'],
  },
  {
    icon: '☕',
    name: 'Java & C++',
    desc: 'Low-level & OOP mastery',
    tags: ['Java', 'C++', 'OOP', 'DSA'],
    hot: [],
  },
  {
    icon: '📱',
    name: 'Mobile Dev',
    desc: 'Cross-platform mobile apps',
    tags: ['React Native', 'Expo', 'iOS', 'Android'],
    hot: ['React Native'],
  },
  {
    icon: '🛠️',
    name: 'DevOps & Tools',
    desc: 'Ship and deploy with confidence',
    tags: ['Git', 'GitHub', 'Vercel', 'Linux'],
    hot: ['GitHub', 'Vercel'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '80px 48px', position: 'relative', zIndex: 1 }}>
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">SKILLS</h2>
        <div className="section-line" />
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 2, background: 'var(--border)',
      }}>
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ icon, name, desc, tags, hot }) {
  return (
    <div
      style={{ background: 'var(--card)', padding: '28px 24px', position: 'relative', overflow: 'hidden', cursor: 'default', transition: 'background 0.2s' }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#161e28'
        e.currentTarget.querySelector('.underline').style.width = '100%'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--card)'
        e.currentTarget.querySelector('.underline').style.width = '0'
      }}
    >
      <div className="underline" style={{
        position: 'absolute', bottom: 0, left: 0,
        height: 2, background: 'var(--accent)', width: 0, transition: 'width 0.3s',
      }} />
      <span style={{ fontSize: 28, marginBottom: 12, display: 'block' }}>{icon}</span>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--white)', marginBottom: 6, fontWeight: 700 }}>{name}</div>
      <div style={{ fontSize: 11, color: 'var(--muted)' }}>{desc}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
        {tags.map(tag => (
          <span key={tag} style={{
            fontFamily: 'var(--mono)', fontSize: 9, padding: '3px 8px',
            border: `1px solid ${hot.includes(tag) ? 'var(--accent)' : 'var(--border)'}`,
            color: hot.includes(tag) ? 'var(--accent)' : 'var(--muted)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
