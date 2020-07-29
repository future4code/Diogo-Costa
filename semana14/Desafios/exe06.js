var Idades;
(function (Idades) {
    Idades["PRE_HISTORIA"] = "Pr\u00E9-hist\u00F3ria";
    Idades["IDADE_ANTIGA"] = "Idade Antiga";
    Idades["IDADE_MEDIA"] = "Idade M\u00E9dia";
    Idades["IDADE_MODERNA"] = "Idade Moderna";
})(Idades || (Idades = {}));
var identificadorDeIDade = function (ano, ACDC) {
    if (ACDC === void 0) { ACDC = "DC"; }
    if (ACDC === "DC") {
        if (ano >= 1453) {
            return Idades.IDADE_MODERNA;
        }
        else if (ano >= 476 && ano < 1453) {
            return Idades.IDADE_MEDIA;
        }
        else if (ano < 476) {
            return Idades.IDADE_ANTIGA;
        }
    }
    else if (ACDC === "AC") {
        return ano <= 4000 ? Idades.IDADE_ANTIGA : Idades.PRE_HISTORIA;
    }
};
console.log(identificadorDeIDade(1300));
//console.log(Idades.IDADE_ANTIGA);
//  476 DC
// 1453 DC
