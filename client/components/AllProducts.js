import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/all-products';

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    const { products } = this.props
    return (
      <div>
        {products.map((product) => {
          return (
          <Link to={`/allproducts/${product.id}`} key={product.id}>
            <div id='hello'>
              <img src={product.imageUrl} />
              <h4>
                {product.name} - ${product.price}
              </h4>
              <p>{product.description}</p>
            </div>
          </Link>
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.productsReducer
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
