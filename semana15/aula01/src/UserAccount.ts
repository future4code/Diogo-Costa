class UserAccount {
	private cpf: string;
	private name: string;
	private age: number;
	private balance: number = 0;
	//private transactions: Transaction[];

	constructor(cpf: string, name: string, age: number) {
		console.log("Chamando o construtor da classe UserAccount");
		this.cpf = cpf;
		this.name = name;
		this.age = age;
	}

	public getCPF(): string {
		//coloquei pra eu entender
		console.log(this.cpf);
		return this.cpf;
	}

	public getName(): string {
		return this.name;
	}

	public getAge(): number {
		return this.age;
	}

	public getBalance(): number {
		return this.balance;
	}

	public addBalance(value: number): void {
		console.log("Saldo atualizado com sucesso");
	}
}

// Minha instância
const updatedUserAccount: UserAccount = new UserAccount(
	"123123123",
	"Cabral",
	24
);

//console.log(updatedUserAccount.getCPF());
//updatedUserAccount.getCPF();

console.log(updatedUserAccount.getBalance());
