import React, {Component} from 'react'
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

import {NavLink} from 'react-router-dom';


const StyledCard = styled(Card)`
    text-align: center;
`;

class ItemPreviewCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavLink to={{
                pathname: `/shop/${this.props.id}`,
                // search: `?id=${this.props.id}`
                }}> 
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
        )
    }
}

export default ItemPreviewCard;