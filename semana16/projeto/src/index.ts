import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";

dotenv.config();
const app = express();
app.use(express.json());

const connection = knex({
	client: "mysql",
	connection: {
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT || "3306"),
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
	},
});

async function showAllUsers(): Promise<any> {
	const result = await connection.raw(`
		SELECT * FROM TodoListUser
    `);

	console.log(result[0]);
	return result[0];
}

//showAllUsers();

async function addUser(
	id: string,
	name: string,
	nickname: string,
	email: string
): Promise<any> {
	try {
		const result = await connection.raw(`
        INSERT INTO TodoListUser (id, name, nickname, email)
        VALUES(
            "${id}",
            "${name}",
            "${nickname}",
            "${email}"
        );
	`);
		console.log("Sucesso");
		return result[0];
	} catch (error) {
		console.log(`Erro na inserção do user: ${error}`);
	}
}

//addUser("002", "Clark Kent", "Sups", "superman@justiceleague.com");

app.get("/superusers", async (req: Request, res: Response) => {
	try {
		const superusers = await showAllUsers();

		res.status(200).send(superusers);
	} catch (error) {
		res.status(400).send({ message: error.message });
	}
});

// Sobre o server
const server = app.listen(process.env.PORT || 3000, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost: ${address.port}`);
	} else {
		console.log(`Failure upon starting server`);
	}
});
