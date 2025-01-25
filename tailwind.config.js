/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        lavender:{
          600: '#E6E6FA',
        },
      },
    },

  },
  plugins: [],
}

