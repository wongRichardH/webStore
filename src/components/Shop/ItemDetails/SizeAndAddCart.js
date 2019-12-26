import React, {Component}  from 'react'

import CustomDropdownButton from '../../../Elements/CustomDropdownButton';
import CustomAddToCartButton from '../../../Elements/CustomAddToCartButton';

class SizeAndAddCart extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <CustomDropdownButton/>
                <CustomAddToCartButton canAddToCart={true} />
            </div>

        )
    }
}

export default SizeAndAddCart;