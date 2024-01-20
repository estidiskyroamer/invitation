/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "linear-gradient(to bottom, rgba(0,0,0, 0.9), rgba(0,0,0, 0.0)), url('./assets/images/foto1.jpg')",
        'marble': "url('./assets/images/glossy-black.jpg')",
        'background-black': "url('./assets/images/black.jpg')",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"]
      }
    },
  },
  plugins: [],
}

