const { NotImplementedError } = require("../extensions/index.js");

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
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let transformedArr = [...arr];

  for (let i = 0; i < transformedArr.length; i++) {
    if (transformedArr[i] === "--discard-prev") {
      if (i === 0) {
        transformedArr.splice(i, 1);
        i = 0;
      } else {
        transformedArr[i - 1] = "";
        transformedArr.splice(i, 1);
        i = 0;
      }
    } else if (transformedArr[i] === "--discard-next") {
      if (i === transformedArr.length - 1) {
        transformedArr.splice(i, 1);
        i = 0;
      } else {
        transformedArr[i + 1] = "";
        transformedArr.splice(i, 1);
        i = 0;
      }
    } else if (transformedArr[i] === "--double-prev") {
      if (i === 0) {
        transformedArr.splice(i, 1);
        i = 0;
      } else {
        transformedArr[i] = transformedArr[i - 1];
        i = 0;
      }
    } else if (transformedArr[i] === "--double-next") {
      if (i === transformedArr.length - 1) {
        transformedArr.splice(i, 1);
        i = 0;
      } else {
        transformedArr[i] = transformedArr[i + 1];
        i = 0;
      }
    }
  }
  return transformedArr.filter((item) => item !== "");
}

module.exports = {
  transform,
};
