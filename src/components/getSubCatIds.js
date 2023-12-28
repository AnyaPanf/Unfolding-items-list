

export const getSubCatIds = (data) => {
    const id2product = {}
    for (const {id, ...product} of data) {
        id2product[id] = {
            ...product,
            children: [],
        };
    }
    // Object.fromEntries

    for (const { id, parentId } of data) {
        if (parentId !== undefined) {
            id2product[parentId].children.push(String(id))
        }
    }

    return id2product
}


// const ids = {
//   "12669": {
//     "children": ["12669", ...],
//     "name": "Электроника",
//     "url": "/moskva/bytovaya_elektronika?geoCoords=55.755814%2C37.617635&presentationType=serp"
//   },
//   "12723": {
//     "children": ["12723", ...],
//     "parentId": 12669,
//     "name": "Телефоны",
//     "url": "/moskva/telefony?geoCoords=55.755814%2C37.617635&presentationType=serp"
//   },
//   "29366": {
//     "children": [],
//     "parentId": 12723,
//     "name": "Мобильные телефоны",
//     "url": "/moskva/telefony/mobile-ASgBAgICAUSwwQ2I_Dc?geoCoords=55.755814%2C37.617635&presentationType=serp"
//   },
// }