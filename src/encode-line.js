const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedLine = "";
  let start = 0;
  let end = 1;
  let count = 1;
  while (end <= str.length) {
    if (str[start] === str[end]) {
      count++;
      end++;
    } else {
      encodedLine += `${count > 1 ? count : ""}${str[start]}`;
      start = end;
      end = start + 1;
      count = 1;
    }
  }
  return encodedLine;
}

module.exports = {
  encodeLine,
};
