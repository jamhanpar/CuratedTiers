import {
  RECEIVE_LIKED_PRODUCTS,
  RECEIVE_LIKED_PRODUCT,
  REMOVE_LIKED_PRODUCT
} from '../actions/like_actions';

const LikedProductsReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKED_PRODUCTS:
      return Object.assign({}, state, { list: action.likedProducts })
    case RECEIVE_LIKED_PRODUCT:
      newState.list.push(action.likedProduct);
      // return Object.assign({}, newState, { [action.likedProduct.asin]: action.likedProduct})
      return newState;
    case REMOVE_LIKED_PRODUCT:
      newState.list = newState.list.filter(likedProduct => likedProduct.asin !== action.deletedProduct.asin);
      
      return newState;
    default:
      return state;
  }
}

export default LikedProductsReducer;