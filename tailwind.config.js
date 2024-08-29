/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        cantarell: ["Cantarell", "sans-serif"],
        fjalla: ["'Fjalla One'", "serif"],
      },
    },
  },
  plugins: [],
};
