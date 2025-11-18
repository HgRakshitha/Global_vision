/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#021024", // deeper blue
          deep: "#031a33",
          gold: "#f5c542", // brighter gold
          accent: "#ffe187", // lighter highlight
          white: "#ffffff",
          lightbg: "#0b2949", // card navy
        },
      },
      fontFamily: {
        display: ["Poppins", "Inter", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "card-soft": "0 10px 30px rgba(2,6,23,0.35)",
      },
    },
  },
  plugins: [],
};
