/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'museo': ['MuseoModerno', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#2A2F43',
      },
    },
  },
  plugins: [],
}

