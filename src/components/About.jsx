import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import stefanieImg from '../assets/stefanie.jpg'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="om-meg" className="relative py-28 px-6 bg-[#EDD9C0]">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="flex items-center gap-4 mb-14">
          <div className="w-10 h-px bg-[#A07850]/60" />
          <span className="text-[#A07850] text-xs tracking-[0.3em] uppercase font-sans">Om meg</span>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.1}>
            <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0">
              <img
                src={stefanieImg}
                alt="Stefanie Charlotte"
                className="absolute inset-0 w-full h-full object-cover object-top rounded-sm"
              />
              <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-[#A07850]/50" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-[#A07850]/50" />
            </div>
          </FadeIn>

          <div className="flex flex-col gap-6">
            <FadeIn delay={0.2}>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2C1A0E] leading-snug">
                Hei, jeg er{' '}
                <span className="italic text-[#7A5230]">Stefanie Charlotte</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-[#3D2610]/70 font-sans font-light text-base leading-relaxed">
                Jeg tilbyr et trygt og helhetlig terapeutisk rom for deg som opplever stress,
                indre uro eller bærer på traumer. Mange av utfordringene vi kjenner på i dag
                har røtter i tidligere opplevelser, og det lever i vårt underbevisste – både
                i nervesystemet, tankene og kroppen.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-[#3D2610]/70 font-sans font-light text-base leading-relaxed">
                Sammen jobber vi med å forstå, regulere og forløse disse mønstrene i ditt tempo.
                Jeg jobber intuitivt og terapeutisk, og kombinerer ulike metoder for å møte
                deg der du er.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-[#3D2610]/70 font-sans font-light text-base leading-relaxed">
                Målet er ikke å «fikse» deg, men å støtte deg i å møte deg selv med større
                trygghet, bevissthet og selvmedfølelse – slik at du kan leve mer i tråd med
                den du egentlig er.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col gap-3 pt-2">
                {[
                  'Traumeterapi',
                  'EFT (Emotional Freedom Techniques)',
                  'Hypnoterapi',
                  'Healing & Energiarbeid',
                  'Massasje',
                  'Indre barn & Del-terapi',
                  'Tarot reading',
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#A07850] flex-shrink-0" />
                    <span className="text-[#5C3820] text-sm font-sans tracking-wide">{cert}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
