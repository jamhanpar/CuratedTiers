import { getLikedProducts, getLikedProduct, addLikedProduct, destroyLikedProduct } from '../util/like_util';

export const RECEIVE_LIKED_PRODUCTS = "RECEIVE_LIKED_PRODUCTS";
export const RECEIVE_LIKED_PRODUCT = "RECEIVE_LIKED_PRODUCT";
export const REMOVE_LIKED_PRODUCT = "REMOVE_LIKED_PRODUCT";
export const RECEIVE_LP_ERRORS = "RECEIVE_LP_ERRORS";


export const receiveLikedProducts = likedProducts => ({
  type: RECEIVE_LIKED_PRODUCTS,
  likedProducts
});

export const receiveLikedProduct = likedProduct => ({
  type: RECEIVE_LIKED_PRODUCT,
  likedProduct 
});

export const removeLikedProduct = likedProductId => ({
  type: REMOVE_LIKED_PRODUCT,
  likedProductId
});

export const receiveErrors = errors => ({
  type: RECEIVE_LP_ERRORS,
  errors
});

export const fetchLikedProducts = (userId) => dispatch => (
  getLikedProducts(userId)
    .then(res => dispatch(receiveLikedProducts(res.data)),
    err => dispatch(receiveErrors(err)))
);

export const fetchLikedProduct = (likedProductId) => dispatch => (
  getLikedProduct(likedProductId)
    .then(res => dispatch(receiveLikedProduct(res.data)),
    err => dispatch(receiveErrors(err)))
);

export const createLikedProduct = data => dispatch => (
  addLikedProduct(data)
    .then(res => dispatch(receiveLikedProduct(res.data)),
    err => dispatch(receiveErrors(err)))
);

export const deleteLikedProduct = (productId) => dispatch => (
  destroyLikedProduct(productId)
    .then( res => dispatch(removeLikedProduct(res.data)),
    err => dispatch(receiveErrors(err)))
);