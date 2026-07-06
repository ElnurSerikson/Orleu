/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070d0b',
          900: '#0a1612',
          850: '#0e1c18',
          800: '#13251f',
          700: '#1a3128',
          600: '#214036',
        },
        moss: {
          400: '#5cd99a',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        sand: {
          50: '#f7f5ef',
          100: '#ece8d8',
          200: '#d8d1b4',
        },
      },
      fontFamily: {
        display: ['"Manrope"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 70px -35px rgba(255,255,255,0.3)',
        card: '0 0 0 1px rgba(255,255,255,0.06), 0 18px 40px -24px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'leaf-radial':
          'radial-gradient(circle at 20% 10%, rgba(255,255,255,0.08), transparent 55%), radial-gradient(circle at 85% 90%, rgba(255,255,255,0.06), transparent 50%)',
        'leaves-overlay':
          'linear-gradient(180deg, rgba(7,13,11,0.85), rgba(7,13,11,0.7))',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,255,255,0.45)' },
          '50%': { boxShadow: '0 0 0 14px rgba(255,255,255,0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2.2s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out both',
      },
    },
  },
  plugins: [],
};
