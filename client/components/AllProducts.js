import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/all-products';

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    console.log(this.props)
    const { products } = this.props
    return (
      <div>
        {products.map((product, index) => {
          return (
        <div key={index}>
          <Link to={`/allproducts/${product.id}`}>
            <div id='hello'>
              <div className="imageHolder">
              <img src={product.imageUrl} className="productImage"/>
              </div>
              <div className="productPriceAndDescription">
              <h4>
                {product.name} - ${product.price}
              </h4>
              <p>Item description: {product.description}</p>
              </div>
            </div>
          </Link>
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
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
