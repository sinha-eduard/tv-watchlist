/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/views/*.{ejs,js}", "./public/*.{ejs,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["business"],
  },
}

