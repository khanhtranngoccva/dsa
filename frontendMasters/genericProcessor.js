function decorateWithMemo(cb) {
    const cache = new Map();
    return (arg) => {
        if (cache.has(arg)) {
            return cache.get(arg);
        }
        let result = cb(arg);
        cache.set(arg, result);
        return result;
    }
}

