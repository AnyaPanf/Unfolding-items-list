import { useState } from "react"
import { MenuSubItem } from "./MenuSubItem"
import { getTopIds } from "../domain/getTopIds"
import { getSubCatIds } from "../domain/getSubCatIds"
import { getDescendants } from "../domain/getDescendants"
import { getAncestors } from "../domain/getAncestors"

export const NestedCategoriesSelector = ({ data, selectedIds, setSelectedIds }) => {
    const [allDescendantsSelected, setAllDescendantsSelected] = useState([])
    const categoriesDict = getSubCatIds(data)
    const topLevelIds = getTopIds(data)

    const toggleId = (productId) => {
        const descendants = getDescendants(productId, categoriesDict)
        const ancestors = getAncestors(productId, categoriesDict, selectedIds)

        if (selectedIds.includes(productId)) {
            setSelectedIds(prev => prev
                .filter((id) => !descendants.includes(id))
                .filter((id) => !ancestors.includes(id))
                .filter((id) => id !== productId))
        } else {
            setSelectedIds(Array.from(new Set([...selectedIds, productId, ...descendants, ...ancestors])))
        }
    }

    return (
        <MenuSubItem ids={topLevelIds} id2category={categoriesDict} selectedIds={selectedIds} toggleId={toggleId} />
    )
};