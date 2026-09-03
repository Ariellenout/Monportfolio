import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
}

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const SparkIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2c.6 3.6 1.9 5.9 5.5 6.5-3.6.6-4.9 2.9-5.5 6.5-.6-3.6-1.9-5.9-5.5-6.5C10.1 7.9 11.4 5.6 12 2Z"
      fill="currentColor"
    />
    <path
      d="M19 14c.3 1.8 1 2.5 2.8 2.8-1.8.3-2.5 1-2.8 2.8-.3-1.8-1-2.5-2.8-2.8 1.8-.3 2.5-1 2.8-2.8Z"
      fill="currentColor"
    />
  </svg>
)

const ArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const PlaneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 3 3 10.5l7 2.5m11-10-3.5 15L10 15.5M21 3l-11 12.5" />
  </svg>
)

const CurlyArrowIcon = (props) => (
  <svg viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
    <path d="M2 8c14 0 8 22 24 22 10 0 12-9 12-14" />
    <path d="M30 10 38 16 32 22" />
  </svg>
)

const PlayIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
  </svg>
)

const StarBadgeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2c.7 4 2.3 6.3 6 7-3.7.7-5.3 3-6 7-.7-4-2.3-6.3-6-7 3.7-.7 5.3-3 6-7Z" />
  </svg>
)

const SparkleDashesIcon = (props) => (
  <svg viewBox="0 0 30 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...props}>
    <path d="M6 2 3 9" />
    <path d="M15 0 12 9" />
    <path d="M24 2 21 9" />
  </svg>
)

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#EFF8F9] via-white to-white pt-32 pb-20 sm:pt-40 sm:pb-28 font-sans"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">

        {/* LEFT — copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left order-2 lg:order-1"
        >
          <motion.span
            variants={item}
            className="text-[13px] font-bold tracking-[0.08em] uppercase text-accent-copper mb-4"
          >
            Développeuse Mobile Freelance
          </motion.span>

          <h1 className="font-sans font-extrabold text-[2.7rem] leading-[1.06] tracking-tight sm:text-6xl lg:text-[3.6rem]">
            <motion.span variants={item} className="block text-ink">
              Concevoir des
            </motion.span>
            <motion.span variants={item} className="block text-accent-copper">
              Applications qui
            </motion.span>
            <motion.span variants={item} className="flex items-center gap-3 mt-1">
              <span className="font-script text-[3.4rem] sm:text-7xl lg:text-[4.6rem] leading-none text-accent-rust">
                Inspirent
              </span>
              <SparkIcon className="w-7 h-7 sm:w-9 sm:h-9 text-accent-copper shrink-0 mt-3" />
            </motion.span>
          </h1>

          <motion.p variants={item} className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-md mt-6 mb-9">
            Je conçois des applications mobiles fluides et intuitives, pensées pour aider les marques à se démarquer et à grandir.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent-copper text-white text-sm font-semibold hover:bg-accent-rust transition-colors duration-300"
            >
              Voir mes Projets
              <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:rosinenoutais@gmail.com"
              className="group inline-flex items-center gap-2.5 pl-2.5 pr-6 py-2.5 rounded-full bg-white shadow-glass border border-ink/5 text-ink text-sm font-semibold hover:text-accent-copper transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-copper text-white shrink-0 group-hover:bg-accent-rust transition-colors duration-300">
                <PlaneIcon className="w-3.5 h-3.5" />
              </span>
              Discutons
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 mt-9 text-accent-rust">
            <CurlyArrowIcon className="w-10 h-8 hidden sm:block" />
            <span className="font-script text-2xl sm:text-[1.7rem]">
              Construisons quelque chose d'unique !
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT — portrait + blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="relative flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-[260px] sm:w-[340px] lg:w-[380px]">

            {/* Organic blob backdrop — exact replica of the purple container silhouette from the reference image */}
            <svg
              viewBox="0 0 200 200"
              overflow="visible"
              preserveAspectRatio="none"
              className="absolute -inset-4 sm:-inset-6 -z-10 w-[calc(100%+2rem)] h-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] sm:h-[calc(100%+3rem)]"
            >
              <motion.path
                fill="#438B9D"
                animate={{
                  d: [
                    'M 54,46 C 68,46 78,54 90,54 C 105,54 120,28 142,32 C 158,35 154,62 158,76 C 164,92 188,94 188,118 C 188,144 165,172 144,182 C 122,192 76,192 48,182 C 28,172 24,148 20,132 C 15,116 6,110 6,94 C 6,74 24,54 42,48 C 47,46 51,46 54,46 Z',
                    'M 53,47 C 67,47 77,55 89,55 C 104,55 119,29 141,33 C 157,36 153,63 157,77 C 163,93 187,95 187,119 C 187,145 164,173 143,183 C 121,193 75,193 47,183 C 27,173 23,149 19,133 C 14,117 5,111 5,95 C 5,75 23,55 41,49 C 46,47 50,47 53,47 Z',
                    'M 54,46 C 68,46 78,54 90,54 C 105,54 120,28 142,32 C 158,35 154,62 158,76 C 164,92 188,94 188,118 C 188,144 165,172 144,182 C 122,192 76,192 48,182 C 28,172 24,148 20,132 C 15,116 6,110 6,94 C 6,74 24,54 42,48 C 47,46 51,46 54,46 Z',
                  ],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>

            {/* Dot cluster, upper-left of the blob — loose diagonal scatter */}
            <div className="absolute -left-3 top-4 sm:-left-6 sm:top-6 w-10 h-12 z-20" aria-hidden="true">
              <span className="absolute left-0 top-0 w-1.5 h-1.5 rounded-full bg-accent-rust/60" />
              <span className="absolute left-3 top-4 sm:left-4 sm:top-5 w-2.5 h-2.5 rounded-full bg-accent-rust" />
              <span className="absolute left-0 top-9 sm:left-1 sm:top-10 w-1.5 h-1.5 rounded-full bg-accent-rust/60" />
            </div>

            {/* Hand-drawn sparkle dashes, upper-right */}
            <SparkleDashesIcon className="absolute right-2 -top-6 sm:right-4 sm:-top-8 w-7 h-6 text-accent-rust -rotate-12 z-20" aria-hidden="true" />

            {/* The cutout's own canvas ends in a hard straight edge right
                through the torso — a soft alpha fade at the bottom (and a
                touch on the sides) dissolves that edge into the blob instead
                of reading as a visible cut. */}
            <img
              src="/assets/arielle-hero.png"
              alt="Arielle Noutais, développeuse mobile Flutter"
              className="relative z-10 w-full h-auto object-contain"
              width={928}
              height={1152}
              style={{
                maskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 97%), linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskImage: '-webkit-linear-gradient(top, black 0%, black 82%, transparent 97%), -webkit-linear-gradient(left, transparent 0%, black 4%, black 96%, transparent 100%)',
                WebkitMaskComposite: 'source-in',
              }}
            />

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-4 sm:-right-10 top-[10%] sm:top-[12%] bg-white rounded-2xl shadow-glass px-4 py-3 flex flex-col items-center border border-ink/5 z-20"
            >
              <span className="absolute -right-2 -top-2 flex items-center justify-center w-6 h-6 rounded-full bg-accent-rust text-white shadow-glass">
                <StarBadgeIcon className="w-3 h-3" />
              </span>
              <span className="text-2xl font-extrabold text-accent-copper leading-none">3+</span>
              <span className="text-[8.5px] uppercase tracking-wider text-ink-muted mt-1 text-center leading-tight">
                Années<br />d'Expérience
              </span>
            </motion.div>

            {/* Floating skill card */}
            <motion.div
              initial={{ opacity: 0, y: 16, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-4 sm:-left-10 bottom-6 sm:bottom-10 bg-white rounded-2xl shadow-glass px-4 py-2.5 border border-ink/5 z-20"
            >
              <span className="block text-[11px] font-semibold text-ink whitespace-nowrap">Flutter · iOS · Android</span>
              <span className="block font-script text-lg leading-none text-accent-rust mt-0.5">3 ans de métier</span>
            </motion.div>

            {/* Small potted-plant accent, lower-right */}
            <svg viewBox="0 0 40 44" className="absolute -right-2 -bottom-3 sm:right-1 sm:-bottom-4 w-9 h-10 z-10" aria-hidden="true">
              <path d="M9 20h22l-3 20a3 3 0 0 1-3 2.6H15a3 3 0 0 1-3-2.6L9 20Z" fill="#438B9D" />
              <path d="M20 20c0-8 3-13 8-15-1 7-3 12-8 15Z" fill="#2F6B5E" />
              <path d="M20 20c0-7-3.5-11.5-8-13 0 6.5 2.5 11 8 13Z" fill="#4E8B78" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
