import { connect } from "react-redux";

import IndexPage from "./index";
import { fetchProducts } from "../../actions/product_actions";

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (category) => dispatch(fetchProducts(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
