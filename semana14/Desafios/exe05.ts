const calculator = (a: number, b: number): void => {
	let sum: number = a + b;
	let sub: number = a - b;
	let mul: number = a * b;
	let big: number = a > b ? a : b;

	console.log(sum, sub, mul, big);
};

calculator(8, 5);
