const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = "" + str;
  if (!options) {
    return str;
  }

  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || "+";
  if (
    options.hasOwnProperty("addition") &&
    typeof options.addition !== "string"
  ) {
    options.addition = "" + options.addition;
  }
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = "";
  if (options.addition && options.additionRepeatTimes > 1) {
    additionSeparator = options.additionSeparator || "|";
  }

  let addition = options.addition || "";

  let newStr = "";
  for (let i = 0; i < repeatTimes; i++) {
    newStr += `${str}`;
    for (let j = 0; j < additionRepeatTimes; j++) {
      newStr +=
        j === additionRepeatTimes - 1
          ? `${addition}`
          : `${addition}${additionSeparator}`;
    }
    newStr += i < repeatTimes - 1 ? `${separator}` : "";
  }
  return newStr;
}

module.exports = {
  repeater,
};
