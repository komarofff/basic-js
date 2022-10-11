const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arr = String(n).split('')
    let compareArr = []
    for (let i = 0; i < arr.length; i++) {
        compareArr.push((arr.slice(0, i).join('') + arr.slice(i + 1).join('')))
    }
    let result = Math.max(...compareArr)
    return result
    // console.log('result',result)
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    deleteDigit
};
