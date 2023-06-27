/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      bcg1: 'rgb(var(--background1) / <alpha-value>)',
      bcg2: 'rgb(var(--background2) / <alpha-value>)',
      shadow: 'rgb(var(--shadow) / <alpha-value>)',
      frg1: 'rgb(var(--foreground1) / <alpha-value>)',
      frg2: 'rgb(var(--foreground2) / <alpha-value>)',
      blue: 'rgb(var(--blue) / <alpha-value>)',
      green: 'rgb(var(--green) / <alpha-value>)',
    },
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        strokeDash: {
          '0%': { 'stroke-dasharray': '0 50%' },
          '100%': { 'stroke-dasharray': '50% 0' },
        },
      },
      animation: {
        float: 'float 1.5s ease-in-out infinite',
        strokeDash: 'strokeDash 2s ease-in-out',
      },
    },
  },
  plugins: [],
}
