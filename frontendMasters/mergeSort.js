Array.prototype._merge = function (other, callback) {
    let ptrThis = 0, ptrOther = 0;
    let result = [];
    while (ptrThis < this.length || ptrOther < other.length) {
        if (ptrOther === other.length) {
            result.push(this[ptrThis]);
            ptrThis++;
            continue;
        }
        if (ptrThis === this.length) {
            result.push(other[ptrOther]);
            ptrOther++;
            continue;
        }
        const [thisItem, otherItem] = [this[ptrThis], other[ptrOther]];
        const comparison = callback(thisItem, otherItem);
        if (comparison <= 0) {
            result.push(thisItem);
            ptrThis++;
        } else if (comparison > 0) {
            result.push(otherItem);
            ptrOther++;
        }
    }
    return result;
}

Array.prototype.mergeSort = function (callback) {
    if (this.length < 2) return this;
    if (this.length === 2) {
        const [x, y] = this;
        const comparison = callback(x, y);
        if (comparison <= 0) {
            return [x, y];
        } else if (comparison > 0) {
            return [y, x];
        }
    }
    const split = Math.floor(this.length / 2);
    const left = this.slice(0, split).mergeSort(callback);
    const right = this.slice(split).mergeSort(callback);
    return Object.assign(this, left._merge(right, callback));
}


console.log([2, 54, 136, 23, 6, 3, 7, 15].mergeSort((x, y) => y % 9 - x % 9));