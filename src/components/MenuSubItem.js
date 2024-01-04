import arrow from "./arrow.png"
import { useState } from "react"

export const MenuSubItem = ({ ids, id2category, selectedIds, toggleId }) => {
    const [unfold, setUnfold] = useState([])

    

    const handleClick = (productId) => {
        setUnfold(prev => prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId])
    }

    return (
        <ul className="menu">
            {ids.map((id) => {
                const { children, name } = id2category[id]

                return (
                    <li className="menu__item">
                        {children.length > 0 && (
                            <img src={arrow} className="menu__arrow" onClick={() => handleClick(id)} />
                        )}
                        <input type="checkbox" id={id} checked={selectedIds.includes(id)} onChange={() => toggleId(id)}></input>
                        <label for={id} className="menu__text">{name}</label>
                        {children.length > 0 && unfold.includes(id) && (
                            <MenuSubItem ids={children} id2category={id2category}  selectedIds={selectedIds}  toggleId={ toggleId}/>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}
