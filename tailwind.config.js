/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        background_dark: '#1a1a1a',
        background: '#222222',
        background_light: '#333333',
        detail: '#F2F1F2',
        detail_dark: '#e7e4e7',
        active: '#444444'
      }
    },
  },
  plugins: [],
};