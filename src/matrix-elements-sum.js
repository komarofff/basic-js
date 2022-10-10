const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix) {
  let counter = 0
  for(let i=0;i<matrix.length;i++){
    for(let q=0;q<matrix[i].length;q++){
      counter += matrix[i][q]
      if(i>0 && matrix[i-1][q] === 0){
       counter -=matrix[i][q]
      }
    }
  }
  return counter
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
