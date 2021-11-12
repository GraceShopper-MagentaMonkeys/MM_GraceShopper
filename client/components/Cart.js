import React from 'react';
import { connect } from 'react-redux';
import { getSelectedProducts } from '../store/cart'

class Cart extends React.Component {
    constructor(){
        super();
        
    }
    
    componentDidMount(){
        const userId = this.props.userId ;
        console.log(userId);
        console.log(this.props);
        this.props.fetchSelectedProducts(userId);
    }
    
    render(){
        
        const productRender = this.props.selectedProducts || []
        
        const prices = productRender.map( product => {
            return product.price
        })
        
        const total =prices.reduce((acc, ele) => {
                return acc + ele
            }, 0)
        
        
        return (
            <div>
                    <h1>Your Items</h1>
                    {productRender.map( product => (
                        <div key={product.name}>
                            <img src={product.imageUrl}/>
                            <h4>{product.name} ${product.price}</h4>
                            <h4>Quantity:{1}</h4>
                            <button>+</button><button>Remove</button>
                        </div>
                    ))}
                <div>
                    <h2>Subtotal: ${total}</h2>
                </div>
            </div>
        )
    }
}

const mapState = state => {
    return {
        userId: state.auth.id,
        selectedProducts: state.cartReducer
    }
}

const mapDispatch = dispatch => {
    return {
        fetchSelectedProducts: userId => dispatch(getSelectedProducts(userId))
    }
}

export default connect(mapState, mapDispatch)(Cart)