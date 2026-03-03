import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
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
            className="fixed inset-0 z-[99999] bg-dark flex flex-col items-center justify-center font-serif"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
          >
            <div className="overflow-hidden mb-2">
              <motion.div
                className="text-ink text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] uppercase font-light"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                Arielle Noutais
              </motion.div>
            </div>

            <motion.div
              className="font-sans text-ink-muted text-[10px] sm:text-xs tracking-[0.4em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Portfolio 2026
            </motion.div>

            <motion.div
              className="w-32 h-px bg-white/5 mt-8 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-accent-copper"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>
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
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
