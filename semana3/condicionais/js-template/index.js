/*


Exercício 1  


*/

const respostaDoUsuario = prompt("Digite o número que você quer testar?");
const numero = Number(respostaDoUsuario);

if (numero % 2 === 0) {
  console.log("Passou no teste.");
} else {
  console.log("Não passou no teste.");
}

/*
Qual o teste que ele realiza?
Testa se o número é par ou ímpar.

Para que tipos de números ele imprime no console "Passou no teste"?
Números pares.

Para que tipos, a mensagem é "Não passou no teste"? 
Números ímpares.

*/

/*


Exercício 2 


*/

let fruta = prompt("Escolha uma fruta");
let preco;
switch (fruta) {
  case "Laranja":
    preco = 3.5;
    break;
  case "Maçã":
    preco = 2.25;
    break;
  case "Uva":
    preco = 0.3;
    break;
  case "Pêra":
    preco = 5.5;
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5;
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco);

/*
a. Para que serve o código acima?
Mostra o preço das frutas de cada case ou o valor default  

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
2.25

c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. 
Qual seria o preço que você pagaria?
24.55

d. Considere que um usuário queira comprar uma `Pêra`, 
qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` 
(o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
5


*/

/*



EXERCÌCIO 3 



*/

const numero1 = prompt("Digite o primeiro número.");
const numero2 = prompt("Digite o próximo número?");

if (numero1 > 0 && numero2 > 0) {
  let mensagem;
  if (numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!";
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!";
  }
}

console.log(mensagem);

/*

Qual será a mensagem do terminal? 
index.js:82 Uncaught ReferenceError: mensagem is not defined

Haverá algum erro?
Sim, a variável let está em escopo local dentro do block if , logo o console.log não tem acesso a mesma.

*/

/* 



EXERCÌCIO 4 



*/

let num1 = prompt("Digite um número: ");
let num2 = prompt("Digite mais um número: ");
let num3 = prompt("Digite outro número: ");

if (num1 > num2 && num1 > num3 && num2 > num3) {
  console.log("Ordem decrescente " + num1, num2, num3);
}
if (num1 > num2 && num1 > num3 && num3 > num2) {
  console.log("Ordem decrescente " + num1, num3, num2);
}
if (num2 > num1 && num2 > num3 && num1 > num3) {
  console.log("Ordem descrescent: " + num2, num1, num3);
}
if (num2 > num1 && num2 > num3 && num3 > num1) {
  console.log("Ordem descrescent: " + num2, num3, num1);
}
if (num3 > num1 && num3 > num2 && num1 > num2) {
  console.log("Ordem descrescent: " + num3, num1, num2);
}
if (num2 > num1 && num3 > num2 && num3 > num2) {
  console.log("Ordem descrescent: " + num3, num2, num1);
}
if (num1 === num2 || num1 === num3 || num2 === num3) {
  // R.c
  console.log("Digite números diferentes!");
}

/* 
a. Crie um programa que receba dois números do usuário através do `prompt` 
e imprima-os na ordem **decrescente**. O que acontece com o seu programa se os 2 números forem iguais? 
(é só testar e colocar um comentário descrevendo o que aconteceu)
Ele imprime s 2 números.

*/

/* 
b. Adapte o programa para que o usuário digite 3 números. 
Ainda os imprima na ordem decrescente. O que acontece como seu programa se os 3 números forem iguais? 
(é só testar e colocar um comentário descrevendo o que aconteceu)
*/

/* EXERCÍCIO 5 */

/* A.
Link do Diagrama 
https://drive.google.com/file/d/1jhGIk7qgjVfiNREhx5cWf8vUzgJnHR_M/view?usp=sharing
*/

/* B. */

//let vertebrados = prompt("É vertebrado? S/N: ");

/*
let mamiferos = prompt("É mamífero? S/N");
let humano = prompt("É racional? S/N");
let penas = prompt("Tem penas? S/N");
let terrestre = prompt("É terrestre? S/N");
let ambiente = prompt("Vive em ambiente aquático? S/N");

*/
