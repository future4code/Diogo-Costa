import { Character, validateCharacter } from "./character";

export const performAttack = (
	attacker: Character,
	defender: Character,
	validator: (input: Character) => boolean
) => {
	if (!validateCharacter(attacker) || !validateCharacter(defender)) {
		throw new Error("InValid character");
	}

	if (attacker.strength > defender.defense) {
		defender.life -= attacker.strength - defender.defense;
	}
};

// *c. Explique, com as suas palavras, as diferenças entre as duas implementações*
/* 
A primeira só manda um erro caso não exista um dos 2 characters

A segunda testa as entradas dos characters e retorna um booleano de acordo com o parâmetro passado ser de acordo para com a tipagem
*/
