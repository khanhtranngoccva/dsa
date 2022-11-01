/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    let longestWord = "";
    for (let word of text.split(" ")) {
        if (longestWord.length < word.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

function longestWord2(text) {
    return text.split(" ").reduce((longestWord, word) => {
        if (longestWord.length < word.length) {
            longestWord = word;
        }
        return longestWord;
    }, "");
}

function longestWord3(text) {
    return text.split(" ").sort((w1, w2) => {
        return w2.length - w1.length;
    })[0];
}

module.exports = {longestWord, longestWord2, longestWord3}