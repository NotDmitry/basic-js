const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numberStr = n.toString();
  let result = 0;
  while (true) {
    result = numberStr.split('').reduce((sum, digit) => {
      return sum + Number(digit);
    }, 0);
    if (result < 10) {
      return result;
    }
    numberStr = result.toString();
  }
}

module.exports = {
  getSumOfDigits
};
