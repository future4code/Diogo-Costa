const operation: string = process.argv[2].toLowerCase();
const number1: number = Number(process.argv[3]);
const number2: number = Number(process.argv[4]);

if (operation === "add") {
	console.log(number1 + number2);
} else if (operation === "sub") {
	console.log(number1 - number2);
} else if (operation === "mul") {
	console.log(number1 * number2);
} else if (operation === "div") {
	console.log(number1 / number2);
}
