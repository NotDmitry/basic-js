const {NotImplementedError} = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortingArr = arr.filter((number) => number !== -1);
  sortingArr.sort((a, b) => b - a);
  return arr.map((number) => {
    if (number !== -1) {
      return sortingArr.pop();
    }
    return number;
  })
}

module.exports = {
  sortByHeight
};
