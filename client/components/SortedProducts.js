import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProductCategory } from "../store/all-products";

class SortedProducts extends React.Component {
  componentDidMount() {
    this.props.getProductCategory(this.props.match.params.productCategory);
  }

  render() {
    const { products, isAdmin } = this.props;
    return (
      <div className="products-container">
        {products.map((product, index) => {
          return (

            <div key={index} className='productBox'><Link to={`/allproducts/${product.id}`} >
              {/* <div className="imageHolder"> */}

                <img src={product.imageUrl} className="productImage" />
                <h2>
                  {product.name}
                </h2>
                <h2>
                {product.price}
                </h2>
              {/* </div> */}
              {/* <div className="productPriceAndDescription">
                <p>Item description: {product.description}</p>
              </div> */}
            </Link>
            <div>
                {isAdmin ? (
                  <><Link to={`/allproducts/${product.id}/edit`}>
                    <button>Edit Product </button>
                  </Link><button
                    className="remove"
                    onClick={() => this.props.deleteProduct(product.id)}
                    type="button"
                  >
                      X Delete This Product X
                    </button></>
                ) : (
                  ""
                )}
              </div>
              </div>
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

const mapDispatch = (dispatch, { history }) => {
  return {
    getProductCategory: (productCategory) => dispatch(getProductCategory(productCategory))
  };
};

export default connect(mapState, mapDispatch)(SortedProducts);
