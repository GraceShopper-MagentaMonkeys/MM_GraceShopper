import React from 'react';
import { connect } from 'react-redux';
import { getSelectedProducts, addToCart } from '../store/cart'

class Cart extends React.Component {
    constructor(){
        super();
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
        const userId = this.props.userId ;
        this.props.fetchSelectedProducts(userId);
    }
    
    handleClick(event, productId){
        const userId = this.props.userId ;
        if (event.target.name === 'add'){
            this.props.addToCart(productId, userId);
        }
    }
    
    render(){
        
        const productRender = this.props.selectedProducts || []
        
        // JOE_CR: Nice array method usages!
        const prices = productRender.map( product => {
            const price = parseFloat(product.price);
            const itemTotal = price * product.cart.quantity;
            return itemTotal;
        })
        
        const total = prices.reduce((acc, ele) => {
                acc += ele
                return acc
            }, 0)
        
        
        return (
            <div>
                    <h1>Your Items</h1>
                    {productRender.map( product => (
                        <div key={product.id + this.props.userId}>
                            <img className="imageHolder" src={product.imageUrl}/>
                            <h4>{product.name} $ {product.price}</h4>
                            <h4>Quantity: {product.cart.quantity}</h4>
                            <button name="add" onClick={(e) => this.handleClick(e, product.id)}>+</button><button name="minus">-</button><button>Remove</button>
                        </div>
                    ))}
                <div>
                    <h2>Subtotal: $ {total}</h2>
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
        fetchSelectedProducts: userId => dispatch(getSelectedProducts(userId)),
        addToCart: (productId, userId) => dispatch(addToCart(productId, userId))
    }
}

export default connect(mapState, mapDispatch)(Cart)