import React from 'react';
import { connect } from 'react-redux';
import { getSelectedProducts, addToCart } from '../store/cart'

class Cart extends React.Component {
    constructor(){
        super();
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
        if (this.props.isLoggedIn){
            const userId = this.props.userId ;
            console.log(userId);
            this.props.fetchSelectedProducts(userId);
        }
    }
    
    handleClick(event, productId){
        const userId = this.props.userId ;
        console.log(userId);
        if (event.target.name === 'add'){
            this.props.addToCart(productId, userId);
        }
    }
    
    render(){
        
        const productRender = this.props.selectedProducts
        
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
                { this.props.isLoggedIn ? (
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
                ) : <h1>Sorry, you must login to use the cart. Feature coming soon!</h1>}
            </div>
        )
    }
}

const mapState = state => {
    return {
        isLoggedIn: !!state.auth.id,
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