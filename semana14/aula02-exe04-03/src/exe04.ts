import * as fs from "fs";

const tasks: string = process.argv[2];
const newTask: string = process.argv[3];

try {
	fs.appendFileSync(tasks, "\n" + newTask);
	console.log(`Nova tarefa ${newTask} adicionada`);
} catch (error) {
	console.log(error);
}
