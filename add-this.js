/**
 * @param {number} num
 * @return {number}
 */
let addThis = function (num) {
    // turns a number into a string
    let number = num.toString()
    // split the number into individual strings
    // get the total value and current value
    let sum = number.split("").reduce((total, current) => {
        // takes one digits total/current value, then adds the total with the NEXT current value
        total+=parseInt(current)
        console.log('total', total, 'current', current)
        return total
    }, 0)
    // if sum is still 2 digits (aka greater than 10) run the function again
    // if not return the sum
    return sum >= 10 ? addThis(sum) : sum
}

console.log(addThis(71))
