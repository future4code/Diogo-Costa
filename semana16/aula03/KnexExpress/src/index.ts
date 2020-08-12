import knex from "knex";

const connection = knex({
	client: "mysql",
	connection: {
		host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
		port: 3306,
		user: "diogo_costa",
		password: "v1v#v9mnEES#EKe%HEpj",
		database: "mello_diogo_costa",
	},
});

async function createPokemonTable(): Promise<void> {
	try {
		await connection.raw(`
            CREATE TABLE Pokemons (
                id INT PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL,
                type VARCHAR(255) NOT NULL
            )
        `);
		console.log("Sucesso");
	} catch (error) {
		console.log(`Deu erro na criação da tabela: ${error}`);
	}
}

async function createNewPokemon(
	id: number,
	name: string,
	type: string
): Promise<void> {
	try {
		await connection.raw(`
            INSERT INTO Pokemons VALUES (
                ${id},
                "${name}",
                "${type}"
                )                
                `);
		console.log("Sucesso ao criar novo pokemon");
	} catch (error) {
		console.log(`Deu erro na criação de novo pokemon ${error}`);
	}
}

async function getAllPokemon(): Promise<void> {
	try {
		const response = await connection.raw(`
            SELECT * FROM Pokemons
        `);
		console.log(response[0]);
	} catch (error) {
		console.log(`Erro ao selecionar todos pokemons ${error}`);
	}
}

//createPokemonTable();

//createNewPokemon(2, "Pikachu", "Electric");

//getAllPokemon();

// Usando Query Builder
async function createNewPokemonBuilder(
	id: number,
	name: string,
	type: string
): Promise<void> {
	try {
		await connection.insert({ id, name, type }).into("Pokemons");

		console.log("Sucesso ao criar novo pokemon");
	} catch (error) {
		console.log(`Deu erro na criação de novo pokemon ${error}`);
	}
}

//?-------------------------------------

