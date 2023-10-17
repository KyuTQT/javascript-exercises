const findTheOldest = function(people) {
    yearNow = new Date().getFullYear();
    let sorted = people.sort((currentPerson, nextPerson) => {
        let currentAge = currentPerson.yearOfDeath 
        ? currentPerson.yearOfDeath - currentPerson.yearOfBirth 
        : yearNow - currentPerson.yearOfBirth;

        let nextAge = nextPerson.yearOfDeath 
        ? nextPerson.yearOfDeath - nextPerson.yearOfBirth 
        : yearNow - nextPerson.yearOfBirth;

        return currentAge > nextAge ? -1 : 1;
    })
    return sorted[0];
};


// Do not edit below this line
module.exports = findTheOldest;
