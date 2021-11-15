import axios from 'axios';

const GET_SELECTED_PRODUCTS = 'GET_SELECTED_PRODUCTS'

//ACTION CREATOR for getting selected products
const selectedProducts = products => {
    return {
        type: GET_SELECTED_PRODUCTS,
        products
    }
}

export const getSelectedProducts = userId => {
    return async dispatch => {
        try{
            const { data } = await axios.get(`/api/cart/${userId}`);
            dispatch(selectedProducts(data));
        } catch (e){
            console.log('Sorry could not find any products in your cart', e)
        }
    }
}

export const addToCart = (productId, userId) => {
    return async dispatch => {
        try{
            await axios.post(`/api/allproducts/${productId}/add`, { userId: userId });
            dispatch(getSelectedProducts(userId));
        } catch (e){
            console.log('Could not add to cart database', e)
        }
    }
}

const initialState = [];

export default function cartReducer (state = initialState, action) {
    switch (action.type){
        case GET_SELECTED_PRODUCTS:
            return action.products ;
        default:
            return state ;
    }
}
