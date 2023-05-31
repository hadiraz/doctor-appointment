/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens : {
      "2xs" : "280px" ,
      "xs" : "380px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        // Light mode colors
        primary: '#9DC183', // Sage green
        lightPrimary : "#b3e6c4",
        secondary: '#C3D7B4', // Pale green
        accent: '#98FB98', // Mint green
        dark: '#708238', // Olive green
        white: '#FFFFFF', // White
        text: '#222222', // Dark gray for text
        buttons: '#9DC183', // Sage green for buttons
        buttonShadows: 'rgba(157, 193, 131, 0.5)', // Shadow color for buttons
        mainBg: '#fdfdfd', // Light gray for main background

        // Dark mode colors
        darkPrimary: '#7D9A5F', // Dark sage green
        darkSecondary: '#AFC9A9', // Dark pale green
        darkAccent: '#74CCAE', // Dark mint green
        darkDark: '#4A4F2A', // Dark olive green
        darkText: '#FAFAFA', // Light gray for text
        darkButtons: '#7D9A5F', // Dark sage green for buttons
        darkButtonShadows: 'rgba(125, 154, 95, 0.5)', // Shadow color for buttons in dark mode
        darkMainBg: '#222222', // Dark gray for main background in dark mode
      },
      fontFamily: {
        "lato": ["lato"]
      }
    },
  },
  plugins: [],
}
