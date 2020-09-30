// const printNumbersA = (n: number, count: number = 0): any => {
// 	if (count === n + 1) {
// 		return;
// 	}
// 	console.log(count);
// 	return printNumbersA(n, count + 1);
// };
// printNumbersA(10);
var printNumbersB = function (n, count) {
    if (count === void 0) { count = 0; }
    if (count - 1 === n) {
        return;
    }
    console.log(n);
    return printNumbersB(n - 1);
};
printNumbersB(10);
