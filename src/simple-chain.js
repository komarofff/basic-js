const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length
    },
    addLink(value) {
        if(value !== undefined) {
            let val = String(value)
            this.chain.push(`( ${val} )`)
        }

        return this
    },
    removeLink(position) {
        try{
            if ( isNaN(position) || position < 1  || position > this.chain.length ) {
                throw new Error("You can't remove incorrect link!")
            }
            this.chain.splice(position - 1, 1)
            return this
        }
        catch{
            this.chain = []
            throw new Error("You can't remove incorrect link!")
        }
    },
    reverseChain() {
        this.chain.reverse()
        return this
    },
    finishChain() {
        let result = this.chain.join('~~')
        this.chain = []
        return result
    }
};

module.exports = {
    chainMaker
};
