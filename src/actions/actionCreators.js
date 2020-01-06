export const ADD_TO_CART_ACTION  = (id) => {
    return {
        type: 'ADD_TO_CART_ACTION',
        id: id
    }
}

export const SELECT_SIZE_ACTION = (id) => {

    console.log("SELECTING SIZE OF")
    console.log(id)

    return {        
        type: 'SELECT_SIZE_ACTION',
        id: id
    }
}