import React from 'react'
import {ItemPreviewCard} from './components/ItemPreviewCard';
import { Container, Col , Row} from 'react-bootstrap';

export const Shop = () => {
    return (
        <Container>
            <Row>
                <Col> <ItemPreviewCard/> </Col>
                <Col> <ItemPreviewCard/> </Col>
                <Col> <ItemPreviewCard/> </Col>
            </Row>
        </Container>
    )
}