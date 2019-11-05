import React from 'react';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery'

import pic1 from '../assets/examplePic1.jpg';
import pic2 from '../assets/examplePic2.jpg';
import pic3 from '../assets/examplePic3.jpg';
import pic4 from '../assets/examplePic4.jpg';

// const Styles = styled.div`

//     .container {
//         display: flex;
//         flex-direction: row;
//         background-color:blue;
//     }

//     /* .img:hover {
//         border: 50px solid black;
//     } */
// `;

export const photos = [
    {
        src: pic1,
        width: 3,
        height: 4
      },
    {
      src: pic2,
      width: 6,
      height: 4
    },
    {
    src: pic3,
    width: 8,
    height: 9
    },
    {
        src: pic4,
        width: 8,
        height: 12
        },
    
  ];

  export const photos2 = [
    {
    src: pic3,
    width: 8,
    height: 9
    },
    {
        src: pic4,
        width: 8,
        height: 12
        },
    
  ];

export const LandingPage = () => (
        <React.Fragment>
            <Gallery photos={photos2} direction={"row"}> </Gallery>
            <Gallery photos={photos} direction={"column"} columns={2}> </Gallery>
        </React.Fragment>
)