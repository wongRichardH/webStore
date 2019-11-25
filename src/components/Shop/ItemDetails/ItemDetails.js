import React, {Component}  from 'react'
import { connect } from 'react-redux';

import '../../../index';
import styled from 'styled-components';
import ThumbnailGallery from './ThumbnailGallery';
import InfoContainerView from './InfoContainerView';



const TopContainerFormat = styled.div `
    background-color: lightpink;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
`;

const GalleryComponentFormat = styled.div `
    width: 50%;
    background-color: yellow;
    text-align: center;
`;

const InfoContainerFormat = styled.div `
    width: 50%;
    background-color: yellow;
    text-align: center;
`;

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
            <TopContainerFormat>
                
                {/* PHOTO GALLERY */}
                <GalleryComponentFormat>
                    <ThumbnailGallery productDetails={this.props.foundItem}/>
                </GalleryComponentFormat>

                {/* PRDOCUT INFORMATION */}
                <InfoContainerFormat>
                    <InfoContainerView productDetails={this.props.foundItem}/>
                </InfoContainerFormat>
                

                {/* {this.props.match.params.itemID} */}
            </TopContainerFormat>
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