const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rowLength = matrix[0].length;
  const rowsToColumnsArr = [];
  for (let i = 0; i < rowLength; i++) {
    rowsToColumnsArr.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < rowLength; j++) {
      rowsToColumnsArr[j].push(matrix[i][j]);
    }
  }

  let sum = 0;
  for (let i = 0; i < rowsToColumnsArr.length; i++) {
    for (let j = 0; j < rowsToColumnsArr[i].length; j++) {
      if (rowsToColumnsArr[i][j] === 0) {
        break;
      }
      sum += rowsToColumnsArr[i][j];
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
