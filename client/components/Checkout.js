import React from "react";
import { connect } from "react-redux";
import { getSelectedProducts } from "../store/cart";
import { Link } from "react-router-dom";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSelectedProducts(this.props.userId);
  }

  render() {
    console.log("HERE", this.props);
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
          <h2>Subtotal: $ {this.props.match.params.cartTotal}</h2>
          <Link to={"/confirmation"}>
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
