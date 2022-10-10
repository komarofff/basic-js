const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  console.log(str)
   let result = []
  result = str.split('').filter((el) =>{
    let  count = 0
    for(let val of str){
      if( el.toLowerCase() === val.toLowerCase())count++
    }
    if(count>1) console.log(count)

  })
  console.log( result)
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
