/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        semmuli: {
          dark: "#0A2342",
          primary: "#185ADB",
          light: "#BFD7ED",
          graybg: "#F5F7FA"
        }
      },
      boxShadow: {
        card: "0 4px 16px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  plugins: [],
};
