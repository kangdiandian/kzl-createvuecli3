// postcss官网 https://postcss.org
// stylelint 对css代码进行检查
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-short-position': {},
    'postcss-size': {},
    'postcss-pxtorem': {
      // px单位大写将忽略转化rem
      rootValue: 100,
      unitPrecision: 5,
      propList: ['*'],
      // propWhiteList 目前不知道是干啥的
      // propWhiteList: [],
      selectorBlackList: [/^html$/],
      replace: true,
      mediaQuery: false,
      // minPixelValue: 2,
      minPixelValue: 0,
    },
  },
};
