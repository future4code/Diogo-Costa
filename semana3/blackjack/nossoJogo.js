/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const card1 = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
const card2 = comprarCarta();

console.log("Bem vindo ao jogo de Blackjack");

const start = confirm("Quer jogar?");
let player1 = card1.texto;
let player2 = card2.texto;

while (start === true) {
  console.log("ok");
  break;
  if (start === false) {
    console.log("parou o loop");
    break;
  }
}

/* 
let start = confirm("Quer jogar?");
let hand1 = card1.texto;
let hand2 = card2.texto;

if (start === true) {
  console.log(`
   Você recebeu as cartas ${hand1}, ${hand2} 
   totalizando: ${card1.valor + card2.valor}`);
  let again = confirm("Quer comprar mais uma? ");
  if (again === true) {
    console.log(``);
  }
} else {
  console.log("O jogo Acabou");
}
 */
