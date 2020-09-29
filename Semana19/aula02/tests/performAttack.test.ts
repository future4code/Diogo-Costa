import { performAttack } from "../src/performAttack";
import { Character, validateCharacter } from "../src/character";

describe("Testing function performAttack", () => {
	test("should perform attack ", () => {
		const validatorMock = jest.fn(() => {
			return true;
		});

		const attacker: Character = {
			name: "Scorpion",
			life: 1500,
			defense: 200,
			strength: 6000,
		};

		const defender: Character = {
			name: "Kitana",
			life: 1500,
			defense: 400,
			strength: 800,
		};

		performAttack(attacker, defender, validatorMock as any);
	});
});
