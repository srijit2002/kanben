/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#DBDBDB",
          dark: "#F5F5F5",
        },
        blue: {
          light: "#f1eefd",
          dark: " #5030E5",
        },
        highlight: "#0D062D",
        logoColor: "#787486",
      },
    },
  },
  plugins: [],
};
