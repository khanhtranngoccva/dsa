const times10 = x => x * 10;

const cache = {};

const memoTimes10 = n => {
    if (cache[n] !== undefined) {
        return cache[n];
    }
    else {
        let result = times10(result);
        cache[n] = result;
        return result;
    }
}

