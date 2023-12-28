import arrow from "./arrow.png"

export const MenuSubItem = ({ topLevelItems, data, name, id }) => {

    return (
        <ul className="menu">
            {topLevelItems.map((item) => {
                const { name, id } = item;
                const children = data.filter((subItem) => (subItem.parentId === id))

                return (
                    <li className="menu__item">
                        <img src={arrow} className="menu__arrow" />
                        <input type="checkbox" id={id}></input>
                        <label for={id} className="menu__text">{name}</label>
                        <ul>
                            {children.map((subItem) => (
                                <MenuSubItem id={subItem.id} name={subItem.name} />
                            ))}
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}
