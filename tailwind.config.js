/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Vata colors (air/space)
        vata: {
          light: '#E6E6FA', // Lavender
          DEFAULT: '#9370DB', // Medium Purple
          dark: '#483D8B', // Dark Slate Blue
        },
        // Pitta colors (fire/water)
        pitta: {
          light: '#FFF0DB', // Light Peach
          DEFAULT: '#FF7F50', // Coral
          dark: '#B22222', // Firebrick
        },
        // Kapha colors (earth/water)
        kapha: {
          light: '#E8F5E9', // Light Green
          DEFAULT: '#4CAF50', // Green
          dark: '#1B5E20', // Dark Green
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};