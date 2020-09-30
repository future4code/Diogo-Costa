var printCharacters = function (str, index) {
    if (index === void 0) { index = 0; }
    if (index === str.length) {
        return;
    }
    console.log(str[index]);
    return printCharacters(str, index + 1);
};
printCharacters("Opa");
