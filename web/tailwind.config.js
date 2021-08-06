module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ['Poppins', 'sans-serif'],
    serif: ['Noto Sans', 'serif'],
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
