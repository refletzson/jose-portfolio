import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_LINK } from '../constants'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: '#25D366',
        boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
      }}
    >
      <FaWhatsapp size={22} color="white" />
    </motion.a>
  )
}
