import React, {Component}  from 'react'
import ActiveThumbnailWindow from './ActiveThumbnailWindow'
import ThumbnailGrid from './ThumbnailGrid';

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
            <div>
                <StyledActiveThumbnailWindow activeImage = {this.props.productDetails.img[0]}/>
                <ThumbnailGrid productImages = {this.props.productDetails.img}/>
            </div>
        )
    }
}

export default ThumbnailGallery;