import { useState } from "react"
import { MenuSubItem } from "./MenuSubItem"
import { getTopIds } from "./getTopIds"
export const NestedCategoriesSelector = ({ data }) => {
    const [isChecked, setIsChecked] = useState(false)

    const topLevelItems = getTopIds(data)
    console.log(topLevelItems);

    const handleClick = (e) => {
        setIsChecked(!isChecked)
    }

    return (
        <MenuSubItem data={data} topLevelItems={topLevelItems}/>
    )
}

