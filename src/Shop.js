import React, {Component} from 'react';
import ItemPreviewCard from './components/ItemPreviewCard';
import {Container, Col , Row, CardDeck, CardGroup} from 'react-bootstrap';

import { connect } from 'react-redux';

class Shop extends Component {

    render() {
        // return (
        //     <Container>
        //         <Row>
        //             <Col> <ItemPreviewCard/> </Col>
        //             <Col> <ItemPreviewCard/> </Col>
        //             <Col> <ItemPreviewCard/> </Col>
        //         </Row>
    
        //     <br></br>
    
        //         <Row>
        //             <Col> <ItemPreviewCard/> </Col>
        //             <Col> <ItemPreviewCard/> </Col>
        //             <Col> <ItemPreviewCard/> </Col>
        //         </Row>
        //     </Container>
        // )

        let itemList = this.props.items.map(item => {
            return (
                <ItemPreviewCard key={item.id} id={item.id} name={item.title} desc={item.desc} price={item.price} img={item.img}/>
            ) 
        })

        return (
            <CardGroup>
                {itemList}
            </CardGroup>
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