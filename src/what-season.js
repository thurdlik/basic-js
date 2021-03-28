const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof(date) !== 'object') {
    return 'Unable to determine the time of year!'; 
  }
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  if (Object.prototype.hasOwnProperty.call(date, "getMonth")) {
    throw new TypeError;
  }
  
  if (month === 0 || month === 1 || month === 11) {
    return 'winter';
  }
  if (month === 2 || month === 3 || month === 4) {
    return 'spring';
  }
  if (month === 5 || month === 6 || month === 7) {
    return 'summer';
  }
  if (month === 8 || month === 9 || month === 10) {
    return 'autumn';
  }
}