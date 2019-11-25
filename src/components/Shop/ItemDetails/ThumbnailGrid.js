import React  from 'react'
import styled from 'styled-components';

const ThumbnailGrid = (props) => {

    console.log(props)

    let productImages = props.productImages.map(eachItem => {
        return (
            <div>
                <img src={eachItem} alt="noImage" width="5" height="5"/>
            </div>
        )
    })

    return (

        // {productImages}
        
        <div>
            GRid goes heres
        </div>

    )
}

export default ThumbnailGrid;