const {mergeArrays, mergeArrays2} = require('./index-START');
const {longestWord} = require("../longestWord/index-START");

test('mergeArrays is a function', () => {
  expect(typeof mergeArrays).toEqual('function');
});

test('Combines 5 arrays of numbers without dubplicates', () => {
  expect(mergeArrays([1,2],[2,3],[3,4],[4,5])).toEqual([1,2,3,4,5]);
});

test('Combines 3 arrays of strings without dubplicates', () => {
  expect(mergeArrays(['a','b','z'],['m','n','a'],['z','y'])).toEqual(['a','b', 'z', 'm', 'n', 'y']);
});

let size = 100000;

function genRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function genChar() {
  return String.fromCharCode(genRandom(32, 128));
}

function genTestCases(size) {
  return Array.from({length: size}, () => {
    let original = Array.from({length: 5}, genChar);
    let expected = mergeArrays(original);
    return [original, expected];
  });
}

let testCases = genTestCases(size);

test("Big test 1", () => {
  for (let [original, expected] of testCases) {
    expect(mergeArrays(original)).toEqual(expected);
  }
});

test("Big test 2", () => {
  for (let [original, expected] of testCases) {
    expect(mergeArrays2(original)).toEqual(expected);
  }
});
