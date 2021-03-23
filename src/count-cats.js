const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  var count = 0
  backyard.forEach(element => {
    count += element.filter(e => e == '^^').length
  });
  return count
}