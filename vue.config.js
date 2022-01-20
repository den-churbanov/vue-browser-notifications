module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/assets/styles/colors.scss";
          @import "./src/assets/styles/null-styles.scss";
        `,
      },
    },
  },
};
