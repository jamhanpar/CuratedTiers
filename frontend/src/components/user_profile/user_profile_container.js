import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { fetchLikedProducts } from "../../actions/like_actions";
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = (state) => {
  return {
    likedProducts: Object.values(state.likedProducts),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchLikedProducts: id => dispatch(fetchLikedProducts(id)),
      openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
