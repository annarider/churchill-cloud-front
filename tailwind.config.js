/** @type {import('tailwindcss').Config} */
module.exports = {
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
