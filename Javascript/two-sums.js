/**
 * @param {int[], int} // an array of nums, target value
 * @return {int[]} // an array of nums that add up to target value
 */

// NESTED FOR LOOP

let twoSum = (arr, target) => {
    const complimentArr = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                complimentArr.push(i)
                complimentArr.push(j)
            }
        }
    }
	return complimentArr
}


// FOR LOOP + OBJECT O(n)

// let twoSum = (arr, target) => {
//     let numObj = {}
//     for (let i = 0; i < arr.length; i++) {
//         let thisNum = arr[i]
//         numObj[thisNum] = i
//     }
//     for (let i = 0; i < arr.length; i++) {
//         let diff = target - arr[i]
//         if (numObj.hasOwnProperty(diff) && numObj[diff] !== i) {
//             return [i, numObj[diff]]
//         }
//     }
// }

// TEST Arr
const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2]

// TEST TARGET
// => 9
console.log(twoSum(numsArr, 9))