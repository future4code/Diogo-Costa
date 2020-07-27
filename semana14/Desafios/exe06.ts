enum Idades {
	PRE_HISTORIA = "Pré-história",
	IDADE_ANTIGA = "Idade Antiga",
	IDADE_MEDIA = "Idade Média",
	IDADE_MODERNA = "Idade Moderna",
}

const identificadorDeIDade = (ano: number, ACDC: string = "DC") => {
	if (ACDC === "DC") {
		if (ano >= 1453) {
			return Idades.IDADE_MODERNA;
		} else if (ano >= 476 && ano < 1453) {
			return Idades.IDADE_MEDIA;
		} else if (ano < 476) {
			return Idades.IDADE_ANTIGA;
		}
	} else if (ACDC === "AC") {
		return ano <= 4000 ? Idades.IDADE_ANTIGA : Idades.PRE_HISTORIA;
	}
};

console.log(identificadorDeIDade(1300));
