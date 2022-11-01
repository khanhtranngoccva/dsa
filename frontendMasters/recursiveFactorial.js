function factorialFactory() {
    let cache = [];
    return function factorial(x) {
        if (cache[x] !== undefined) {
            console.log("Speed up!");
            return cache[x];
        }
        if (x === 0) return 1;
        else {
            const result = x * factorial(x - 1);
            cache[x] = result;
            return result;
        }
    }
}

const factorial = factorialFactory();
console.log(factorial(10));
console.log(factorial(15));