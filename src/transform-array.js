const {NotImplementedError} = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  if (!arr.length) return arr;

  const result = [];
  let lastItem = null;
  let isDeleted = false;

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next': {
        i++;
        isDeleted = true;
        break;
      }
      case '--discard-prev': {
        if (lastItem !== '--discard-next') result.pop();
        break;
      }
      case '--double-next':
        if (arr[i + 1] !== undefined) result.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (lastItem !== '--discard-next' && i !== 0) result.push(result.at(-1));
        break;
      default: {
        result.push(arr[i]);
        break;
      }
    }
    lastItem = isDeleted ? '--discard-next' : arr[i];
    isDeleted = false;
  }

  return result;
}

module.exports = {
  transform
};
