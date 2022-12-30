const removeFromArray = function(array, ...values) {
  return newArray = array.filter((elem) => {
    for (const value of values) {
      if (elem === value) {
        return false;
      }
    }

    return true;
  });
};

// Do not edit below this line
module.exports = removeFromArray;
