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

    // const localSetAction = (id) => {(

    // )}


    let productImages = props.productImages.map( (eachItem, index) => {
        return (
            <StyledGrid>
                <GridImage 
                onClick={props.setActiveImageFUNCTION(index)} 
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
    // setActiveImage(id) {
    //     return () => {
    //         dispatch(SET_ACTIVE_IMAGE_ACTION(id));
    //     }
    // }

    return {
        setActiveImageFUNCTION: (id) => {
            // console.log(id)
            dispatch(SET_ACTIVE_IMAGE_ACTION(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(ThumbnailGrid);
