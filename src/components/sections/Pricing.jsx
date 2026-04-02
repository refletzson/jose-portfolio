import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiZap, FiUsers, FiAward } from 'react-icons/fi'
import { WHATSAPP_LINK } from '../../constants'

const perks = [
  { icon: FiZap, title: 'Projeto sob medida', description: 'Desenvolvido de acordo com as necessidades do seu negócio.' },
  { icon: FiUsers, title: 'Sem surpresas', description: 'Orçamento claro e transparente antes de qualquer trabalho.' },
  { icon: FiAward, title: 'Qualidade garantida', description: 'Suporte dedicado após a entrega do projeto.' },
]

export default function Pricing() {
  return (
    <section
      id="precos"
      style={{ background: 'transparent', borderTop: '1px solid #1c1c1c' }}
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
          <p className="label mb-5">Investimento</p>
          <h2
            className="font-semibold tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.025em', color: '#ededed' }}
          >
            Preço personalizado
          </h2>
          <p style={{ color: '#666', fontSize: '1rem', marginTop: '0.75rem', lineHeight: 1.7 }}>
            Cada projeto é único. O valor é definido de acordo com o que você precisa.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
          className="card text-center mx-auto mb-12"
          style={{ maxWidth: '520px', padding: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          <p className="label mb-4">Valor do projeto</p>
          <h3
            className="font-bold tracking-tight mb-1"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#ededed', letterSpacing: '-0.03em' }}
          >
            Sob consulta
          </h3>
          <p style={{ color: '#555', fontSize: '0.875rem', marginBottom: '1.75rem' }}>
            Orçamento gratuito e sem compromisso
          </p>
          <p style={{ color: '#666', fontSize: '0.9375rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '380px', marginLeft: 'auto', marginRight: 'auto' }}>
            Cada negócio tem necessidades diferentes. Entre em contato pelo WhatsApp e receba um
            orçamento adaptado ao que você precisa.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <FaWhatsapp size={16} />
            Solicitar orçamento grátis
          </a>
        </motion.div>

        {/* Perks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.12 + i * 0.06 }}
              className="card p-6 text-center"
            >
              <perk.icon
                size={18}
                style={{ color: '#555', margin: '0 auto 0.875rem', display: 'block' }}
              />
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#ededed', marginBottom: '0.375rem' }}>
                {perk.title}
              </h4>
              <p style={{ fontSize: '0.8125rem', color: '#555', lineHeight: 1.6 }}>
                {perk.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
