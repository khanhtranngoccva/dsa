// Greedy method.
function makeChange(coins, amount) {
    const coinValues = [...coins].sort((x, y) => y - x);
    let result = 0;
    // Start from the highest coin.
    for (let coinValue of coinValues) {
        const fittingCoinCount = Math.floor(amount / coinValue);
        result += fittingCoinCount;
        amount -= coinValue * fittingCoinCount;
    }
    return result;
}

// Brute force recursive method plus caching.
function makeChangeRecursive(coins, amount) {
    const cache = {};

    function recurse(coins, amount) {
        if (cache[amount] !== undefined) {
            console.log("Cache load");
            return cache[amount];
        }
        // Possible moves to reach 0.
        let candidates = [];
        for (let coin of coins) {
            // If there is 1 move that can cover the amount, return 1.
            if (coin === amount) {
                return 1;
            }
            // Get the remaining amount of cash.
            const remaining = amount - coin;
            // If the remaining amount of cash is greater than 0, add 1 plus the recursive.
            if (remaining > 0) {
                candidates.push(1 + recurse(coins, remaining));
            }
        }
        candidates = candidates.filter(x => !Number.isNaN(x));
        if (!candidates.length) {
            // NaN will be returned, signifying it is impossible to calculate with such funds (dead end).
            cache[amount] = NaN;
            return NaN;
        } else {
            cache[amount] = Math.min(...candidates);
            return cache[amount];
        }
    }

    return recurse(coins, amount);
}

console.log(makeChangeRecursive([13, 7, 7, 1, 4, 67, 2, 6, 2], 14))