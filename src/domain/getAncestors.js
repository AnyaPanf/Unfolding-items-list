export const getAncestors = (id, categoriesDict, selectedIds) => {
    const { parentId } = categoriesDict[id]
    if (parentId === null) {
        return [];
    }

    const parentsChildren = categoriesDict[parentId].children;
    const siblings = parentsChildren.filter((sibling) => sibling !== id)
    const allSiblingsSelected = siblings.every((id) => selectedIds.includes(id))

    if (!allSiblingsSelected) {
        return []
    }

    return [parentId, ...getAncestors(parentId, categoriesDict, selectedIds)];
}
