import { bubbleSort } from "./ex4";

describe("sort an array of numbers", () => {
  it("Return true for '[1,2,3,4,5]'", () => {
    const result = bubbleSort([5, 4, 3, 2, 1]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
