/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fbf7f4',
          100: '#f5ede6',
          200: '#ebd9cb',
          300: '#ddbea7',
          400: '#cc9c7e',
          500: '#b87c59',
          600: '#9e6244',
          700: '#804c36',
          800: '#693e2f',
          900: '#58362b',
        },
        ethnic: {
          gold: '#D4AF37',
          maroon: '#800020',
          indigo: '#1F2E54',
          emerald: '#0B6623',
          saffron: '#FF7722',
          ruby: '#9B111E'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
