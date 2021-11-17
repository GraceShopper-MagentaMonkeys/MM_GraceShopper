import React from 'react';
import { connect } from 'react-redux';
import { getSelectedProducts, addToCart, removeFromCart } from '../store/cart';
import { Link } from 'react-router-dom';


class Cart extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.isLoggedIn) {
      const userId = this.props.userId;
      this.props.fetchSelectedProducts(userId);
    }
  }

  handleClick(event, productId) {
    const userId = this.props.userId;

    if (event.target.name === 'add') {
      
      const product = this.props.selectedProducts.filter(product => {
        if (product.id === productId){
          return product
        }
        
      })
      
      if (product[0].cart.quantity + 1 > product[0].quantity){
        return window.alert('Error 418: I am a teapot, also we dont have that much');
      }
      
      this.props.addToCart(productId, userId);
    } else if (event.target.name === 'minus') {
      this.props.removeFromCart(productId, userId, 'decrease');
    } else if (event.target.name === 'remove') {
      this.props.removeFromCart(productId, userId, 'remove');
    }
  }
  

  render() {
    const productRender = this.props.selectedProducts;

    const prices = productRender.map((product) => {
      const price = parseFloat(product.price);
      const itemTotal = price * product.cart.quantity;
      return itemTotal;
    });

    const total = prices.reduce((acc, ele) => {
      acc += ele;
      return acc;
    }, 0);
    
    return (

      <div className="cartFlexContainer">
        {this.props.isLoggedIn ? (
          <>
            <div className="cartProductsContainer">
              <h1>Your Items</h1>
              {productRender.map((product) => (
                <div
                  key={product.id + this.props.userId}
                  className="singleCartProduct"
                >
                  <img className="imageHolder" src={product.imageUrl} />
                  <div className="cartProductDetails">
                    <h4>
                      {product.name} - ${product.price}
                    </h4>
                    <h4>Quantity: {product.cart.quantity}</h4>
                    <button
                      name="add"
                      onClick={(e) => this.handleClick(e, product.id)}
                    >
                      +
                    </button>
                    <button
                      name="minus"
                      onClick={(e) => this.handleClick(e, product.id)}
                    >
                      -
                    </button>
                    <button
                      name="remove"
                      onClick={(e) => this.handleClick(e, product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="totalContainer">
              <h2>Subtotal: ${total}</h2>
              <Link
                to={{ pathname: '/checkout', params: { cartTotal: total } }}>
                <button>Checkout</button>
              </Link>
            </div>
          </>
        ) : (
          <h1>Sorry, you must login to use the cart. Feature coming soon!</h1>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    userId: state.auth.id,
    selectedProducts: state.cartReducer,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchSelectedProducts: (userId) => dispatch(getSelectedProducts(userId)),
    addToCart: (productId, userId) => dispatch(addToCart(productId, userId)),
    removeFromCart: (productId, userId, method) =>
      dispatch(removeFromCart(productId, userId, method)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
