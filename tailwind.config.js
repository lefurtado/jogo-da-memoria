/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
      '-moz-backface-visibility': 'visible',
      '-webkit-backface-visibility': 'visible',
      '-ms-backface-visibility': 'visible'
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
      '-ms-backface-visibility': 'hidden'
    }
  })
});

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back-image': "url('assets/images/background.png')"
      },
      colors: {
        'brand-color': '#EE9430',
        'brand-color-alt' : '#2B0E11',
        'brand-color-light': '#ECC839',
        'dark-10': '#15181F',
        'dark-20': '#FFFFFF'
      }
    },
  },
  plugins: [backfaceVisibility],
}