import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_PRODUCTS = 'SET_PRODUCTS';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT'

/**
 * ACTION CREATORS
 */
const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    productsArray: products,
  }
}

const _updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}

const _deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    product
  }
}


/**
 * THUNK CREATORS
 */
export const fetchProducts = () => {

  return async (dispatch) => {
    try {
      const response = await axios.get('/api/allproducts');
      const products = response.data;

      dispatch(setProducts(products));

    } catch (error) {
      console.log('Sorry not able to fetch any products', error)
    }
  }
}

export const updateProduct = (product, history) => {
  return async (dispatch) => {
    console.log(product)
    const {data: updated} = await axios.put(`/api/allproducts/${product.auth.id}/edit`, product);
    dispatch(_updateProduct(updated))
    history.push(`/allproducts/${product.auth.id}`)
  }
}

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    const {data: deleted} = await axios.delete(`/api/allproducts/${productId}`);
    dispatch(_deleteProduct(deleted))
  }
}

/**
 * REDUCER
 */

export default function productsReducer(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.productsArray;
    case UPDATE_PRODUCT:
      return state.map((product) => (product.productId === action.product.productId ?
        action.product : product))
        case DELETE_PRODUCT:
          return state.filter((product) => product.id !== action.product.id)
    default:
      return state;
  }
}
