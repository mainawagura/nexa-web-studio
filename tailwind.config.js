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
          navy: '#101827',       // Midnight navy
          charcoal: '#171A21',   // Deep charcoal
          warm: '#F7F6F2',       // Warm white
          lime: '#C8F169',       // Electric lime
          muted: '#8B9099',      // Muted gray
          white: '#FFFFFF',
          // Extended shades & backward compatibility:
          'navy-dark': '#0B0F19',
          'navy-light': '#1E293B',
          teal: '#0D9488',
          'teal-light': '#14B8A6',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 24, 39, 0.05), 0 1px 2px -1px rgba(16, 24, 39, 0.05)',
        'card': '0 4px 6px -1px rgba(16, 24, 39, 0.07), 0 2px 4px -2px rgba(16, 24, 39, 0.05)',
        'elevated': '0 10px 15px -3px rgba(16, 24, 39, 0.08), 0 4px 6px -4px rgba(16, 24, 39, 0.04)',
        'premium': '0 20px 25px -5px rgba(16, 24, 39, 0.12), 0 8px 10px -6px rgba(16, 24, 39, 0.08)',
        'glow-lime': '0 0 25px -5px rgba(200, 241, 105, 0.35)',
      }
    },
  },
  plugins: [],
}
