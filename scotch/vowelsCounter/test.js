const [vowelsCounter, vowelsCounter2, vowelsCounter3] = require('./index-START');

test('vowelsCounter is a function', () => {
  expect(typeof vowelsCounter).toEqual('function');
});

test('returns the number of vowels found', () => {
  expect(vowelsCounter('aeiou')).toEqual(5);
});

test('returns the number of vowels found when string is capitalized', () => {
  expect(vowelsCounter('AEIOU')).toEqual(5);
});

test('returns the number of vowels found when all alphabets are passed in', () => {
  expect(vowelsCounter('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels found when string has mixed capitalization', () => {
  expect(vowelsCounter('Abcdegfizzjbhso')).toEqual(4);
});

for (let size = 1; size <= 100000000; size *= 10) {

  test('big test ' + size, () => {
    expect(vowelsCounter('a'.repeat(size))).toEqual(size);
  });

  test('big test 2 ' + size, () => {
    expect(vowelsCounter2('a'.repeat(size))).toEqual(size);
  });

  test('big test 3 ' + size, () => {
    expect(vowelsCounter3('a'.repeat(size))).toEqual(size);
  });
}