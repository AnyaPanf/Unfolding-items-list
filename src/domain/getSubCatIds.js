
export const getSubCatIds = (data) => {
    const id2product = {}
    for (const { id, parentId, ...product } of data) {
        id2product[id] = {
            ...product,
            parentId: parentId === undefined ? null : String(parentId),
            children: [],
        };
    }

    for (const { id, parentId } of data) {
        if (parentId !== undefined) {
            id2product[parentId].children.push(String(id))
        }
    }
    return id2product
}