import React  from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    width:80%;
    border-width: 1px;
    padding: 5px;
    
    background-color: ${(props) => props.addToCart ? 'black' : 'gray'};
    color: ${(props) => props.addToCart ? 'white' : 'white'};

    :hover {
        background-color: white;
        color: black;
    }

    float:left;

`

const CustomAddToCartButton = (props) => {

    var addToCartButton = (
        <div>
            <StyledButton disabled> MAKE A SELECTION </StyledButton>
        </div>
    )

    if (props.canAddToCart) {
        addToCartButton = (
            <div>
                <StyledButton addToCart> ADD TO CART </StyledButton>
            </div>
        )    
    }

    return (
        <div>
            {addToCartButton}
        </div>
    )
}

export default CustomAddToCartButton;