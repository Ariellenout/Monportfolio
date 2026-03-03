import React, { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    name: 'QrPaye',
    type: 'FinTech App',
    description: 'Solution de paiement par QR code transparente & sans friction.',
    tags: ['Flutter', 'Mobile', 'UI/UX'],
    number: '01',
    color: '#C5A880', // Champagne Gold
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Kymia',
    type: 'Management App',
    description: 'Interface épurée pour un suivi de gestion sans effort.',
    tags: ['React Native', 'Design System'],
    number: '02',
    color: '#4A5D4E', // Emerald/Sage
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'S2M Mobile',
    type: 'Enterprise App',
    description: 'Architecture scalable et expérience utilisateur optimisée.',
    tags: ['Flutter', 'Clean Arch'],
    number: '03',
    color: '#F5F5F7', // Pearl White
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Upafrica',
    type: 'Social Platform',
    description: 'Connecter et réunir au travers d’une esthétique moderne.',
    tags: ['UI/UX', 'Mobile'],
    number: '04',
    color: '#8A7356', // Darker Gold
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Studio',
    type: 'Editorial Layout',
    description: 'Conception d\'un magazine digital haut de gamme.',
    tags: ['Next.js', 'Framer'],
    number: '05',
    color: '#A8B0A5', // Soft Sage
    image: 'https://images.unsplash.com/photo-1481481600674-f0cb50304c40?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Olympe',
    type: 'E-commerce',
    description: 'Expérience d\'achat minimaliste pour marque de luxe.',
    tags: ['React', 'WebGL'],
    number: '06',
    color: '#444444', // Dark Grey
    image: 'https://images.unsplash.com/photo-1502982899975-8b738c0015cc?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Artemis',
    type: 'Creative Agency',
    description: 'Direction artistique et identité visuelle immersive.',
    tags: ['Vue', 'GSAP'],
    number: '07',
    color: '#6A5ACD', // Soft Purple
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Vortex',
    type: 'Data Dashboard',
    description: 'Outil d\'analyse et visualisation de données complexes.',
    tags: ['React', 'D3.js'],
    number: '08',
    color: '#FF7F50', // Coral
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  }
]

const Particle = ({ delay, top, left, size }) => (
  <motion.div
    className={`absolute rounded-full bg-accent-copper blur-[1px] ${size}`}
    style={{ top, left }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.1, 0.6, 0.1],
      scale: [1, 1.2, 1]
    }}
    transition={{
      duration: 3 + Math.random() * 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  />
)

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % projects.length)
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)

  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    delay: i * 0.3,
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 90 + 5}%`,
    size: Math.random() > 0.5 ? 'w-1 h-1' : 'w-1.5 h-1.5'
  }))

  const totalItems = projects.length
  const angleStep = 360 / totalItems

  // Math: To fit 8 cards into a circle, giving them breathing room.
  // We use radius = 420px which makes the circle robust and very visible
  const radius = 420

  const wheelRotation = activeIndex * -angleStep

  return (
    <section id="projects" className="relative min-h-screen bg-[#111111] flex flex-col justify-center overflow-hidden py-12 sm:py-24 border-t border-white/5">

      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map(p => (
          <Particle key={p.id} delay={p.delay} top={p.top} left={p.left} size={p.size} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 mb-8 text-center sm:text-left flex flex-col items-center sm:items-start"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tighter text-ink-muted flex items-center gap-4 sm:gap-6">
          <span className="w-8 sm:w-12 md:w-24 h-px bg-white/20" />
          Galerie <span className="italic text-ink ml-1 sm:ml-2">d'Œuvres.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full flex-1 flex flex-col items-center justify-center -mt-4 sm:-mt-8"
      >

        {/* Extremely high perspective so the circle is clearly visible */}
        <div className="relative w-full max-w-[100vw] sm:max-w-7xl mx-auto flex items-center justify-center h-[550px] sm:h-[650px] perspective-[3500px] px-8 sm:px-24">

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-12 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md cursor-pointer group"
          >
            <span className="w-3 h-3 border-t-2 border-l-2 border-white/50 group-hover:border-white transition-colors -rotate-45 ml-1"></span>
          </button>

          {/* The Wrapper for the 3D scene */}
          <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>

            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: wheelRotation }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {projects.map((project, index) => {
                const diff = Math.abs(index - activeIndex)
                const shortestDistance = Math.min(diff, totalItems - diff)
                const isActive = shortestDistance === 0

                const angle = index * angleStep

                // Opacity falls off slightly for depth but never goes below 0.3
                // Making sure ALL cards in the circle are visible
                const opacity = isActive ? 1 : Math.max(0.4, 1 - (shortestDistance * 0.2))
                const brightness = isActive ? '100%' : `${90 - shortestDistance * 20}%`

                return (
                  <div
                    key={project.name}
                    onClick={() => setActiveIndex(index)}
                    className={`absolute w-[260px] sm:w-[320px] h-[360px] sm:h-[440px] rounded-3xl overflow-hidden cursor-pointer bg-[#161616] ${isActive ? 'shadow-glass-lg' : 'shadow-lg hover:shadow-glass'}`}
                    style={{
                      transformOrigin: "center center",
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      transformStyle: "preserve-3d",
                      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      opacity: opacity,
                      filter: `brightness(${brightness})`
                    }}
                  >
                    <div className="absolute inset-0 z-0">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                    </div>

                    <div
                      className="absolute inset-0 z-10 opacity-30 mix-blend-overlay pointer-events-none"
                      style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}, transparent 80%)` }}
                    />

                    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-center items-center">
                      <p className="font-sans font-semibold text-accent-copper text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-1 drop-shadow-md">
                        {project.type}
                      </p>

                      <h3 className="text-2xl sm:text-3xl font-serif font-light text-white drop-shadow-md mb-2">
                        {project.name}
                      </h3>

                      <div className="w-8 h-[1px] bg-white/30 mb-3" />

                      <p className="text-[10px] sm:text-xs font-sans font-light text-white/90 leading-relaxed max-w-[90%] line-clamp-2 md:line-clamp-3 mb-4">
                        {project.description}
                      </p>

                      <div className="flex gap-3 mt-auto mb-2">
                        <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent-copper hover:border-accent-copper hover:text-dark transition-colors backdrop-blur-md">
                          <span className="text-[12px] sm:text-[14px] leading-none mb-1">In</span>
                        </button>
                        <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-12 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md cursor-pointer group"
          >
            <span className="w-3 h-3 border-t-2 border-r-2 border-white/50 group-hover:border-white transition-colors rotate-45 mr-1"></span>
          </button>

        </div>

        <div className="flex items-center gap-3 mt-8 sm:mt-12 z-20">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 ease-in-out ${activeIndex === idx
                ? 'w-8 bg-accent-copper'
                : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
            />
          ))}
        </div>

      </motion.div>
    </section>
  )
}
