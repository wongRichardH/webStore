import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap';
import styled from 'styled-components';

import pic1 from '../assets/examplePic1.jpg';
// import { ReactComponent } from '*.svg';

const Styles = styled.div`
    .poo {
        color: #red;
    }

`;

class ItemPreviewCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Styles>
                <Card style= {{ width: '18rem'}}>
                    <Card.Img variant="top" src={this.props.img} />
                        <Card.Body>
                            <Card.Title bsPrefix="poo">{this.props.name}</Card.Title>
                            <Card.Text style={{fontSize: 10}}>
                            {this.props.desc}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                </Card>
            </Styles>
        )
    }
}

export default ItemPreviewCard;