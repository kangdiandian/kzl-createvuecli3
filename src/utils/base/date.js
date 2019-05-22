/**
 * 时间工具类
 */

/**
 * 剩余时间格式化
 *
 * @export
 * @param {*} times // 传入毫秒
 * @param {string} [format='H:F:S'] // 大写自动补全十位
 * @returns string
 */

import { formatNum } from './string';

export function formatCountDown(times, format = 'H:F:S') {
  if (!times) return '';
  let time = parseInt(times * 0.001, 10);
  const seconds = time % 60;
  time = parseInt(time / 60, 10);
  const minutes = time % 60;
  time = parseInt(time / 60, 10);
  const hours = parseInt(time % 24, 10);
  const days = parseInt(time / 24, 10);
  return format.replace(/Y|y|M|m|D|d|H|h|F|f|S|s/g, function(a) {
    switch (a) {
      case 'd':
        return days;
      case 'D':
        return formatNum(days);
      case 'h':
        return hours;
      case 'H':
        return formatNum(hours);
      case 'f':
        return minutes;
      case 'F':
        return formatNum(minutes);
      case 's':
        return seconds;
      case 'S':
        return formatNum(seconds);
    }
  });
}

/**
 * 获取周
 *
 * @export
 * @param {*} value
 * @param {number} [type=1]
 * @returns
 */
export function getWeek(value, type = 1) {
  if (!value) return '';
  const tempDate = new Date(value);
  let tempArray = ['日', '一', '二', '三', '四', '五', '六'];
  if (type === 1) {
    tempArray = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  }
  return tempArray[tempDate.getDay()];
}

/**
 * 获取当天零点时间
 *
 * @export
 * @param {*} date
 * @returns
 */
export function getTimesMorning(date) {
  if (!date) return '';
  return new Date(date).setHours(0, 0, 0, 0);
}

/**
 * 获取当天24点时间
 *
 * @export
 * @param {*} date
 * @returns
 */
export function getTimesNight(date) {
  if (!date) return '';
  return new Date(date).setHours(24, 0, 0, 0);
}

/**
 * 获取时间信息
 *
 * @export
 * @param {number} [days=1]
 * @returns
 */
export function getTimeInfo(days = 1) {
  let nowTime = +new Date();
  let timeInfo;
  if (days) {
    timeInfo = formatCountDown(nowTime - 86400000, 'Y年M月D日');
  }
  if (days != 1) {
    timeInfo = formatCountDown(nowTime - 86400000 * days, 'Y年M月D日');
  }
  return timeInfo;
}

const dateUtil = {
  formatCountDown,
  getWeek,
  getTimesMorning,
  getTimesNight,
  getTimeInfo,
};

export default dateUtil;
