export default function WhatsAppButton() {
  const phone = '254793582095'
  const message = encodeURIComponent("Hi Evans! I found your portfolio and I'd like to discuss a job opportunity with you.")
  const href = `https://wa.me/${phone}?text=${message}`

  return (
    <>
      {/* FLOATING BUTTON */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: '#25D366',
          color: '#fff',
          padding: '14px 20px',
          borderRadius: 0,
          textDecoration: 'none',
          fontFamily: 'var(--mono)',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          boxShadow: '0 0 24px rgba(37,211,102,0.4)',
          clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
          transition: 'all 0.3s',
          animation: 'whatsappPop 0.5s ease 1s both',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 0 40px rgba(37,211,102,0.7)'
          e.currentTarget.style.transform = 'translateY(-3px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 0 24px rgba(37,211,102,0.4)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        <WhatsAppIcon />
        Chat on WhatsApp
        {/* PING RING */}
        <span style={{
          position: 'absolute',
          top: -4, right: -4,
          width: 12, height: 12,
          borderRadius: '50%',
          background: '#ff4d6d',
          animation: 'pingRing 1.5s infinite',
        }} />
      </a>

      <style>{`
        @keyframes whatsappPop {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pingRing {
          0%   { transform: scale(1); opacity: 1; }
          70%  { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
