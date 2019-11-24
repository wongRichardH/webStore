import React, {Component}  from 'react'
import { connect } from 'react-redux';

import '../../../index';
import styled from 'styled-components';
import ThumbnailGallery from './ThumbnailGallery';


// export const styledActiveComponent = styled.div `
//     max-width: 50%;
//     background-color: blue;
//     display:inline-block;
// `;


class ItemDetails extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {

        var foundClothingItem = this.props.foundItem;

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
                <div>{foundClothingItem}</div>
                
                {/* <styledActiveComponent>
                    <span><ThumbnailGallery productDetails={this.props.foundItem}/></span>
                    <span> side by side </span>
                </styledActiveComponent> */}

                <div class="activeThumbnailWindow">
                    <span><ThumbnailGallery productDetails={this.props.foundItem}/></span>
                    <span> side by side </span>
                </div>

                {this.props.match.params.itemID}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    let id = Number(ownProps.match.params.itemID);
    console.log(id)

    return {

        //Search through our cartReducer. if an id is found from that matches our params, store that in the vaariable "items"

        foundItem: state.items.find(item => item.id === id)
    }
}

export default connect(mapStateToProps)(ItemDetails);