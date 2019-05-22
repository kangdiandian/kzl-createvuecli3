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

const stringUtil = {
  formatNum,
};

export default stringUtil;
