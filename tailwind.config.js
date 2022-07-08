/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['inter', 'sans-serif']
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'purple': '#8284FA',
        'purpleDark': '#5E60CE',
        'blue': '#4EA8DE',
        'blueDark': '#1E6F9F',
        'danger': '#E25858',
        'person': {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
