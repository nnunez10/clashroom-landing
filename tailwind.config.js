/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all your source files
    "./public/index.html"         // Optional, if you're using anything in public
  ],
  theme: {
    extend: {
      colors: {
        clashGreen: "#00ff9f",
        clashTurquoise: "#00ffe7",
        clashGray: "#1f1f1f",
      },
      animation: {
        gradientShift: "gradientShift 10s ease infinite",
        fadeIn: "fadeIn 1.5s ease-in-out",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class', // Enables dark mode via adding 'dark' class to html/body
}
