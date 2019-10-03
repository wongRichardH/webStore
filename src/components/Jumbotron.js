import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import pic1 from '../assets/examplePic1.jpg';
import pic2 from '../assets/examplePic2.jpg';

const Styles = styled.div`

    .jumbotron {
        background: url(${pic1}) no-repeat fixed bottom;
        background-size: cover;
        position: relative;
    }

`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className = "jumbo">
            <div className = "overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p>this is the image</p>
            </Container>
        </Jumbo>
    </Styles>
)