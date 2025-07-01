/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class', // <--- Required for manual theme toggling
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        clashGreen: "#10b981",
        clashBlue: "#06b6d4",
        clashGray: "#1e293b",
        clashRed: "#ef4444",
      },
    },
  },
  plugins: [],
}
