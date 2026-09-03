import React, { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Decorative wave ribbon used at section seams instead of a plain border.
 * A teal ribbon (not a background swap, since sections stay white) with a
 * dashed crest line echoing the hand-drawn accents used in Hero. The path
 * tiles seamlessly at x=1440, which the Hero→About seam uses to drift
 * slowly; other seams reuse the same shape held still.
 *
 * @param {boolean} animated - drift the ribbon horizontally (Hero seam only)
 * @param {boolean} flip - mirror horizontally, for rhythm between stacked seams
 * @param {string} className - height utility classes
 */
export default function SectionWave({ animated = false, flip = false, className = 'h-[56px] sm:h-[84px] lg:h-[104px]' }) {
  const reduceMotion = useReducedMotion()
  const uid = useId()
  const gradId = `waveRibbon-${uid}`
  const shadowId = `waveShadow-${uid}`
  const shouldAnimate = animated && !reduceMotion

  const ribbonPath =
    'M0,60 Q180,10 360,60 T720,60 T1080,60 T1440,60 T1800,60 T2160,60 T2520,60 T2880,60 ' +
    'L2880,100 Q2700,150 2520,100 T2160,100 T1800,100 T1440,100 T1080,100 T720,100 T360,100 T0,100 Z'
  const crestPath =
    'M0,60 Q180,10 360,60 T720,60 T1080,60 T1440,60 T1800,60 T2160,60 T2520,60 T2880,60'

  return (
    <div className="relative w-full overflow-hidden leading-[0]" aria-hidden="true">
      <div className={flip ? 'scale-x-[-1]' : undefined}>
        <motion.svg
          viewBox="0 0 2880 160"
          preserveAspectRatio="none"
          className={`block ${className}`}
          style={{ width: '200%' }}
          animate={shouldAnimate ? { x: ['0%', '-50%'], y: [0, -5, 0] } : undefined}
          transition={
            shouldAnimate
              ? {
                  x: { duration: 20, repeat: Infinity, ease: 'linear' },
                  y: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
                }
              : undefined
          }
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0.5" y2="0" spreadMethod="repeat">
              <stop offset="0%" stopColor="#6BAAB9" />
              <stop offset="45%" stopColor="#438B9D" />
              <stop offset="100%" stopColor="#2C6575" />
            </linearGradient>
            <filter id={shadowId} x="-10%" y="-40%" width="120%" height="200%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#2C6575" floodOpacity="0.18" />
            </filter>
          </defs>

          {/* ribbon body */}
          <path d={ribbonPath} fill={`url(#${gradId})`} filter={`url(#${shadowId})`} />

          {/* dashed crest, echoes the hand-drawn accents in Hero */}
          <path
            d={crestPath}
            fill="none"
            stroke="#EFF8F9"
            strokeWidth="3"
            strokeDasharray="10 12"
            strokeLinecap="round"
            opacity="0.9"
          />
        </motion.svg>
      </div>
    </div>
  )
}
