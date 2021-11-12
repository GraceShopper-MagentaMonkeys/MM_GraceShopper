import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleProduct } from '../store/single-product';

class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.productId;
    this.props.fetchProduct(id)
  }
  render() {

    const { product, isAdmin } = this.props;

    return (
      <div>
          {product.id ?
          <div>
            <h4>{product.name}</h4>
            <img src={product.imageUrl} />
            <h3>PRODUCT DETAIL:</h3>
            <p>{product.description}</p>
            <label htmlFor="quantity">
            <h3>
            Quantity ({product.quantity}):
            </h3>
            </label>
            <div>
            <input type='number' min='0' max={`${product.quantity}`}/>
            </div>
            <h3>Price: ${product.price}</h3>
            <div>
              <button type='button'>Add to Cart</button>
            </div>
                { isAdmin ? (

                   <Link to ={`/allproducts/${product.id}/edit`} >Edit Product</Link>
                  )
                 :
                 ('')
  }
          </div>
          :
          "Sorry Error"}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.singleProductReducer,
    isAdmin: state.auth.isAdmin
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchSingleProduct(id))
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
