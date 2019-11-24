import React, {Component}  from 'react'
import { connect } from 'react-redux';
import '../../../index';
import styled from 'styled-components';

class InfoContainerView extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var foundClothingItem = this.props.productDetails;

        if (foundClothingItem) {
            foundClothingItem = (
            <div> 
                <h2> {foundClothingItem.title} </h2> 
                <h2> {foundClothingItem.desc} </h2> 

            </div>
            ) 

        } else {
            foundClothingItem = (
                <div> 
                    <h2> not found </h2> 
                </div>
            ) 
        }

        return (
            <div>
                {/* Info Container View */}
                {foundClothingItem}
            </div>
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