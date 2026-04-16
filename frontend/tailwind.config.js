/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#edfcf7',
          100: '#d2f7ea',
          200: '#a8efd7',
          300: '#70e0bc',
          400: '#36c99c',
          500: '#13ae84',
          600: '#088c6b',
          700: '#077158',
          800: '#085847',
          900: '#07493c',
        },
        surface: {
          900: '#080c10',
          800: '#0d1117',
          700: '#141b24',
          600: '#1c2636',
          500: '#243040',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
        'blink': 'blink 0.9s step-end infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-down': 'bounce-down 1.8s ease-in-out infinite',
        'loading-bar': 'loading-fill 1.2s cubic-bezier(.16,1,.3,1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%':  { transform: 'translateY(-20px) scale(1.03)' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(0.92)', opacity: '0.7' },
          '100%': { transform: 'scale(1.1)',  opacity: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'bounce-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(6px)' },
        },
        'loading-fill': {
          from: { width: '0' },
          to:   { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
