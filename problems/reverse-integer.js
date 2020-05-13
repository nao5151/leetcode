/**
 * // https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const num = Number(Math.abs(x).toString().split('').reverse().join(''));
  if (2 ** 31 - 1 < num) {
    return 0;
  }
  return x >= 0 ? num : -num;
};
