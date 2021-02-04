import {RECEIVE_PRODUCTS, RESET_PRODUCTS } from "../actions/product_actions";

const ProductsReducer = (state = {}, action ) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products.data;
        case RESET_PRODUCTS:
            return {};
        default:    
            return state;
    }
}

export default ProductsReducer;