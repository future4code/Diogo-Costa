const str = "aaaabbbbccccbbbbb";

// const res = str.replace(/(.)\1*/g, (m, $1) => {
// 	return $1 + m.length;
// });

// console.log(res);

// const checkIfPalindrome = (input: string): boolean => {
// 	// retira espaços da string
// 	for (let i = 0; i < input.length; i++) {
// 		input = input.replace(" ", "");
// 	}

// 	input = input.toLowerCase();

// 	// console.log(input);

// 	let reversedString = "";

// 	// inverte a string
// 	for (let i = input.length - 1; i >= 0; i--) {
// 		reversedString += input[i];
// 		console.log(reversedString);
// 	}

// 	return input === reversedString;
// };

// console.log(checkIfPalindrome("abbbcccaaaaa"));
// console.log(checkIfPalindrome("Gaspar"));
// console.log(checkIfPalindrome("Ana"));
// console.log(checkIfPalindrome("A dama admirou o rim da amada"));

// HASH TABLE
interface HashCountCharacters {
	[index: string]: number;
}

const checkIfAnagram = (inputA: string, inputB: string): boolean => {
	if (inputA.length !== inputB.length) {
		return false;
	}

	let hashTableA: HashCountCharacters = {};
	let hashTableB: HashCountCharacters = {};

	for (let char of inputA) {
		if (hashTableA[char]) {
			hashTableA[char] += 1;
		} else {
			hashTableA[char] = 1;
		}
	}

	for (let char of inputB) {
		if (hashTableB[char]) {
			hashTableB[char] += 1;
		} else {
			hashTableB[char] = 1;
		}
	}

	console.log(hashTableA);
	console.log(hashTableB);

	for (let key in hashTableA) {
		if (hashTableA[key] !== hashTableB[key]) {
			return false;
		}
	}

	return true;
};

console.log(checkIfAnagram("banana", "ananab")); // true
console.log(checkIfAnagram("roma", "amor")); // true
console.log(checkIfAnagram("roma", "amora")); // false
