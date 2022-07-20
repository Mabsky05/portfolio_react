const plugin = require('tailwindcss/plugin')

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    }
  })
});

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundColor: false,
    extend: {},
    fontFamily: {
      racing: ['Racing Sans One', 'cursive'],
      expletus: ['Expletus Sans', 'cursive'],
      spectral: ['Spectral', 'cursive']
    },
    container: {
      center: true,
    },
  },
  plugins: [backfaceVisibility],
}