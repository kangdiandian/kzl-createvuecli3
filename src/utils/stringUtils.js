// 浅拷贝
export function copy(data = '') {
  return JSON.parse(JSON.stringify(data));
}
// 删除无效参数
export function compat(params) {
  for (const key in params) {
    if (typeof params[key] === 'undefined' || params[key] === '') {
      delete params[key];
    }
  }
  return params;
}
// 将参数转化为字符串，并过滤无效参数
export function stringify(params, options) {
  const defaultOpts = {
    delimiter: '&',
    // encode: true,
    // encoder: utils.encode,
    // encodeValuesOnly: false,
    // serializeDate: function serializeDate(date) {
    //   return toISO.call(date);
    // },
    // skipNulls: false,
    // strictNullHandling: false,
  };
  params = compat(params);
  const opts = Object.assign(defaultOpts, options);
  const { delimiter } = opts;
  let arr = [];
  for (const key in params) {
    // 使用Object.prototype.hasOwnProperty.call() 有三方面的原因：
    // 1.If obj inherits from null not Object.prototype
    // 2.If hasOwnProperty has been redeclared on obj
    // 3.If hasOwnProperty has been redeclared in obj 's prototype chain
    if ({}.hasOwnProperty.call(params, key)) {
      arr.push(`${key}=${encodeURIComponent(params[key])}`);
    }
  }
  return arr.join(delimiter);
}
