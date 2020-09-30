const printCharacters = (str: string, index: number = 0): void => {
	if (index === str.length) {
		return;
	}

	console.log(str[index]);

	return printCharacters(str, index + 1);
};

printCharacters("Gaspar");
