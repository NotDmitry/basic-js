const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let currentChar = str[0];
  let sequenceCount = 0;

  if (!str) return result;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== currentChar) {
      result += `${sequenceCount}${currentChar}`;
      currentChar = str[i];
      sequenceCount = 1;
    } else {
      sequenceCount++;
    }
  }
  result += `${sequenceCount}${currentChar}`;

  return result.split('1').join('');
}

module.exports = {
  encodeLine
};
