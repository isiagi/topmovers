/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      keyframes: {
        zoom: {
          "0%": {
            transform: "scale(1)",
          },

          "10%": {
            transform: "scale(1.05)",
          },
          "20%": {
            transform: "scale(1.1)",
          },
          "30%": {
            transform: "scale(1.2)",
          },
          "40%": {
            transform: "scale(1.3)",
          },
          "50%": {
            transform: "scale(1.35)",
          },
          "60%": {
            transform: "scale(1.4)",
          },
          "70%": {
            transform: "scale(1.5)",
          },
          "85%": {
            transform: "scale(1.55)",
          },
          "100%": {
            transform: "scale(1.7)",
          },
        },
      },
      animation: {
        zoom: "zoom 10s ease-in-out linear",
      },
    },
    plugins: [],
  },
};
