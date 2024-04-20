/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: '#222222',
        detail: '#F2F1F2',
        background_light: '#333333',
        active: '#444444'
      }
    },
  },
  plugins: [],
};