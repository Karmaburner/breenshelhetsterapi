import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Footer() {
  return (
    <footer id="kontakt" className="relative border-t border-[#A07850]/20 py-20 pb-28 px-6 bg-[#2C1A0E]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          <FadeIn className="md:col-span-1">
            <h3 className="font-serif text-2xl font-light text-[#D4B896] mb-3">
              Stefanie Charlotte
            </h3>
            <p className="text-[#F5EDE0]/45 font-sans font-light text-sm leading-relaxed mb-6">
              Hypnoterapeut · EFT · Traumeterapi · Healing
              <br />
              Tilbyr behandlinger fysisk og online.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/stefaniebreen/' },
                { label: 'Facebook', href: 'https://www.facebook.com/stefanie.c.breen' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A07850]/60 hover:text-[#C4A882] text-xs font-sans tracking-widest uppercase transition-colors duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="md:col-span-1">
            <h4 className="text-[#A07850]/60 text-xs tracking-[0.3em] uppercase font-sans mb-5">
              Navigasjon
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              {[
                { label: 'Hjem', href: '#hjem' },
                { label: 'Om meg', href: '#om-meg' },
                { label: 'Tjenester', href: '#tjenester' },
                { label: 'Priser', href: '#priser' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-[#F5EDE0]/45 hover:text-[#D4B896] font-sans text-sm transition-colors duration-300 min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} className="md:col-span-1">
            <h4 className="text-[#A07850]/60 text-xs tracking-[0.3em] uppercase font-sans mb-5">
              Kontakt
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[#F5EDE0]/30 text-xs font-sans uppercase tracking-wider mb-1">E-post</p>
                <a href="mailto:stefanie.breen@gmail.com" className="text-[#D4B896]/70 hover:text-[#C4A882] text-sm font-sans transition-colors duration-300">
                  stefanie.breen@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[#F5EDE0]/30 text-xs font-sans uppercase tracking-wider mb-1">Telefon</p>
                <a href="tel:+4741338285" className="text-[#D4B896]/70 hover:text-[#C4A882] text-sm font-sans transition-colors duration-300">
                  +47 413 38 285
                </a>
              </div>
              <div>
                <p className="text-[#F5EDE0]/30 text-xs font-sans uppercase tracking-wider mb-1">Sted</p>
                <p className="text-[#D4B896]/70 text-sm font-sans">Hønefoss · Online</p>
              </div>
              <div>
                <p className="text-[#F5EDE0]/30 text-xs font-sans uppercase tracking-wider mb-1">Org.nr</p>
                <p className="text-[#D4B896]/70 text-sm font-sans">933 908 291</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#A07850]/20 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F5EDE0]/25 text-xs font-sans tracking-wide">
            &copy; {new Date().getFullYear()} Stefanie Charlotte. Alle rettigheter forbeholdt.
          </p>
          <a
            href="https://lilitlabs.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A07850]/70 hover:text-[#A07850]/100 text-xs font-sans tracking-wide transition-colors duration-300"
          >
            Nettsiden er utviklet av Lilit Labs™
          </a>
        </div>
      </div>
    </footer>
  )
}
