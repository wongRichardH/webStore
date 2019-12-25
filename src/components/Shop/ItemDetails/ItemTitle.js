import React  from 'react'
import styled from 'styled-components';

const Title = styled.h1`
    text-align: left;

    font-style: normal;
    font-family: helvetica-neue-regular;
    font-size: 2.57143em;
    font-weight: 700;

    display: block;

    line-height: 1.2;

    letter-spacing: 1px;
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