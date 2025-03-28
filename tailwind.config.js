/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./*.{html,js}","./assets/js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#dd7973",
        secondary: "#fc8c85",
        dark: "#1E293B",
        light: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

