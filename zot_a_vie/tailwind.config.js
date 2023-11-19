module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': 'url(/src/img/logoCinor.png)',
        'bg': 'url(/src/img/eolienne.jpg)'
      },
      colors: {
        'primary': '#46BABA',
        'dark-blue': '#273443',
        'dark-green': '#294327',
        'slogan-blue': '#1FA79C',
        'slogan-green': '#70D163',
      }
    },
  },
  plugins: [],
};
