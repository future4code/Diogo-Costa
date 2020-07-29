//! Porque na hora de buildar com toLowerCase da erro mas sem vai normal, e o código roda normal com ele tbm?

const operator: string = process.argv[2].toLowerCase();
const number1: number = Number(process.argv[3]);
const number2: number = Number(process.argv[4]);

switch (operator) {
	case "add":
		console.log(number1 + number2);
		break;

	case "sub":
		console.log(number1 - number2);
		break;

	case "mul":
		console.log(number1 * number2);
		break;

	case "div":
		console.log(number1 / number2);
		break;
	default:
		break;
}
