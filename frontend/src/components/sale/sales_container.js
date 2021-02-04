import { connect } from "react-redux";
import { fetchProducts, resetProducts } from "../../actions/product_actions";
import { openModal } from "../../actions/modal_actions";
import SalesPage from "./sales";

const mapStateToProps = (state) => ({
  products: state.products,
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (category) => dispatch(fetchProducts(category)),
  resetProducts: () => dispatch(resetProducts()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SalesPage);
