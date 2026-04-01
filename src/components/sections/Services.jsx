import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import { WHATSAPP_LINK, SERVICES } from '../../constants'

export default function Services() {
  return (
    <section
      id="servicos"
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
          <p className="label mb-5">Serviços</p>
          <h2
            className="font-semibold tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.025em', color: '#ededed' }}
          >
            O que eu ofereço
          </h2>
          <p style={{ color: '#666', fontSize: '1rem', marginTop: '0.75rem', maxWidth: '420px', margin: '0.75rem auto 0', lineHeight: 1.7 }}>
            Soluções completas para colocar seu negócio no digital.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
              className="card p-8 flex flex-col"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <h3
                  className="font-semibold"
                  style={{ fontSize: '1rem', color: '#ededed', letterSpacing: '-0.01em' }}
                >
                  {service.title}
                </h3>
                {service.badge && (
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#666',
                      border: '1px solid #1c1c1c',
                      borderRadius: '99px',
                      padding: '3px 10px',
                      whiteSpace: 'nowrap',
                      marginLeft: '12px',
                    }}
                  >
                    {service.badge}
                  </span>
                )}
              </div>

              <p style={{ color: '#666', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {service.description}
              </p>

              <ul className="flex flex-col gap-2.5 mt-auto mb-8">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5" style={{ fontSize: '0.875rem', color: '#888' }}>
                    <FiCheck size={14} style={{ color: '#ededed', flexShrink: 0, marginTop: '3px' }} />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ alignSelf: 'flex-start' }}
              >
                Saber mais
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
