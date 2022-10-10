const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (members && members.length > 0) {
        let arr = members.map(el => {
            if (typeof el === 'string' && el.length > 0) {
                return el.replace(/\s/g, '').toUpperCase()
            }
        }).sort()
        return arr.map(el => {
                if (typeof el === 'string') {
                    return el[0].toUpperCase()
                }
            }
        ).join('')
    } else {
        return false
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    createDreamTeam
};
