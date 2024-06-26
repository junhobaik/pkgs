/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/*.{js,ts,jsx,tsx,css}', './src/**/*.{js,ts,jsx,tsx,css}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('tailwind-nord')],
};
