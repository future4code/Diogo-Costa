var calculator = function (a, b) {
    var sum = a + b;
    var sub = a - b;
    var mul = a * b;
    var big = a > b ? a : b;
    console.log(sum, sub, mul, big);
};
calculator(8, 5);
