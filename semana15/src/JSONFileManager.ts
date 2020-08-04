import * as fs from "fs";

const dataJson: string = fs.readFileSync("./data.json").toString();
//console.log(dataJson);

class JSONFileManager {
	private fileName: string;

	constructor(fileName: string) {
		this.fileName = fileName;
	}

	public getObjectFromFile(): any {
		try {
			const fileData: string = fs.readFileSync(this.fileName).toString();
			return JSON.parse(fileData);
		} catch (error) {
			console.log("Deu Erro Aqui" + error);
			return [];
		}
	}

	public writeObjectFromFile(data: any): void {
		try {
			const dataToString: string = JSON.stringify(data);
			fs.appendFileSync("./data.json", dataToString);
		} catch (error) {
			console.log(`Deu erro no writeObject ${error}`);
		}
	}
}

const createUser: JSONFileManager = new JSONFileManager("não entendi isso");

console.log(createUser.writeObjectFromFile(dataJson));
