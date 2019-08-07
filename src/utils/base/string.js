/**
 * 十位补充0
 *
 * @export
 * @param {*} n
 * @returns string
 */
export function formatNum(n) {
  return n * 1 < 10 ? `0${n}` : n;
}

/**
 * 字符串化参数
 *
 * @export
 * @param {*} [params={}]
 * @returns string
 */
export function stringify(params = {}) {
  const temp = params;
  let arr = [];
  for (const key in temp) {
    if (!temp[key]) {
      delete temp[key];
    } else {
      arr.push(`${key}=${temp[key]}`);
    }
  }
  return arr.join('&');
}

/**
 * 去除字符串中的空格
 *
 * @export
 * @param {string} [str='']
 * @param {boolean} [isGlobal=false] // 默认去除前后空格，true去除全部空格
 * @returns string
 */
export function trim(str = '', isGlobal = false) {
  let result;
  result = str.replace(/(^\s+)|(\s$+)/g, '');
  if (isGlobal) {
    result = str.replace(/\s/g, '');
  }
  return result;
}

/**
 * url后拼接参数
 *
 * @export
 * @param {*} url
 * @param {string} [paramsUrl='']
 * @returns string
 */
export function urlfix(url, paramsUrl = '') {
  let fixUrl = url;
  if (paramsUrl) {
    fixUrl = url + (url.indexOf('?') === -1 ? '?' : '&') + paramsUrl;
  }
  return fixUrl;
}

/**
 * 截取字符串加...
 *
 * @export
 * @param {string} [str='']
 * @param {*} length 截取的长度
 * @returns string
 */
export function addPoint(str = '', length) {
  if (str.length > length) {
    str = str.substr(0, length - 1) + '...';
  }
  return str;
}

const stringUtil = {
  formatNum,
  stringify,
  trim,
  urlfix,
  addPoint,
};

export default stringUtil;
