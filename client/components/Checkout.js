
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
      <div className="checkoutFlexContainer">
        <h1>Purchase the items above?</h1>
        <div className="checkoutItemsList">
          {this.props.selectedProducts.map((product) => (
            <div key={product.id} className="checkoutProductSingle">
              <img className="imageHolder" src={product.imageUrl} />
              <h4>{product.name}</h4>
              <h4> ${product.price} </h4>
              <h4>Quantity: {product.cart.quantity}</h4>
            </div>
          ))}
        </div>

        <div className="checkoutItemsSubtotal">
          <h2>Subtotal: $ {this.props.location.params.cartTotal !== {} ? this.props.location.params.cartTotal : '0'}</h2>
          
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
