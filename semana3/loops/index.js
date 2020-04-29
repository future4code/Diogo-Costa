/*
EXERCÌCIO 1
O que o código abaixo está fazendo? Qual o resultado impresso no console? 

*/

// Soma todos os números de 1 até 14.

let sum = 0;
for (let i = 0; i < 15; i++) {
  sum += i;
}
console.log(sum);

/* EXERCÍCIO 2 */

/* Leia o código abaixo: */

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
const novaLista = [];
const numero = 4;
for (const item of lista) {
  if (item % numero === 0) {
    novaLista.push(item);
  }
}
console.log(novaLista);

/* 
a. O que o comando `.push` faz?
R: adiciona o resultado de 'item' no final do array 'novaLista'

b. Qual o valor impresso no console?
R: 10, 15, 25, 30
Os multiplos de 5 de dentro do array "lista"

c. Qual **seria** imprimido no console se
a variável `numero` tivesse o valor de `3`? E se tivesse o valor de `4`? 
Multiplos de 3: [12, 15, 18, 21, 27, 30]
Multiplos de 4: [12]

*/

/* EXERCÍCIO 3  */

//Este array será usado para exemplificar as respostas de todos os itens

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

//a. Escreva um programa que devolva o maior e o menor números contidos no array original

let menor = array[0];
let maior = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > maior) {
    maior = array[i];
  }
  if (array[i] < menor) {
    menor = array[i];
  }
}
console.log(`O maior número é ${maior}, é o menor é ${menor}`);

//b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.

let divisao = [];

for (let i = 0; i < array.length; i++) {
  divisao[i] = array[i] / 10;
}

console.log(divisao);

//c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.

let pares = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    pares[i] = array[i];
  }
}
console.log(pares);

//d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"

let str = [];
let i = 0;
while (i < array.length) {
  let str = `O elemento do index ${i} e ${array[i]} `;
  console.log(str);

  i++;
}

/* Desafio 1 

Resposta:

0
00
000
0000
00000
 */

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "));
let quantidadeAtual = 0;
while (quantidadeAtual < quantidadeTotal) {
  let linha = "";
  for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
    linha += "0";
  }
  console.log(linha);
  quantidadeAtual++;
}

//Desafio 2

let num1 = prompt("Diga um número: ");

let num2 = prompt("Vamos Jogar!: ");

if (num1 > num2) {
  console.log(
    `O número chutado foi: ${num2}
    Errou, é maior!`
  );
}
if (num1 < num2) {
  console.log(
    `O  número chutado foi: ${num2}
      Errou, é menor`
  );
} else {
  console.log(`ACERTOU!!!`);
}
