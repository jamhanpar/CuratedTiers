import {productRequest} from "../util/rapid_api_util"

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RESET_PRODUCTS = "RESET_PRODUCTS";

export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

export const resetProducts = () => ({
    type: RESET_PRODUCTS,
})


export const fetchProducts = (category) => dispatch => (
  productRequest(category)
    .then(products => dispatch(receiveProducts(products)))
    .catch(err => console.log(err)))


