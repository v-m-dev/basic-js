const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonChars = 0;
  let shortest = s1.length < s2.length ? s1 : s2;
  let longest = s1.length > s2.length ? s1 : s2;
  if (s1.length === s2.length) {
    shortest = s1;
    longest = s2;
  }
  for (const char of shortest) {
    if (longest.includes(char)) {
      commonChars++;
      longest = longest.replace(char, "");
    }
  }
  return commonChars;
}

module.exports = {
  getCommonCharacterCount,
};
