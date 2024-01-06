// export const getDescendants = (id, categoriesDict) => {
//     const descendants = []

//     categoriesDict[id].children.forEach((childId) => {
//         descendants.push(childId) 
//         descendants.push(...getDescendants(childId, categoriesDict))
//     })

//     return descendants
// }

export const getDescendants = (id, categoriesDict) => {
  return categoriesDict[id].children.flatMap((childId) => [
      childId,
      ...getDescendants(childId, categoriesDict),
  ]);
}