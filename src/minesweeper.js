const {NotImplementedError} = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mineField = Array.from({length: matrix.length}, _ => {
    return new Array(matrix[0].length).fill(0);
  });

  function getSurroundingIndices2D(i, j, rows, cols) {
    const result = [];
    const leftBound = Math.max(j - 1, 0);
    const rightBound = Math.min(j + 1, cols - 1);
    const topBound = Math.max(i - 1, 0);
    const bottomBound = Math.min(i + 1, rows - 1);

    if (i !== bottomBound) {
      for (let left = leftBound; left <= rightBound; left++) {
        result.push({first: bottomBound, second: left});
      }
    }

    if (i !== topBound) {
      for (let left = leftBound; left <= rightBound; left++) {
        result.push({first: topBound, second: left});
      }
    }

    if (j !== leftBound) {
      result.push({first: i, second: leftBound});
    }

    if (j !== rightBound) {
      result.push({first: i, second: rightBound});
    }

    return result;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        const indices = getSurroundingIndices2D(i, j, matrix.length, matrix[i].length);
        for (let index of indices) {
          mineField[index.first][index.second] += 1;
        }
      }
    }
  }

  return mineField;
}

module.exports = {
  minesweeper
};
