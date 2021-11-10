import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/all-products';

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <div>
        {products.map((product) => {
          return (
            <div
              id="hello"
              key={product.id}
              onClick={() => {
                console.log('You clicked me');
              }}
            >
              <div className="imageHolder">
                <img className="productImage" src={product.imageUrl} />
              </div>
              <div className="productPriceAndDescription">
                <h4>
                  {product.name} - ${product.price}
                </h4>
                <p>Item description: {product.description}</p>
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
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
