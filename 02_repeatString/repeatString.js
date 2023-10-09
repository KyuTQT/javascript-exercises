const repeatString = function(phraseToRepeat, numberOfTimesToRepeat) {
    let phraseToAdd = phraseToRepeat;

    if(numberOfTimesToRepeat === 0){
        return '';
    }
    else if(numberOfTimesToRepeat < 0) {
        return 'ERROR';
    }
    else{
        for(let i = 1; i != numberOfTimesToRepeat; i++){
            phraseToRepeat+= phraseToAdd;
        }
        return phraseToRepeat;
    }

    
    
};

// Do not edit below this line
module.exports = repeatString;
