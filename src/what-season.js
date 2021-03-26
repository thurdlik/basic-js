const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof(date) !== 'object') {
    return 'Unable to determine the time of year!'; 
  }
  let month = date.getMonth();
  if (month === 0 || month === 1 || month === 11) {
    return 'Winter';
  }
  if (month === 2 || month === 3 || month === 4) {
    return 'Spring';
  }
  if (month === 5 || month === 6 || month === 7) {
    return 'Summer';
  }
  if (month === 8 || month === 9 || month === 10) {
    return 'Autumn';
  }
}