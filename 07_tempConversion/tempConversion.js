const convertToCelsius = function(fahrenheit) {
  let celcius = (fahrenheit - 32)*(5/9);
  return Math.round(10*celcius)/10;
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = (9/5)*celcius + 32;
  return Math.round(10*fahrenheit)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
