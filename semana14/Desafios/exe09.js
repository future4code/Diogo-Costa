var DNA = "ATCG";
var dnaToRna = function (dna) {
    var RNA = dna.replace(/A/g, "U");
    RNA = dna.replace(/T/g, "A");
    return RNA;
};
console.log(dnaToRna(DNA));
// UAGC
