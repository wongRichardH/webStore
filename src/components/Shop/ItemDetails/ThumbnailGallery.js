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

        this.state = {
            activeIndex: 0
        }
    }

    componentDidMount() {
        console.log(this.props.productDetails.desc)
        // console.log(this.props.desc)
    }

    handleClick = (e) => {
        console.log(e.target.getAttribute('data-index'))

        const newActiveIndex = e.target.getAttribute('data-index')
        this.setState({activeIndex: newActiveIndex})
    }

    render() {
        return (
            <div>
                <StyledActiveThumbnailWindow activeImage = {this.props.productDetails.img[this.state.activeIndex]}/>
                
                <ThumbnailGrid 
                productImages = {this.props.productDetails.img}
                handleClick = {this.handleClick}
                />
            </div>
        )
    }
}

export default ThumbnailGallery;