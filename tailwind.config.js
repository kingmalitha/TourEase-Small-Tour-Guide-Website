/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#565185",
        primaryLight: "#709dff",
      },
    },
  },
  plugins: [],
};
