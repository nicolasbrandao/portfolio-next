/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bcg1': '#161616',
        'bcg2': '#252525',
        'shadow': '#101010',
        'frg1': '#f8f8f2',
        'frg2': 'lightgray',
        'blue': '#8be9fd',
        'green': '#50fa7b',
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: 'float 1.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
