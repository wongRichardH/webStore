import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery'

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

export const photos = [
    // {
    //   src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    //   width: 4,
    //   height: 3
    // },
    // {
    //   src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    //   width: 1,
    //   height: 1
    // },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
  ];

export const LandingPage = () => (

    // <Styles>
    //     <Container>
    //         <Row>
    //             <Col sm={12} md={4} lg={4}> <Image src= {pic2}/> </Col>
    //             <Col sm={12} md={4} lg={4}> <Image src= {pic3}/> </Col>
    //             <Col sm={12} md={4} lg={4}> <Image src= {pic1}/> </Col>

    //         </Row>
    //     </Container>
    // </Styles>

    <Gallery photos={photos} direction={"column"}> 

    </Gallery>


)