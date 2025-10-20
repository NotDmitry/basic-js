const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let common = 0;
  const array2 = s2.split('');

  for (const char of s1) {
    const index = array2.indexOf(char);
    if (index !== -1) {
      array2.splice(index, 1);
      common++;
    }
  }

  return common;
}

module.exports = {
  getCommonCharacterCount
};
