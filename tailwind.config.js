/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('./images/img1.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
