/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue2: "#2A7B9B",
          blue: "#3F54DD",
          gray: "#EDEDED",
          bluelight: "#B5C8DC",
          green: "#152B35",
        },
        fontFamily: {
          sans: [
            'AvenirLTStd-Black',
            'AvenirLTStd-BlackOblique',
            'AvenirLTStd-Book',
            'AvenirLTStd-BookOblique',
            'AvenirLTStd-Heavy',
            'AvenirLTStd-HeavyOblique',
            'AvenirLTStd-Light',
            'AvenirLTStd-LightOblique',
            'AvenirLTStd-Medium',
            'AvenirLTStd-MediumOblique',
            'AvenirLTStd-Oblique',
            'AvenirLTStd-Roman',
            'Helvetica',
            'Arial',
            'sans-serif',
          ],
        avenir: ['Avenir', 'sans-serif'],
        nasalization: ['Nasalization', 'sans-serif'],
        },
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: { color: theme("colors.bodyColor") },
      });
    }),
    require('@tailwindcss/forms'),
  ],
}

