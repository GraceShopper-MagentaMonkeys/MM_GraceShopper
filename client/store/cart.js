import axios from 'axios';

const GET_SELECTED_PRODUCTS = 'GET_SELECTED_PRODUCTS'

//ACTION CREATOR for getting selected products
const selectedProducts = products => {
    return {
        type: GET_SELECTED_PRODUCTS,
        products
    }
}

const initialState = [];

export default function cartReducer(state = initialState, action) {
    
}