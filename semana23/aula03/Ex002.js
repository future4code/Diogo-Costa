var sumNumbers = function (n) {
    var res = 0;
    if (n >= 0) {
        console.log(n);
        res += n;
        console.log(res);
        return sumNumbers(n - 1);
    }
};
sumNumbers(5);
