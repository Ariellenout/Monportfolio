/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#050505',
          deep: '#000000',
          surface: '#0a0a0a',
          elevated: '#111111',
          panel: 'rgba(5, 5, 5, 0.6)',
        },
        accent: {
          copper: '#C5A880', /* Champagne Gold */
          copperLight: '#D4BFA0',
          rust: '#8A7356', /* Darker Gold */
          emerald: '#4A5D4E', /* Muted Sage */
          emeraldLight: '#5E7362',
        },
        ink: {
          DEFAULT: '#F5F5F7', /* Pearl White */
          muted: '#A1A1AA',
          subtle: '#71717A',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #C5A880 0%, #4A5D4E 100%)',
        'gradient-mesh': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(197, 168, 128, 0.12), transparent)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'glass-lg': '0 24px 48px rgba(0, 0, 0, 0.5)',
        'inner-soft': 'inset 0 1px 0 0 rgba(245, 245, 247, 0.05)',
        'copper-glow': '0 0 40px rgba(197, 168, 128, 0.2)',
        'emerald-glow': '0 0 40px rgba(74, 93, 78, 0.15)',
      },
      backdropBlur: {
        'glass': '16px',
        'glass-lg': '24px',
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'pull-indicator': 'pull-indicator 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'pull-indicator': {
          '0%': { transform: 'scaleY(0)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}
