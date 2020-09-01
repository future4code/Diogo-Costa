// casino
// 	name
// 	country
// 		EUA
// 		BRAZIL

// users
// 	name
// 	nationality
// 		AMERICAN
// 		BRAZILIAN
// 	age

// 18 - 21

export enum LOCATION {
	EUA = "EUA",
	BRAZIL = "BRAZIL",
}

export enum NATIONALITY {
	AMERICAN = "AMERICAN",
	BRAZILIAN = "BRAZILIAN",
}

export interface User {
	name: string;
	age: number;
	nationality: NATIONALITY;
}

export interface Casino {
	name: string;
	location: LOCATION;
}

export interface ResultItem {
	allowed: string[];
	unAllowed: string[];
}

export interface Result {
	brazilians: ResultItem;
	americans: ResultItem;
}

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
