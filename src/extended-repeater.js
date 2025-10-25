const {NotImplementedError} = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  let repeatedAddition = addition !== undefined ? addition : '';
  for (let i = 1; i < additionRepeatTimes; i++) {
    repeatedAddition = `${repeatedAddition}${additionSeparator}${addition}`;
  }

  let repeatedStr = `${str}${repeatedAddition}`;
  let result = repeatedStr;
  for (let i = 1; i < repeatTimes; i++) {
    result += `${separator}${repeatedStr}`;
  }

  return result;
}

module.exports = {
  repeater
};
