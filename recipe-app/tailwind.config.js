/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['"Open Sans"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

