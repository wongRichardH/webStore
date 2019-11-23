import React, {Component}  from 'react'
import ActiveThumbnailWindow from './ActiveThumbnailWindow'

import styled from 'styled-components';
import '../../../index';

// const StyledCard = styled(Card)`
//     text-align: center;
// `;

class ThumbnailGallery extends Component {
    render() {
        return (
            <ActiveThumbnailWindow/>
        )
    }
}

export default ThumbnailGallery;