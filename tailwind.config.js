/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'Black' : '#222831',
      'Grey' : '#393E46',
      'Teal' : '#00ADB5',
      'Space': '#EEEEEE',
      
    },
    extend: {
      fontFamily: {
        roboto : ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
};
