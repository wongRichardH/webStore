import React  from 'react'
import styled from 'styled-components';

const Title = styled.h3`
    float: left;
    font-family: helvetica-neue-regular;
    text-decoration: underline;
    // font-size: 1.78571em;
    font-size: 24.9999px;
    box-sizing: border-box;
    line-height: 1.4;
    font-weight: 700;
`;

const Description = styled.div`
    float:left;

    display:block;

    font-size: 14px;
    line-height: 23.8px;
    // font-family: helvetica-neue-regular;
    font-family: helvetica-neue-light;
    font-weight: 100;
    font-style: normal;

    
    // color: #000;
    -webkit-font-smoothing: antialiased;
`;

const TitleDescriptionBlock = (props) => {

    return (
        <div>
            <div>
                <Title>
                    Composition
                </Title>
            </div>

            <div>
                <Description>
                - Constructed from a carefully selected luxurious, smooth, and super soft and plushy fur. This jacket is the perfect piece for layering with a sense of style and keeping you warm in the colder season. This piece combines shape, texture and color with a contemporary approach similar to that of a denim jacket. It's cut in a relaxed fit and detailed with pearly horn buttons. Built with two chest pockets, slit pockets, and detailed with stitching lines to create a visual effect of a blouson jacket. Wear this at your own risk, you might never want to take it off.
                </Description>
            </div>
        
        </div>
    )
}

export default TitleDescriptionBlock;