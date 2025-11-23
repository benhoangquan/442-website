import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#8b7bff',
        cream: '#f5efe6',
        brown: '#5c4a3a',
      },
      fontFamily: {
        futura: ['Futura', 'Avenir', 'Century Gothic', 'sans-serif'],
        momo: ['Momo Signature', 'Dancing Script', 'Brush Script MT', 'cursive'],
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        montreal1: ['Momo Signature', 'Dancing Script', 'Brush Script MT', 'cursive'],
        montreal2: ['Playfair Display', 'serif'],
        montreal3: ['Great Vibes', 'cursive'],
        montreal4: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config

