import React from 'react'
import {Card, Button} from 'react-bootstrap';
import styled from 'styled-components';

import pic1 from '../assets/examplePic1.jpg';

const Styles = styled.div`
    .poo {
        color: #red;
    }

`;

export const ItemPreviewCard = () => {
    return (
        // <div>
        //     <Card>
        //         <Card.Img variant="top" src={pic1} />
        //             <Card.Body>
        //                 <Card.Title>Card Title</Card.Title>
        //                 <Card.Text style={{fontSize: 10}}>
        //                 Some quick example text to build on the card title and make up the bulk of
        //                 the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary">Go somewhere</Button>
        //             </Card.Body>
        //     </Card>
        // </div>
        
        <Styles>
            <Card>
                <Card.Img variant="top" src={pic1} />
                    <Card.Body>
                        <Card.Title bsPrefix="poo">Card Title</Card.Title>
                        <Card.Text style={{fontSize: 10}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card>
        </Styles>
    )
}