const printNumbersA = (n: number, count: number = 0): number => {
	if (count === n + 1) {
		return;
	}

	console.log(count);

	return printNumbersA(n, count + 1);
};

printNumbersA(10);

const printNumbersB = (n: number, count: number = 0): any => {
	if (count - 1 === n) {
		return;
	}

	console.log(n);

	return printNumbersB(n - 1);
};

printNumbersB(10);

// Depois de olhar o gabarito vi que poderia ter comparado com 0 no if ao invés de colocar o parâmetro 'count'
