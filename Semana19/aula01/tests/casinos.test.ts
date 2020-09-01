import { verifyAge, LOCATION, NATIONALITY, User, Casino } from "../src/casinos";

describe("function casino", () => {
	test("brazilian allowed to enter the casino in Brazil", () => {
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

	test("american allowed to enter the casino in Brazil", () => {
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

	test("2 brazilians, 2 americans UNALLOWED to enter the casino in EUA", () => {
		const american: User = {
			name: "Gringo1",
			age: 19,
			nationality: NATIONALITY.AMERICAN,
		};

		const brazilian: User = {
			name: "AstroCod",
			age: 19,
			nationality: NATIONALITY.BRAZILIAN,
		};

		const casino: Casino = {
			name: "Hilton",
			location: LOCATION.EUA,
		};

		const result = verifyAge(casino, [
			american,
			american,
			brazilian,
			brazilian,
		]);

		expect(result.americans.unAllowed).toEqual(["Gringo1", "Gringo1"]);
		expect(result.brazilians.unAllowed).toEqual(["AstroCod", "AstroCod"]);
	});

	test("2 brazilians unallowed, 2 americans allowed to enter the casino in EUA", () => {
		const american: User = {
			name: "Gringo1",
			age: 21,
			nationality: NATIONALITY.AMERICAN,
		};

		const brazilian: User = {
			name: "AstroCod",
			age: 19,
			nationality: NATIONALITY.BRAZILIAN,
		};

		const casino: Casino = {
			name: "Hilton",
			location: LOCATION.EUA,
		};

		const result = verifyAge(casino, [
			american,
			american,
			brazilian,
			brazilian,
		]);

		expect(result.americans.allowed).toEqual(["Gringo1", "Gringo1"]);
		expect(result.brazilians.unAllowed).toEqual(["AstroCod", "AstroCod"]);
	});

	test("brazilian allowed to enter the casino in Brazil", () => {
		const brazilian: User = {
			name: "AstroCod",
			age: 19,
			nationality: NATIONALITY.BRAZILIAN,
		};

		const casino: Casino = {
			name: "Caneta Azul",
			location: LOCATION.BRAZIL,
		};

		const result = verifyAge(casino, [brazilian]);

		expect(result.brazilians.allowed.length).toBeGreaterThan(0);
		expect(result.brazilians.allowed.length).toBeLessThan(2);
	});

	test("american allowed to enter the casino in Brazil", () => {
		const americans: User = {
			name: "AstroCod",
			age: 19,
			nationality: NATIONALITY.BRAZILIAN,
		};

		const casino: Casino = {
			name: "Caneta Azul",
			location: LOCATION.BRAZIL,
		};

		const result = verifyAge(casino, [americans]);

		expect(result.americans.allowed.length).toEqual(0);
	});

	test("2 brazilians unallowed, 2 americans unAllowed to enter the casino in EUA", () => {
		const american: User = {
			name: "Gringo1",
			age: 19,
			nationality: NATIONALITY.AMERICAN,
		};

		const brazilian: User = {
			name: "AstroCod",
			age: 19,
			nationality: NATIONALITY.BRAZILIAN,
		};

		const casino: Casino = {
			name: "Hilton",
			location: LOCATION.EUA,
		};

		const result = verifyAge(casino, [
			american,
			american,
			brazilian,
			brazilian,
		]);

		expect(result.americans.unAllowed).toContain("Gringo1");
		expect(result.brazilians.unAllowed).toContain("AstroCod");
	});

	test("2 brazilians unallowed, 2 americans unAllowed to enter the casino in EUA", () => {
		const american: User = {
			name: "Gringo1",
			age: 19,
			nationality: NATIONALITY.AMERICAN,
		};

		const brazilian: User = {
			name: "AstroCod",
			age: 21,
			nationality: NATIONALITY.BRAZILIAN,
		};

		const casino: Casino = {
			name: "Hilton",
			location: LOCATION.EUA,
		};

		const result = verifyAge(casino, [
			american,
			american,
			brazilian,
			brazilian,
		]);

		expect(result.americans.unAllowed.length).toEqual(2);
		expect(result.brazilians.unAllowed.length).toBeLessThan(1);
	});

	//! Exercício 6 7 abaixo precisam que implemente o Banco de dados para serem testados.

	test("Create Post", async () => {
		const post = {
			id: "id do post",
			title: "Título",
			content: "Conteúdo",
		};

		await createPost(post);
		const postFromDB = await getPostById(post.id);

		expect(postFromDB).not.toBe(undefined);
		expect(postFromDB).toEqual({
			id: "id do post",
			title: "Título",
			content: "Conteúdo",
		});
	});

	test("Create Post", async () => {
		try {
			const post = {
				id: "id do post",
				title: "Título",
				content: "Conteúdo",
			};

			await createPost(post);
			await createPost(post);
		} catch (error) {
			expect(error).not.toBe(undefined);
		}
	});
});
