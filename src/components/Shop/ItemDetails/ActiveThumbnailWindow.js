import React  from 'react'
import styled from 'styled-components';
import '../../../index';

const ActiveThumbnailWindow = (props) => {


    console.log(props)

    return (
        <div>
            <img class="active" style={{width:"1"}} src = {props.activeImage} />
        </div>

        // <div> Active Thumbnail Window </div>
    )
}

export default ActiveThumbnailWindow;