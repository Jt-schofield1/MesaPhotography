import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Custom breakpoints - mobile-first approach
    screens: {
      'xs': '480px',     // Extra small - large phones
      'sm': '640px',     // Small - tablets
      'md': '768px',     // Medium - small laptops
      'lg': '1024px',    // Large - laptops
      'xl': '1280px',    // Extra large - desktops
      '2xl': '1536px',   // 2x Extra large - large desktops
    },
    extend: {
      colors: {
        mm: {
          white: '#ffffff',
          offwhite: '#fafafa',
          cream: '#fdfcfa',
          'dusty-blue': '#799DAC',
          gold: '#FFBF7D',
          navy: '#1e3a5f',
          charcoal: '#2d3748',
        },
      },
      fontFamily: {
        crimson: ['var(--font-crimson)', 'Georgia', 'serif'],
        halimum: ['var(--font-halimum)', 'cursive'],
      },
      fontSize: {
        // Fluid typography for mobile
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.25vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.35vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.5vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.2rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.5vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.8rem + 2vw, 3rem)',
        'fluid-5xl': 'clamp(3rem, 2rem + 3vw, 4rem)',
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'super-wide': '0.15em',
      },
      spacing: {
        // Touch-friendly spacing
        'touch': '44px',      // Minimum touch target
        'touch-lg': '48px',   // Comfortable touch target
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
      },
      minHeight: {
        'touch': '44px',
        'touch-lg': '48px',
        'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
      },
      minWidth: {
        'touch': '44px',
        'touch-lg': '48px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
        'slide-in-bottom': 'slideInBottom 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideInRight: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        slideInBottom: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      aspectRatio: {
        'portrait': '3/4',
        'landscape': '4/3',
        'wide': '16/9',
        'ultrawide': '21/9',
      },
    },
  },
  plugins: [],
}

export default config
