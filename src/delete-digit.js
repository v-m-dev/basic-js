const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const nArr = n.toString().split("");
  for (let i = 0; i < nArr.length; i++) {
    const newArr = [...nArr];
    newArr.splice(i, 1);
    const newNum = parseInt(newArr.join(""));
    if (newNum > max) {
      max = newNum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
