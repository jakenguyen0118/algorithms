let nums = [1, 2, 3];

function oddOrEven(array) {
	if (array.length < 0) {
		return 'even'
	}

	let sum = array.reduce(function (a, b) {
		return a + b
	}, 0)

	if (sum % 2 === 0) {
		return 'even'
	} else {
		return 'odd'
	}
}
