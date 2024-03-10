/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          1: " #6f42c1",
          2: "#191129",
          3: "#30214f",
        },
      },
    },
  },
  plugins: [],
};
