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
        black: '#000205',
        green: {
          '02': '#869FA1',
          'green': '#4A6163'
        },
        grey: {
          '03': '#AFAFAF',
        },
        neutrals: {
          '02': '#857E76',
          '03': '#BDB9B4',
          '04': '#EDEAE7',
          '05': '#F9F7F4',
          'beige': '#FFFCF3',
          'black': '#0C0B0B',
          'white': '#FFF'
        },
        orange: {
          'orange': '#F9A66C'
        },
        white: '#FFFFFF',
        yellow: {
          'yellow': '#FFC94B'
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

