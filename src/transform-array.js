const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  var result = [];
  if (!arr) {
    throw new Error.Error;
  }
  if (arr.length === 0) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
      result.push(arr[i]);
    }
    else if (arr[i] === '--discard-next') {
      if (i === arr.length - 1) {
        continue;
      }
      else {
        i += 1;
      }
    }
    else if (arr[i] === '--discard-prev') {
      if (i === 0) {
        continue;
      }
      else if (arr[i - 2] === '--discard-next') {
        continue;
      }
      else {
        result.splice(-1, 1); 
      }
    }
    else if (arr[i] === '--double-next') {
      if (i === arr.length - 1) {
        continue;
      }
      else {
        result.push(arr[i + 1]);
      }
    }
    else if (arr[i] === '--double-prev') {
      if (i === 0) {
        continue;
      }
      else if (arr[i - 2] === '--discard-next') {
        continue;
      }
      else {
        result.push(arr[i - 1]);
      }
    }
  }
  return result;
};
