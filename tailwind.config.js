module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 600: "#858585", 700: "#686868", 900: "#242424" },
        purple: {
          50: "#fae0ff",
          200: "#c89dea",
          900: "#4a2468",
          "900_01": "#4b2568",
          A700: "#9e24ff",
        },
        deep_purple: {
          50: "#ead1ff",
          300: "#aa85c7",
          "50_99": "#ead1ff99",
          "50_b2_01": "#ead1ffb2",
          "50_b2": "#e9d1ffb2",
          "50_7e": "#ead1ff7e",
          A100: "#cd8eff",
        },
        amber: { 100: "#ffeeb3" },
        teal: { A100: "#bafff2" },
        black: { 900: "#000000" },
        cyan: { 50: "#e5fffa", "50_01": "#d8fff7" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", montserrat: "Montserrat" },
      backgroundImage: {
        gradient: "linear-gradient(136deg ,#cd8eff,#d8fff7,#ffeeb3)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
