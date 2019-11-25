import React  from 'react'
import styled from 'styled-components';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownItem';
import DropdownItem from 'react-bootstrap/DropdownItem';


const styledSelect = styled.select`
    width:200px;
`

const CustomDropdownButton = (props) => {

    return (
        <div>
            <select style={{width: 100, height: 40, float:"left"}}>
                <option>SMALL</option>
                <option>MEDIUM</option>
                <option>LARGE</option>
            </select>
        </div>
    )
}

export default CustomDropdownButton;