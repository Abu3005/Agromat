/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*.html"],
  theme: {
    screens: {
      smallest: "350px",
      esm: "470px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      justifySelf: {
        start: "start",
        end: "end",
        center: "center",
        stretch: "stretch",
      },
      backgroundImage: {
        t: "url('./images/devon.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
