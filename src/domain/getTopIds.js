export const getTopIds = (data) => {
    return data.filter((subItem) => subItem.parentId === undefined).map((item) => String(item.id))
}