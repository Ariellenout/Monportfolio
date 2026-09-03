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
          DEFAULT: '#FFFFFF',
          deep: '#FFFFFF',
          surface: '#F6F8F8',
          elevated: '#EFF3F3',
          panel: 'rgba(255, 255, 255, 0.6)',
        },
        accent: {
          copper: '#438B9D', /* ABC Salles Teal-Green (brand accent) */
          copperLight: '#6BAAB9',
          rust: '#2C6575', /* Darker Teal-Green */
          emerald: '#2F6B5E', /* Deeper Green (secondary) */
          emeraldLight: '#4E8B78',
        },
        ink: {
          DEFAULT: '#121715', /* Near-Black (was Pearl White) */
          muted: '#54605C',
          subtle: '#7A8783',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        sans: ['"Alan Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Alan Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #438B9D 0%, #2F6B5E 100%)',
        'gradient-mesh': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(67, 139, 157, 0.12), transparent)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(18, 23, 21, 0.12)',
        'glass-lg': '0 24px 48px rgba(18, 23, 21, 0.16)',
        'inner-soft': 'inset 0 1px 0 0 rgba(18, 23, 21, 0.05)',
        'copper-glow': '0 0 40px rgba(67, 139, 157, 0.25)',
        'emerald-glow': '0 0 40px rgba(47, 107, 94, 0.2)',
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
