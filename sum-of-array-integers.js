/**
 * @param arr
 * @returns {number}
 */
function sumOfArrayIntegers(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumOfArrayIntegers(arr.slice(1))
    }
}

console.log(sumOfArrayIntegers([1, 2, 3, 4, 5, 6]))

// function sum(array) {
//   if (array.length === 0) {
//     return 0;
//   } else {
//     return array[0] + sum(array.slice(1));
//   }
// }

// sum([1, 2, 3, 4, 5]); // 15

// https://davidtang.io/2019/03/31/learning-recursion-in-javascript-part-2.html