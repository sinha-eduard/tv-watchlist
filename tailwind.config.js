/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/views/*.{ejs,js}", "./public/*.{ejs,js}", "./public/js/*.{ejs,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["business"],
  },
}

