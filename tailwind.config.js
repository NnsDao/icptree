module.exports = {
  purge: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'bgColor':'#001219',
      'cardColor':'#0a9396',
     })
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [],
}
