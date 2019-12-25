import React  from 'react'
import styled from 'styled-components';
import '../../../index';

const ActiveThumbnailWindow = (props) => {

    //grab active thumbnail index state from here
    //default set to 0 when initially loaded

    console.log(props)

    return (
        <div>
            <img className="active" style={{width:"1"}} src = {props.activeImage} />
        </div>

        // <div> Active Thumbnail Window </div>
    )
}

export default ActiveThumbnailWindow;