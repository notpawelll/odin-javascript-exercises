const fibonacci = function(n) {
  if (n < 0) return "OOPS";
  else if (n === 0) return 0;

  let num0 = 0,
      num1 = 1;

  for (let i = 0; i < n; i++) {
    const temp = num1;
    num1 = num0 + num1;
    num0 = temp;
  }

  return num0;
};

// Do not edit below this line
module.exports = fibonacci;
