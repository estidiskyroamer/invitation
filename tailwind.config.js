/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",],
  theme: {
    extend: {
      colors: {
        'peach': '#f0e1c2',
        'dark': '#050505',
        'offwhite': '#F5F0ED'
      },
      backgroundImage: {
        'end-gradient': "linear-gradient(180deg, rgba(245,240,237,1) 10%, rgba(245,240,237,0) 35%, rgba(245,240,237,0) 100%)"
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"]
      }
    },
  },
  plugins: [],
}

