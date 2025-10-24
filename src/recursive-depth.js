const { NotImplementedError } = require('../lib');
const {calculateHanoi} = require("./hanoi-tower");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (arr.some((item) => Array.isArray(item))) {
      depth = this.calculateDepth(arr.flat());
    }
    return ++depth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
