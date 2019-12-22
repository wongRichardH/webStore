import React  from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';

import {SET_ACTIVE_IMAGE_ACTION} from '../../../actions/imageActions';

const GridImage = styled.img`

  display: block;
  max-width:100px;
  max-height:60px;
  width: auto;
  height: auto;

  cursor: pointer;

  :hover {
    cursor: pointer;
    
    border-width: 1px;
    border-color: black;
    border-style: dotted;
  }
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

    function testFunc() {
        console.log("Button Clicked")
        console.log(props)

        props.setActiveImageFUNCTION(9999)

    }

    let productImages = props.productImages.map( (eachItem, index) => {
        return (
            <StyledGrid>
                <GridImage 
                onClick={testFunc} 
                // onClick={console.log(16159)} 
                src={eachItem} 
                alt="noImage"
                key={index}
                />
            </StyledGrid>
        )
    })

    return (
        <StyledGrid>{productImages}</StyledGrid>
    )
}

// const 

const mapDispatchToProps = (dispatch) => {

    return {
        setActiveImageFUNCTION: (id) => {
            // console.log(id)
            dispatch(SET_ACTIVE_IMAGE_ACTION(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(ThumbnailGrid);
