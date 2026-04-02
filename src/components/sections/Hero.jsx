import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_LINK } from '../../constants'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ background: 'transparent' }}
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-14"
    >
      <div className="max-w-3xl mx-auto w-full">
        {/* Label */}
        <motion.p {...fadeUp(0.05)} className="label mb-8">
          Desenvolvimento Web Profissional
        </motion.p>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.12)}
          className="font-bold tracking-tight"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#ededed',
          }}
        >
          Seu negócio merece<br />um site profissional.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontSize: '1.0625rem',
            color: '#666',
            lineHeight: 1.7,
            maxWidth: '460px',
            margin: '1.5rem auto 0',
          }}
        >
          Sou <span style={{ color: '#999' }}>Jose Bandeira</span>, desenvolvedor web especializado em
          criar sites modernos e eficientes para empresas locais.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.28)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto"
          >
            <FaWhatsapp size={16} />
            Solicitar orçamento
          </a>
          <a
            href="#servicos"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-outline w-full sm:w-auto"
          >
            Ver serviços
          </a>
        </motion.div>
      </div>

      {/* Bottom fade hint */}
      <motion.div
        {...fadeUp(0.5)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#333' }}
      >
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, transparent, #333)',
          }}
        />
      </motion.div>
    </section>
  )
}
