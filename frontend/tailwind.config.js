/* eslint-disable no-undef */
// @filename tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // plugins: [
  //   require("@tailwindcss/typography"),
  //   require("@tailwindcss/forms"),
  //   require("@tailwindcss/line-clamp"),
  //   require("tailwind-children"),
  //   require("tailwind-saasblocks"),
  // ],
};