var letterCombinations = function(digits) {
	if (!digits) return [];
    
    // list of all the letters associated with the digit
	const config = {
		2: ['a', 'b', 'c'],
		3: ['d', 'e', 'f'],
		4: ['g', 'h', 'i'],
		5: ['j', 'k', 'l'],
		6: ['m', 'n', 'o'],
		7: ['p', 'q', 'r', 's'],
		8: ['t', 'u', 'v'],
		9: ['w', 'x', 'y', 'z']
	};
    
	const resposeArray = [];
    
	const joiningLetters = (str, indexOfDigits) => {
		if (indexOfDigits == digits.length) {
			resposeArray.push(str);
			return;
		}
		const letters = config[digits[indexOfDigits]];
		for (const s of letters) {
			joiningLetters(str + s, indexOfDigits + 1);
		}
	}

	joiningLetters('', 0); 
	return resposeArray;
};