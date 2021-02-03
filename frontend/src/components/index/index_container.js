
import { connect } from "react-redux";

import IndexPage from "./index";
import { fetchProducts, resetProducts } from "../../actions/product_actions";

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (category) => dispatch(fetchProducts(category)),
  resetProducts: () => dispatch(resetProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
