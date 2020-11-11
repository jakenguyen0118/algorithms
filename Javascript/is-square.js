var isSquare = function (n) {
	if (n % Math.sqrt(n) === 0) {
		return true
	} else if (n === 0) {
		return true
	} else {
		return false
	}
}
