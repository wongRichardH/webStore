export const SET_ACTIVE_IMAGE_ACTION = (id) => {

    console.log("ACTION WAS FIRED")

    return {
        type: 'SET_ACTIVE_IMAGE',
        id: id
    }
}

// export function setImage(id) {
//     return {
//         type: 'SET_ACTIVE_IMAGE',
//         id: id
//     }
// }