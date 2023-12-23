const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    // throw an Error with message "You can't remove incorrect link!" on trying to remove wrong link
    if (
      !position ||
      position < 1 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainStr = "";
    this.chain.forEach((el, i) => {
      const link = i === this.chain.length - 1 ? `( ${el} )` : `( ${el} )~~`;
      chainStr += link;
    });
    this.chain = [];

    return chainStr;
  },
};

module.exports = {
  chainMaker,
};
