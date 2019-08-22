module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      scss: {
        data: `@import "~@/shared/styles/variables.scss";`
      }
    }
  }
};
