import React, {Component}  from 'react'
import ItemTitle from './ItemTitle'
import ItemDescription from './ItemDescription'
import ItemPrice from './ItemPrice'
import TitleDescriptionBlock from './TitleDescriptionBlock'

import { connect } from 'react-redux';
import '../../../index';
import styled from 'styled-components';

import SizeAndAddCart from './SizeAndAddCart';

import {ADD_TO_CART_ACTION} from '../../../actions/actionCreators'

const InfoContainerWrapper = styled.div `
    display:flex;
    flex-direction: column;
    word-wrap: break-word;
`

class InfoContainerView extends Component {

    constructor(props) {
        super(props);
    }

    handleAddToCart = () => {
        console.log(this.props)
        const itemID = this.props.productDetails.id;
        this.props.addToCart(itemID);

        console.log("FINISHED ADDING TO CART")

        console.log("======================================")
        console.log("NEW STATE IS:")
        console.log(this.props.addedItems)
        console.log(`Current total price: ${this.props.total}`)
    }

    render() {

        console.log("InfoContainerView just rendered")

        console.log("NEW STATE IS:")
        console.log(this.props.addedItems)

        var foundClothingItem = this.props.productDetails;
        console.log(foundClothingItem);
        var title = "";
        var price = 0.00;
        var desc = "";

        if (foundClothingItem) {

            title = foundClothingItem.title;
            price = foundClothingItem.price;
            desc = foundClothingItem.desc;

            foundClothingItem = (
            <div> 
                <h2> {foundClothingItem.title} </h2> 
                <h2> {foundClothingItem.desc} </h2>
            </div>
            ) 

        } else {
            foundClothingItem = (<div><h2> not found </h2></div>) 
        }

        return (
            <InfoContainerWrapper>

                <ItemTitle title={title}/>
                <ItemPrice price={price}/>
                <ItemDescription desc={desc}/>

                <SizeAndAddCart addToCart={this.handleAddToCart}/>

                <TitleDescriptionBlock/>
                <TitleDescriptionBlock/>
                <TitleDescriptionBlock/>

            </InfoContainerWrapper>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        //Check for Mobile
        addedItems : state.addedItems 
    }
}

const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id) => {
            dispatch(ADD_TO_CART_ACTION(id))
        }
    }
}


// export default InfoContainerView;
export default connect(mapStateToProps, mapDispatchToProps)(InfoContainerView);