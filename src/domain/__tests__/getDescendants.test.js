import { getDescendants } from "../getDescendants"
import { ids } from "./ids";

describe("getDescendants", () => {
  it("Category is the root of tree", () => {
    const expectResult = ["12", "13", "14", "1131", "1132"]
    const actualResult = getDescendants("1", ids);

    expect(actualResult.sort()).toEqual(expectResult.sort());
  });

  it("Children of category are the only descendants", () => {
    const expectResult = ["1131", "1132"];
    const actualResult = getDescendants("13", ids);

    expect(actualResult.sort()).toEqual(expectResult.sort());
  });

  it("Category has no children", () => {
    const actualResult = getDescendants("1131", ids);
    expect(actualResult).toEqual([]);
  });
})