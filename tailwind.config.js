/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        coromont: ['Cormorant Garamond', 'serif'],
        josefin: ['Josefin Slab', 'serif'],
        tangerian: ['Tangerine', 'cursive']
      },
      colors: {
        'lightgold': '#FAF0E6',
        'gold': '#C48F56',
      },
    },
  },
  plugins: [],
}