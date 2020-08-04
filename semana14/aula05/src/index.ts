import * as fs from "fs";
import moment from "moment";

type Accounts = {
	name: string;
	CFP: number;
	birth: moment.Moment;
};

type extract = {
	balance: 0;
	description: "";
};

const newAccountName: string = process.argv[2];
const newAccountCPF: number = Number(process.argv[3]);
const newAccountBirth: string = process.argv[4];

const accountList: Accounts[] = [];

const createAccount: any = (
	newAccountName: string,
	newAccountCPF: number,
	newAccountBirth: string
): void => {
	try {
		const numberCPF = Number(newAccountCPF);
		const numberBirth = moment(newAccountBirth, "DD/MM/YYYY");

		accountList.push({
			name: newAccountName,
			CFP: numberCPF,
			birth: numberBirth,
		});
		const updatedAccountList = JSON.stringify(accountList, null, 2);
		fs.writeFileSync("./data.json", updatedAccountList);
	} catch (error) {
		console.log(error);
	}
};

createAccount(newAccountName, newAccountCPF, newAccountBirth);
