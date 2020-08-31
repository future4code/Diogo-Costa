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

```

```

