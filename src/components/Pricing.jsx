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

const plans = [
  {
    title: 'Enkelttime',
    duration: '60 min',
    price: '1 250',
    description: 'En full behandlingstime der vi jobber med ditt tema. Passer for deg som vil prøve eller har et spesifikt fokus.',
    features: [
      'Hypnoterapi, EFT, Traume eller Healing',
      'Fysisk eller online',
      'Oppfølging per e-post',
    ],
    featured: false,
  },
  {
    title: 'Tilbud',
    duration: '120 min',
    price: '1 875',
    description: 'Dobbelttime for deg som ønsker å gå dypere. Mer tid gir rom for grundigere arbeid og bedre integrasjon.',
    features: [
      'Alle modaliteter inkludert',
      'Skreddersydd plan for deg',
      'Mer tid til dypere arbeid',
      'Spar 625 kr',
    ],
    featured: true,
  },
  {
    title: 'Avstandshealing',
    duration: '45 min',
    price: '750',
    description: 'Motta healing der du er. Etter sesjonen sender jeg deg en oppsummering av hva jeg opplevde og observerte.',
    features: [
      'Utføres på avtalt tidspunkt',
      'Skriftlig tilbakemelding',
      'Ingen forberedelse nødvendig',
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="priser" className="relative py-28 px-6 bg-[#EDD9C0] flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <FadeIn className="flex items-center justify-center gap-4 mb-6">
          <div className="w-10 h-px bg-[#A07850]/60" />
          <span className="text-[#A07850] text-xs tracking-[0.3em] uppercase font-sans">Priser</span>
          <div className="w-10 h-px bg-[#A07850]/60" />
        </FadeIn>

        <FadeIn delay={0.1} className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#2C1A0E] leading-snug">
            Invester i deg selv
          </h2>
          <p className="mt-4 text-[#3D2610]/60 font-sans font-light text-lg leading-relaxed">
            Alle priser er inkl. mva. Betaling skjer via Vipps eller faktura.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <FadeIn key={plan.title} delay={0.1 + i * 0.12}>
              <div
                className={`relative p-8 rounded-sm flex flex-col gap-6 h-full transition-all duration-500 text-center overflow-hidden ${
                  plan.featured
                    ? 'bg-[#7A5230] border border-[#5C3820]'
                    : 'bg-[#F5EDE0] border border-[#C4A882]/40'
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-6 right-[-32px] w-36 rotate-45 bg-[#5C3820] text-[#F5EDE0] text-[10px] font-sans tracking-widest uppercase text-center py-1.5">
                    Anbefalt
                  </div>
                )}

                <div>
                  <h3 className={`font-serif text-2xl font-light mb-1 ${plan.featured ? 'text-[#F5EDE0]' : 'text-[#2C1A0E]'}`}>
                    {plan.title}
                  </h3>
                  <p className={`text-xs font-sans tracking-widest uppercase ${plan.featured ? 'text-[#D4B896]/70' : 'text-[#A07850]/60'}`}>
                    {plan.duration}
                  </p>
                </div>

                <div className="flex items-baseline gap-1 justify-center">
                  <span className={`font-serif text-5xl font-light ${plan.featured ? 'text-[#F5EDE0]' : 'text-[#5C3820]'}`}>
                    {plan.price}
                  </span>
                  <span className={`font-sans text-sm ${plan.featured ? 'text-[#D4B896]/60' : 'text-[#3D2610]/40'}`}>kr</span>
                </div>

                <p className={`font-sans font-light text-sm leading-relaxed ${plan.featured ? 'text-[#F5EDE0]/80' : 'text-[#3D2610]/65'}`}>
                  {plan.description}
                </p>

                <div className="flex flex-col gap-3 items-center">
                  <div className="flex flex-col gap-3 text-left">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <span className={`mt-0.5 text-xs flex-shrink-0 ${plan.featured ? 'text-[#D4B896]' : 'text-[#A07850]'}`}>✓</span>
                        <span className={`text-sm font-sans ${plan.featured ? 'text-[#F5EDE0]/80' : 'text-[#3D2610]/65'}`}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://system.easypractice.net/book/breens-helhetsterapi-1?cookie_fixed=1#choose-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto block text-center py-3 text-sm font-sans tracking-widest uppercase rounded-sm transition-colors duration-300 ${
                    plan.featured
                      ? 'bg-[#F5EDE0] text-[#5C3820] hover:bg-[#EDD9C0]'
                      : 'border border-[#A07850]/40 text-[#7A5230] hover:border-[#7A5230] hover:bg-[#EDD9C0]/60'
                  }`}
                >
                  Book nå
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-10 text-center">
          <p className="text-[#3D2610]/40 text-sm font-sans">
            Usikker på hvilken pakke som passer deg? Book en gratis 15-minutters avklaringssamtale.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
