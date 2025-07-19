/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans 3", "sans-serif"],
      },
      colors: {
        // Custom color palette
        primary: {
          dark: "#000059",
          medium: "#0004E7",
          light: "#1970FF",
          lighter: "#4C4DEE",
          lightest: "#ECF6FF",
        },
        neutral: {
          dark: "#686868",
          medium: "#CCCCCC",
        },
        success: {
          dark: "#0C9900",
          light: "#16B908",
        },
        error: "#DC0004",
      },
    },
  },
  plugins: [],
};
