import React  from 'react'
import styled from 'styled-components';

const PriceWrapper = styled.div`
    float:left;

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