/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          'flipkart-blue': '#2874f0',
        },
        transitionProperty: {
          'transform': 'transform',
        }
      }
    },
    variants: {
      extend: {
        display: ['group-hover']
      }
    }
  }