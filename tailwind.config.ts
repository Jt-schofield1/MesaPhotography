import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mm: {
          sky: '#DFF3FF',
          slate: '#7993AC',
          peach: '#FFBF7D',
          cream: '#FFF0C8',
          warm: '#D7CCC3',
        },
      },
      fontFamily: {
        crimson: ['var(--font-crimson)', 'Georgia', 'serif'],
        halimum: ['var(--font-halimum)', 'cursive'],
      },
      borderRadius: {
        mm: '16px',
      },
      boxShadow: {
        mm: '0 10px 30px rgba(0,0,0,.06)',
      },
    },
  },
  plugins: [],
}

export default config

