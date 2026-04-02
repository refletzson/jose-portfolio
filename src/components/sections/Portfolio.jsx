import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { PROJECTS } from '../../constants'

const LOOPED_PROJECTS = [...PROJECTS, ...PROJECTS, ...PROJECTS]

const swiperStyles = `
  .portfolio-swiper {
    width: 100%;
    padding-bottom: 50px !important;
  }
  .portfolio-swiper .swiper-slide {
    width: 340px;
    background-position: center;
    background-size: cover;
  }
  .portfolio-swiper .swiper-3d .swiper-slide-shadow-left,
  .portfolio-swiper .swiper-3d .swiper-slide-shadow-right {
    background-image: none;
    background: none;
  }
  .portfolio-swiper .swiper-pagination-bullet {
    background: #444;
    opacity: 1;
  }
  .portfolio-swiper .swiper-pagination-bullet-active {
    background: #ededed;
  }
  .portfolio-swiper .swiper-button-prev,
  .portfolio-swiper .swiper-button-next {
    color: #444;
  }
  .portfolio-swiper .swiper-button-prev:hover,
  .portfolio-swiper .swiper-button-next:hover {
    color: #ededed;
  }
`

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{ background: 'transparent', borderTop: '1px solid #1c1c1c' }}
      className="py-32 px-6"
    >
      <style>{swiperStyles}</style>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <p className="label mb-5">Portfólio</p>
          <h2
            className="font-semibold tracking-tight"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.025em', color: '#ededed' }}
          >
            Projetos recentes
          </h2>
          <p style={{ color: '#666', fontSize: '1rem', marginTop: '0.75rem', lineHeight: 1.7 }}>
            Cada site entregue com atenção aos detalhes.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          <Swiper
            className="portfolio-swiper"
            spaceBetween={30}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={true}
            navigation={true}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          >
            {LOOPED_PROJECTS.map((project, index) => (
              <SwiperSlide key={`${project.id}-${index}`}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex flex-col overflow-hidden group"
                  style={{ display: 'flex', textDecoration: 'none' }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '210px', overflow: 'hidden', background: '#0a0a0a' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        transition: 'transform 0.5s ease',
                        display: 'block',
                      }}
                      className="group-hover:scale-[1.03]"
                    />
                    <div
                      className="group-hover:opacity-100"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#fff',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          background: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          borderRadius: '8px',
                          padding: '8px 16px',
                          backdropFilter: 'blur(6px)',
                        }}
                      >
                        Visitar site <FiArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className="font-medium mb-2"
                      style={{ fontSize: '0.9375rem', color: '#ededed', letterSpacing: '-0.01em' }}
                    >
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '0.8125rem', color: '#666', lineHeight: 1.65, marginBottom: '1rem' }} className="flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.6875rem',
                            color: '#555',
                            border: '1px solid #1c1c1c',
                            borderRadius: '4px',
                            padding: '2px 8px',
                            fontWeight: 500,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
