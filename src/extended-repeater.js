const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  if (str === null) {
    str = 'null';
  }
  if (addition === null) {
    addition = 'null';
  }

  if (str.toString() === '[object Object]') {
    str = 'STRING_OR_DEFAULT';
  }


  let result = '';
  
  if (repeatTimes !== undefined) {
    for (let i = 0; i < repeatTimes; i++) {
      result = result.concat(str.toString());
      if (addition !== undefined) {
        if (additionRepeatTimes !== undefined) {
          for (let j = 0; j < additionRepeatTimes; j++) {
            result = result.concat('' + addition);
            if (j < additionRepeatTimes - 1) {
              if (additionSeparator !== undefined) {
                result = result.concat(additionSeparator.toString());
              }
              else {
                result = result.concat('|');
              }
            }
          }
        }
        else {
          for (let j = 0; j < 1; j++) {
            result = result.concat('' + addition);
          }
        }
      }
      if (separator !== undefined) {
        if (i < repeatTimes - 1) {
          result = result.concat(separator.toString());
        }
      }
      else {
        if (i < repeatTimes - 1) {
          result = result.concat('+');
        }
      }
    }
  }
  else {
    for (let i = 0; i < 1; i++) {
      result = result.concat(str);
      if (addition !== undefined) {
        if (additionRepeatTimes !== undefined) {
          for (let j = 0; j < additionRepeatTimes; j++) {
            result = result.concat('' + addition);
            if (j < additionRepeatTimes - 1) {
              if (additionSeparator !== undefined) {
                result = result.concat(additionSeparator.toString());
              }
              else {
                result = result.concat('|');
              }
            }
          }
        }
        else {
          for (let j = 0; j < 1; j++) {
            result = result.concat('' + addition);
          }
        }
      }
    }
  }
  return result;
};