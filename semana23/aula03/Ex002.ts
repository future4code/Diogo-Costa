const sumNumbers = (n: number, acc: number = 0): number => {
	if (n >= 0) {
		console.log(acc);
		return sumNumbers(n - 1, acc + n);
	}
};

sumNumbers(5);
