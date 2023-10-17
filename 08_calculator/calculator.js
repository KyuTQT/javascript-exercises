const add = function(...values) {
  let sum = 0;
  for (let index = 0; index < values.length; index++) {
    sum  += values[index];
  }
  return sum;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(values) {
  let sum = 0;
	if(values.length.length === 0){
    return sum;
  }
  
  for(let i = 0; i < values.length; i++){
    sum += values[i];
  }
  return sum;
};

const multiply = function(values) {
  product = values[0];
  for(let i = 1; i<values.length; i++){
    product *= values[i];
  }
  return product;
};

const power = function(value, raised) {//3
  let powered = value;
	for(let i = 2; i <= raised; i++){
    powered *= value;
    console.log (value);
  }
  return powered;
};

const factorial = function(value) {
  if (value === 0 || value === 1) return 1;
	
  factored = value
  for(let i = value-1; i != 0; i--){
    factored *= i
  }
  return factored;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
