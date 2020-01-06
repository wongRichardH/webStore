import React, {Component}  from 'react'
import { connect } from 'react-redux';

import '../../../index';
import styled from 'styled-components';
import ThumbnailGallery from './ThumbnailGallery';
import InfoContainerView from './InfoContainerView';

const TopContainerFormat = styled.div `
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: ${(props) => props.isOnMobileDevice == true ? "column" : "row"};
`;

const GalleryComponentFormat = styled.div `
    width: ${(props) => props.isOnMobileDevice == true ? "100%" : "50%"};

    text-align: center;
    display:flex;
    flex-direction:column;
`;

const InfoContainerFormat = styled.div `
    width: ${(props) => props.isOnMobileDevice == true ? "100%" : "50%"};

    text-align: center;
    // margin: 15px;
    padding: 15px;
`;

class ItemDetails extends Component {

    // componentDidMount() {
    //     console.log("COMPONENT JUST MOUNTED")
    //     console.log(this.props)
    // }

    render() {

        // console.log("COMPONENT ABOUT TO RENDER")
        console.log(this.props)

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
                    <h2> Error: Item Not Found </h2> 
                </div>
            ) 
        }

        return (
            <TopContainerFormat isOnMobileDevice = {this.props.isOnMobileDevice}>
                
                {/* PHOTO GALLERY */}
                <GalleryComponentFormat isOnMobileDevice = {this.props.isOnMobileDevice}>
                    <ThumbnailGallery productDetails={this.props.foundItem}/>
                </GalleryComponentFormat>

                {/* PRODUCT INFORMATION */}
                <InfoContainerFormat isOnMobileDevice = {this.props.isOnMobileDevice}>
                    <InfoContainerView productDetails={this.props.foundItem}/>
                </InfoContainerFormat>

            </TopContainerFormat>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    let id = Number(ownProps.match.params.itemID);
    // console.log(id)

    return {
        //Search through our cartReducer. if an id is found from that matches our params, store that in the vaariable "items"
        foundItem: state.items.find(item => item.id === id),

        //Check for Mobile
        isOnMobileDevice: state.isOnMobileDevice == true ? true : false
    }
}

export default connect(mapStateToProps)(ItemDetails);