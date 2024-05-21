// const plugin = require('tailwindcss/plugin')
const themes = require('daisyui/src/theming/themes')
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        Rokkit: ['Rokkitt', 'serif'],
      },
      boxShadow: {
        center: '0 0 15px 3px blur',
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...themes['dracula'],
          // 'primary': '#4b5071',
          // 'secondary': '#282A36',
          // 'accent': '#5eead4',
          // 'neutral': '#dededf',
          // 'base-100': '#282A36',
          // 'info': '#374151',
          // 'success': '#50FA7B',
          // 'warning': '#F1FA8C',
          // 'error': '#FF5555',
        },
        light: {
          ...themes['corporate'],
          // 'primary': '#6E75A8',
          // 'secondary': '#8D91C7',
          // 'accent': '#175676',
          // 'neutral': '#0A1045',
          // 'base-100': '#cacaca',
          // 'base-200': '#dddeee',
          // 'base-300': '#8D91C7',
          // 'info': '#374151',
          // 'success': '#50FA7B',
          // 'warning': '#F1FA8C',
          // 'error': '#FF5555',
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}