/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {
    return [...new Set([].concat(...arrays))];
}

function mergeArrays2(...arrays) {
    let jointArray = [];
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    return jointArray.filter((item, index) => jointArray.indexOf(item) === index)
}


module.exports = {
    mergeArrays,
    mergeArrays2,
};