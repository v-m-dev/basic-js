const { NotImplementedError } = require("../extensions/index.js");

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
  const result = {};
  const dnsArr = [];
  for (let i = 0; i < domains.length; i++) {
    const dns = domains[i].split(".");
    let dnsStr = "";
    for (let j = dns.length - 1; j >= 0; j--) {
      dnsStr += `.${dns[j]}`;
      dnsArr.push(dnsStr);
    }
  }
  dnsArr.forEach((dns) => {
    if (Object.hasOwn(result, dns)) {
      result[dns] = result[dns] + 1;
    } else {
      result[dns] = 1;
    }
  });
  return result;
}

module.exports = {
  getDNSStats,
};
