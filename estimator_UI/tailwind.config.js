/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: "#2D6CDF", // Bright blue
      secondary: "#F5F7FB",
      accent: "#4CAF50",
    },
    },
  },
  plugins: [],
}
