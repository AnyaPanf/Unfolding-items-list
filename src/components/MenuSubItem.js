import arrow from "./arrow.svg"
import { useState } from "react"
import MenuSubitemCss from './MenuSubItem.module.css'

export const MenuSubItem = ({ ids, id2category, selectedIds, toggleId }) => {
    const [unfold, setUnfold] = useState([])

    const handleClick = (productId) => {
        setUnfold(prev => prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId])
    }

    return (
        <ul className={MenuSubitemCss.menu}>
            {ids.map((id) => {
                const { children, name } = id2category[id]

                return (
                    <li className={MenuSubitemCss.menuItem}>
                        {children.length > 0 && (
                            <div className={MenuSubitemCss.line}>
                                <button className={MenuSubitemCss.btn}
                                    onClick={() => handleClick(id)}>
                                    <img src={arrow}
                                        className={unfold.includes(id)
                                            ? `${MenuSubitemCss.menuArrowTurned} ${MenuSubitemCss.selected}`
                                            : `${MenuSubitemCss.menuArrow}`} />
                                </button>
                                <input type="checkbox" id={id} checked={selectedIds.includes(id)} onChange={() => toggleId(id)}></input>
                                <label for={id} className={MenuSubitemCss.menuText}>{name}</label>
                            </div>)}
                        {children.length > 0 && unfold.includes(id) && (
                            <MenuSubItem ids={children} id2category={id2category} selectedIds={selectedIds} toggleId={toggleId} />
                        )}
                    </li>
                )
            })}
        </ul>
    )
};