/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './JS/script.js'],
  darkMode: {
    
  },
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        'hostg': 'Host Grotesk, serif',
        'jost': 'Jost, serif',
        'spaceg': 'Space Grotesk, serif',
        'montserrat': 'Montserrat, serif',
        'questrial': 'Questrial, serif',
        'inter': 'Inter, serif',
      },
      colors: {

        primary: '#18181b',
        secondary: '#f4f4f5',
        
        text: {
        solid: '#f4f4f5',
        fade: '#71717a',
        hovers: '#a1a1aa',
        hoverf: '#f4f4f5',
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
      },

      'bgup': '#27272a',
      'border': '#34343a',

      gradient: {
        white: '',
        fade: '',
      }
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

