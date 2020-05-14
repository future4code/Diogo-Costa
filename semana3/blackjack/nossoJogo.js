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

const card1 = comprarCarta();
const card2 = comprarCarta();
const card3 = comprarCarta();
const card4 = comprarCarta();
const card5 = comprarCarta();
const card6 = comprarCarta();

let hand1 = card1.texto;
let hand2 = card2.texto;
let hand3 = card3.texto;
let hand4 = card4.texto;
let hand5 = card5.texto;
let hand6 = card6.texto;

console.log("Bem vindo ao jogo de Blackjack");

const start = confirm("Quer jogar?");

while (start === true) {
  console.log(`
   Usuário - cartas: ${hand1} ${hand2} - pontuação: ${
    card1.valor + card2.valor
  }`);
  console.log(`
   Computador - cartas: ${hand4} ${hand5} - pontuação: ${
    card4.valor + card5.valor
  }`);
  const again = confirm("Quer comprar mais uma?");

  if (again === true) {
    console.log(
      `Usuário recebeu: ${hand3} 
      totalizando: ${card1.valor + card2.valor + card3.valor}`
    );
    console.log(
      `Computador recebeu: ${hand6} 
      totalizando: ${card4.valor + card5.valor + card6.valor}`
    );
    if (
      card1.valor + card2.valor + card3.valor >
        card4.valor + card5.valor + card6.valor &&
      card1.valor + card2.valor + card3.valor <= 21
    ) {
      console.log("O usuário ganhou");
    }
    if (
      card1.valor + card2.valor + card3.valor <
        card4.valor + card5.valor + card6.valor &&
      card4.valor + card5.valor + card6.valor <= 21
    ) {
      console.log("O computador ganhou");
    }
  } else {
    if (
      card1.valor + card2.valor + card3.valor >
        card4.valor + card5.valor + card6.valor &&
      card1.valor + card2.valor + card3.valor <= 21
    ) {
      console.log("O usuário ganhou");
    }
    else { (
      card1.valor + card2.valor + card3.valor <
        card4.valor + card5.valor + card6.valor &&
      card4.valor + card5.valor + card6.valor <= 21
    ) 
      console.log("O computador ganhou");
    }
    break;
  }
}
