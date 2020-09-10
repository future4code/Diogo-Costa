export interface User {
	name: string;
	balance: number;
}

export const performPurchase = (
	user: User,
	value: number
): User | undefined => {
	if (user.balance >= value) {
		return {
			...user,
			balance: user.balance - value,
		};
	}
	return undefined;
};

//! Parei no Módulo 5, aula 63, 1:32:00
//! https://vimeo.com/groups/648735/videos/453327876

//! Ex04 casino
