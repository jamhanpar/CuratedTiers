import {
  RECEIVE_LIKED_PRODUCTS,
  RECEIVE_LIKED_PRODUCT,
  REMOVE_LIKED_PRODUCT
} from '../actions/like_actions';

const LikedProductsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKED_PRODUCTS:
      return Object.assign({}, state, action.likedProducts)
    case RECEIVE_LIKED_PRODUCT:
      return Object.assign({}, state, { [action.likedProduct.asin]: action.likedProduct})
    case REMOVE_LIKED_PRODUCT:
      const newState = Object.assign({}, state);
      delete newState[action.likedProducts.id];
      return newState;
    default:
      return state;
  }
}

export default LikedProductsReducer;