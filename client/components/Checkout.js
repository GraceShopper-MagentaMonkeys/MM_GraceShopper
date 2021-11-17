import React from 'react';
import { connect } from 'react-redux';
import { getSelectedProducts } from '../store/cart';
import { Link } from 'react-router-dom';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSelectedProducts(this.props.userId);
  }

  render() {
    console.log('HERE', this.props);
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
          <h2>Subtotal: $ {this.props.match.params.cartTotal}</h2>
          <Link to={'/confirmation'}>
            <button>Place Order</button>
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
  };
};

export default connect(mapState, mapDispatch)(Checkout);
