const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const bytes = n.split('-');

  if (bytes.length !== 6) return false;
  for (let byte of bytes) {
    if (byte.length !== 2) return false;
    const firstDigit = parseInt(byte[0], 16);
    const secondDigit = parseInt(byte[1], 16);
    if (Number.isNaN(firstDigit) || Number.isNaN(secondDigit)) return false;
  }

  return true;
}

module.exports = {
  isMAC48Address
};
