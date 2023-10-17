const palindromes = function (text) {
    text = text
                .replace(/[^\w\s]/gi, '')
                .replace(/\s/g, '')
                .toLowerCase();
    cleanedStr = text
                    .split('')
                    .reverse()
                    .join('')
                    .replace(/[^\w\s]/gi, '')
                    .replace(/\s/g, '')
                    .toLowerCase();
    console.log(text);
    console.log(cleanedStr);
    return text === cleanedStr ? true : false;
};
// Do not edit below this line
module.exports = palindromes;
