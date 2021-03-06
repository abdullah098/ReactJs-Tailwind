module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      Mulish: ["Mulish, sans-serif"]
    },
    container: {
      
      padding: "1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
