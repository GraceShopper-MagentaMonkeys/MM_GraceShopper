import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleProduct } from '../store/single-product';
import { addToCart } from '../store/cart';

class SingleProduct extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    const id = this.props.match.params.productId;
    this.props.fetchProduct(id)
  }
  
  handleClick(event, productId){
    const userId = this.props.userId ;
    if (event.target.name === 'add'){
        this.props.addToCart(productId, userId);
        window.alert('Thank You! Your cart has been updated!')
    }
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
              <button type='button' name='add' onClick={(e) => this.handleClick(e, product.id)}>Add to Cart</button>
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
    isAdmin: state.auth.isAdmin,
    userId: state.auth.id
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchSingleProduct(id)),
    addToCart: (productId, userId) => dispatch(addToCart(productId, userId))
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
