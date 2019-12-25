import React  from 'react'
import styled from 'styled-components'
import '../index.css'

// const styledSelect = styled.select`
//     width: 150;
//     height: 40;
//     float: left;
//     // padding-left: 5px;

//     text-indent: 5px;
// `

const CustomDropdownButton = (props) => {

    return (
        <div>
            <select class="customDropDownMenu">
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

export default CustomDropdownButton;