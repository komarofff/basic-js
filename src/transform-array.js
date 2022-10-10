const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 * --discard-next excludes the next element of the array from the transformed array.
 * --discard-prev excludes the previous element of the array from the transformed array.
 * --double-next duplicates the next element of the array in the transformed array.
 * --double-prev
 */
function transform(arr) {
    if (!Array.isArray(arr) || !arr) {
        throw new Error("'arr' parameter must be an instance of the Array!")
    }
    let result = []
    let deleteIndexes = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next' && arr[i + 1]) {
            if (!deleteIndexes.includes(arr.indexOf(arr[i + 1]))) {
                deleteIndexes.push(arr.indexOf(arr[i + 1]))
                result.push(arr[i])
            }

        } else if (arr[i] === '--discard-prev' && arr[i - 1]) {
            if (!deleteIndexes.includes(arr.indexOf(arr[i - 1]))) {
                deleteIndexes.push(arr.indexOf(arr[i - 1]))
                result.push(arr[i])
            }

        } else if (arr[i] === '--double-next' && arr[i + 1]) {
            if (!deleteIndexes.includes(arr.indexOf(arr[i + 1]))) {
                result.push(arr[i + 1])
            }

        } else if (arr[i] === '--double-prev' && arr[i - 1]) {
            if (!deleteIndexes.includes(arr.indexOf(arr[i - 1]))) {
                result.push(arr[i - 1])
            }

        } else {
            result.push(arr[i])
        }
    }
    for (let i = 0; i < deleteIndexes.length; i++) {
        result.splice(deleteIndexes[i], 1)
    }
    let finishResult = result.filter(el => {
        if (el !== '--discard-next' && el !== '--double-prev' && el !== '--double-next' && el !== '--discard-prev') return el
    })
    return finishResult
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    transform
};
