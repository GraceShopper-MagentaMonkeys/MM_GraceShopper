import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_PRODUCTS = "SET_PRODUCTS";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const CREATE_PRODUCT = "CREATE_PRODUCT";
const GET_PRODUCT_CATEGORY = 'GET_PRODUCT_CATEGORY'

/**
 * ACTION CREATORS
 */
const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    productsArray: products,
  };
};

const _updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    product,
  };
};

const _deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    product,
  };
};

const _createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product,
  };
};

const _getProductCategory = (productCategory) => {
  return {
    type: GET_PRODUCT_CATEGORY,
    productCategoryArray: productCategory
  }
}

/**
 * THUNK CREATORS
 */
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/allproducts");
      const products = response.data;
      dispatch(setProducts(products));
    } catch (error) {
      console.log("Sorry not able to fetch any products", error);
    }
  };
};

export const getProductCategory = (productCategory) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/allproducts/sort/${productCategory}`);
      const productsOfCategory = response.data;
      dispatch(_getProductCategory(productsOfCategory))
    } catch(error) {
      console.error(error)
    }
  }
}

export const updateProduct = (product, history) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(
      `/api/allproducts/${product.singleProductReducer.id}/edit`,
      product
    );
    dispatch(_updateProduct(updated));
    history.push(`/allproducts/${product.singleProductReducer.id}`);
  };
};

export const deleteProduct = (product) => {
  return async (dispatch) => {
    const { data: deleted } = await axios.delete(
      `/api/allproducts/${product}/edit`
    );
    dispatch(_deleteProduct(deleted));
  };
};

export const createProduct = (product, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post(`/api/create`, product);
    dispatch(_createProduct(created));
    history.go(0)
  };
};

/**
 * REDUCER
 */

export default function productsReducer(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.productsArray;
    case CREATE_PRODUCT:
      return [...state, action.product];
    case UPDATE_PRODUCT:
      return state.map((product) =>
        product.productId === action.product.productId
          ? action.product
          : product
      );
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product.id);
    case GET_PRODUCT_CATEGORY:
      return action.productCategoryArray
    default:
      return state;
  }
}
