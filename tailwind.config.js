/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        quantum: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          accent: '#3b82f6',
          light: '#60a5fa'
        },
        agri: {
          900: '#064e3b', // Deep forest
          800: '#065f46',
          700: '#047857',
          600: '#059669', // Primary green
          500: '#10b981',
          400: '#34d399',
          100: '#d1fae5',
          50: '#ecfdf5'
        },
        accent: {
          500: '#f59e0b', // Amber/Saffron
          600: '#d97706',
          100: '#fef3c7'
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'premium': '0 20px 40px -15px rgba(5, 150, 105, 0.15)',
      }
    },
  },
  plugins: [],
}
