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
          primary:    "#53A4B6",
          accent:     "#FFCC6C",
          accentSoft: "#FFF7B9",
          dark:       "#001F26",
          grayMid:    "#8A8A8A",
          grayLight:  "#E6E6E6",
        },
      },
      fontFamily: {
        sans:    ["DM Sans", "sans-serif"],
        heading: ["MuseoModerno", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #53A4B6, #a8c9a0)",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: { color: theme("colors.brand.dark") },
      });
    }),
    require('@tailwindcss/forms'),
  ],
}
