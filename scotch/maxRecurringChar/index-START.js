/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

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

function maxRecurringChar(text) {
    const counter = new Counter(text);
    let mostAppearances = 0, mostAppearanceChar = "";
    for (let char of counter.keys()) {
        const charCount = counter.get(char);
        if (charCount > mostAppearances) {
            mostAppearances = charCount;
            mostAppearanceChar = char;
        }
    }

    return mostAppearanceChar;
}



module.exports = maxRecurringChar;