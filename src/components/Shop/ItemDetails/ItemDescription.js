import React  from 'react'
import styled from 'styled-components';

const DescriptionWrapper = styled.div`
    float:left;

`;

const ItemDescription = (props) => {

    console.log(55)

    return (

        <div>
            <DescriptionWrapper>
                {props.desc}

            </DescriptionWrapper>
        </div>

        // <div> Active Thumbnail Window </div>
    )
}

export default ItemDescription;