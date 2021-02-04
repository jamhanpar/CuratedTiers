import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchLikedProducts } from "../../actions/like_actions";
import { fetchCurrentUser } from '../../actions/current_user_actions';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {
  return {
    likedProducts: state.likedProducts.likedProducts,
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
