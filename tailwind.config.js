/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          beige: '#E8D8C3',
          gold: '#D4A62F',
          green: '#6C8C45',
          brown: '#8E5E3A'
        },
        accent: {
          leaf: '#9BBF75',
          wood: '#6B3F2D',
        },
        // Preserve existing dosha colors
        vata: {
          light: '#E6E6FA',
          DEFAULT: '#9370DB',
          dark: '#483D8B',
        },
        pitta: {
          light: '#FFF0DB',
          DEFAULT: '#FF7F50',
          dark: '#B22222',
        },
        kapha: {
          light: '#E8F5E9',
          DEFAULT: '#4CAF50',
          dark: '#1B5E20',
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Tiro Devanagari Sanskrit', 'Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};