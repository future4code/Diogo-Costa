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

/* const main: () => Promise<User[]> = async (): Promise<User[]> => {
	try {
		const users = await axios.get(`${baseUrl}/subscribers/all`);
		console.log(
			users.data.map((item: any) => {
				return item.name;
			})
		);
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

main(); */

/* 
EXE04
a) Estou perdido nas definições
*/

/* const createNews = async (): Promise<void> => {
	await axios.put(`${baseUrl}/news`, {
		title: "Desfile de trios elétricos",
		content:
			"Hoje quinta feira 30/07 estamos tendo desfiles de trios elétricos na rua onde mora o professor João",
		date: Date.now(),
	});

	const users = await axios.get(`${baseUrl}/news/all`);

	console.log(users.data);
};

createNews(); */

/* 
EXE5
a) Pode dar problema que não lembro qual, mas é recomendado o uso de for() para esses casos.
*/

const sendNotifications = async (): Promise<void> => {
	try {
		const users = await axios.get(`${baseUrl}/subscribers/all`);

		for (let user of users.data) {
			await axios.post(`${baseUrl}/notifications/send`, {
				subscriberId: user.id,
				message: "Ta bom por aqui hoje",
			});
		}
		console.log("All notifications sent!");
	} catch (error) {
		console.log(`Deu ruim: ${error.message}`);
	}
};

sendNotifications();
