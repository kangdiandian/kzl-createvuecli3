module.exports = {
  publicPath: '/',
  assetsDir: './',
  configureWebpack: config => {
    // 该配置，可使用户在引入模块是不带后缀
    config.resolve.extensions.push('.styl', '.css', '.md');
  },
  devServer: {
    port: 8089,
  },
};
