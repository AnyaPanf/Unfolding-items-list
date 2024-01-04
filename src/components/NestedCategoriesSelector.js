import { useState } from "react"
import { MenuSubItem } from "./MenuSubItem"
import { getTopIds } from "./getTopIds"
import { getSubCatIds } from "./getSubCatIds"

export const NestedCategoriesSelector = ({ data, selectedIds, setSelectedIds }) => {
    const categoriesDict = getSubCatIds(data)
    const topLevelIds = getTopIds(data)
    console.log(categoriesDict);

    const toggleId = (productId) => {
        console.log(categoriesDict[productId].children);
        if (selectedIds.includes(productId)) {
            setSelectedIds(prev => prev.filter((id) => id !== productId))
        } else if (categoriesDict[productId].children !== undefined) {
            setSelectedIds(prev => [...prev, productId, categoriesDict[productId].children])
        } else {
            setSelectedIds(prev => [...prev, productId])
        }
        // setSelectedIds(prev => selectedIds.includes(productId) 
        // ? prev.filter((id) => id !== productId) 
        // : [...prev, productId])
        // categoriesDict.productId.children ? [...prev, categoriesDict.productId.children]
    }

    return (
        <MenuSubItem ids={topLevelIds} id2category={categoriesDict} selectedIds={selectedIds} toggleId={toggleId} />
    )
}

