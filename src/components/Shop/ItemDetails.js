import React, {Component}  from 'react'
import { connect } from 'react-redux';

class ItemDetails extends Component {

    render() {

        console.log(this.props.key)


        let nameAndID = this.props.items.map((item, index) => {

            // console.log(item.id)
            // console.log(this.props.items[index].title)
            
            if ( item.id === this.props.items[index].id ) {
                return (
                    <div> 
                        {item.id}
                        {this.props.items[index].title} 
                    </div>
                )
            } 
            // else {
            //     return (
            //         <div>
            //             <h2> {item.id}</h2>
            //             <h3> {this.props.items[0].title}</h3>
            //         </div>


            //     )
            // }

        })

        const passedPropID = (

                <div> 
                    <h1> {this.props.key} </h1>
                    <h1> {this.props.items[0].title} </h1>

                    {/* {this.props.items[0].title}  */}
                </div>
            


        )

        


        return (
            <div>
                <h2>ItemDetails</h2>
                {/* {nameAndID} */}
                
                {passedPropID}
                
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