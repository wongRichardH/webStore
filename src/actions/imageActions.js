export const ADD_TO_CART_ACTION  = (id) => {

    console.log("ADDED TO CART")
    console.log(id)

    return {
        type: 'ADD_TO_CART',
        id: id
    }
}