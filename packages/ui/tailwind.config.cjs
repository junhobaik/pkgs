/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        '.hide-password-reveal': {
          '&::-ms-reveal, &::-ms-clear': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
