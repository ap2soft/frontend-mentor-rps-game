module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '725px',
      desktop: '1366px',
    },
    extend: {
      colors: {
        dark: '#3b4363',
        score: '#2a46c0',
        'header-outline': '#606e85',
        paper: {
          DEFAULT: '#5873f5',
          dark: '#405ee8',
          darkest: '#2a3e9e',
        },
        scissors: {
          DEFAULT: '#efa822',
          dark: '#eb9f10',
          darkest: '#c86f19',
        },
        rock: {
          DEFAULT: '#ce4966',
          dark: '#dc2e4f',
          darkest: '#9f1736',
        },
      },
      fontSize: {
        '2xs': '0.6rem',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
}
