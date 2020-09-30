var aaa = "roma";
var bbb = "pedra";
var ccc = "avon";
var ddd = "roma";
var eee = "banana";
var aa = "amor";
var bb = "perda";
var cc = "nova";
var dd = "amora";
var ee = "ananab";
var checkAnagram = function (str1, str2) {
    var res1 = str1.split("").sort();
    var res2 = str2.split("").sort();
    // Precisa user stringfy para transformar o resultado em string
    // JSON.stringify(res1) == JSON.stringify(res2)
    res1.toString() === res2.toString()
        ? console.log("Is an Anagram")
        : console.log("Isn't an Anagram");
    console.log(res1);
    console.log(res2);
};
checkAnagram(eee, ee);
