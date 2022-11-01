function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, "");
}

function reverseNumber(num) {
    const absoluteValue = Math.abs(num);
    return Math.sign(num) * Number(reverseString(absoluteValue.toString()));
}

console.log(reverseNumber(-321))