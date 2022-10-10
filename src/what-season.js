const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

    // console.log(date)
    if (!date) {
        return 'Unable to determine the time of year!'
    }
    if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Invalid date!')
   // if (Object.prototype.toString.call(date) === '[object Date]'){
        try {
            const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']
            const monthNumber = date.getMonth()
            return seasons[monthNumber]
        }catch {
            throw new Error('Invalid date!')
        }
    // }else{    throw new Error('Invalid date!')}

 //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
