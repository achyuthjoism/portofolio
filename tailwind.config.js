const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      nela: "#293347",
      white: "#fff",
      blue: "#0f02df",
      lightBlue: "#03ebfa",
    },
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", ...defaultTheme.fontFamily.sans],
        ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
