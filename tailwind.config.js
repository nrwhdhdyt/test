/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: true
    },
    extend: {
      colors:{
        bgColor: '#f3f4f6',
        accent: '#030712',
        paragraph: '#737373',
        main: '#4338ca',
      }
    },
    fontFamily:{
      caveat: ['Caveat', 'cursive'],
      montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}