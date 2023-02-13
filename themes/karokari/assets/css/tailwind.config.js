const themeDir = __dirname + "/../../";

module.exports = {
  content: [themeDir + "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
