/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    const processedText = text.toLowerCase();
    return [...processedText].reverse().join("") === processedText;
}

function palindromeChecker2(text) {
    const processedText = text.toLowerCase();
    const textLength = processedText.length;
    for (let i = textLength - 1; i >= textLength / 2; i--) {
        if (processedText[i] !== processedText[textLength - i - 1]) {
            return false;
        }
    }
    return true;
}

module.exports = palindromeChecker2;