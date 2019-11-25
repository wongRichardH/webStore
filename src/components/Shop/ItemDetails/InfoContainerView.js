import React, {Component}  from 'react'
import ItemTitle from './ItemTitle'
import ItemDescription from './ItemTitle'

import { connect } from 'react-redux';
import '../../../index';
import styled from 'styled-components';

import CustomDropdownButton from '../../../elements/DropdownButton';

const InfoContainerWrapper = styled.div `
    display:flex;
    flex-direction: column;
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
                <ItemDescription desc={desc}/>
                

                <CustomDropdownButton/>

            </InfoContainerWrapper>
        )
    }
}

// const mapStateToProps = (state, ownProps) => {

//     let id = Number(ownProps.match.params.itemID);
//     console.log(id)

//     return {
//         //Search through our cartReducer. if an id is found from that matches our params, store that in the vaariable "items"
//         foundItem: state.items.find(item => item.id === id)
//     }
// }

// export default connect(mapStateToProps)(InfoContainerView);


export default InfoContainerView;