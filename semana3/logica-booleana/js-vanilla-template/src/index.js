const bool1 = true;
const bool2 = false;
const bool3 = !bool2;

let resultado = bool1 && bool2 && bool3;
console.log("a. ", resultado);

resultado = (bool2 || bool1) && !bool3;
console.log("b. ", resultado);

resultado = !resultado && (bool1 || bool1);
console.log("c. ", resultado);

resultado = resultado && (!bool1 || bool2) && !bool3;
console.log("d. ", resultado);

console.log("e. ", typeof resultado);

/* 

a. false
b. false
c. true
d. false
e. boolean


*/

console.log(`
<----------------------------------------->

`);

let array;
console.log("I. ", array);

array = null;
console.log("II. ", array);

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("III. ", array.length);

let i = 0;
console.log("IV. ", array[i], " e ", array[i + 1]);

array[i + 1] = 19;
const valor = array[i + 6];
console.log("V. ", array[i + 1], " e ", valor);

i += 1;
array[i] = array[i - 1];
console.log("VI. ", array[i]);

i = array.length - 1;
array[i] = array[i - 3];
const resultadoC = array[i] % array[1];
console.log("VII. ", resultadoC);

/* 
a. O que é `array` e como se declara em `JS`?
R: Um mapa numéricamente indexado de valores.
Entre []

b. Qual o index inicial de um `array`?
R:  O número 0

c. Como se determinar o tamanho do `array`?
R: usando .lenght

d. Indique todas as mensagens impressas no console.
I.  undefined
II.  null
III.  11
IV.  3  e  4
V.  19  e  9
VI.  3
VII.  1

*/

console.log(`
<----------------------------------------->

`);
/*
a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
*/

const fahrenheitToKelvin = ((77 - 32) * 5) / 9 + 273.15;
console.log(fahrenheitToKelvin + "ºK");

/* 
b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
 */
const celsiusToFahrenheit1 = (80 * 9) / 5 + 32;
console.log(celsiusToFahrenheit1 + "ºF");

/* 
c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
 */
const celsiusToFahrenheit2 = (30 * 9) / 5 + 32;
const celsiusToKelvin = 30 + 273.15;
console.log(celsiusToFahrenheit2 + "ºF" + " e " + celsiusToKelvin + "ºK");

/* 
d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
*/
const celsius = Number(prompt("Insira a temperatura em Cº a ser convertida: "));

console.log(celsius + "Cº são " + ((9 / 5) * celsius + 32) + "Fº");
console.log(celsius + "Cº são " + (celsius + 273.15) + "Kº");

/* 
Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte). 
Imprima-as com as respostas no console da seguinte forma:
*/

console.log(`
<----------------------------------------->

`);

/* 
Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte). 
Imprima-as com as respostas no console da seguinte forma: 
*/

const dialogo1 = prompt("Oi, quer fazer um cartão da Renner?");
console.log(dialogo1);

const dialogo2 = prompt("Faz aí, é de graça");
console.log(dialogo2);

const dialogo3 = prompt("Quebra essa ai parça, faz o baguio");
console.log(dialogo3);

const dialogo4 = prompt(
  "Faz pra me ajudar então, estou em teste aqui, por favorzinho?"
);
console.log(dialogo4);

const dialogo5 = prompt(
  "Sim? Você falou sim? Nunca aconteceu isso antes, vou chamar meu gerente, espera aqui"
);
console.log(dialogo5);

/*3-Questão:*/

/* a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora; */
const custoKwh = 0.05;
const consumoKwh = 280;
const descontoKwh = (custoKwh * consumoKwh * 15) / 100;
console.log(
  "Seu consumo foi de " +
    280 * 0.05 +
    "R$, Mas você terá um desconto de 15% pagando apenas " +
    descontoKwh +
    "R$"
);

/* b. Altere o programa para receber mais um valor: a porcentagem de desconto. 
Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.
*/
