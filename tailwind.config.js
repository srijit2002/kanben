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
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      "min-lg": { min: "1023px" },

      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "450px" },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
