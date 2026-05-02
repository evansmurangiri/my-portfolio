const projects = [
  {
    num: '01',
    title: 'Coast Bean — Real Estate Leads',
    desc: 'A sleek real estate leads website built for Coast Bean. Showcases property listings, captures buyer leads, and drives conversions with a modern UI.',
    tech: ['React', 'Vercel', 'CSS'],
    link: 'https://coast-bean.vercel.app/home',
    github: null,
  },
  {
    num: '02',
    title: 'E-Commerce Platform',
    desc: 'Full-stack online shopping app with product listings, cart, authentication, and admin dashboard.',
    tech: ['React', 'Django', 'PostgreSQL'],
    link: null,
    github: 'https://github.com/evansmurangiri',
  },
  {
    num: '03',
    title: 'Data Analytics Dashboard',
    desc: 'Real-time data visualizations with Python, Pandas, and interactive React charts for business insights.',
    tech: ['Python', 'Pandas', 'React'],
    link: null,
    github: 'https://github.com/evansmurangiri',
  },
  {
    num: '04',
    title: 'Mobile Finance App',
    desc: 'Cross-platform budgeting and expense tracker built with React Native and a Django REST backend.',
    tech: ['React Native', 'Django', 'Expo'],
    link: null,
    github: 'https://github.com/evansmurangiri',
  },
  {
    num: '05',
    title: 'ML Price Predictor',
    desc: 'Machine learning model that predicts Kenyan housing prices using Scikit-learn and real market data.',
    tech: ['Python', 'Scikit-learn', 'NumPy'],
    link: null,
    github: 'https://github.com/evansmurangiri',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 48px', background: 'var(--surface)', position: 'relative', zIndex: 1 }}>
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">PROJECTS</h2>
        <div className="section-line" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {projects.map(p => <ProjectRow key={p.num} {...p} />)}
      </div>
    </section>
  )
}

function ProjectRow({ num, title, desc, tech, link, github }) {
  const href = link || github || '#'

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '60px 1fr auto auto',
          alignItems: 'center', gap: 24,
          padding: '24px 28px',
          background: 'var(--card)',
          border: '1px solid transparent',
          cursor: 'pointer', transition: 'all 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.background = '#161e28'
          e.currentTarget.querySelector('.arrow').style.transform = 'translateX(4px)'
          e.currentTarget.querySelector('.arrow').style.color = 'var(--accent)'
          e.currentTarget.querySelector('.proj-num').style.color = 'var(--accent)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'transparent'
          e.currentTarget.style.background = 'var(--card)'
          e.currentTarget.querySelector('.arrow').style.transform = 'translateX(0)'
          e.currentTarget.querySelector('.arrow').style.color = 'var(--muted)'
          e.currentTarget.querySelector('.proj-num').style.color = 'var(--border)'
        }}
      >
        <div className="proj-num" style={{ fontFamily: 'var(--display)', fontSize: 36, color: 'var(--border)', lineHeight: 1, transition: 'color 0.2s' }}>
          {num}
        </div>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 15, color: 'var(--white)', marginBottom: 4 }}>{title}</div>
          <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {tech.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--mono)', fontSize: 9, padding: '4px 10px',
              background: 'rgba(0,212,170,0.1)', color: 'var(--accent)',
              letterSpacing: '0.08em', border: '1px solid rgba(0,212,170,0.2)',
            }}>
              {t}
            </span>
          ))}
        </div>
        <div className="arrow" style={{ fontSize: 20, color: 'var(--muted)', transition: 'all 0.2s' }}>→</div>
      </div>
    </a>
  )
}
