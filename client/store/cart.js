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
            await axios.post(`/api/cart/${userId}/add`, { productId: productId });
            dispatch(getSelectedProducts(userId));
        } catch (e){
            console.log('Could not add to cart database', e)
        }
    }
}

export const removeFromCart = (productId, userId, method) => {
    return async dispatch => {
        try {
            if( method === 'decrease'){
                await axios.put(`/api/cart/${userId}/decrease`, { productId: productId });
                dispatch(getSelectedProducts(userId));
            } else if( method === 'remove' ){
                await axios.put(`/api/cart/${userId}/remove`, { productId: productId });
                dispatch(getSelectedProducts(userId));
            }
        } catch (e){
            console.log(e)
        }
    }
}

export const checkout = userId => {
    return async dispatch => {
        // put request and delete request have different paramater orders for headers
        const token = window.localStorage.getItem('token');
        console.log(token);
        try {
            console.log('thunk fired')
            await axios.put('/api/checkout', userId, {
                headers: {
                    authorization: token
                }
            })
            dispatch(getSelectedProducts(userId));
            
        } catch (e){
            console.log(e)
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
