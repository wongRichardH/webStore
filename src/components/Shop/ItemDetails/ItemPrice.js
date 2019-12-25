import React  from 'react'
import styled from 'styled-components';

const PriceWrapper = styled.div`
    // float:left;

    text-align: left;
    font-size: 19.6px;
    font-weight: 700;

`;

const ItemPrice = (props) => {

    console.log(55)

    return (

        <div>
            <PriceWrapper>

                {/* Convert to local currency later */}
                
                ${props.price}
            </PriceWrapper>
        </div>

        // <div> Active Thumbnail Window </div>
    )
}

export default ItemPrice;