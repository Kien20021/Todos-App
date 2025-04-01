/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        seashell: "#F1ECE6",
        skyblue: "#76b7cd",
        lightbrown: "#6F4E37",
        brown: "#6F4F28",
        lightorange: "#D98326",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addComponents, theme, e }) {
      addComponents({
        ".container": {
          padding: theme("spacing.4"),
          width: "100%",
          maxWidth: theme("screens.md"),
        },
        "@screen sm": {
          ".container": {
            maxWidth: theme("screens.sm"),
          },
        },
        "@screen lg": {
          ".container": {
            maxWidth: theme("screens.lg"),
          },
        },
        "@screen xl": {
          ".container": {
            maxWidth: theme("screens.xl"),
          },
        },
        "@screen 2xl": {
          ".container": {
            maxWidth: theme("screens.2xl"),
          },
        },
      });
    },
  ],
};
