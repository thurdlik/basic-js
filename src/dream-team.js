const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members) {
    return false;
  }
  var result = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      let stroka = members[i].trim();
      result.push(stroka.charAt(0).toUpperCase());
    }
  }
  return result.sort().join('').toString();
};