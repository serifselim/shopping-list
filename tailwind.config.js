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
        },
        gray: {
          light: '#4F4F4F',
          DEFAULT: '#333333',
          dark: '#2F2F2F'
        },
        strokeGray: {

        }
      },
      maxWidth: {
        '80-persent': '80%'
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
