let dnaStrings = (str) => {
	// const pairs = {
	//   A: "T",
	//   T: "A",
	//   C: "G",
	//   G: "C"
	// }

	// const arr = str.split('')

	// return arr.map(match => pairs[match]).join('')

	const arr = []

	const arrStr = str.split('')

	arrStr.forEach((match) => {
		switch (match) {
			case 'A':
				arr.push('T')
				break
			case 'T':
				arr.push('A')
				break
			case 'G':
				arr.push('C')
				break
			case 'C':
				arr.push('G')
				break
		}
	})

	return arr.join('')
}

dnaStrings('GCGTTTAA')