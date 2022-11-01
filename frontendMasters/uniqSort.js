function uniqSort(arr) {
    const breadcrumbs = {};
    const result = [];
    for (let item of arr) {
        if (!breadcrumbs[item]) {
            breadcrumbs[item] = true;
            result.push(item);
        }
    }
    return result.sort((a, b) => a - b);
}

console.log(uniqSort([4, 2, 2, 3, 2, 2, 2]));