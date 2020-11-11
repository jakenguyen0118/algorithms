/**
 * @param {number} num
 * @return {number}
 */

// turns a number into a string
// split the number into individual strings
// get the total value and current value
// takes one digits total/current value, then adds the total with the NEXT current value
// if sum is still 2 digits (aka greater than 10) run the function again
// if not return the sum

let addThis = function (num) {
    let number = num.toString()
    let sum = number.split("").reduce((total, current) => {
        total+=parseInt(current)
        console.log('total', total, 'current', current)
        return total
    }, 0)
    return sum >= 10 ? addThis(sum) : sum
}

console.log(addThis(71))
