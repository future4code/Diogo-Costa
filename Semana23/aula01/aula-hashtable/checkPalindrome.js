// Exercício 01
var a = "Ana";
var b = "ovo";
var c = "A dama admirou o rim da amada";
var d = "Gaspar";
function checkPalindrome(str) {
    var strToLowerNoSpaces = str.toLowerCase().split(" ").join("");
    var res = strToLowerNoSpaces.split("").reverse().join("");
    res === strToLowerNoSpaces
        ? console.log("\"" + str + "\" is a palindrome")
        : console.log("\"" + str + "\" is NOT a palindrome");
    return res;
}
checkPalindrome(a);
checkPalindrome(b);
checkPalindrome(c);
checkPalindrome(d);
