import { Character, validateCharacter } from "../src/character";

describe("Testing function character", () => {
	test("should return false it name is empty", () => {
		const result = validateCharacter({
			name: "",
			life: 1500,
			strength: 500,
			defense: 300,
		});

		expect.assertions(1);

		expect(result).toBe(false);
	});

	test("should return false with life equal 0", () => {
		const result = validateCharacter({
			name: "",
			life: 0,
			strength: 500,
			defense: 300,
		});

		expect.assertions(1);

		expect(result).toBe(false);
	});

	test("should return false with strength equal 0", () => {
		const result = validateCharacter({
			name: "",
			life: 1500,
			strength: 0,
			defense: 300,
		});

		expect.assertions(1);

		expect(result).toBe(false);
	});

	test("should return false with life defense 0", () => {
		const result = validateCharacter({
			name: "",
			life: 1500,
			strength: 500,
			defense: 0,
		});

		expect.assertions(1);

		expect(result).toBe(false);
	});

	test("should return false with any type number less than 0", () => {
		const result = validateCharacter({
			name: "",
			life: -1500,
			strength: -500,
			defense: 0,
		});

		expect.assertions(1);

		expect(result).toBe(false);
	});

	test("should return false with any type number less than 0", () => {
		const result = validateCharacter({
			name: "Gaspar",
			life: 1500,
			strength: 500,
			defense: 300,
		});

		expect.assertions(1);

		expect(result).toBe(true);
	});
});
