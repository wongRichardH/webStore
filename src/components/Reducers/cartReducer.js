import Item0 from '../../assets/Item0.png';
import Item1 from '../../assets/Item1.png';
import Item2 from '../../assets/Item2.png';
import Item3 from '../../assets/Item3.png';
import Item4 from '../../assets/Item4.png';
import Item5 from '../../assets/Item5.png';

const initState = {
    items: [
        {id:1,
            title:'Winter Body', 
            desc: "Winter Body Description", 
            price:110, 
            img: Item0},

        {id:2,
            title:'Adidas',
             desc: "Adidas Adidas Adidas Adidas Adidas Adidas Adidas", 
             price:80,
             img: Item1},

        {id:3,
            title:'Vans', 
            desc: "Vans Vans Vans Vans Vans Vans Vans Vans Vans Vans Vans Vans.",
            price:120,
            img: Item2},

        {id:4,
            title:'White', 
            desc: "WhiteWhiteWhiteWhiteWhiteWhiteWhiteWhite", 
            price:260,
            img:Item3},

        {id:5,
            title:'Cropped-Shoes', 
            desc: "Cropped-ShoesCropped-ShoesCropped-ShoesCropped-ShoesCropped-Shoes", 
            price:160,
            img: Item4},

        {id:6,
            title:'Blues', 
            desc: "BluesBluesBluesBluesBlues",
            price:90,
            img: Item5}
    ],
    addedItems:[],
    total: 0

}

const cartReducer= (state = initState, action)=>{
    return state;
}
export default cartReducer;