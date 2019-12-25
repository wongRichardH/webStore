import React  from 'react'
import styled from 'styled-components';

const DescriptionWrapper = styled.div`
    text-align: left;

    display:block;

    font-size: 16px;
    line-height: 23.8px;
    font-family: helvetica-neue-light;
    font-weight: 100;
    font-style: normal;

    margin-top: 10px;
    margin-bottom: 10px;
`;

const ItemDescription = (props) => {
    return (
        <div>
            <DescriptionWrapper>
                {props.desc}

            </DescriptionWrapper>
        </div>
    )
}

export default ItemDescription;