/*  EXERCÍCIO 1

resp a.
[]

resp a.
[0, 1, 0, 1, 2, 3]

resp a.
[0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

 */
/* 
const minhaFuncao = (quantidade) => {
  const array = [];

  for (let i = 0; i < quantidade; i += 2) {
    for (let j = 0; j < i; j++) {
      array.push(j);
    }
  }
  return array;
};

minhaFuncao(2);
 */

/* EXERCÍCIO 2 

resp a.
0
2
undefined

resp b.
Sim.
A função itera pelo array independente do conteudo, 
é só chamar o número na função omitindo as aspas.

*/

/* let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));
 */

/* EXERCíCIO 3 

Ela retorna a soma e a multiplicação dos valores do array.
Não sei qual o nome melhor que surgiria por saber isso...

*/

/* let num = [1, 2, 3, 4, 5];

function metodo(array) {
  let resultadoA = 0;
  let resultadoB = 1;
  let arrayFinal = [];

  for (let x of array) {
    resultadoA += x;
    resultadoB *= x;
  }

  arrayFinal.push(resultadoA);
  arrayFinal.push(resultadoB);
  return arrayFinal;
}

console.log(metodo(num));
 */

/* EXERCÍCIO 4 */

// Resp a.

/* function dogYears(n) {
  let year = n;
  year *= 7;
  return year;
}

console.log(dogYears(7));  */

// resp b.

function phrase(name, age, address, student) {
    let name = name;
    let age =  age;
    let address = address;
    let student =student
}
