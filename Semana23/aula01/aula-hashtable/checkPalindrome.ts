// Exercício 01

let a: string = "Ana";
let b: string = "ovo";
let c: string = "A dama admirou o rim da amada";
let d: string = "Gaspar";

function checkPalindrome(str: string): string {
	const strToLowerNoSpaces = str.toLowerCase().split(" ").join("");

	const res = strToLowerNoSpaces.split("").reverse().join("");

	res === strToLowerNoSpaces
		? console.log(`"${str}" is a palindrome`)
		: console.log(`"${str}" is NOT a palindrome`);

	return res;
}

checkPalindrome(a);
checkPalindrome(b);
checkPalindrome(c);
checkPalindrome(d);
