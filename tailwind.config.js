/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const flowbite = require("flowbite-react/tailwind");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),
  flowbite.plugin(),],
  
});
