/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '620px',
      lg: '976px',
      xl: '1440px',
    },
    letterSpacing: {
      widest: '0.3em'
    },
    colors: {
      darkCyan: 'hsl(158, 36%, 37%)',
      cream: 'hsl(30, 38%, 92%)',
      veryDarkBlue: 'hsl(212, 21%, 14%)',
      darkGrayishBlue: 'hsl(228, 12%, 48%)',
      white: 'hsl(0, 0%, 100%)'
    },
    extend: {
      fontFamily: {
        'fraunces': ['Fraunces', 'sans-serif']
      },
      content: {
        'shoppingCartIcon': 'url("../images/icon-cart.svg")'
      }
    },
  },
  plugins: [],
}
