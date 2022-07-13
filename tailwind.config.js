/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
      xxl: "1920px",
    },
    extend: {},
  },
  plugins: [],
};
