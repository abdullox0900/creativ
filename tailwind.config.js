/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nosifer': ['Nosifer', 'cursive'],
        'barriecito': ['Barriecito', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

