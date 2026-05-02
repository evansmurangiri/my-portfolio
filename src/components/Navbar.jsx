import { useState, useEffect } from 'react'

const navLinks = ['About', 'Skills', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 48px',
      background: scrolled ? 'rgba(8,12,16,0.95)' : 'rgba(8,12,16,0.6)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
      transition: 'all 0.3s',
    }}>
      {/* LOGO */}
      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--accent)', letterSpacing: '0.05em' }}>
        <span style={{ color: 'var(--muted)' }}>~/</span>evans<span style={{ color: 'var(--muted)' }}>.jsx</span>
      </div>

      {/* DESKTOP LINKS */}
      <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0 }}
          className="nav-links-desktop">
        {navLinks.map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)',
                textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CV BUTTON */}
      <a
        href="/Evans_Murangiri_CV.pdf"
        download="Evans_Murangiri_CV.pdf"
        className="btn-primary"
        style={{ fontSize: 11, padding: '10px 20px' }}
      >
        ⬇ Download CV
      </a>
    </nav>
  )
}
