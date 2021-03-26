const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  var result = [];
  for (i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      result.push(members[i].charAt(0));
    }
  }
  return console.log(result.sort().join(''));
};

createDreamTeam(['Khayrut', true, 14, 'Leonid', 'Ilham', 'Husainov']);