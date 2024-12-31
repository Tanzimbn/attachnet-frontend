module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Replace with your Google Font
        // custom: ['"CustomFont"', 'sans-serif'], // Add local custom font
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}