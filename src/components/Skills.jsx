import React from 'react'
import { motion } from 'framer-motion'

// Icons for the skills (mimicking the reference image style)
const MobileIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
)

const TrendingIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
)

const CodeIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
)

const skillsData = [
  {
    title: "Développement Mobile",
    desc: "Création d'applications performantes et fluides pour iOS et Android avec Flutter et React Native.",
    icon: <MobileIcon />,
  },
  {
    title: "Écosystème Web",
    desc: "Réalisation d'expériences immersives avec React, Next.js, respectant les standards modernes.",
    icon: <GlobeIcon />,
  },
  {
    title: "Architecture & Code",
    desc: "Développement d'architectures scalables, maintenables et respectueuses de la Clean Architecture.",
    icon: <TrendingIcon />,
  },
  {
    title: "Design UI/UX",
    desc: "Conception d'interfaces élégantes, ergonomiques et centrées sur l'utilisateur via Figma.",
    icon: <CodeIcon />,
  }
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-dark overflow-hidden border-t border-white/5 font-sans">

      {/* Background ambient stars/particles */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-[#C5A880] rounded-full blur-[1px]" />
        <div className="absolute top-[40%] right-[20%] w-1.5 h-1.5 bg-[#C5A880] rounded-full blur-[2px] opacity-40" />
        <div className="absolute top-[70%] left-[30%] w-1 h-1 bg-[#C5A880] rounded-full" />
        <div className="absolute top-[80%] right-[15%] w-2 h-2 bg-[#C5A880] rounded-full blur-[2px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 flex flex-col items-center">

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tighter text-ink-muted flex items-center gap-4 sm:gap-6 w-full sm:w-auto mb-16 sm:mb-24">
          <span className="w-8 sm:w-12 md:w-24 h-px bg-white/20" />
          Domaines <span className="italic text-ink ml-1 sm:ml-2">d'Expertise.</span>
        </h2>

        <div className="relative w-full max-w-4xl mx-auto">

          {/* The Central Vertical Timeline Line (Desktop: Center, Mobile: Left) */}
          <div className="absolute left-[38px] sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C5A880]/50 to-transparent sm:-translate-x-1/2 z-0" />

          <div className="flex flex-col gap-12 sm:gap-0">
            {skillsData.map((skill, index) => {
              // Alternate sides on desktop, always right on mobile
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  key={index}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center w-full sm:mb-24"
                >

                  {/* DESKTOP LEFT SPACING (If Card is on Right) */}
                  {!isLeft && (
                    <div className="hidden sm:block w-[45%] pr-12" />
                  )}

                  {/* THE CARD CONTENT */}
                  {/* On mobile: left margin to avoid the line. On desktop: width 45%, flex end/start depending on side */}
                  <div className={`w-full sm:w-[45%] pl-[80px] sm:pl-0 relative z-20 flex ${isLeft ? 'sm:justify-end sm:pr-12' : 'sm:justify-start sm:pl-12'}`}>

                    <div className="relative w-full max-w-md bg-[#161616] border border-white/5 rounded-2xl p-6 sm:p-8 hover:-translate-y-1 transition-transform duration-300">
                      {/* Custom app color ambient glow behind the card */}
                      <div className="absolute inset-0 bg-[#C5A880] opacity-[0.03] blur-[40px] rounded-2xl -z-10 pointer-events-none" />

                      <h3 className="text-lg sm:text-xl font-bold text-accent-copper tracking-wide mb-3">{skill.title}</h3>
                      <p className="text-sm sm:text-base text-ink-muted font-light leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>

                    {/* Horizontal Connector Line (Desktop Only) */}
                    <div className={`hidden sm:block absolute top-1/2 -translate-y-1/2 h-[1px] w-12 bg-gradient-to-${isLeft ? 'l' : 'r'} from-[#C5A880]/60 to-transparent ${isLeft ? 'right-0' : 'left-0'}`} />
                  </div>

                  {/* THE TIMELINE NODE (Icon in Circle) */}
                  <div className="absolute left-[18px] sm:left-1/2 top-[24px] sm:top-1/2 -translate-y-1/2 sm:-translate-x-1/2 z-30 flex items-center justify-center">

                    {/* The glowing orb */}
                    <div className="relative w-10 h-10 sm:w-14 sm:h-14">
                      {/* Heavy background glow */}
                      <div className="absolute inset-0 rounded-full bg-[#C5A880] blur-md opacity-50 animate-pulse" />

                      {/* The solid circle */}
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#C5A880] to-[#E2C79F] shadow-inner flex items-center justify-center text-[#111111] border-[1px] border-white/30">
                        {skill.icon}
                      </div>
                    </div>

                    {/* Horizontal Connector Line (Mobile Only - connects node to card) */}
                    <div className="block sm:hidden absolute left-full top-1/2 -translate-y-1/2 h-[1px] w-6 bg-gradient-to-r from-[#C5A880]/80 to-transparent" />

                  </div>

                  {/* DESKTOP RIGHT SPACING (If Card is on Left) */}
                  {isLeft && (
                    <div className="hidden sm:block w-[45%] pl-12" />
                  )}

                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
