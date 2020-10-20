/**
 * @param {obj[]} // an array of objs, with arrays inside of them
 * @return {} // an obj with the colors as keys, and the count as values
 */

// INPUT Arr
const colorsArr = [
	{ colors: ['blue', 'purple', 'red'] },
	{ colors: ['black', 'orange', 'blue'] },
	{ colors: ['green', 'red', 'blue', 'orange', 'green'] },
]

const countDuplicates = arr => {
    const countDups = {}
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].colors.length; j += 1){
            const color = arr[i].colors[j]
            if(countDups[color]){
                countDups[color] = countDups[color]
            } else {
                countDups[color] = 1
            }
        }
    }
}
console.log(countDuplicates(colorsArr))

// const countDuplicates = (arr) => {
// 	arr.forEach((obj) => {
// 		for (const colors in obj) {
// 			if (obj.colors) {
// 				let count = 0
// 				obj.colors.forEach((item) => {
// 					if (item) {
// 						count += 1
// 						console.log(`${item}: ${count}`)
// 					}
// 				})
// 			}
// 		}
// 	})
// }

// countDuplicates(colorsArr)

// OUTPUT
// => { blue: 3, purple: 1, red: 2, black: 1, orange: 2, green: 1 }