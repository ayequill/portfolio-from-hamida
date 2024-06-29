/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "portfolioPrimary": "#0098D0",
        "portfolioSecondary": "#0056B8",
        "portfolioTextDark": "#2a2a2a",
        "portfolioTextLight": "#656560",
        "portfolioStroke": "#CAD0D8",
        "portfolioWhite": "#ffffff",
        "portfolioGradient": "linear-gradient(90deg,#5FD4FF 0%, #0056B8 100% )"
      }
    },
  },
  plugins: [],
}

