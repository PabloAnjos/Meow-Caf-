/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-white': '#F7F2E8',
        'Headings-color': '#3C0E0E',
        'text-color-light-gray-200': '#282828',
        'text-color-light-gray-300': '#222222',
        'text-color-dark': '#1A1A1A',
        'brand-color-1': '#431B1B',
        'brand-color-2': '#4D1D1D',
        'pink-color': '#EB8E8E',
        'pink-color-2': '#F9C4C4',
        'pink-linear-gradient': '#F3C7C4',
        'pink-linear-gradient2': '#541511',
        'brow-linear-gradient': '#541511'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #FAFAFA, #541511)',
      },
    },
  },
  plugins: [],
}

