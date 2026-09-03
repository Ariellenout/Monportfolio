import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })

  const email = "rosinenoutais@gmail.com"

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-dark flex flex-col items-center justify-center px-6 overflow-hidden selection:bg-accent-copper selection:text-white">

      {/* Chic soft ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] sm:w-[60vw] sm:h-[60vw] bg-[radial-gradient(circle,rgba(67,139,157,0.06)_0%,transparent_60%)] pointer-events-none mix-blend-multiply" />

      {/* Grid pattern background for modern technical feel */}
      <div className="absolute inset-0 z-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(rgba(18, 23, 21, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 23, 21, 0.15) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center relative z-10" ref={ref}>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8 flex flex-col items-center gap-3"
        >
          <div className="w-8 h-[1px] bg-accent-copper/60" />
          <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-accent-copper/80">
            Une idée ? Un projet ?
          </p>
        </motion.div>

        <motion.div
          className="overflow-hidden pb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Much smaller, more elegant "Créons l'Exceptionnel" */}
          <h2 className="leading-tight cursor-none">
            <span className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-ink">Créons </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-script text-accent-rust">l'Exceptionnel.</span>
          </h2>
        </motion.div>

        {/* Elegant Abstract Divider */}
        <motion.div
          className="w-[1px] h-16 sm:h-20 bg-gradient-to-b from-ink/15 to-transparent mt-6 mb-8"
          initial={{ height: 0, opacity: 0 }}
          animate={isInView ? { height: 80, opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.6, ease: "circOut" }}
        />

        {/* Scaled down Email Link - Modern & Chic */}
        <motion.a
          href={`mailto:${email}`}
          className="group relative inline-block cursor-none"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl sm:text-3xl md:text-4xl font-script text-accent-rust transition-colors duration-700 group-hover:text-accent-copper">
              {email}
            </span>
            <span className="w-0 h-[1px] bg-accent-copper/80 group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1] mt-1" />
          </div>
        </motion.a>

        {/* Abstract Floating Shapes (Optional Elegance) */}
        <motion.div
          className="absolute -right-16 top-16 w-24 h-24 rounded-full border border-ink/[0.06] hidden md:block"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-16 bottom-0 w-20 h-20 rounded-full border border-accent-copper/5 hidden md:block"
          animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

      </div>
    </section>
  )
}
