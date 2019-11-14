import React, {Component, Redirect} from 'react'
import {Card, Button} from 'react-bootstrap';
import styled from 'styled-components';

import {Link, NavLink} from 'react-router-dom';

const Styles = styled.div`


`;

const StyledCard = styled(Card)`
    text-align: center;
`;

class ItemPreviewCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Styles>
            <NavLink to={`/shop/${this.props.name}`}> 
                <StyledCard style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img} />
                        <Card.Body>
                            <Card.Title>{this.props.name}</Card.Title>
                            <Card.Text style={{fontSize: 10}}>
                            {this.props.desc}
                            </Card.Text>
                        </Card.Body>
                </StyledCard>
            </NavLink>
            </Styles>
        )
    }
}

export default ItemPreviewCard;