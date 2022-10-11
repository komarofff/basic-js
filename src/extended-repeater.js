const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  console.log('str',str)
  console.log('options',options)
  let string = String(str);
  let arr = [];

  if (options) {
    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator || '+';
    let addition = String(options.addition) || '';
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator || '|';

    let substr = string + ((String(options.addition) !== 'undefined' ? addition + additionSeparator : '')).repeat(additionRepeatTimes);
    if (String(options.addition) !== 'undefined') {
      substr = substr.slice(0, substr.length - additionSeparator.length);
    }

    for (let i = 0; i < repeatTimes; i++) {
      arr.push(substr);
    }
    return arr.join(separator);
  }


  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
