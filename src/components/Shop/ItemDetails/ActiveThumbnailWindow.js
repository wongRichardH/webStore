import React  from 'react'
import styled from 'styled-components';
import '../../../index';

// const styledImg = styled.img `
//     /* max-width: 100%; */
//     width: 100px;
//     height: 100px;
//     src: {props.activeImage};

// `

// var imgStyle = {
//     max-width: '100%';
// };



const ActiveThumbnailWindow = (props) => {


    console.log(props)

    return (
        <div>
            <img class="active" style={{width:"1"}} src = {props.activeImage} />

            text
        </div>

        // <div> Active Thumbnail Window </div>
    )
}

export default ActiveThumbnailWindow;