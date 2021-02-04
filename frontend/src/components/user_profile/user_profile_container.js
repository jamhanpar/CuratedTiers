import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchLikedProducts } from "../../actions/like_actions";
import { fetchCurrentUser } from '../../actions/current_user_actions';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {
  debugger
  const likedProductsObject = {};
  if (Object.keys(state.likedProducts).length > 0) {
    state.likedProducts.list.map( product => {
      likedProductsObject[product.asin] = product
    })
  } 
  debugger
  return {
    likedProducts: likedProductsObject,
    currentUser: state.session.user,
    currentUsername: state.users.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchLikedProducts: id => dispatch(fetchLikedProducts(id)),
      openModal: (modal) => dispatch(openModal(modal)),
      fetchCurrentUser: () => dispatch(fetchCurrentUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
