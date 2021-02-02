import {productReq} from "../util/rapid_api_util"

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

export const fetchProducts = (category) => dispatch => (
  productReq(category)
    .then(products => dispatch(receiveProducts(products)))
    .catch(err => console.log(err)))


