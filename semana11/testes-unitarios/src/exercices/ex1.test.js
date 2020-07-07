import { checaBissexto } from "./ex1";

describe("Checa Bissexto", () => {
  it("retorna true para '2000'", () => {
    const result = checaBissexto(2000);
    expect(result).toEqual(true);
  });

  it("retorna true para '1996'", () => {
    const result = checaBissexto(1996);
    expect(result).toBe(true);
  });
});
