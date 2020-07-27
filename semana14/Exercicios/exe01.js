/*
Resp A.
Diz que type não é atribuível a string
*/
//const minhaString: string = 1;
/*
Resp B.
usando o operador pipeline |
*/
var meuNumero = 2;
/*
Resp C.
*/
var objPessoa = {
    nome: "Jatobaudo",
    idade: 26,
    corFavorita: "bordo"
};
/*
Resp D.
*/
/*
Resp E.
*/
var CoresDoArcoIris;
(function (CoresDoArcoIris) {
    CoresDoArcoIris["VIOLETA"] = "violeta";
    CoresDoArcoIris["ANIL"] = "anil";
    CoresDoArcoIris["AZUL"] = "azul";
    CoresDoArcoIris["VERDE"] = "verde";
    CoresDoArcoIris["AMARELO"] = "amarelo";
    CoresDoArcoIris["LARANJA"] = "laranja";
    CoresDoArcoIris["VERMELHO"] = "vermelho";
})(CoresDoArcoIris || (CoresDoArcoIris = {}));
var griselda = {
    nome: "Griselda",
    idade: 20,
    corFavorita: CoresDoArcoIris.VERMELHO
};
console.log(griselda);
var LabenuClasses;
(function (LabenuClasses) {
    LabenuClasses["JULIAN"] = "Julian";
    LabenuClasses["MELLO"] = "Mello";
})(LabenuClasses || (LabenuClasses = {}));
var amanda = {
    "class": LabenuClasses.MELLO
};
