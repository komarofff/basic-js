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
        this.matrix = []
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

    encrypt(strArg, keyArg) {

        if (!strArg || !keyArg)  {
            throw new Error('Incorrect arguments!')
        } else {
            this.doMatrix()
            let str = strArg.split('')
            let key = keyArg.split('')
            let strArr = []
            for (let i = 0; i < str.length; i++) {
                let symbolIndex = this.matrix[0].indexOf(str[i].toUpperCase())
                if (symbolIndex > 0) {
                    strArr.push(symbolIndex)
                } else {
                    strArr.push(str[i])
                }
            }
            let keyArr = []
            for (let z = 0; z < key.length; z++) {
                for (let q = 1; q < this.matrix.length; q++) {
                    if (key[z].toUpperCase() === this.matrix[q][0]) {
                        keyArr.push(q)
                    }
                }
            }
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
            if(this.type) {
                return result.join('')
            }else{
                return  result.reverse().join('')
            }
        }

        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    decrypt(strArg,keyArg) {
        if (!strArg || !keyArg)  {
            throw new Error('Incorrect arguments!')
        } else {
            this.doMatrix()
            let str = strArg.split('')
            let key = keyArg.split('')

            let keyArr = []
            for (let z = 0; z < key.length; z++) {
                for (let q = 1; q < this.matrix.length; q++) {
                    if (key[z].toUpperCase() === this.matrix[0][q]) {
                        //console.log(key[z],this.matrix[q][0],q)
                        keyArr.push(q)
                    }
                }
            }
            console.log('keyArr', keyArr.join(','))

            let keyLength = key.length
            console.log(keyLength)
            let counter = 0
            let result = []

            str.forEach(el => {

                for (let i = 1; i < this.matrix.length; i++) {
                    if(el.charCodeAt(0)<65 || el.charCodeAt(0)>90){
                        result.push(el)
                        break
                    }
                    if ( this.matrix[i][keyArr[counter]] === el.toUpperCase()) {
                       // console.log(el.toUpperCase(), this.matrix[i][keyArr[counter]], this.matrix[i][0], 'key', counter)
                        result.push(this.matrix[i][0])
                        counter++
                        if (counter === keyLength) counter = 0
                        break
                    }

                }
            })
            //LEARN FRONTEND DEVELOPMENT :)
            if(this.type) {
                return result.join('')
            }else{
                return  result.reverse().join('')
            }
        }

        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}

module.exports = {
    VigenereCipheringMachine
};
