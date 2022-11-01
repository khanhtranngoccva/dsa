/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    return [...text].reverse().join("");
}

function reverseString2(text) {
    let result = "";
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result;
}

function reverseString3(text) {
    let result = "";
    for (let char of text) {
        result = char + result;
    }
    return result;
}

function reverseString4(text) {
    if (text === "") {
        return "";
    }
    return reverseString4(text.slice(1)) + text[0];
}

function reverseString5(text) {
    return [...text].reduce((acc, char) => char + acc, "");
}


module.exports = [
    reverseString,
    reverseString2,
    reverseString3,
    reverseString4,
    reverseString5,
];