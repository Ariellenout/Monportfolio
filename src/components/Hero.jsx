import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Deep parallax
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 300])
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white font-sans selection:bg-[#438B9D] selection:text-white"
    >
      {/* Immersive background aura - purely aesthetic */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full pointer-events-none mix-blend-multiply opacity-[0.12] hidden md:block"
        animate={{
          x: mousePosition.x - window.innerWidth * 0.25,
          y: mousePosition.y - window.innerWidth * 0.25,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 4 }}
        style={{
          background: 'radial-gradient(circle, #438B9D 0%, transparent 60%)',
          filter: 'blur(120px)'
        }}
      />

      {/* Static light for mobile */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:hidden rounded-full bg-[#438B9D]/10 blur-[100px] pointer-events-none" />

      {/* Extreme subtle noise texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')", backgroundRepeat: 'repeat' }}
      />

      <motion.div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 h-screen flex flex-col justify-between pt-32 pb-12"
        style={{ y: yText, opacity: opacityText, scale: scaleText }}
      >
        {/* Superior Header Elements - Symmetrical Elegance */}
        <div className="flex justify-between items-start w-full border-b border-ink/[0.08] pb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#438B9D] font-medium font-sans">Bénin</span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-ink/40 font-sans">Disponible 2026</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.4 }}
            className="text-right flex flex-col gap-2"
          >
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-ink/60 font-sans">Portfolio</span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#438B9D]/60 font-sans">Édition Limitée</span>
          </motion.div>
        </div>

        {/* Central Monumental Typography */}
        <div className="flex-1 flex flex-col justify-center items-center text-center w-full relative">

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "120%", opacity: 0, rotate: 2 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[13vw] lg:text-[11vw] font-serif font-light text-[#438B9D] leading-[0.8] tracking-tighter"
            >
              DÉVELOPPEUSE
            </motion.h1>
          </div>

          <div className="overflow-hidden flex items-center justify-center gap-6 md:gap-12 mt-4 md:mt-8 w-full">

            {/* Left line decorator */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "80px", opacity: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block h-[1px] bg-[#438B9D]/60"
            />

            {/* Staggered layered sub-text */}
            <motion.h1
              initial={{ y: "120%", opacity: 0, rotate: -2 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15vw] lg:text-[13vw] font-serif italic text-transparent leading-[0.8] tracking-tight relative flex items-center justify-center"
              style={{ WebkitTextStroke: '1px rgba(67, 139, 157, 0.85)' }}
            >
              <span className="relative z-10 font-light">Mobile</span>

              {/* UI Ampersand accent layered perfectly */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
                className="absolute -bottom-4 md:-bottom-8 -right-8 md:-right-16 text-3xl md:text-6xl lg:text-[4rem] font-sans font-light text-[#438B9D] not-italic tracking-tighter"
                style={{ WebkitTextStroke: '0px' }}
              >
                & UI
              </motion.span>
            </motion.h1>

            {/* Right line decorator */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "80px", opacity: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block h-[1px] bg-[#438B9D]/60"
            />
          </div>
        </div>

        {/* Bottom Abstract Architecture */}
        <div className="relative flex flex-col md:flex-row justify-between items-end w-full gap-12 md:gap-0 mt-8 min-h-[140px]">

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }}
            className="flex flex-col gap-3 max-w-[280px] text-left order-2 md:order-1"
          >
            <span className="block w-4 md:w-8 h-[1px] bg-ink/20 mb-2" />
            <p className="font-sans font-medium text-[9px] md:text-[10px] text-ink/50 leading-[2] uppercase tracking-[0.3em]">
              Architecture / Conception
            </p>
            <p className="font-sans font-medium text-[9px] md:text-[10px] text-ink/50 leading-[2] uppercase tracking-[0.3em]">
              Intégration d'Exception
            </p>
          </motion.div>

          {/* Majestic Scroll Indicator (Centered Absolute) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 1 }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 flex-col items-center gap-6"
          >
            <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-[#438B9D]/80">Scroll</span>
            <div className="w-[1px] h-20 bg-ink/10 relative overflow-hidden mt-4">
              <motion.div
                className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#438B9D] to-transparent"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.8 }}
            className="max-w-[280px] md:max-w-[340px] text-left md:text-right order-1 md:order-3"
          >
            <p className="font-sans font-light text-[11px] md:text-xs text-ink/50 leading-[1.8] tracking-wide">
              Façonner des expériences digitales qui transcendent l'ordinaire.
              <span className="italic font-serif text-[#438B9D]/90 text-sm md:text-base mt-2 block">L'alliage parfait de l'esthétique et de la rigueur technique.</span>
            </p>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}
