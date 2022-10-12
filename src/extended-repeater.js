const {NotImplementedError} = require('../extensions/index.js');

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
    console.log('str', str)
    console.log('options', options)
    if(options) {
        let data = String(str)
        let repeatTimes = options.repeatTimes || 1
        let firstSeparator = options.separator
        if(options.separator === undefined) firstSeparator = '+'
        const firstStr = []

        let additionText = String(options.addition)
        if(options.addition === undefined) additionText = ''
        let additionRepeatTimes = options.additionRepeatTimes || 1
        let additionSeparator = options.additionSeparator
        if(options.additionSeparator === undefined) additionSeparator = ''
        let secondStr = []
        for (let i = 0; i < repeatTimes; i++) {
            firstStr.push(`${data}`)

            for (let q = 0; q < additionRepeatTimes; q++) {
                   secondStr.push(`${additionText}`)
                       if (q < additionRepeatTimes - 1) secondStr.push(`${additionSeparator}`)
                  //secondStr.push(`${additionSeparator}`)
            }

            if (i < repeatTimes - 1) {
                firstStr.push(`${secondStr}`)
                firstStr.push(`${firstSeparator}`)
            }else{
                firstStr.push(`${secondStr}`)
            }
            secondStr = []
        }
let result = firstStr.join('').replace(/[,]/g, '')
        console.log( 'result',result)
        return result
    }

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    repeater
};
