import { useState } from "react"
import { MenuSubItem } from "./MenuSubItem"
import { getTopIds } from "./getTopIds"
import { getSubCatIds } from "./getSubCatIds"
import { getDescendants } from "../getDescendants"

// getDescendants(id, categoriesDict)
// getAncestors()


// react testing library

//  тестируем NestedCategoriesSelector
//  придумать пример data
//  A
//    - B
//    - C
//  D

// 1. изначально рисуется 2 чекбокса
// 2. кликаете на кнопку
// 3. рисуется 4 чекбокса

export const NestedCategoriesSelector = ({ data, selectedIds, setSelectedIds }) => {
    const categoriesDict = getSubCatIds(data)
    const topLevelIds = getTopIds(data)
    console.log(categoriesDict);

    const toggleId = (productId) => {
        const descendants = getDescendants(productId, categoriesDict)
        // getAncestors
        if (selectedIds.includes(productId)) {
            setSelectedIds(selectedIds.filter((id) => {
                return id !== productId 
            } ))

        } else {
            setSelectedIds(Array.from(new Set([...selectedIds, productId, ...descendants])))
        }

        // setSelectedIds(selectedIds.includes(productId)
        //     ? selectedIds.filter((id) => id !== productId)
        //     : [...prev, productId])
        // categoriesDict.productId.children ? [...prev, categoriesDict.productId.children]
    }

    return (
        <MenuSubItem ids={topLevelIds} id2category={categoriesDict} selectedIds={selectedIds} toggleId={toggleId} />
    )
}

