import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Introduction', href: '#hero' },
  { name: 'Expertise', href: '#about' },
  { name: 'Galerie', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  }

  const linkWrapperVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
  }

  const linkVariants = {
    closed: { y: 40, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <>
      {/* Desktop & Mobile Header Structure */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center items-center transition-all duration-700 ${scrolled ? 'py-4 sm:py-6' : 'py-8 sm:py-12'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      >
        <div className={`
          flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 rounded-full w-[90%] max-w-5xl mx-auto
          transition-all duration-700 border
          ${scrolled
            ? 'bg-[#111111]/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
            : 'bg-transparent border-transparent'
          }
        `}>

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group z-50">
            <span className="font-serif italic text-xl sm:text-2xl tracking-tighter text-white group-hover:text-accent-copper transition-colors duration-500">
              Rosine
              <span className="font-sans font-light not-italic text-accent-copper/80 text-sm ml-1">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-10 lg:gap-14 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[11px] lg:text-xs uppercase tracking-[0.25em] text-white/60 hover:text-white transition-all duration-300 relative group py-2"
              >
                {link.name}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-accent-copper group-hover:w-full transition-all duration-500 easeExt" />
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action (Mail) */}
          <a
            href="mailto:rosinenoutais@gmail.com"
            className="hidden md:flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent-copper/30 bg-accent-copper/5 hover:bg-accent-copper/15 hover:border-accent-copper/60 transition-all duration-500 group"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent-copper group-hover:shadow-[0_0_10px_rgba(197,168,128,0.8)] transition-shadow duration-500" />
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent-copper">Discutons</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden group relative flex flex-col justify-center items-end gap-[5px] w-8 h-8 z-50 focus:outline-none"
          >
            <motion.div
              className={`h-[1px] bg-white transition-all duration-300 ${isOpen ? 'w-full rotate-45 translate-y-[3px]' : 'w-full group-hover:bg-accent-copper'}`}
            />
            <motion.div
              className={`h-[1px] bg-white transition-all duration-300 ${isOpen ? 'w-full -rotate-45 -translate-y-[3px]' : 'w-2/3 group-hover:w-full group-hover:bg-accent-copper'}`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[90] bg-[#111111]/95 backdrop-blur-2xl flex flex-col justify-center px-8 sm:px-16"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(197,168,128,0.1)_0%,transparent_60%)] pointer-events-none mix-blend-screen" />
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')", backgroundRepeat: 'repeat' }} />

            <motion.nav
              className="flex flex-col gap-6 sm:gap-8 relative z-10"
              variants={linkWrapperVariants}
            >
              {navLinks.map((link, i) => (
                <div key={link.name} className="overflow-hidden py-1">
                  <motion.a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    variants={linkVariants}
                    className="group inline-flex items-center gap-6"
                  >
                    <span className="font-sans text-[10px] sm:text-xs text-accent-copper/60 uppercase tracking-widest mt-1">
                      0{i + 1}
                    </span>
                    <span className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white group-hover:text-transparent group-hover:italic transition-all duration-500" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.9)' }}>
                      {link.name}
                    </span>
                  </motion.a>
                </div>
              ))}

              <motion.div variants={linkVariants} className="mt-8 border-t border-white/10 pt-8">
                <span className="block font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Contact direct</span>
                <a href="mailto:rosinenoutais@gmail.com" className="text-lg font-serif italic text-accent-copper underline decoration-accent-copper/30 underline-offset-4">
                  rosinenoutais@gmail.com
                </a>
              </motion.div>
            </motion.nav>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
