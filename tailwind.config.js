module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: {
          light: '#FF9D9D',
          DEFAULT: '#FF4343',
          dark: '#E74040'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
