import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  it("retorna true para [1,2,1]", () => {
    const result = checaItensDuplicados([1, 2, 1]);
    expect(result).toEqual(true);
  });

  it("retorna false para [1,2,3,4]", () => {
    const result = checaItensDuplicados([1, 2, 3, 4]);
    expect(result).toBe(false);
  });

  it("retorna true para [2,2,4,4,6,6,]", () => {
    const result = checaItensDuplicados([2, 2, 4, 4, 6, 6]);
    expect(result).toEqual(true);
  });
});
