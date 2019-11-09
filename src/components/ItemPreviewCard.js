import React, {Component, Redirect} from 'react'
import {Card, Button} from 'react-bootstrap';
import styled from 'styled-components';

import pic1 from '../assets/examplePic1.jpg';
// import { ReactComponent } from '*.svg';

const Styles = styled.div`


`;

const StyledCard = styled(Card)`
    text-align: center;
`;

class ItemPreviewCard extends Component {

    constructor(props) {
        super(props);

        this.openItemDetailsPage = this.openItemDetailsPage.bind(this);
    }

    openItemDetailsPage() {
        // alert(this.props.id)

        let newPath = `/itemdetails`;

        // render() {
        //     return <Redirect to={newPath}/>
        // } 
    }

    render() {
        return (
            <Styles>
                <StyledCard onClick={(this.openItemDetailsPage)} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img} />
                        <Card.Body>
                            <Card.Title>{this.props.name}</Card.Title>
                            <Card.Text style={{fontSize: 10}}>
                            {this.props.desc}
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                </StyledCard>
            </Styles>
        )
    }
}



export default ItemPreviewCard;