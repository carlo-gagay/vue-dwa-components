/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        currentColor: 'currentColor',
        beige: '#FFFCF3',
        black: '#000205',
        green: {
          DEFAULT: '#4A6163',
          '02': '#869FA1'
        },
        grey: {
          '03': '#AFAFAF',
        },
        neutral: {
          '02': '#857E76',
          '03': '#BDB9B4',
          '04': '#EDEAE7',
          '05': '#F9F7F4',
          'black': '#0C0B0B',
          'white': '#FFF'
        },
        orange: {
          DEFAULT: '#F9A66C'
        },
        white: '#FFFFFF',
        yellow: {
          DEFAULT: '#FFC94B'
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

