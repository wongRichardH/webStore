import React, {Component}  from 'react'
import ActiveThumbnailWindow from './ActiveThumbnailWindow'

import styled from 'styled-components';
import '../../../index';

const StyledActiveThumbnailWindow = styled(ActiveThumbnailWindow)`
    /* text-align: center; */
    max-width: 100%;
`;

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
            
            // <ActiveThumbnailWindow class="gallery" activeImage= {this.props.productDetails.img}/>

            <StyledActiveThumbnailWindow activeImage= {this.props.productDetails.img[0]}/>

            //insert grid below this
        )
    }
}

export default ThumbnailGallery;