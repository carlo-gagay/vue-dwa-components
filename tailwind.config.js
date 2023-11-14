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
        white: '#FFFFFF',
        error: {
          'red': '#F13838'
        },
        green: {
          DEFAULT: '#4A6163',
          '01': '#1C4447',
          '02': '#869FA1',
          '03': '#D0DFE0'
        },
        grey: {
          '03': '#AFAFAF',
        },
        neutral: {
          '01': '#524B43',
          '02': '#857E76',
          '03': '#BDB9B4',
          '04': '#EDEAE7',
          '05': '#F9F7F4',
          'black': '#0C0B0B',
          'white': '#FFF'
        },
        orange: {
          DEFAULT: '#F9A66C',
          '01': '#974A14',
          '02': '#D16E28',
          '03': '#FFC7A0',
          '04': '#FFE6D5'
        },
        yellow: {
          DEFAULT: '#FFC94B',
          '01': '#9E650F',
          '02': '#D89128',
          '03': '#FFE6AC',
          '04': '#FFF2D3'
        }
      },
      fontSize: {
        'title': ['60px', {lineHeight: '80px'}],
        'heading-1': ['40px', {lineHeight: '48px', fontWeight: '700'}],
        'heading-2': ['30px', {lineHeight: '40px', fontWeight: '700'}],
        'sub-heading-1': ['24px', {lineHeight: '32px', fontWeight: '500'}],
        'sub-heading-2': ['20px', {lineHeight: '30px'}],
        'body-1': ['14px', {lineHeight: '20px', fontWeight: '700'}],
        'body-2': ['14px', {lineHeight: '20px'}],
        'link': ['14px', {lineHeight: '20px'}],
        'button': ['14px', {lineHeight: '20px', fontWeight: '600'}],
        'caption': ['12px', {lineHeight: '16px'}],
        'small-text': ['10px', {lineHeight: '14px', fontWeight: '500'}]
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

