import React, {Component}  from 'react'
import { connect } from 'react-redux';

class ItemDetails extends Component {

        render() {

            return (
                <div>
                    <h2>ItemDetails</h2>

                    var singleItem = nil;

                    let itemList = this.props.items.map(item => {
                        
                        // return (
                        //     <ItemPreviewCard key={item.id} id={item.id} name={item.title} desc={item.desc} price={item.price} img={item.img}/>
                        // ) 
                    })

                    return (
                        {/* <CardGroup>
                            {itemList}
                        </CardGroup> */}
                    )
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