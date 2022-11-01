/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    return (text.match(/[aeiou]/gi) || []).length;
}

function vowelsCounter2(text) {
    return [...text].reduce((acc, char) => "aeiouAEIOU".includes(char) ? acc + 1 : acc, 0);
}

function vowelsCounter3(text) {
    let result = 0;
    for (let char of text) {
        if ("aeiouAEIOU".includes(char)) {
            result++;
        }
    }
    return result;
}

module.exports = [vowelsCounter, vowelsCounter2, vowelsCounter3];
