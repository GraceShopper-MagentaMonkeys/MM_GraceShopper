import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts, deleteProduct } from "../store/all-products";

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, isAdmin } = this.props;
    return (
      <div className="products-container">
        {products.map((product) => {
          return (
            <><Link to={`/allproducts/${product.id}`}>



              <div className="imageHolder">
                <img src={product.imageUrl} className="productImage" />
              </div>


              <div className="productPriceAndDescription">
                <h4>
                  {product.name} - ${product.price}
                </h4>
                <p>Item description: {product.description}</p>
              </div>
            </Link><div>
                {isAdmin ? (
                  <Link to={`/allproducts/${product.id}/edit`}>
                    <button>Edit Product </button>
                  </Link>
                ) : (
                  ""
                )}
              </div><div>
                <button
                  className="remove"
                  onClick={() => this.props.deleteProduct(product.id)}
                  type="button"
                >
                  X Delete This Product X
                </button>
              </div></>


          );
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.productsReducer,
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProduct: (productId) => dispatch(deleteProduct(productId, history)),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
