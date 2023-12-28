

export const getTopIds = (data) => {
    return  data.filter((item) => {
        return item.parentId === undefined
    })


}