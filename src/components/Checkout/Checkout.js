import React, {Component}  from 'react'
import { connect } from 'react-redux';
// import '../../../index';
import styled from 'styled-components';

class Checkout extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var addedItemsExist = this.props.addedItems;

        if (addedItemsExist) {
            addedItemsExist = (
                <div>
                    <h1> Checkout</h1>
                    {this.props.addedItems.length} Items Found
                </div> 
            ) 

        } else {
            addedItemsExist = (
                <div> 
                    <h2> Error: No items in cart </h2> 
                </div>
            ) 
        }

        return(
            addedItemsExist
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        addedItems: state.addedItems,
        isOnMobileDevice: state.isOnMobileDevice == true ? true : false
    }
}

const mapDispatchToProps= (dispatch)=>{
    
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);