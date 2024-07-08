/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playwrite': ['Playwrite GB S', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
