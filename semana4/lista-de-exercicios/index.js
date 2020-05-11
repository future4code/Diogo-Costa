/* LISTA DE EXERCÍCIOS */

// Exercícios de interpretação de código

// resp. 1
/* A função pega o valor inserido em valorEmDolar e multiplica cotação 
retornando o resultado concatenado com a string R$
No exemplo com a cotação 5 retorna R$500
*/

// resp. 2
/* A função tem um switch que retora uma valor de acordo com o case chamado. 
Para cada case vai ser mostrado o valorAposInvestmimento com o 
valor declarado multiplicado por um número pre-estabalecido.

O novoMontante imprime:  Ações 1650
O segundoMontante imprime: Tesouro Direto: TIPO DE INVESTIUMENTO INFORMADO INCORRETO
  */

// resp. 3
/* O código imprime a quantidade total de números no array número, 
em seguida joga todos os números pares dentro do array1 e os imprime no console, 
e por fim joga todos os números ímpares dentro no aray2 e os imprime no console.
*/

// resp. 4
/* O primeiro IF testa se os items da lista são menores em relação a let com valor Infinity, logo após testar todos chega no menos número que é o -10.
O segundo IF testa se os items da lista são maiores em relação a let de valor 0, logo após testar todos o chega no maior número da lista que é o 1590.
*/

// Exercícios de Lógica de Programação

// resp. 1

// for, .forEach, .map

/* const lista = [1, 2, 3, 4, 5];

for (numero of lista) {
  console.log(numero);
}

lista.forEach((numero) => {
  console.log(numero);
});

lista.map((numero) => {
  console.log(numero);
});
 */

// resp. 2

/* 
a. false
b. false
c. true
d. true
e. true

*/

// resp. 3

/* Eu não faria usando while, for resolve bem a situação na minha opnião.
O código dele não tem break, acho que gera um loop dessa forma.
*/

/* let numerosPares = 5; // número a ser testado

for (let i = 0; i < numerosPares * 2; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
} */

// resp. 4

/* function triangulo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado1 === lado3) {
    console.log("Equilatero");
  } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
    console.log("Escaleno");
  } else {
    console.log("Isóceles");
  }
}

triangulo(1, 3, 5);
 */

// resp. 5

/* function respostaDoExercicioCinco(a, b) {
  function qualMaior() {
    a > b ? console.log(`O maior é ${a}`) : console.log(`O maior é ${b}`);
  }
  qualMaior();

  function divisiveis() {
    a % b === 0
      ? console.log(`${a} é divisível por ${b}`)
      : console.log(`${a} não é divisível por ${b}`);
    b % a === 0
      ? console.log(`${b} é divisivel por ${a}`)
      : console.log(`${b} não é divisivel por ${a}`);
  }
  divisiveis();

  function diferenca() {
    a > b
      ? console.log(`A diferença entre eles é de ${a - b}`)
      : console.log(`A diferença entre eles é ${b - a}`);
  }
  diferenca();
}

respostaDoExercicioCinco(150, 30);
 */

// Exercícios de funções

// resp. 1

/* const array = [4, 1, 25, 3, 5, 66, 7, 8, 9, 20];

function segundoMaiorEMenor() {
  array.sort((a, b) => {
    return a - b;
  });
  console.log(array[1], array[array.length - 2]);
}

segundoMaiorEMenor();
 */

// resp. 2

/* const HelloWorld = function () {
  alert("Hello Future4");
};

HelloWorld();
 */

/*  EXERCÍCIOS DE OBJETOS */

// resp. 1
/* Em javascript ambos são objetos, tudo é objeto na verdade 
mas os arrays são um subclasse que tem algumas funções a mais */

//resp. 2
