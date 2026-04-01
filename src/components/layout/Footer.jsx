import { FiInstagram, FiMessageCircle } from 'react-icons/fi'
import { WHATSAPP_LINK, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../../constants'

const navLinks = [
  ['Serviços', '#servicos'],
  ['Portfólio', '#portfolio'],
  ['Preços', '#precos'],
  ['Contato', '#contato'],
]

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: '#000', borderTop: '1px solid #1c1c1c' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Jose Bandeira" style={{ height: '120px', width: 'auto', marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '0.8125rem', color: '#444', maxWidth: '240px', lineHeight: 1.6 }}>
              Desenvolvimento web profissional para empresas locais.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                style={{ fontSize: '0.8125rem', color: '#444', textDecoration: 'none', cursor: 'pointer' }}
                onMouseEnter={e => e.target.style.color = '#ededed'}
                onMouseLeave={e => e.target.style.color = '#444'}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#444', transition: 'color 0.2s' }}
              aria-label="WhatsApp"
              onMouseEnter={e => e.currentTarget.style.color = '#25D366'}
              onMouseLeave={e => e.currentTarget.style.color = '#444'}
            >
              <FiMessageCircle size={17} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#444', transition: 'color 0.2s' }}
              aria-label={`@${INSTAGRAM_HANDLE}`}
              onMouseEnter={e => e.currentTarget.style.color = '#e1306c'}
              onMouseLeave={e => e.currentTarget.style.color = '#444'}
            >
              <FiInstagram size={17} />
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #111', paddingTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.75rem', color: '#333' }}>
            © {new Date().getFullYear()} Jose Bandeira
          </p>
          <p style={{ fontSize: '0.75rem', color: '#333' }}>
            @{INSTAGRAM_HANDLE}
          </p>
        </div>
      </div>
    </footer>
  )
}
