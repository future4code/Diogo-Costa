import { Character, validateCharacter } from "../src/character";

describe("Testing function character", () => {
	test("should be false it name is empty", () => {
		const result = validateCharacter({
			name: "",
			life: 1,
			strength: 2,
			defense: 3,
		});

		expect.assertions(1);

		expect(result).toBe(false);
	});
});
