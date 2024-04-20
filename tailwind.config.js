/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        customBg: '#F5F6F0',
      },
    },
  },
  plugins: [],
  fontFamily: {
    custom: ['Mona Sans', 'sans'], 
  },
}

