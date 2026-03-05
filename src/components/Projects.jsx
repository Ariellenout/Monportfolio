import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Duplicating the projects array to create an 8-item array
// This allows the 3D rotating circle to appear full and match the layout naturally
const baseProjects = [
  {
    name: 'QrPaye',
    type: 'FinTech App',
    description: 'Solution de paiement par QR code transparente & sans friction.',
    tags: ['Flutter', 'Mobile', 'UI/UX'],
    number: '01',
    color: '#C5A880', // Champagne Gold
    image: '/assets/qrpaye_real.png',
    links: [
      { type: 'android', url: 'https://play.google.com/store/apps/details?id=dev.sicoges.qr_manager&pcampaignid=web_share' },
      { type: 'ios', url: 'https://apps.apple.com/bj/app/qr-paye/id6443739921?l=fr-FR' }
    ]
  },
  {
    name: 'SecureVPN',
    type: 'Web App',
    description: 'Activateur et comparateur d\'offres VPN pour un choix optimal.',
    tags: ['Web', 'VPN', 'UI'],
    number: '02',
    color: '#4A5D4E', // Emerald/Sage
    image: '/assets/securevpn_real.png',
    links: [
      { type: 'web', url: 'https://prudence-vpn.vercel.app' }
    ]
  },
  {
    name: 'S2M Mobile',
    type: 'Enterprise App',
    description: 'Architecture scalable et expérience utilisateur optimisée.',
    tags: ['Flutter', 'Clean Arch'],
    number: '03',
    color: '#F5F5F7', // Pearl White
    image: '/assets/s2m_real.png',
    links: [
      { type: 'ios', url: 'https://apps.apple.com/bj/app/s2m/id6745101167?l=fr-FR' }
    ]
  },
  {
    name: 'Upafrica',
    type: 'Social Platform',
    description: 'Connecter et réunir au travers d’une esthétique moderne.',
    tags: ['UI/UX', 'Mobile'],
    number: '04',
    color: '#8A7356', // Darker Gold
    image: '/assets/upafrica_real.png',
    links: [
      { type: 'ios', url: 'https://testflight.apple.com/join/ZZg8A4NY' }
    ]
  }
]
const projects = [...baseProjects, ...baseProjects.map(p => ({ ...p, number: p.number + 'b' }))]

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

  // A tight radius forces the cards to overlap heavily on the sides
  // creating the classic Cover Flow look but maintaining a true circular shape.
  const radius = 280

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
              className="relative w-full h-full flex items-center justify-center pointer-events-none"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: wheelRotation }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {projects.map((project, index) => {
                const diffAmt = index - activeIndex
                // Calculate distance considering wrap around for 8 items
                let diff = Math.abs(diffAmt)
                if (diff > totalItems / 2) diff = totalItems - diff
                const isActive = diff === 0

                // Standard circular positioning
                const angle = index * angleStep

                // We want to ensure all items in the circle remain visible, but side items are smaller and darker
                const scale = isActive ? 1 : Math.max(0.7, 1 - (diff * 0.1))
                const opacity = isActive ? 1 : Math.max(0.4, 1 - (diff * 0.15))
                const brightness = isActive ? '100%' : `${80 - diff * 15}%`
                const zIndex = totalItems - diff

                // Prevent physical 3D intersection: pull closer cards outwards
                const zOffset = Math.max(0, 60 - (diff * 30))

                return (
                  <div
                    key={`${project.name}-${index}`}
                    onClick={() => setActiveIndex(index)}
                    className={`absolute w-[280px] sm:w-[340px] h-[380px] sm:h-[480px] rounded-[32px] overflow-hidden cursor-pointer bg-[#161616] ${isActive ? 'shadow-2xl shadow-black/80 ring-1 ring-white/10' : 'shadow-lg hover:shadow-xl'} pointer-events-auto`}
                    style={{
                      transformOrigin: "center center",
                      transform: `rotateY(${angle}deg) translateZ(${radius + zOffset}px) scale(${scale})`,
                      transformStyle: "preserve-3d",
                      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                      opacity: opacity,
                      filter: `brightness(${brightness})`,
                      zIndex: zIndex
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

                    <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-end text-left items-start">
                      <p className="font-sans font-semibold text-accent-copper text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-1 drop-shadow-md">
                        {project.type}
                      </p>

                      <h3 className="text-2xl sm:text-3xl font-serif font-light text-white drop-shadow-md mb-2">
                        {project.name}
                      </h3>

                      <div className="w-8 h-[1px] bg-white/30 mb-3" />

                      <p className="text-[10px] sm:text-xs font-sans font-light text-white/90 leading-relaxed max-w-[90%] line-clamp-2 md:line-clamp-3 mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 sm:gap-3 relative z-50 pointer-events-auto w-full">
                        {project.links ? (
                          project.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              title={link.type}
                              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent-copper hover:border-accent-copper hover:text-dark transition-colors backdrop-blur-md pointer-events-auto"
                            >
                              {link.type === 'android' && <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">Playstore</span>}
                              {link.type === 'ios' && <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">AppStore</span>}
                              {link.type === 'web' && <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">Site Web</span>}
                            </a>
                          ))
                        ) : (
                          <>
                            <button className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent-copper hover:border-accent-copper hover:text-dark transition-colors backdrop-blur-md">
                              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">En cours</span>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    {/* Add an outer overlay that dynamically darkens non-active slides smoothly for the Cover Flow effect */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/40 z-30 transition-opacity duration-700 pointer-events-none" />
                    )}
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
