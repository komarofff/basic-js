const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    if (!matrix) {
        return 0
    } else {
        let counter = 0
        for (let i = 0; i < matrix.length; i++) {
            for (let q = 0; q < matrix[i].length; q++) {
                if (matrix[i][q] === '^^') counter++
            }
        }
        return counter
    }

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    countCats
};
