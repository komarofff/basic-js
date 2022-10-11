const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
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
    constructor() {
        this.result = 0
    }
    calculateDepth(arr) {
        if (arr.constructor.name === 'Array') {
            this.result = 1 + arr.reduce((val, arrayItem) => Math.max(val, this.calculateDepth(arrayItem)), 0)
            return this.result
        } else {
            return 0
        }
    }
}

module.exports = {
    DepthCalculator
};
