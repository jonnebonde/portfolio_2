/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22AFD7",
        black: "#000000",
        white: "#F3F7F0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Alfa Slab One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
