const {NotImplementedError} = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let i = 0;
  while (i < arr.length - 1 && arr[i] >= arr[i + 1]) {
    i++;
  }
  arr[i] = '';
  return Number(arr.join(''));
}

module.exports = {
  deleteDigit
};
