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
            this.matrix[q + 1] = newArr
        }

        // for (let i = 0; i < this.matrix.length; i++) {
        //     console.log(this.matrix[i].join(' '))
        // }
    }

    encrypt() {

        if (!arguments[0] || !arguments[1]) {
            throw new Error('No arguments')
        } else {
            this.doMatrix()
            let str = arguments[0].split('')
            let key = arguments[1].split('')
            //console.log('arguments', arguments)
            //console.log('str', str)
            //console.log('key', key)
            let strArr = []
            for (let i = 0; i < str.length; i++) {
                let symbolIndex = this.matrix[0].indexOf(str[i].toUpperCase())
                if (symbolIndex > 0) {
                    strArr.push(symbolIndex)
                } else {
                    strArr.push(str[i])
                }
            }
            //console.log('strArr', strArr.join(','))
            let keyArr = []
            for (let z = 0; z < key.length; z++) {
                for (let q = 1; q < this.matrix.length; q++) {
                    if (key[z].toUpperCase() === this.matrix[q][0]) {
                        //console.log(key[z],this.matrix[q][0],q)
                        keyArr.push(q)
                    }
                }
            }
            //console.log('keyArr', keyArr.join(','))
            let keyLength = key.length
            let counter = 0
            let result = []
            strArr.forEach(el => {
                let keyLength = key.length
                if (typeof el === "number") {
                    result.push(this.matrix[keyArr[counter]][el])
                    counter++
                    if (counter >= keyLength) counter = 0
                } else {
                    result.push(el)
                }

            })
            return result.join('')
        }

        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    decrypt() {
        //console.log(arguments)
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}

module.exports = {
    VigenereCipheringMachine
};
