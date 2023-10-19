/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('./images/img1.png')",
      },
      justifySelf: {
        start: "start",
        end: "end",
        center: "center",
        stretch: "stretch",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
