const reverseString = function(stringToReverse) {
    let output = '';
    for(let i = 1; i != stringToReverse.length+1; i++){
        output += stringToReverse[stringToReverse.length-i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
