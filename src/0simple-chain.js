const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    },
    addLink(value = '()') {
        console.log('value',value)
        let val = String(value)
         this.chain.push(`( ${val} )`)

       // return this
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    },
    removeLink(position) {
        console.log('position',position)
        if (!position || position < 0 || typeof position !=='number' || !Number.isInteger(position) || position > this.chain.length - 1) {
            throw new Error("You can't remove incorrect link!")

        }else {
            this.chain.splice(position, 1)
            //return this
        }
        //return this
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    },
    reverseChain() {
        this.chain.reverse()
        //return this
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    },
    finishChain() {
        let result  = this.chain.join("~~")
        this.chain = []
        return result
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
};

module.exports = {
    chainMaker
};
