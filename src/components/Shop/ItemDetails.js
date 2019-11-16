import React, {Component}  from 'react'
import { connect } from 'react-redux';

class ItemDetails extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                {this.props.match.params.itemID}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(ItemDetails);