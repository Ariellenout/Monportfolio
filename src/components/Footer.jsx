import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-dark border-t border-white/[0.05] py-12 px-6 sm:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] text-ink-subtle">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <span>© {new Date().getFullYear()}</span>
        <span className="hidden md:block w-8 h-px bg-white/10" />
        <span className="text-ink"> Arielle NOUTAIS</span>
      </div>

      {/* <div className="flex items-center gap-8 sm:gap-12">
        <a href="#" className="hover:text-ink transition-colors cursor-none relative group">
          Awwwards
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-copper group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#" className="hover:text-ink transition-colors cursor-none relative group">
          Dribbble
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-copper group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#" className="hover:text-ink transition-colors cursor-none relative group">
          Twitter
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-copper group-hover:w-full transition-all duration-300"></span>
        </a>
      </div> */}
    </footer>
  )
}
