const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains) {
  let data = []
  for(let i=0; i< domains.length;i++){
    let res = domains[i].split('.').reverse()
    data.push(res)
  }
  console.log('domains',domains)
  console.log('data',data)
  // filename=domains[i].split('.').slice(0, -1).join('.')
  //
  // extension=domains[i].split('.').reverse()[0]

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
