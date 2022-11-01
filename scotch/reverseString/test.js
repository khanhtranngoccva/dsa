const functions = require('./index-START')

function genRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function genChar() {
    return String.fromCharCode(genRandom(32, 128));
}

function genTestCases(size) {
    return Array.from({length: size}, () => {
        let original = Array.from({length: 10000}, genChar);
        let expected = functions[0](original);
        return [original, expected];
    });
}

let testCases = genTestCases(200);
console.log(testCases);

describe("Performance tests", () => {
    for (let reverseString of functions) {
        describe(`Performance of ${reverseString.name}`, () => {
            for (let [original, expected] of testCases) {
                test('reverses a string containing mixed case characters', () => {
                    expect(reverseString(original)).toEqual(expected);
                });
            }
        });
    }
});