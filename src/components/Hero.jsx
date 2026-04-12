import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      id="hjem"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#F5EDE0]"
    >
      {/* Subtle warm glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#D4B896]/25 blur-[120px]" />
      </div>

      <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-8">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#A07850]/50" />
        <span className="text-[#A07850] text-xs tracking-[0.3em] uppercase font-sans">Hypnoterapi · EFT · Traumeterapi · Healing</span>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#A07850]/50" />
      </motion.div>

      <motion.h1
        {...fadeUp(0.2)}
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-[#2C1A0E] mb-6"
      >
        Finn veien
        <br />
        <span className="italic text-[#7A5230]">tilbake til deg selv</span>
      </motion.h1>

      <motion.p
        {...fadeUp(0.3)}
        className="max-w-xl text-[#3D2610]/60 font-sans font-light text-lg md:text-xl leading-relaxed mb-10"
      >
        Jeg hjelper deg å frigjøre gamle mønstre, skape indre ro og leve mer autentisk –
        gjennom dyp, skånsom og transformerende terapi.
      </motion.p>

      <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-4 mt-14">
        <a
          href="https://system.easypractice.net/book/breens-helhetsterapi-1?cookie_fixed=1#choose-service"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 bg-[#7A5230] text-[#F5EDE0] font-sans text-sm tracking-widest uppercase rounded-sm hover:bg-[#5C3820] transition-colors duration-300"
        >
          Book en samtale
        </a>
        <a
          href="#tjenester"
          className="px-8 py-3.5 border border-[#A07850]/50 text-[#7A5230] font-sans text-sm tracking-widest uppercase rounded-sm hover:border-[#7A5230] hover:bg-[#EDD9C0]/40 transition-colors duration-300"
        >
          Se tjenester
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-[#A07850]/50 text-xs tracking-widest uppercase font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#A07850]/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
