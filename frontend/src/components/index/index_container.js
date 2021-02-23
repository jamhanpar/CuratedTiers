import { connect } from "react-redux";
import { fetchProducts, resetProducts } from "../../actions/product_actions";
import {openModal} from '../../actions/modal_actions';
import IndexPage from "./index";
import { fetchLikedProducts } from "../../actions/like_actions";


const mapStateToProps = (state) => ({
  products: state.products,
  userId: state.session.isAuthenticated ? state.session.user.id : ""
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (category) => dispatch(fetchProducts(category)),
  resetProducts: () => dispatch(resetProducts()),
  fetchLikedProducts: (userId) => dispatch(fetchLikedProducts(userId)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
