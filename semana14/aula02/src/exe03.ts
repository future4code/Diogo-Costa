import * as fs from "fs";

const tasksImport: string = fs.readFileSync("./tarefas.txt").toString();

const tasks: string = process.argv[2];
const newTask: string = process.argv[3];

//TODO testar fazer usando ...

try {
	fs.appendFileSync(tasks, "\n" + newTask);
	console.log("Tarefa adicionada");
} catch (error) {
	console.log(error);
}
