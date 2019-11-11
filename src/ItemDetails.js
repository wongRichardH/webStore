import React from 'react'
import { connect } from 'react-redux';


export const ItemDetails = ({match}) => {
    return (
        <div>
            <h2>ItemDetails</h2>
            <p> {match.params.itemID}</p>
        </div>
    )
}

