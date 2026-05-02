import { useState } from 'react'

/*
  HOW TO MAKE THE FORM SEND TO YOUR EMAIL (evansmurangiri7@gmail.com):
  1. Go to https://www.emailjs.com and create a FREE account
  2. Add a service (connect your Gmail)
  3. Create an email template with these variables:
       {{from_name}}, {{from_email}}, {{subject}}, {{message}}
  4. Replace the three placeholder strings below with your real IDs:
       - YOUR_SERVICE_ID   → from EmailJS dashboard > Email Services
       - YOUR_TEMPLATE_ID  → from EmailJS dashboard > Email Templates
       - YOUR_PUBLIC_KEY   → from EmailJS dashboard > Account > Public Key
*/

const EMAILJS_SERVICE_ID  = 'service_gorizf4'
const EMAILJS_TEMPLATE_ID = 'template_1x9r6fb'
const EMAILJS_PUBLIC_KEY  = 'DyBdCWXIdgLyfG_7-'

const links = [
  { label: '📧 evansmurangiri7@gmail.com', href: 'mailto:evansmurangiri7@gmail.com' },
  { label: '💬 WhatsApp me directly',      href: 'https://wa.me/254793582095?text=Hi%20Evans!%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20job%20opportunity.' },
  { label: '🐙 github.com/evansmurangiri',  href: 'https://github.com/evansmurangiri' },
  { label: '💼 LinkedIn — Evans Murangiri', href: 'https://www.linkedin.com/in/evans-murangiri-295762351/' },
  { label: '📄 Download CV',                href: '/Evans_Murangiri_CV.pdf', download: true },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in name, email and message.')
      return
    }

    setStatus('sending')

    try {
      // Dynamically import emailjs so it's only loaded when needed
      const emailjs = await import('@emailjs/browser')

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject || 'Portfolio Contact',
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{
      padding: '80px 48px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'start',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* LEFT */}
      <div>
        <div style={{ fontFamily: 'var(--display)', fontSize: 72, lineHeight: 0.9, color: 'var(--white)', letterSpacing: '0.04em', marginBottom: 24 }}>
          LET'S<br /><span style={{ color: 'var(--accent)' }}>WORK</span><br />TOGETHER
        </div>
        <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 320, lineHeight: 1.7 }}>
          Open to full-time roles, freelance contracts, and collaborations.
          Based in Nairobi — available globally. 🌍
        </p>

        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.download ? undefined : '_blank'}
              rel="noreferrer"
              download={link.download ? 'Evans_Murangiri_CV.pdf' : undefined}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '18px 0', borderTop: '1px solid var(--border)', cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.querySelector('.cl-label').style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.querySelector('.cl-label').style.color = 'var(--text)'}
              >
                <span className="cl-label" style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--text)', transition: 'color 0.2s' }}>
                  {link.label}
                </span>
                <span style={{ color: 'var(--muted)', fontSize: 18 }}>
                  {link.download ? '↓' : '↗'}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT — FORM */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 8 }}>
          // SEND A MESSAGE
        </div>

        {['name', 'email', 'subject'].map(field => (
          <input
            key={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
        ))}

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          style={{ ...inputStyle, resize: 'none' }}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />

        <button
          onClick={handleSubmit}
          className="btn-primary"
          style={{ alignSelf: 'flex-start' }}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message →'}
        </button>

        {status === 'success' && (
          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent)', marginTop: 8 }}>
            ✅ Message sent! I'll get back to you soon.
          </div>
        )}
        {status === 'error' && (
          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent2)', marginTop: 8 }}>
            ❌ Something went wrong. Email me directly at evansmurangiri7@gmail.com
          </div>
        )}
      </div>
    </section>
  )
}

const inputStyle = {
  background: 'var(--card)',
  border: '1px solid var(--border)',
  padding: '14px 18px',
  color: 'var(--text)',
  fontFamily: 'var(--mono)',
  fontSize: 12,
  outline: 'none',
  transition: 'border-color 0.2s',
  width: '100%',
}
