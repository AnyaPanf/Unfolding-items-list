//            1
//      /     |     \
//     12     13     14
//          /    \
//        1131  1132 
//
import { getDescendants } from "../getDescendants"


describe("getDescendants", () => {
  const ids = {
    "1": {
      "children": ["12", "13", "14"],
    },
    "12": {
      "children": [],
      "parentId": "1",
    },
    "13": {
      "children": ["1131", "1132"],
      "parentId": "13",
    },
    "14": {
      "children": [],
      "parentId": "1",
    },
    "1131": {
      "children": [],
      "parentId": "13",
    },
    "1132": {
      "children": [],
      "parentId": "13"
    }
  };
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