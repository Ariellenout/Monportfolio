import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PlayIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
  </svg>
)

// Single source of truth for project data. `video` is left null until real
// demo clips are added: drop a file in /public/assets/demos/ and point this
// field at it (e.g. '/assets/demos/qrpaye.mp4') to light up its Démo button.
export const projects = [
  {
    name: 'QrPaye',
    type: 'FinTech App',
    description: 'Solution de paiement par QR code transparente & sans friction.',
    tags: ['Flutter', 'Mobile', 'UI/UX'],
    number: '01',
    color: '#438B9D',
    image: '/assets/qrpaye_real.png',
    video: null,
    links: [
      { type: 'android', url: 'https://play.google.com/store/apps/details?id=dev.sicoges.qr_manager&pcampaignid=web_share' },
      { type: 'ios', url: 'https://apps.apple.com/bj/app/qr-paye/id6443739921?l=fr-FR' }
    ]
  },
  {
    name: 'SecureVPN',
    type: 'Web App',
    description: "Activateur et comparateur d'offres VPN pour un choix optimal.",
    tags: ['Web', 'VPN', 'UI'],
    number: '02',
    color: '#4A5D4E',
    image: '/assets/securevpn_real.png',
    video: null,
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
    color: '#F5F5F7',
    image: '/assets/s2m_real.png',
    video: null,
    links: [
      { type: 'ios', url: 'https://apps.apple.com/bj/app/s2m/id6745101167?l=fr-FR' }
    ]
  },
  {
    name: 'Upafrica',
    type: 'Social Platform',
    description: "Connecter et réunir au travers d'une esthétique moderne.",
    tags: ['UI/UX', 'Mobile'],
    number: '04',
    color: '#6BAAB9',
    image: '/assets/upafrica_real.png',
    video: null,
    links: []
  },
  {
    name: 'Permis Bénin',
    type: 'Mobile App',
    description: "Application mobile d'entraînement et de préparation à l'examen du permis de conduire au Bénin.",
    tags: ['Flutter', 'Quiz', 'Éducation'],
    number: '05',
    color: '#1E3A8A',
    image: '/assets/permisbenin_real.png',
    video: null,
    links: []
  },
  {
    name: 'CovoitElite',
    type: 'Mobile App',
    description: 'Application de mobilité et de livraison connectant les particuliers pour partager trajets et colis à moindre coût.',
    tags: ['Flutter', 'Covoiturage', 'Livraison'],
    number: '06',
    color: '#5B21B6',
    image: '/assets/covoitelite_real.png',
    video: null,
    links: []
  },
  {
    name: 'SOS Urgence Bénin',
    type: 'Mobile App',
    description: "Appel des secours en un geste et localisation des pharmacies de garde, hôpitaux, police et pompiers les plus proches.",
    tags: ['Flutter', 'Urgence', 'Géolocalisation'],
    number: '07',
    color: '#DC2626',
    image: '/assets/sosurgence_real.png',
    video: null,
    links: []
  }
]

// Doubled so the strip can loop seamlessly — the auto-scroll wraps from the
// end of the first copy straight into the identical start of the second.
const loopProjects = [...projects, ...projects]

export default function Projects() {
  const scrollerRef = useRef(null)
  const [activeDemo, setActiveDemo] = useState(null)
  const pausedRef = useRef(false)
  const resumeTimerRef = useRef(null)

  const pause = () => {
    pausedRef.current = true
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
  }
  const scheduleResume = (delay = 2200) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => { pausedRef.current = false }, delay)
  }

  // Continuous auto-scroll — pauses the instant a visitor touches, drags,
  // hovers, or uses the wheel, and quietly resumes a couple of seconds
  // after they let go, so free scrolling always wins.
  useEffect(() => {
    let rafId
    const step = () => {
      const el = scrollerRef.current
      if (el && !pausedRef.current) {
        el.scrollLeft += 0.6
        const half = el.scrollWidth / 2
        if (el.scrollLeft >= half) el.scrollLeft -= half
      }
      rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [])

  const handleScroll = () => {
    // Keep manual scrolling (drag/swipe/wheel) inside the same seamless
    // loop the auto-scroll uses, in both directions.
    const el = scrollerRef.current
    if (!el) return
    const half = el.scrollWidth / 2
    if (el.scrollLeft >= half) el.scrollLeft -= half
    else if (el.scrollLeft < 0) el.scrollLeft += half
  }

  const scrollByCard = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    pause()
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: 'smooth' })
    scheduleResume()
  }

  return (
    <section id="projects" className="relative bg-dark py-20 sm:py-28 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 mb-10 sm:mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
      >
        <h2 className="flex items-center gap-4 sm:gap-6">
          <span className="w-8 sm:w-12 md:w-24 h-px bg-ink/20" />
          <span className="text-3xl sm:text-5xl md:text-6xl font-sans font-semibold tracking-tight text-ink-muted">Galerie</span>
          <span className="font-script text-4xl sm:text-6xl md:text-7xl text-accent-rust ml-1 sm:ml-2">d'Œuvres.</span>
        </h2>

        <div className="flex items-center gap-2 pl-[3.25rem] sm:pl-0">
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Œuvre précédente"
            className="w-11 h-11 rounded-full border border-ink/10 bg-dark-surface flex items-center justify-center hover:bg-accent-copper hover:border-accent-copper group transition-colors duration-300"
          >
            <span className="w-2.5 h-2.5 border-t-2 border-l-2 border-ink/50 group-hover:border-white -rotate-45 ml-0.5 transition-colors"></span>
          </button>
          <button
            onClick={() => scrollByCard(1)}
            aria-label="Œuvre suivante"
            className="w-11 h-11 rounded-full border border-ink/10 bg-dark-surface flex items-center justify-center hover:bg-accent-copper hover:border-accent-copper group transition-colors duration-300"
          >
            <span className="w-2.5 h-2.5 border-t-2 border-r-2 border-ink/50 group-hover:border-white rotate-45 mr-0.5 transition-colors"></span>
          </button>
        </div>
      </motion.div>

      {/* Filmstrip — near full-bleed: breaks out of the max-w container via a
          calc()-based negative margin (robust regardless of ancestor width),
          but keeps a slight gutter on both edges instead of running truly
          flush to the browser edge, visible at all times, mid-scroll included. */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
        style={{
          '--gutter': 'clamp(1rem, 3vw, 3rem)',
          width: 'calc(100vw - 2 * var(--gutter))',
          marginLeft: 'calc(50% - 50vw + var(--gutter))',
        }}
      >
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          onMouseEnter={pause}
          onMouseLeave={() => scheduleResume(600)}
          onPointerDown={pause}
          onPointerUp={() => scheduleResume()}
          onTouchStart={pause}
          onTouchEnd={() => scheduleResume()}
          onWheel={() => { pause(); scheduleResume() }}
          className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-6 sm:px-12 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {loopProjects.map((project, index) => (
            <article
              key={`${project.name}-${index}`}
              className="group relative shrink-0 w-[72vw] sm:w-[360px] lg:w-[400px] h-[380px] sm:h-[440px] lg:h-[480px] rounded-[28px] overflow-hidden bg-[#161616]"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/35 to-transparent" />
              </div>

              <div
                className="absolute inset-0 z-10 opacity-30 mix-blend-overlay pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}, transparent 80%)` }}
              />

              <div className="absolute inset-0 z-20 p-6 sm:p-7 flex flex-col justify-end text-left items-start">
                <p className="font-sans font-semibold text-accent-copperLight text-[9px] sm:text-[11px] tracking-[0.2em] uppercase mb-2">
                  {project.type}
                </p>

                <h3 className="text-xl sm:text-2xl lg:text-[1.7rem] font-sans font-semibold text-white mb-2">
                  {project.name}
                </h3>

                <div className="w-8 h-[1px] bg-white/30 mb-3" />

                <p className="text-[12px] sm:text-[13px] font-sans font-light text-white/85 leading-relaxed max-w-[92%] mb-5 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 w-full">
                  {project.links && project.links.length > 0 ? (
                    project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.type}
                        className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent-copper hover:border-accent-copper transition-colors backdrop-blur-md"
                      >
                        {link.type === 'android' && <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-white">Playstore</span>}
                        {link.type === 'ios' && <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-white">AppStore</span>}
                        {link.type === 'web' && <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-white">Site Web</span>}
                      </a>
                    ))
                  ) : (
                    <span className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-white/80">En cours</span>
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      if (project.video) setActiveDemo(project)
                    }}
                    disabled={!project.video}
                    title={project.video ? 'Voir la démo' : 'Démo bientôt disponible'}
                    className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border flex items-center gap-1.5 justify-center transition-colors backdrop-blur-md ${
                      project.video
                        ? 'bg-accent-copper border-accent-copper hover:bg-accent-rust hover:border-accent-rust'
                        : 'bg-white/10 border-white/20 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <PlayIcon className="w-2.5 h-2.5 text-white shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-white">Démo</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.div>

      {/* Démo lightbox — opens on the Démo button once a project has a
          video wired up (see the `video` field on each project above). */}
      <AnimatePresence>
        {activeDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveDemo(null)}
            className="fixed inset-0 z-[999] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-glass-lg"
            >
              <video
                src={activeDemo.video}
                poster={activeDemo.image}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveDemo(null)}
                aria-label="Fermer la démo"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 backdrop-blur-md transition-colors"
              >
                <span className="text-lg leading-none">×</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
