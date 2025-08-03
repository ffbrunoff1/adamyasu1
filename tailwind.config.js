/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#f5f5f0',
        accent: {
          beige: '#f4e4bc',
          gold: '#d4af37',
          warm: '#f7f3e9',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(135deg, #f5f5f0 0%, #f7f3e9 50%, #f4e4bc 100%)',
        'gradient-accent': 'linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #333333 100%)',
      },
    },
  },
  plugins: [],
};
