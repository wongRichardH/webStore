import React, {Component}  from 'react'
import CustomDropdownButton from '../../../Elements/CustomDropdownButton';
import CustomAddToCartButton from '../../../Elements/CustomAddToCartButton';

const sizes = {
    NO_SELECTION: "0",
    SMALL: "1",
    MEDIUM: "2",
    LARGE: "3"
}

class SizeAndAddCart extends Component {

    constructor(props) {
        super(props);
    }
    
    handleSelectionChange = (e) => {
        console.log(e)

        if (e != sizes.NO_SELECTION) {
            this.canAddToCart = true
        } else {
            this.propscanAddToCart = false
        }

        this.forceUpdate();
    }

    render() {

        var canAddToCart = false;

        return (
            <div>
                <CustomDropdownButton handleClick={this.handleSelectionChange} />
    
                <CustomAddToCartButton 
                canAddToCart = {this.canAddToCart} 
                handleClick = {this.props.addToCart}/>
            </div>
    
        )
    }
}

export default SizeAndAddCart;