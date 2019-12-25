import React  from 'react'
import styled from 'styled-components'
import '../index.css'

import { connect } from 'react-redux';


// const styledSelect = styled.select`
// float: left;
// font-size: 0.75em;
// width: 100%;
// cursor: pointer;

// border: 1px solid;

// max-width: 295px;
// height: 48px;

// margin-top: 10px;
// margin-bottom: 10px;

// -webkit-appearance: none;
// -moz-appearance: none;
// -webkit-border-radius: 0px;
// appearance: none;
// padding: 10px;
// `

const CustomDropdownButton = (props) => {

    console.log("PRINTING CUSTOMDROPDOWNBUTTON PROPS")
    console.log(props)

    const isOnMobileDevice = props.isOnMobileDevice == true ? "mobileCustomDropDownMenu" : "customDropDownMenu";

    return (
        <div>
            <select className= {isOnMobileDevice}>
                <option>SELECT A SIZE</option>
                <option>SMALL</option>
                <option>MEDIUM</option>
                <option>LARGE</option>
            </select>

            {/* <styledSelect>
                <option>SMALL</option>
                <option>MEDIUM</option>
                <option>LARGE</option>
            </styledSelect> */}
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        //Check for Mobile
        isOnMobileDevice: state.isOnMobileDevice == true ? true : false
    }
}

export default connect(mapStateToProps)(CustomDropdownButton);