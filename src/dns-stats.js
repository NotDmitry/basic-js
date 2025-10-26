const {NotImplementedError} = require('../lib');
const domain = require("node:domain");

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
function getDNSStats(domains) {
  const domMap = new Map();
  domains.forEach(domain => {
    domain.split('.')
      .reduceRight((chain, domainPart) => {
        chain += `.${domainPart}`;
        domMap.set(chain, (domMap.get(chain) ?? 0) + 1);
        return chain;
      }, '')
  })
  return Object.fromEntries(domMap);
}

module.exports = {
  getDNSStats
};
