import {
    isMobile
  } from "react-device-detect";

import Item0 from '../../assets/Item0.png';
import Item1 from '../../assets/Item1.png';
import Item2 from '../../assets/Item2.png';
import Item3 from '../../assets/Item3.png';
import Item4 from '../../assets/Item4.png';
import Item5 from '../../assets/Item5.png';

import ytg1 from '../../assets/ytg1.jpg';
import ytg2 from '../../assets/ytg2.jpg';
import ytg3 from '../../assets/ytg3.jpeg';
import ytg4 from '../../assets/ytg4.jpeg';
import ytg5 from '../../assets/ytg5.jpg';
import ytg6 from '../../assets/ytg6.jpg';

const initState = {
    items: [
        {id:1,
            title:'Winter Body', 
            desc: "Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description Winter Body Description", 
            price:110.00, 
            img: [ytg1, ytg2, ytg3, ytg4, ytg5, ytg6]
        },

        {id:2,
            title:'Adidas',
             desc: "Adidas Adidas Adidas Adidas Adidas Adidas Adidas", 
             price:80.00,
             img: [Item1]},

        {id:3,
            title:'Vans', 
            desc: "Vans Vans Vans Vans Vans Vans Vans Vans Vans Vans Vans Vans.",
            price:120.00,
            img: [Item2]},

        {id:4,
            title:'White', 
            desc: "WhiteWhiteWhiteWhiteWhiteWhiteWhiteWhite", 
            price:260.00,
            img: [Item3]},

        {id:5,
            title:'Cropped-Shoes', 
            desc: "Cropped-ShoesCropped-ShoesCropped-ShoesCropped-ShoesCropped-Shoes", 
            price:160.00,
            img: [Item4]},

        {id:6,
            title:'Blues', 
            desc: "BluesBluesBluesBluesBlues",
            price:90.00,
            img: [Item5]}
    ],
    addedItems: [],
    total: 0,
    isOnMobileDevice: (isMobile) == true ? true : false,

    selectedSize: "0"
}

const cartReducer = (state = initState, action) => {

    switch (action.type) {

        case 'ADD_TO_CART_ACTION':
            
            let addedItem = state.items.find(item => item.id === action.id)
            let existed_item = state.addedItems.find(item => action.id === item.id)


            console.log("New added item is:")
            console.log(addedItem)
            console.log("Existing item was:")
            console.log(existed_item)

            // console.log("PREVIOUS CART ITEMS:")
            // console.log(state.addedItems)

            console.log("PREVIOUS STATE") 
            console.log(state)

            if (addedItem) {

                if (existed_item) {
                    console.log("ITEM PREVIOUSLY EXISTED IN CART")

                    //If item exists, check if user is adding same size of product
                    if (existed_item) {

                        console.log(`existingItem: ${existed_item.selectedSize}, state.selectedSize: ${state.selectedSize}`)

                        if (existed_item.selectedSize === state.selectedSize) { //Same Item, Same Size

                            console.log("FOUND SAME SIZE")

                            addedItem.quantity += 1
                            let newTotal = (state.total + addedItem.price)

                            return {
                                ...state,
                                total : newTotal
                            }

                        } else { //Same Item, Different Size 

                            let newItem = Object.assign({}, addedItem)
                            newItem.quantity = 1
                            newItem.selectedSize = state.selectedSize

                            let newTotal = (state.total + newItem.price)

                            return {
                                ...state,
                                addedItems: [...state.addedItems, newItem],
                                total: newTotal
                            }
                        }
                    }

                } else {//New Item
                    console.log("ADDING COMPLETELY NEW ITEM TO CART")

                    addedItem.quantity = 1;
                    addedItem.selectedSize = state.selectedSize

                    let newTotal = (state.total + addedItem.price)
            
                    return {
                        ...state,
                        addedItems: [...state.addedItems, addedItem],
                        total : newTotal
                    }
                }

            } else {
                console.log("FAIL: ITEM NOT FOUND")
            }


        case 'SELECT_SIZE_ACTION':

            return {
                ...state,
                selectedSize: action.id
            }
    }

    return state;
}

export default cartReducer;