/* 
EXE 01 
a) GET /subscribers/all
b) Promise<any>

EXE02
a) ???

EXE03
a) aqui não deu nenhum erro, mas pelo que entendi precisamos mapear o retorno para controlar o formato que queremos receber nossos dados.

*/

import axios from "axios";

const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labenews`;

type User = {
	id: string;
	name: string;
	email: string;
};

const main: () => Promise<User[]> = async (): Promise<User[]> => {
	try {
		const users = await axios.get(`${baseUrl}/subscribers/all`);
		/* console.log(
			users.data.map((item: any) => {
				return item.name;
			})
		); */
		return users.data.map((res: any) => {
			return {
				id: res.id,
				name: res.name,
				email: res.email,
			};
		});
	} catch (error) {
		console.log(error);
		return [];
	}
};

main();

/* 
EXE04
a)
*/
/* 
const body = {
	title: "Jeff Bezos manda bejus",
	content:
		"Jeff Bezoz acaba de ganhar 13bi em um dia, e te mandou um beijo no ombro",
	date: Date.now,
};
 */
const createNews = async (): Promise<void> => {
	await axios.put(`${baseUrl}/news`, {
		title: "Jeff Bezos manda bejus",
		content:
			"Jeff Bezoz acaba de ganhar 13bi em um dia, e te mandou um beijo no ombro",
		date: 1590522289000,
	});

	//	const users = await axios.get(`${baseUrl}/news/all`);

	//	console.log(users.data);
};

createNews();
