import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionWave from './components/SectionWave'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ErrorBoundary from './components/ErrorBoundary'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate a brief loading state for the cinematic entry
    const timer = setTimeout(() => {
      setLoading(false)
      window.scrollTo(0, 0)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[99999] bg-gradient-to-b from-[#EFF8F9] via-white to-white flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
          >
            {/* Ambient dot accent, echoes Hero's decorative language */}
            <div className="absolute left-[20%] top-[32%] hidden sm:flex flex-col gap-2 opacity-70" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-rust/50" />
              <span className="w-2 h-2 rounded-full bg-accent-rust" />
              <span className="w-1.5 h-1.5 rounded-full bg-accent-rust/50" />
            </div>

            <div className="overflow-hidden mb-1">
              <motion.div
                className="font-script text-ink text-5xl sm:text-6xl md:text-7xl leading-none"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                Arielle Noutais
              </motion.div>
            </div>

            <motion.div
              className="font-sans text-accent-copper text-[10px] sm:text-xs font-bold tracking-[0.35em] uppercase mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Portfolio 2026
            </motion.div>

            <motion.div className="w-32 h-[3px] bg-ink/10 rounded-full mt-8 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: 'linear-gradient(90deg, #6BAAB9, #2C6575)' }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>

            {/* Signature wave motif, ties the splash to the rest of the site */}
            <div className="absolute bottom-0 left-0 right-0">
              <SectionWave animated className="h-[50px] sm:h-[80px] lg:h-[100px]" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className="relative min-h-screen grain bg-dark text-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Navbar />

            {/* Smooth scrolling container simulation / Main Wrapper */}
            <main className="relative z-10 selection:bg-accent-copper/30 selection:text-ink">
              <Hero />
              <SectionWave animated className="h-[64px] sm:h-[100px] lg:h-[130px]" />
              <About />
              <SectionWave flip />
              <Projects />
              <SectionWave />
              <Skills />
              <SectionWave flip />
              <Contact />
              <SectionWave />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
