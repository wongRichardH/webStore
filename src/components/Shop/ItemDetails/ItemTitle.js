import React  from 'react'
import styled from 'styled-components';

const Title = styled.h1`
    letter-spacing: 0.125em;
    font-size: 1.625em;
    /* margin-bottom: 1.125em; */
    text-transform: uppercase;
    font-weight: 400;
`;

const ItemTitle = (props) => {

    console.log(props)

    return (
        // <Title>{props.title}</Title>

        <div>
            <Title> {props.title} </Title>
        </div>

        // <div> Active Thumbnail Window </div>
    )
}

export default ItemTitle;