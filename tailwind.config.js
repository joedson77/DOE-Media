/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js,liquid}",
    "./**/*.{html,js,liquid}",
    "./sections/*.{html,js,liquid}",
    "./snippets/*.{html,js,liquid}",
    "./templates/*.{html,js,liquid}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}