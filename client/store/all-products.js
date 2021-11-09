import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_PRODUCTS = 'SET_PRODUCTS';


/**
 * ACTION CREATORS
 */
const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    productsArray: products,
  }
}


/**
 * THUNK CREATORS
 */
export const fetchProducts = () => {

  return async (dispatch) => {
    try {
      const response = await axios.get('/api/allrobots');
      const products = response.data;

      dispatch(setProducts(products));

    } catch (error) {
      console.log('Sorry not able to fetch any products', error)
    }
  }
}

/**
 * REDUCER
 */

export default function productsReducer(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.productsArray;
    default:
      return state;
  }
}
