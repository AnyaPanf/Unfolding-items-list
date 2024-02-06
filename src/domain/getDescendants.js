export const getDescendants = (id, categoriesDict) => {
  return categoriesDict[id].children.flatMap((childId) => [
    childId,
    ...getDescendants(childId, categoriesDict),
  ]);
}