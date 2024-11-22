/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Default sans-serif font
        basuru: ['Basuru', 'sans-serif'], // Custom font with fallback
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio'),
  ],
  daisyui: {
    themes: ["light"], // Use only the light theme
  },
};
