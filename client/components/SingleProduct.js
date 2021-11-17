import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleProduct } from "../store/single-product";
import { addToCart } from "../store/cart";

class SingleProduct extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.productId;
    this.props.fetchProduct(id);
  }

  handleClick(event, productId) {
    const userId = this.props.userId;
    if (event.target.name === "add") {
      
      const userId = this.props.userId;
        
      const product = this.props.selectedProducts.filter(product => {
        if (product.id === productId){
          return product
        }
        
      })
      
      if (product[0].cart.quantity + 1 > product[0].quantity){
        return window.alert('Error 418: I am a teapot, also we dont have that much');
      }
      
      this.props.addToCart(productId, userId);
      window.alert("Thank You! Your cart has been updated!");
    }
  }

  render() {
    const { product, isAdmin } = this.props;

    return (
      <div>
        {product.id ? (
          <div className="singleProductContainer">
            <div className="productNameImage">
              <h1>{product.name}</h1>
              <br />
              <br />
              <img className="singleProductImage" src={product.imageUrl} />
            </div>

            <div className="productDetails">
              <h3>PRODUCT DETAIL:</h3>
              <p>{product.description}</p>
              <label htmlFor="quantity">
                <h3>Quantity ({product.quantity}):</h3>
              </label>
              <h3>Price: ${product.price}</h3>
              <div>
                <button
                  type="button"
                  name="add"
                  onClick={(e) => this.handleClick(e, product.id)}
                >
                  Add to Cart
                </button>
              </div>
              {isAdmin ? (
                <button>
                  <Link to={`/allproducts/${product.id}/edit`}>
                    Edit Product
                  </Link>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          "Sorry Error"
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.singleProductReducer,
    isAdmin: state.auth.isAdmin,
    userId: state.auth.id,
    selectedProducts: state.cartReducer
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchSingleProduct(id)),
    addToCart: (productId, userId) => dispatch(addToCart(productId, userId)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
