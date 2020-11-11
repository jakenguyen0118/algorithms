function XO(str) {
	//code here
	string = str.toLowerCase()
	strArr = string.split('')
	let xCounter = 0
	let oCounter = 0

	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] === 'x') {
			xCounter++
		} else if (strArr[i] === 'o') {
			oCounter++
		} else {
			null
		}
	}

	if (xCounter == oCounter) {
		return true
	} else {
		return false
	}
}
