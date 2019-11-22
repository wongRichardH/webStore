import React, {Component} from 'react';
import ItemPreviewCard from './ItemPreviewCard';
import {Container, Col , Row, CardDeck, CardGroup} from 'react-bootstrap';

import { connect } from 'react-redux';

class Shop extends Component {

    render() {
        
        let catalogItems = this.props.catalog.map(eachItem => {
            return (
                <ItemPreviewCard key={eachItem.id} 
                id={eachItem.id} 
                name={eachItem.title} 
                desc={eachItem.desc} 
                price={eachItem.price} 
                img={eachItem.img}/>
            ) 
        })

        return (
            <CardGroup>
                {catalogItems}
            </CardGroup>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        catalog: state.items
    }
}

// export default Shop;

export default connect(mapStateToProps)(Shop);