import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  plugins: [
    typography(),
  ],
  attributify: true,
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.amber,
        harmonydark: {
          100: '#272536',
          200: '#242233',
          300: '#212030',
          400: '#1E1D2D',
          500: '#1B1A2B',
          600: '#181728',
          700: '#151525',
          800: '#121222',
          900: '#0F0F1E',
        },
        buttoncolor: 'var(--button-color)',
        textcolor: 'var(--text-color)',
      },
    },
  },
})
