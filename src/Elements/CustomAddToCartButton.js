import React  from 'react'
import styled from 'styled-components';
// import { Left } from 'react-bootstrap/lib/Media';
import { connect } from 'react-redux';

const StyledButton = styled.button`
    width: 100%;
    // max-width: 295px;
    max-width: ${(props) => props.isOnMobileDevice == true ? "100%" : "295px"};
    height: 48px;
    border-width: 1px;
    padding: 5px;
    
    background-color: ${(props) => props.addToCart ? 'black' : 'gray'};
    color: ${(props) => props.addToCart ? 'white' : 'white'};

    :hover {
        background-color: white;
        color: black;
    }

    float: ${(props) => props.isOnMobileDevice == true ? "center" : "left"}
`

const CustomAddToCartButton = (props) => {

    var addToCartButton = (
        <div>
            <StyledButton disabled isOnMobileDevice={props.isOnMobileDevice}> MAKE A SELECTION </StyledButton>
        </div>
    )

    if (props.canAddToCart) {
        addToCartButton = (
            <div>
                <StyledButton addToCart isOnMobileDevice={props.isOnMobileDevice}> ADD TO CART </StyledButton>
            </div>
        )    
    }

    return (
        <div>
            {addToCartButton}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        //Check for Mobile
        isOnMobileDevice: state.isOnMobileDevice == true ? true : false
    }
}

export default connect(mapStateToProps)(CustomAddToCartButton);

// export default CustomAddToCartButton;