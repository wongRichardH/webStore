import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import styled from 'styled-components';

import pic1 from '../assets/examplePic1.jpg';
import pic2 from '../assets/examplePic2.jpg';
import pic3 from '../assets/examplePic3.jpg';

const Styles = styled.div`

    .container {
        display: flex;
        flex-direction: row;
        background-color:blue;
    }

    .img:hover {
        border: 50px solid black;
    }
`;

export const LandingPage = () => (

    <Styles>
        <Container>
            <Row>
                <Col sm={12} md={4} lg={4}> <Image src= {pic2}/> </Col>
                <Col sm={12} md={4} lg={4}> <Image src= {pic3}/> </Col>
                <Col sm={12} md={4} lg={4}> <Image src= {pic1}/> </Col>

            </Row>
        </Container>
    </Styles>


)