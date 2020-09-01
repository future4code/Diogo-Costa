import { verifyAge, LOCATION, NATIONALITY, User, Casino } from "../src/casinos";
// import { NATIONALITY } from "../src/casinos";
// import { User } from "../src/casinos";
// import { Casino } from "../src/casinos";
// import { ResultItem } from "../src/casinos";
// import { Result } from "../src/casinos";

describe("Testing function casino", () => {
	test("Testing brazilian allowed to enter the casino in Brazil", () => {
		const brazilian: User = {
			name: "Astrodev",
			age: 19,
			nationality: NATIONALITY.BRAZILIAN,
		};

		const casino: Casino = {
			name: "Balada Estelar",
			location: LOCATION.BRAZIL,
		};

		const result = verifyAge(casino, [brazilian]);

		expect(result.brazilians.allowed).toEqual(["Astrodev"]);
	});

	test("Testing american allowed to enter the casino in Brazil", () => {
		const american: User = {
			name: "Gringo",
			age: 22,
			nationality: NATIONALITY.AMERICAN,
		};

		const casino: Casino = {
			name: "Pogo Pogo",
			location: LOCATION.BRAZIL,
		};

		const result = verifyAge(casino, [american]);

		expect(result.americans.allowed).toEqual(["Gringo"]);
	});
});
