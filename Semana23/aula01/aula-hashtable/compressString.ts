// Exercício 03

const x: string = "aabcccccaa";
const y: string = "escola da vida";
const z: string = "Duplicate";

const resX = x.split("");
const resY = y.split("");
const resZ = z.split("");

const compressString = (str: Array<string>): void => {
	const res = str.filter((item, index) => str.indexOf(item) === index);
	let letters: any = {};

	if (res.length === str.length) {
		console.log(str.join("").toLowerCase());
	} else {
		str.forEach(
			(item: string): Object => {
				return (letters[item] = (letters[item] || 0) + 1);
			}
		);

		console.log(letters);
	}
};

compressString(resX);
