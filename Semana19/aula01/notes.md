## Exercício 1

_a. Crie uma interface para representar o usuário_

```
interface User {
	name: string;
	balance: number;
}
```

_b. Implemente a função_

```
const performPurchase = (user: User, value: number): User | undefined => {
	if (user.balance >= value) {
		return {
			...user,
			balance: user.balance - value,
		};
	}
	return undefined;
};
```

## Exercício 2

_a. Faça um teste com um usuário com o saldo maior do que o valor de compra_

```
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
```

b*. Faça um teste com um usuário com o saldo igual ao valor de compra*

```
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

```

c*. Faça um teste com um usuário com o saldo menor do que o valor de compra*

```
test("Testando saldo MENOR que o valor da compra", () => {
		const user: User = {
			name: "opa",
			balance: 200,
		};

		const result = performPurchase(user, 300);

		expect(result).toEqual(undefined);
	});
```

## Exercício 3

_a. Leia os códigos fornecidos acima com calma. Veja se não ficou com nenhuma dúvida._

```
ok
```

_b. Implemente a função_

```
export function verifyAge(casino: Casino, users: User[]): Result {
	const allowed: User[] = [];
	const unAllowed: User[] = [];

	for (const user of users) {
		if (casino.location === LOCATION.EUA) {
			if (user.age >= 21) {
				allowed.push(user);
			} else {
				unAllowed.push(user);
			}
		} else if (casino.location === LOCATION.BRAZIL) {
			if (user.age >= 18) {
				allowed.push(user);
			} else {
				unAllowed.push(user);
			}
			break;
		}
	}

	return {
		brazilians: {
			allowed: allowed
				.filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
				.map((u) => u.name),
			unAllowed: unAllowed
				.filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
				.map((u) => u.name),
		},
		americans: {
			allowed: allowed
				.filter((user) => user.nationality === NATIONALITY.AMERICAN)
				.map((u) => u.name),

			unAllowed: unAllowed
				.filter((user) => user.nationality === NATIONALITY.AMERICAN)
				.map((u) => u.name),
		},
	};
}
```

_c. O que foi mais difícil de fazer?_

```
Não consegui fazer se olhar o gabarito, achei que estava ficando muito longo e imaginei estar fazendo errado.
Preciso pegar mais intimidade em saber quando usar high order functions, porque elas nunca veem a minha mente como possível solução.
```

## Exercício 4 

