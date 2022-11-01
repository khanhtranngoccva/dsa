Array.prototype.recursiveJoin = function (token) {
    const tokStr = token + "";
    // Makes sure that "this" refers to the array,
    // so an arrow function works really well here.
    const wrapper = (accumulator, index) => {
        accumulator += this[index];

        if (index >= this.length - 1) {
            return accumulator;
        }

        return wrapper(accumulator + tokStr, index + 1);
    }

    return wrapper("", 0);
}
