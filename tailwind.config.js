
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D6A4F',
          light: '#52B788',
          accent: '#40916C',
          dark: '#1B4332',
        },
        background: '#F8FAF7',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
