import React  from 'react'
import styled from 'styled-components';

const Title = styled.h1`
    /* letter-spacing: 0.125em; */
    /* font-size: 1.625em; */
    /* margin-bottom: 1.125em; */
    /* text-transform: uppercase; */
    /* font-weight: 400; */
    float: left;
`;

const Description = styled.div`
    /* letter-spacing: 0.125em; */
    /* font-size: 1.625em; */
    /* margin-bottom: 1.125em; */
    /* text-transform: uppercase; */
    /* font-weight: 400; */
    float: left;
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