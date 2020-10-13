/**
 * @param s
 * @returns {boolean}
 */
let isValid = function (s) {
	// https://medium.com/analytics-vidhya/javascript-check-valid-parentheses-with-a-stack-bc7b1bab26c2

	// Define a stack which is an array.

	// Loop through each element in a given string.

	// If the element is an opening bracket (‘(‘ or ‘{‘ or ‘[‘), push it onto the stack.

	// If the element is a closing bracket (‘)‘ or ‘}‘ or ‘]‘), pop off the last element from the stack only if matches with the encountered closing bracket and keep iterating through the string. If the closing bracket does not match with the opening bracket placed on top of the stack, break out of the loop and return false because the parentheses in the string are not balanced.

	// If the stack is empty after completely iterating over the string, return true because the parentheses in the string are balanced and you have a valid string.

	let map = {
		')': '(',
		']': '[',
		'}': '{',
	}

	let stack = []
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
			stack.push(s[i])
		} else if (stack[stack.length - 1] === map[s[i]]) {
			stack.pop()
		} else return false
	}

	return stack.length ? false : true
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))