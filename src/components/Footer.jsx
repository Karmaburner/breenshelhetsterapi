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
    <footer id="kontakt" className="relative border-t border-[#A07850]/20 py-10 px-6 bg-[#2C1A0E]">
      <div className="max-w-5xl mx-auto">

        {/* Rad 1: Navn + kontakt */}
        <FadeIn className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
          <div>
            <h3 className="font-serif text-xl font-light text-[#D4B896] mb-1">Stefanie Charlotte</h3>
            <p className="text-[#F5EDE0]/45 font-sans font-light text-xs">
              Hypnoterapeut · EFT · Traumeterapi · Healing · Hønefoss & Online
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="mailto:stefanie.breen@gmail.com" className="text-[#D4B896]/70 hover:text-[#C4A882] text-xs font-sans transition-colors duration-300">
              stefanie.breen@gmail.com
            </a>
            <a href="tel:+4741338285" className="text-[#D4B896]/70 hover:text-[#C4A882] text-xs font-sans transition-colors duration-300">
              +47 413 38 285
            </a>
            <a href="https://www.instagram.com/stefaniebreen/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#A07850]/60 hover:text-[#C4A882] transition-colors duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/stefanie.c.breen" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#A07850]/60 hover:text-[#C4A882] transition-colors duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </FadeIn>

        <div className="h-px bg-gradient-to-r from-transparent via-[#A07850]/20 to-transparent mb-6" />

        {/* Rad 2: Nav + copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <ul className="flex flex-wrap gap-x-6 gap-y-1 list-none">
            {[
              { label: 'Hjem', href: '#hjem' },
              { label: 'Om meg', href: '#om-meg' },
              { label: 'Tjenester', href: '#tjenester' },
              { label: 'Priser', href: '#priser' },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[#F5EDE0]/45 hover:text-[#D4B896] font-sans text-xs transition-colors duration-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <p className="text-[#F5EDE0]/25 text-xs font-sans">
              &copy; {new Date().getFullYear()} Stefanie Charlotte · Org.nr. 933 908 291
            </p>
            <a href="https://lilitlabs.no" target="_blank" rel="noopener noreferrer" className="text-[#A07850]/70 hover:text-[#A07850]/100 text-xs font-sans transition-colors duration-300">
              Lilit Labs™
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
