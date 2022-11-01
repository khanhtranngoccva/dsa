/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

function sanitize(string) {
    return string.replace(/\W/g, "").toLowerCase();
}

class Counter extends Map {
    constructor(iterable) {
        if (!new.target) {
            return new Counter(iterable);
        }
        super();
        for (let item of iterable) {
            let curValue = this.get(item);
            this.set(item, curValue + 1);
        }
    }

    get(item) {
        const curValue = super.get(item);
        if (curValue === undefined) return 0;
        else return curValue;
    }
}

function isAnagram(stringA, stringB) {
    const counterA = new Counter(stringA);
    const counterB = new Counter(stringB);
    if (counterA.size !== counterB.size) {
        return false;
    }
    for (let key of counterA.keys()) {
        if (counterB.get(key) !== counterA.get(key)) {
            return false;
        }
    }
    return true;
}

module.exports = isAnagram