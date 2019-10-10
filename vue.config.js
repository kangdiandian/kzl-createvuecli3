module.exports = {
  publicPath: '/',
  assetsDir: './',
  configureWebpack: config => {
    // 该配置，可使用户在引入模块是不带后缀
    config.resolve.extensions.push('.styl', '.css', '.md');
  },
  devServer: {
    port: 8089,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  css: {
    sourceMap: true, // 生产环境为false
  },
  lintOnSave: true, // 生产环境为false
};
