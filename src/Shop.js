import React, {Component} from 'react';
import {ItemPreviewCard} from './components/ItemPreviewCard';
import { Container, Col , Row} from 'react-bootstrap';

import { connect } from 'react-redux';

class Shop extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col> <ItemPreviewCard/> </Col>
                    <Col> <ItemPreviewCard/> </Col>
                    <Col> <ItemPreviewCard/> </Col>
                </Row>
    
            <br></br>
    
                <Row>
                    <Col> <ItemPreviewCard/> </Col>
                    <Col> <ItemPreviewCard/> </Col>
                    <Col> <ItemPreviewCard/> </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

// export default Shop;

export default connect(mapStateToProps)(Shop);