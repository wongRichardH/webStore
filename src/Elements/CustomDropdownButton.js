import React, {Component}  from 'react'
import styled from 'styled-components'
import '../index.css'

import { connect } from 'react-redux';

class CustomDropdownButton extends Component {

    constructor(props) {
        super(props);
        this.state = {value: "0"};
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});

        console.log("clicked handle change")

        console.log(this.props)

        this.props.handleClick(event.target.value)
    }

    render() {

        const isOnMobileDevice = this.props.isOnMobileDevice == true ? "mobileCustomDropDownMenu" : "customDropDownMenu";

        return(
            <div>
                <select value={this.state.value} onChange={this.handleChange} className= {isOnMobileDevice}>
                    <option value="0">SELECT A SIZE</option>
                    <option value="1">SMALL</option>
                    <option value="2">MEDIUM</option>
                    <option value="3">LARGE</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        //Check for Mobile
        isOnMobileDevice: state.isOnMobileDevice == true ? true : false
    }
}

export default connect(mapStateToProps)(CustomDropdownButton);