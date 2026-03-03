import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IntroScene from './IntroScene'
import ErrorBoundary from './ErrorBoundary'

const titleWords = ['Bienvenue', 'dans', 'mon', 'univers']

export default function IntroView({ onEnter }) {
  const [exiting, setExiting] = useState(false)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  const handleEnter = () => {
    setExiting(true)
    setTimeout(() => onEnter?.(), 800)
  }

  return (
    <AnimatePresence mode="wait">
      {!exiting ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#1a1a2e' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        >
          <ErrorBoundary fallback={<div className="absolute inset-0 z-0" style={{ background: '#1a1a2e' }} />}>
            <IntroScene mouseRef={mouseRef} />
          </ErrorBoundary>

          {/* Vignette légère */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 90% 70% at 50% 45%, transparent 40%, rgba(26, 26, 46, 0.6) 100%)',
            }}
          />

          {/* Anneau circulaire en pointillés — style radar, segment accent cuivré */}
          <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center" aria-hidden>
            <svg className="w-[80vmin] h-[80vmin] -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" strokeDasharray="4 3" />
              <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(201,162,39,0.5)" strokeWidth="0.8" strokeDasharray="12 6" strokeDashoffset="0" pathLength="100" style={{ strokeDasharray: '25 75' }} />
            </svg>
          </div>

          {/* Contenu : nom au-dessus, titre, CTA en bas */}
          <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
            {/* Nom en accent au-dessus du titre */}
            <motion.p
              className="font-sans text-sm sm:text-base font-medium tracking-[0.35em] uppercase text-accent-copper mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Arielle NOUTAIS
            </motion.p>

            {/* Titre principal — gros, bold, blanc */}
            <motion.h1
              className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight uppercase mb-16"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
                hidden: {},
              }}
            >
              {titleWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.15em]"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* CTA : rectangle sombre, bordure blanche, chevron vers le bas cuivré */}
            <motion.button
              type="button"
              onClick={handleEnter}
              className="group flex flex-col items-center gap-2 py-4 px-8 rounded-sm border border-white/30 bg-white/5 hover:bg-white/10 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xs font-mono text-white/80 tracking-widest uppercase">
                Cliquez pour me découvrir
              </span>
              <motion.span
                className="text-accent-copper"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
