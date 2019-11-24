import React  from 'react'
import styled from 'styled-components';

// const styledImg = styled.img `
//     /* max-width: 100%; */
//     width: 100px;
//     height: 100px;
//     src: {props.activeImage};

// `




const ActiveThumbnailWindow = (props) => {


    console.log(props)

    return (
        <div class = "activeThumbnail">
            <img src = {props.activeImage} />
        </div>

        // <div> Active Thumbnail Window </div>
    )
}

export default ActiveThumbnailWindow;