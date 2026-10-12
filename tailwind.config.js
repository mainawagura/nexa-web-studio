/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nexa: {
          navy: '#082B4C',
          'navy-dark': '#04182B',
          'navy-light': '#0D3F6E',
          teal: '#0D9488',
          'teal-light': '#14B8A6',
          'teal-dark': '#0F766E',
          accent: '#F59E0B',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(8, 43, 76, 0.05), 0 1px 2px -1px rgba(8, 43, 76, 0.05)',
        'card': '0 4px 6px -1px rgba(8, 43, 76, 0.07), 0 2px 4px -2px rgba(8, 43, 76, 0.05)',
        'elevated': '0 10px 15px -3px rgba(8, 43, 76, 0.08), 0 4px 6px -4px rgba(8, 43, 76, 0.04)',
        'premium': '0 20px 25px -5px rgba(8, 43, 76, 0.1), 0 8px 10px -6px rgba(8, 43, 76, 0.06)',
      }
    },
  },
  plugins: [],
}
