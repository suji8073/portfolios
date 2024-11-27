/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rix: ['RixInooAriDuriR', 'Noto Sans KR', 'Arial', 'sans-serif'],
        gmk: ['GmarketSansMedium', 'Noto Sans KR', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
