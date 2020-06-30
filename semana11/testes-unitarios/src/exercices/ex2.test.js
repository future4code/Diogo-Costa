import { checaPalindromo } from "./ex2";

describe("Checa Palindromo", () => {
  it("checa palindromo 'arara'", () => {
    const result = checaPalindromo("arara");
    expect(result).toEqual(true);
  });
});
