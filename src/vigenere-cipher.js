const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type
        this.symbolArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        this.startArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        this.rowArray = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        this.matrix = []
    }

    doMatrix() {
        this.matrix.push(this.rowArray)
        for (let q = 0; q < this.symbolArray.length; q++) {
            let newArr = []
            for (let i = 0; i < this.symbolArray.length; i++) {
                let symbol = this.startArray[q]
                if (i === 0) {
                    //symbol = this.startArray[q]
                    newArr.push(this.startArray[q])
                } else {
                    symbol = this.symbolArray[i]
                }

                newArr.push(symbol)
            }
            let shift = this.symbolArray.shift()
            this.symbolArray.push(shift)
            this.matrix[q+1] = newArr
        }
    }

    encrypt() {
        this.doMatrix()
        if (!arguments[0] || !arguments[1]) throw new Error('No arguments');
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^%'
        let arr = str.split('')
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i].join(' '))

        }
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    decrypt() {
        console.log(arguments)
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}

module.exports = {
    VigenereCipheringMachine
};
