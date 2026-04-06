import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import terapirom1 from '../assets/terapirom.jpg'
import terapirom2 from '../assets/terapirom2.jpg'
import video from '../assets/videoavstudio.mp4'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Studio() {
  return (
    <section className="py-28 px-6 bg-[#EDD9C0]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="flex items-center gap-4 mb-6">
          <div className="w-10 h-px bg-[#A07850]/60" />
          <span className="text-[#A07850] text-xs tracking-[0.3em] uppercase font-sans">Terapirommet</span>
        </FadeIn>

        <FadeIn delay={0.1} className="mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2C1A0E] leading-snug">
            Et trygt rom for deg
          </h2>
          <p className="mt-4 text-[#3D2610]/60 font-sans font-light text-lg max-w-lg leading-relaxed">
            Her møtes vi – i ro, varme og tilstedeværelse.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4 items-center">
          {/* Bilde venstre */}
          <FadeIn delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={terapirom1}
                alt="Terapirommet"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>

          {/* Video midten */}
          <FadeIn delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden rounded-sm md:scale-105 shadow-lg shadow-[#2C1A0E]/10">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Bilde høyre */}
          <FadeIn delay={0.3}>
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={terapirom2}
                alt="Terapirommet"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
