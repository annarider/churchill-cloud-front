/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{html,liquid}", // Jekyll includes
    "./_layouts/**/*.{html,liquid}", // Jekyll layouts
    "./_pages/**/*.{html,liquid}", // Jekyll pages
    "./*.{html,liquid,md}", // Root files
    "./**/*.{html,liquid,md}", // All other template files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#00AEEF", // aqua
          DEFAULT: "#005CAB", // medium blue
          dark: "#000437", // dark navy
        },
        secondary: {
          light: "#FFF", // white
          DEFAULT: "#FBB040", // orange yellow
          dark: "#EF4137", // red orange
        },
        accent: {
          light: "#39B54A", // green
          DEFAULT: "#00B0A3", // teal
          dark: "#00366F", // dark blue
        },
        neutral: "#414042", // charcoal
      },
    },
  },
  plugins: [],
};
