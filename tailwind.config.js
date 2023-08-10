/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const withOpacity = function (variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else return `rgba(var(${variableName}))`;
  };
};

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        gayathri: ["'Gayathri'", ...defaultTheme.fontFamily.sans],
        fredoka: ["'Fredoka'", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        pirate: "url('./assets/img/background.jpg')",
      },
      colors: {
        white19: "rgba(255,255,255, 0.19)",
        white06: "rgba(255,255,255, 0.06)",
      },
    },
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
};
