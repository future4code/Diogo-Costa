/* 
Resp A.
Diz que type não é atribuível a string
*/
//const minhaString: string = 1;

/* 
Resp B.
usando o operador pipeline |
*/
const meuNumero: number | string = 2;

/* 
Resp C.
*/
const novoObjeto: { nome: string; idade: number; corFavorita: string } = {
	nome: "Jatobaudo",
	idade: 26,
	corFavorita: "bordo",
};

/* 
Resp D.
*/
/* 
Resp E.
*/
enum CoresDoArcoIris {
	VIOLETA = "violeta",
	ANIL = "anil",
	AZUL = "azul",
	VERDE = "verde",
	AMARELO = "amarelo",
	LARANJA = "laranja",
	VERMELHO = "vermelho",
}

type Pessoa = {
	nome: string;
	idade: number;
	corFavorita: CoresDoArcoIris;
};

const griselda: Pessoa = {
	nome: "Griselda",
	idade: 20,
	corFavorita: CoresDoArcoIris.VERMELHO,
};

console.log(griselda);
