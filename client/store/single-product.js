import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';

/**
 * ACTION CREATORS
 */
const setSingleProduct = (product) => {
  return {
    type: SET_SINGLE_PRODUCT,
    singleProduct: product
  }
}

/**
 * THUNK
 */
export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {

      const response = await axios.get(`/api/allproducts/${id}`)
      const product = response.data;
      dispatch(setSingleProduct(product));

    } catch (error) {
      console.log('Sorry not able to fetch a single product', error);
    }
  }
}

/**
 * REDUCER
 */
export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.singleProduct;
    default:
      return state;
  }
}
