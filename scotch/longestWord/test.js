const {longestWord, longestWord2, longestWord3} = require('./index-START')
const functions = require("../reverseString/index-START");

test('longestWord is a function', () => {
  expect(typeof longestWord).toEqual('function');
});

test('returns the longet word in a mixed case string of text', () => {
  expect(longestWord('Top Shelf Web Development Training on Scotch') ).toEqual('Development');
});

test('returns the longet word in a lowercase string', () => {
  expect(longestWord('the ultimate guide to js algorithms') ).toEqual('algorithms');
});
test('returns the longet word in an uppercase string', () => {
  expect(longestWord('BUILDING FOR THE NEXT BILLION USERS') ).toEqual('BUILDING');
});

let size = 10;

function genRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function genChar() {
  return String.fromCharCode(genRandom(32, 128));
}

function genTestCases(size) {
  return Array.from({length: size}, () => {
    let original = Array.from({length: 1000000}, genChar).join("");
    let expected = longestWord(original);
    return [original, expected];
  });
}

let testCases = genTestCases(200);

test('bigTest', () => {
  for (let [original, expected] of testCases) {
    expect(longestWord(original)).toEqual(expected);
  }
});

test('bigTest2', () => {
  for (let [original, expected] of testCases) {
    expect(longestWord2(original)).toEqual(expected);
  }
});

test('bigTest3', () => {
  for (let [original, expected] of testCases) {
    expect(longestWord3(original)).toEqual(expected);
  }
});