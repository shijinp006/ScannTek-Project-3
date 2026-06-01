/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1a1a1a',
        'brand-red': '#e60000', /* matching the bright red */
        'brand-red-light': '#ff1a1a',
        'brand-orange': '#ff4d00', /* for the gradient text */
        'card-bg': '#222222',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Impact', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
