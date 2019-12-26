export const SET_ACTIVE_IMAGE_ACTION = (id) => {

    console.log("ACTION WAS FIRED")

    return {
        type: 'SET_ACTIVE_IMAGE',
        id: id
    }
}

export const ADD_TO_CART_ACTION = (id) => {

    console.log("ADDED TO CART")

    return {
        type: 'ADD_TO_CART',
        id: id
    }
}

// export function setImage(id) {
//     return {
//         type: 'SET_ACTIVE_IMAGE',
//         id: id
//     }
// }