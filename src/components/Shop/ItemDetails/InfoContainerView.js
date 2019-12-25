import React, {Component}  from 'react'
import ItemTitle from './ItemTitle'
import ItemDescription from './ItemDescription'
import ItemPrice from './ItemPrice'
import TitleDescriptionBlock from './TitleDescriptionBlock'

import { connect } from 'react-redux';
import '../../../index';
import styled from 'styled-components';

import CustomDropdownButton from '../../../Elements/CustomDropdownButton';
import CustomAddToCartButton from '../../../Elements/CustomAddToCartButton';

const InfoContainerWrapper = styled.div `
    display:flex;
    flex-direction: column;
    word-wrap: break-word;
`

class InfoContainerView extends Component {

    constructor(props) {
        super(props);
    }

    render() {

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
                
                <CustomDropdownButton/>
                <CustomAddToCartButton canAddToCart={true}/>

                <TitleDescriptionBlock/>
                <TitleDescriptionBlock/>
                <TitleDescriptionBlock/>


            </InfoContainerWrapper>
        )
    }
}

export default InfoContainerView;