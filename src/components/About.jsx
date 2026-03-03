import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20%' })

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }
    }
  }

  return (
    <section id="about" className="relative min-h-[80vh] py-20 sm:py-32 flex flex-col justify-center border-t border-white/10 mt-12 bg-dark font-sans selection:bg-accent-copper selection:text-dark">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0" ref={ref}>

        {/* Left Column: Minimalist Title */}
        <div className="md:col-span-4 md:border-r md:border-white/10 md:pr-12 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent-copper mb-4 sm:mb-6 block border-l border-accent-copper pl-4 flex items-center h-4">
              La Philosophie
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-ink leading-[1.2]">
              Concevoir <br />
              <span className="italic text-ink-muted">l'Évidence.</span>
            </h2>
          </motion.div>

          <motion.div
            className="hidden md:block pb-4 opacity-50"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.5 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-ink/50"></div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Narrative & Focused Tech Statement */}
        <div className="md:col-span-8 md:pl-12 lg:pl-20 flex flex-col justify-center">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-lg sm:text-xl lg:text-2xl font-sans font-light tracking-wide leading-[1.7] text-ink-muted mb-12 sm:mb-16"
          >
            <motion.p className="mb-6" variants={textVariants}>
              Je suis <span className="text-white font-medium">Arielle Noutais</span>. Mon approche du design dépasse l'esthétique pure pour toucher à l'essence de l'interaction humaine.
            </motion.p>
            <motion.p className="mb-6 flex flex-col gap-2" variants={textVariants}>
              <span>Spécialisée dans la conception d'applications natives avec :</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl text-accent-copper font-serif italic mt-1 drop-shadow-md">
                Flutter.
              </span>
            </motion.p>
            <motion.p variants={textVariants} className="text-sm sm:text-base lg:text-lg">
              Je forge des produits numériques qui ne se contentent pas d'être utilisés, mais qui sont profondément <span className="text-ink border-b border-accent-copper/40 pb-0.5 italic font-serif">ressentis</span>.
            </motion.p>
          </motion.div>

          {/* Structured Minimalist Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-b border-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {[
              { label: 'Expérience', value: '03+' },
              { label: 'Projets', value: '15+' },
              { label: 'Technologie', value: 'Flutter' }, // Replacing React with Flutter
              { label: 'Expertise', value: 'UI/UX' },
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col py-6 sm:py-8 ${i % 2 === 0 ? 'border-r border-white/5' : ''} md:border-r md:border-white/5 ${i === 3 ? 'md:border-none' : ''} ${i < 2 ? 'border-b border-white/5 md:border-b-0' : ''} px-4 items-center sm:items-start`}>
                <span className="font-sans text-[9px] text-accent-copper/70 uppercase tracking-[0.3em] mb-3">{stat.label}</span>
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-white italic">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
