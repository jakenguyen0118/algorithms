/**
 * @param {number} num
 * @return {boolean}
 */

let isUgly = function (num) {
	let ugly = false
	let number = num

	while (number % 2 === 0) {
		number /= 2
	}
	while (number % 3 === 0) {
		number /= 3
	}
	while (number % 5 === 0) {
		number /= 5
    }
    
    if (number === 1) {
        ugly = true
    }
    return ugly
}

for (let i = 1; i < 30; i += 1) {
	console.log(`num: ${i}`, isUgly(i))
}