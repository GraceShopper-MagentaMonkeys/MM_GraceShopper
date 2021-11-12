import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleProduct } from '../store/single-product';

class SingleProduct extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    const id = this.props.match.params.productId;
    this.props.fetchProduct(id)
  }
  
  handleClick(){
    //if the product is not in the cart 
    // then user.addProduct(product)
    //if procuct is in cart
    // then Cart.findProduct()
    //quantity = product.quantity
    // quantity += 1
    //update quanity
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
              <button type='button' onClick={this.handleClick}>Add to Cart</button>
            </div>
                { isAdmin ? (

                   <button><Link to ={`/allproducts/${product.id}/edit`} >Edit Product</Link></button>
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
