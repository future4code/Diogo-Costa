const DNA = "ATCG";

const dnaToRna = (dna: string) => {
	let RNA = dna.replace(/A/g, "U");
	RNA = dna.replace(/T/g, "A");
	return RNA;
};

console.log(dnaToRna(DNA));
// UAGC
