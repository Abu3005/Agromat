/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('./images/img1.png')",
      },
    },
  },
  plugins: [],
};
