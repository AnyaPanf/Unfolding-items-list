import { getAncestors } from "../getAncestors";
import { ids } from "./ids";

const selectedIds = ["1132"]
describe("getAncestors", () => {
    it("A descendant of 13 is selected", () => {
        const selectedIds = ["1132"]
        const expectResult = ["13"]
        const actualResult = getAncestors("1131", ids, selectedIds);
        expect(actualResult).toEqual(expectResult);
    });
    it("Ancestors selected", () => {
        const selectedIds = ["1132", "14", "12"]
        const expectResult = ["13", "1"]
        const actualResult = getAncestors("1131", ids, selectedIds);
        expect(actualResult).toEqual(expectResult);
    })
})