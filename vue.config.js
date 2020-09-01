module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  css: {
    extract: true,
    requireModuleExtension: true,
    sourceMap: true
  },
  filenameHashing: false
};
