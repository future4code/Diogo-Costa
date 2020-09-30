const arr: Array<any> = ["opa", 69, "xablau"];

const printArray = (arr: Array<any>, index: number = 0): any => {
	if (index === arr.length) {
		return;
	}

	console.log(arr[index]);

	return printArray(arr, index + 1);
	// return arr;
};

printArray(arr);
