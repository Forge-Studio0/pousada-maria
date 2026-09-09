/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1E3A2F',
          deep: '#132A21',
        },
        olive: {
          DEFAULT: '#6E7F52',
          light: '#93A475',
        },
        deepblue: '#0F3B4C',
        sand: {
          DEFAULT: '#F4EFE6',
          dark: '#E9E1D2',
        },
        wood: '#7A5C3E',
        gold: '#C4A254',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '76rem',
      },
    },
  },
  plugins: [],
};
