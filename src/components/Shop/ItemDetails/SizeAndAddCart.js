import React, {Component}  from 'react'
import CustomDropdownButton from '../../../Elements/CustomDropdownButton';
import CustomAddToCartButton from '../../../Elements/CustomAddToCartButton';


const SizeAndAddCart = (props) => {

    console.log("SIZEANDADDCART PROPS")
    console.log(props)

    return (
        <div>
            <CustomDropdownButton/>

            <CustomAddToCartButton 
            canAddToCart={true} 
            // handleClick = {this.addToCart}/>
            handleClick = {props.addToCart}/>
        </div>

    )
    
}

export default SizeAndAddCart;