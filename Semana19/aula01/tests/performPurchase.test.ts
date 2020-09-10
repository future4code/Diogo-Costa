import { performPurchase } from "../src/index";
import { User } from "../src/index";

describe("Testando a performPurchase", () => {
	test("testando o toBe e o toEqual", () => {
		expect(true).toBe(true);

		const newUser: User = {
			name: "opa",
			balance: 100,
		};

		expect(newUser).toEqual({
			name: "opa",
			balance: 100,
		});
	});

	test("Testando o saldo MAIOR do que valor da compra", () => {
		const user: User = {
			name: "opa",
			balance: 200,
		};

		const result = performPurchase(user, 100);

		expect(result).toEqual({
			...user,
			balance: 100,
		});
	});

	test("Testando o saldo IGUAL ao valor da compra", () => {
		const user: User = {
			name: "opa",
			balance: 200,
		};

		const result = performPurchase(user, 200);

		expect(result).toStrictEqual({
			...user,
			balance: 0,
		});
	});

	test("Testando saldo MENOR que o valor da compra", () => {
		const user: User = {
			name: "opa",
			balance: 200,
		};

		const result = performPurchase(user, 300);

		expect(result).toEqual(undefined);
	});
});
