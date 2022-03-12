const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './*.md',
  ],
  theme: {
    fontSize: {
      sm: "0.8125rem", // 13px
      base: "1rem", // 16px
      lg: "1.1875rem", // 19px
      xl: "1.5rem", // 24
      "2xl": "2rem", // 32
      "3xl": "3rem", // 48
      "4xl": "5rem", // 80
    },
    screens: {
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      lineHeight: {
      },
      width: {
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif: ["tuppence", ...defaultTheme.fontFamily.serif],
      },
      spacing: {
      },
      borderWidth: {
        16: "16px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}