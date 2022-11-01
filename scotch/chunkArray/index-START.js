/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    let result = [];
    for (let i = 0; i < array.length - 1; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}


module.exports = chunkArray