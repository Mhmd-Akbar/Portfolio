/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode:'class',
  theme: {
    container:{
      center: true,
      padding:'16px',

    },
    extend: {
      colors: {
        primary: '#0891b2',
        secondary: '#64748b',
        dark: '#334155',
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
