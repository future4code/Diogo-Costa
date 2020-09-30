var factorial = function (n) {
    if (n <= 0) {
        return 1;
    }
    return n * factorial(n - 1);
};
console.log(factorial(3));
console.log(factorial(33));
console.log(factorial(12));
console.log(factorial(9));
console.log(factorial(1));
console.log(factorial(0));
