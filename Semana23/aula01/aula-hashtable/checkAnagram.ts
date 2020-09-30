// Exercício 02

const aaa: string = "roma";
const bbb: string = "pedra";
const ccc: string = "avon";
const ddd: string = "roma";
const eee: string = "banana";

const aa: string = "amor";
const bb: string = "perda";
const cc: string = "nova";
const dd: string = "amora";
const ee: string = "ananab";

const checkAnagram = (str1: string, str2: string): any => {
	const res1 = str1.split("").sort();
	const res2 = str2.split("").sort();

	res1.toString() === res2.toString()
		? console.log(`Is an Anagram`)
		: console.log(`Isn't an Anagram`);

	// clg só para ver como está voltando a conversão
	console.log(res1);
	console.log(res2);
};

checkAnagram(eee, ee);
