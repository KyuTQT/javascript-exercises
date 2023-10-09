const convertToCelsius = function(farenheit) {
  farenheit = (farenheit - 32) * (5/9);
  farenheit = Math.round(farenheit * 10)/10;
  return farenheit;
};

const convertToFahrenheit = function(celsius) {
  celsius = (celsius * (9/5)) + 32;
  celsius = Math.round(celsius * 10)/10;
  return celsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
