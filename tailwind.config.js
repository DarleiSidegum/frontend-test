module.exports = {
  content: ["./src/**/*.{html,ts}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          300: "#3f3f3f",
          400: "#333333",
          500: "#262626",
        },
        brand: {
          100: "#e7f8ff",
          500: "#07B0FB",
        },
        gray: {
          400: "#F4F4F4",
          500: "#D9D9D9",
        },
        green: {
          500: "#69C669",
        },
        red: {
          500: "#E54E4E",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
