import React  from 'react'
import styled from 'styled-components';

import {setActiveImage} from '../../../actions/imageActions'

const GridImage = styled.img`

  display: block;
  max-width:100px;
  max-height:60px;
  width: auto;
  height: auto;
`

const StyledGrid = styled.div`
    display:flex;
    flex-wrap: wrap; 
    justify-content: center;
    background-color: red;

    margin: 3px;
`

const ThumbnailGrid = (props) => {

    console.log(props)

    let productImages = props.productImages.map(eachItem => {
        return (
            <StyledGrid>
                <GridImage src={eachItem} alt="noImage"/>
            </StyledGrid>
        )
    })

    return (
        <StyledGrid>{productImages}</StyledGrid>
    )
}

export default ThumbnailGrid;

const mapDispatchToProps = (dispatch) => {
    return {

    }
}