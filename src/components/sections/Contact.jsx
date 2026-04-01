import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { WHATSAPP_LINK, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../../constants'

const contacts = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '(94) 99109-5263',
    action: 'Enviar mensagem',
    href: WHATSAPP_LINK,
    iconColor: '#25D366',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    value: `@${INSTAGRAM_HANDLE}`,
    action: 'Ver perfil',
    href: INSTAGRAM_URL,
    iconColor: '#e1306c',
  },
]

export default function Contact() {
  return (
    <section
      id="contato"
      style={{ background: '#000', borderTop: '1px solid #1c1c1c' }}
      className="py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <p className="label mb-5">Contato</p>
          <h2
            className="font-semibold tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.025em', color: '#ededed' }}
          >
            Vamos conversar?
          </h2>
          <p style={{ color: '#666', fontSize: '1rem', marginTop: '0.75rem', lineHeight: 1.7, maxWidth: '380px', margin: '0.75rem auto 0' }}>
            Pronto para levar seu negócio para o digital? Respondo rápido.
          </p>
        </motion.div>

        {/* Contact items */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
              className="card flex flex-col items-center text-center p-8 flex-1"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <c.icon size={22} style={{ color: c.iconColor, marginBottom: '1rem' }} />
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#ededed', marginBottom: '0.25rem' }}>
                {c.label}
              </p>
              <p style={{ fontSize: '0.8125rem', color: '#555', marginBottom: '1.25rem' }}>
                {c.value}
              </p>
              <span
                style={{
                  fontSize: '0.8125rem',
                  color: '#ededed',
                  fontWeight: 500,
                  borderBottom: '1px solid #2a2a2a',
                  paddingBottom: '1px',
                }}
              >
                {c.action} →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Reply note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
          style={{ fontSize: '0.8125rem', color: '#333' }}
        >
          Respondo em até 1 hora nos dias úteis.
        </motion.p>
      </div>
    </section>
  )
}
