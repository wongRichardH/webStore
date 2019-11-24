import React, {Component}  from 'react'
import ActiveThumbnailWindow from './ActiveThumbnailWindow'

import styled from 'styled-components';
import '../../../index';

// const StyledCard = styled(Card)`
//     text-align: center;
// `;

class ThumbnailGallery extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.productDetails.desc)
        // console.log(this.props.desc)
    }

    render() {
        return (
            
            <ActiveThumbnailWindow class="gallery" activeImage= {this.props.productDetails.img}/>
            //insert grid below this
        )
    }
}

export default ThumbnailGallery;