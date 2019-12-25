import React  from 'react'
import styled from 'styled-components';

const Title = styled.h1`
    text-align: left;
    display: block;

    font-family: helvetica-neue-regular;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1px;
    font-size:36px;
    line-height:43.2px;
    box-sizing:border-box;
`;

const ItemTitle = (props) => {

    console.log(props)

    return (

        <div>
            <div>
                <Title> {props.title} </Title>
            </div>
        </div>

    )
}

export default ItemTitle;