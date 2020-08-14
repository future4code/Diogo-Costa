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
		host: process.env.DB_host,
		port: 3306,
		user: process.env.DB_user,
		password: process.env.DB_password,
		database: process.env.DB_database,
	},
});

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost:${address.port}`);
	} else {
		console.error(`Failure upon starting server.`);
	}
});
