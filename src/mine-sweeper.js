const {NotImplementedError} = require('../extensions/index.js');

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
    let result = JSON.parse(JSON.stringify(matrix))

    for (let i = 0; i < result.length; i++) {
        for (let q = 0; q < result[i].length; q++) {
            result[i][q] = 0
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        let counter = 1
        for (let q = 0; q < matrix[i].length; q++) {

            if (i > 0) {
                if (matrix[i - 1][q] === true) {
                    result[i][q] = result[i][q] + counter

                }

                if (matrix[i - 1][q - 1] && matrix[i - 1][q - 1] === true) {
                    result[i][q] = result[i][q] + counter

                }
                if (matrix[i - 1][q + 1] && matrix[i - 1][q + 1] === true) {
                    result[i][q] = result[i][q] + counter

                }
            }
            if (q > 0) {
                if (matrix[i][q - 1] && matrix[i][q - 1] === true) {
                    result[i][q] = result[i][q] + counter

                }
            }
            if (matrix[i][q + 1] && matrix[i][q + 1] === true) {
                result[i][q] = result[i][q] + counter

            }

            if (i < matrix.length - 1) {
                if (matrix[i + 1][q] && matrix[i + 1][q] === true) {
                    result[i][q] = result[i][q] + counter

                }
                if (matrix[i + 1][q - 1] && matrix[i + 1][q - 1] === true) {
                    result[i][q] = result[i][q] + counter

                }
                if (matrix[i + 1][q + 1] && matrix[i + 1][q + 1] === true) {
                    result[i][q] = result[i][q] + counter

                }
            }

        }
    }
    return result
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    minesweeper
};
