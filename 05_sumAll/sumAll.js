const sumAll = function(number1, number2) {
    if(number1 < 0 || number2 < 0 || typeof(number1) != 'number' || typeof(number2) != 'number') {
        return'ERROR'
    }
    else if(number1 > number2){
        for(let i = number2+1; i!= number1+1; i++){
            number2+=i;
        }
        return number2;
    }
    else{
        for(let i = number1+1; i!= number2+1; i++){
            number1+=i;
        }
        return number1;
    }
    

};

// Do not edit below this line
module.exports = sumAll;
