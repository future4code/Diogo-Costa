export function checaPalindromo(frase) {
  return frase.trim().split().join("") === frase.split("").reverse().join("");
}

console.log(checaPalindromo("arara"));
