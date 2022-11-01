const memoTimesWithClosure = m => {
    const cache = {};
    return n => {
        if (cache[n] !== undefined) {
            return cache[n];
        } else {
            let result = n * m;
            cache[n] = result;
            return result;
        }
    };
}

const f1 = memoTimesWithClosure(5);

for (let i = 1; i <= 10; i++) {
    console.log(f1(i));
}
for (let i = 1; i <= 10; i++) {
    console.log(f1(i));
}