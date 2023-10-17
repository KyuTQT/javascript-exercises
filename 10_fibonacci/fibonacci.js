const fibonacci = function(value) {
    if(typeof value === 'String'){
       value = value.parseInt(value);
    }
    
    if(value < 0){
        return 'OOPS';
    }

    sum = 0;
    fibonacciArray = [1, 1];
    for(let i = 1; i < value-1; i++){
        sum = fibonacciArray[i]+ fibonacciArray[i-1];
        fibonacciArray.push(sum);
        sum = 0;
    }
    return fibonacciArray[fibonacciArray.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
