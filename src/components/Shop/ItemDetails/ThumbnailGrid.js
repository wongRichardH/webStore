import React  from 'react'
import styled from 'styled-components';

const Thumbnail = styled.img`

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
    // background-color: red;

    margin: 3px;
`

const ThumbnailGrid = (props) => {

    console.log("initial load")
    console.log(props)

    function testFunc() {
        console.log("Button Clicked")
        console.log(props)
    }

    let productImages = props.productImages.map( (eachItem, index) => {
        return (
            <StyledGrid key={index}>
                <Thumbnail
                onClick={props.handleClick} 
                src={eachItem} 
                alt="noImage"
                key={index}
                data-index={index}
                />
            </StyledGrid>
        )
    })

    return (
        <StyledGrid>{productImages}</StyledGrid>
    )
}

export default ThumbnailGrid;
