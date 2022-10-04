/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './views/**/*.ejs',
    './public/index.html' 
  ],
  theme: {
    extend: {
      colors: {
        ante: {
          50:  '#dfdaed',
          100: '#d1c8e5',
          300: '#c2b7dd',
          400: '#8c7eac',
          500: '#756ea2',
          600: '#686196',
          700: '#5d5787',
          800: '#524d77',
          900: '#484368',
        },
        bar: {
          400 : '#969798',
          500 : '#666666',
          700 : '#353535',
          800 : '#262626',
          900 : '#171818',
        },
      }
    },
  },
  plugins: [
    require("kutty")
  ],
}


