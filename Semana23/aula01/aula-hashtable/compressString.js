// Exercício 03
var x = "aabcccccaa";
var y = "escola da vida";
var z = "Duplicate";
var resX = x.split("");
var resY = y.split("");
var resZ = z.split("");
var compressString = function (str) {
    var res = str.filter(function (item, index) { return str.indexOf(item) === index; });
    var letters = {};
    if (res.length === str.length) {
        console.log(str.join("").toLowerCase());
    }
    else {
        str.forEach(function (item) {
            return (letters[item] = (letters[item] || 0) + 1);
        });
        console.log(letters);
    }
};
compressString(resX);
