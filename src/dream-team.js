const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const validMembers = members.filter((member) => typeof member === "string");
  const team = validMembers.map((member) => {
    const trimmedMember = member.trim();
    if (trimmedMember.length > 0) {
      return trimmedMember.toUpperCase()[0];
    }
  });
  return team.length > 0 ? team.sort().join("") : false;
}

module.exports = {
  createDreamTeam,
};
