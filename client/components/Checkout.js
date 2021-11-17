import React from 'react';
import { connect } from 'react-redux';
import { getSelectedProducts, checkout } from '../store/cart';
import { Link } from 'react-router-dom';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchSelectedProducts(this.props.userId);
  }
  
  handleClick(){
    this.props.checkoutUser(this.props.userId)
  }

  render() {
    
    return (
      <div>
        <h1>Checkout</h1>
        {this.props.selectedProducts.map((product) => (
          <div key={product.id}>
            <img className="imageHolder" src={product.imageUrl} />
            <h4>
              {product.name} $ {product.price}
            </h4>
            <h4>Quantity: {product.cart.quantity}</h4>
          </div>
        ))}
        <div>
          <h2>Subtotal: $ {this.props.location.params.cartTotal !== {} ? this.props.location.params.cartTotal : '0' }</h2>
          <Link to={'/confirmation'}>
            <button onClick={this.handleClick}>Place Order</button>
          </Link>
        </div>
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
    checkoutUser: (userId) => dispatch(checkout(userId))
  };
};

export default connect(mapState, mapDispatch)(Checkout);
