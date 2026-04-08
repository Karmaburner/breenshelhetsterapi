import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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

const services = [
  {
    symbol: '◯',
    title: 'Traumeterapi',
    description:
      'Skånsom bearbeiding av opplevelser som fortsatt påvirker deg i nåtid. Traumer setter seg i kroppen og nervesystemet – sammen jobber vi med å forløse disse mønstrene i ditt tempo.',
    highlights: ['Komplekst traume (C-PTSD)', 'Barndomstraumer', 'Relasjonstraumer', 'Nervesystemregulering'],
  },
  {
    symbol: '✦',
    title: 'EFT – Tapping',
    description:
      'En metode som kombinerer samtale og lett tapping på kroppen for å roe nervesystemet og redusere følelsesmessig stress. Skånsom, men kraftfull for å frigjøre emosjonelle blokkeringer.',
    highlights: ['Stress og angst', 'Emosjonell overveldelse', 'Fobier og frykter', 'Kroniske smerter'],
  },
  {
    symbol: '☽',
    title: 'Hypnoterapi',
    description:
      'Arbeid med underbevisstheten for å endre dype mønstre, reaksjoner og overbevisninger. En naturlig tilstand av dyp avslapning der varig forandring kan skje.',
    highlights: ['Dype mønstre og overbevisninger', 'Selvtillit og selvbilde', 'Søvnproblemer', 'Indre blokkering'],
  },
  {
    symbol: '◈',
    title: 'Healing',
    description:
      'Energiarbeid som støtter kroppens naturlige evne til balanse, ro og selvregulering. Healingen fremmer klarhet og fornyet vitalitet på alle nivåer – mentalt, emosjonelt og fysisk.',
    highlights: ['Energibalanse', 'Chakra-arbeid', 'Dyp hvile', 'Intuitiv veiledning'],
  },
  {
    symbol: '❋',
    title: 'Massasje',
    description:
      'Kroppslig tilnærming for å løsne spenninger, øke tilstedeværelse og skape kontakt mellom kropp og sinn. En viktig del av et helhetlig terapeutisk forløp.',
    highlights: ['Kroppslige spenninger', 'Økt tilstedeværelse', 'Kropp–sinn-kontakt', 'Dyp avslapning'],
  },
  {
    symbol: '✧',
    title: 'Indre barn & Tarot',
    description:
      'Del-terapi for å bli kjent med og integrere de yngre delene av deg selv. Tarot reading som et verktøy for å speile det ubevisste – sendes skriftlig til deg på e-post.',
    highlights: ['Indre barn-arbeid', 'Del-terapi', 'Tarot reading', 'Skriftlig veiledning'],
  },
]

export default function Services() {
  return (
    <section id="tjenester" className="relative py-28 px-6 bg-[#F5EDE0] flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <FadeIn className="flex items-center justify-center gap-4 mb-6">
          <div className="w-10 h-px bg-[#A07850]/60" />
          <span className="text-[#A07850] text-xs tracking-[0.3em] uppercase font-sans">Tjenester</span>
          <div className="w-10 h-px bg-[#A07850]/60" />
        </FadeIn>

        <FadeIn delay={0.1} className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2C1A0E] leading-snug">
            Hva jeg tilbyr
          </h2>
          <p className="mt-4 text-[#3D2610]/60 font-sans font-light text-lg leading-relaxed">
            Alle behandlinger kan gjennomføres både fysisk og online.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.1 + i * 0.1}>
              <div className="group relative p-8 border border-[#C4A882]/40 rounded-sm bg-[#EDD9C0]/60 hover:bg-[#EDD9C0] hover:border-[#A07850]/50 transition-all duration-500 h-full flex flex-col text-center">
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#A07850]/20 group-hover:border-[#A07850]/50 transition-colors duration-500" />

                <span className="text-[#A07850]/70 text-3xl mb-6 block group-hover:text-[#7A5230] transition-colors duration-300">
                  {service.symbol}
                </span>

                <h3 className="font-serif text-2xl font-light text-[#2C1A0E] mb-4">
                  {service.title}
                </h3>

                <p className="text-[#3D2610]/65 font-sans font-light text-sm leading-relaxed mb-6 flex-1 px-2 text-center">
                  {service.description}
                </p>

                <div className="flex flex-col gap-2 pt-4 border-t border-[#A07850]/20">
                  {service.highlights.map((h) => (
                    <div key={h} className="flex items-center justify-center gap-2">
                      <div className="w-1 h-1 bg-[#A07850]/60 rounded-full flex-shrink-0" />
                      <span className="text-[#5C3820]/70 text-xs font-sans tracking-wide">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
