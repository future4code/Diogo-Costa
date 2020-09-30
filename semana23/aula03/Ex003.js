var arr = ["opa", 69, "xablau"];
var printArray = function (arr, index) {
    if (index === void 0) { index = 0; }
    if (index === arr.length) {
        return;
    }
    console.log(arr[index]);
    return printArray(arr, index + 1);
    // return arr;
};
printArray(arr);
