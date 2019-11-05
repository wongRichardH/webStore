import React from 'react'
import {ItemPreviewCard} from './components/ItemPreviewCard';
import { Container, Col , Row} from 'react-bootstrap';

import cartReducer from './components/Reducers/cartReducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';


export const Shop = () => {
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