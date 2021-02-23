import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import Like from './like';
import { createLikedProduct, deleteLikedProduct } from '../../../actions/like_actions';
import { openModal } from '../../../actions/modal_actions';


const msp = (state, ownProps) => {
  const productListObject = {};
  if (Object.keys(state.likedProducts).length > 0 && ("list" in state.likedProducts)) {
    state.likedProducts.list.map( product => {
      productListObject[product.asin] = product._id
    })
  }
  const userId = state.session.user ? state.session.user.id : undefined

  return {
    product: ownProps.props,
    userId: userId,
    productList: productListObject,
    refresh: ownProps.refresh
  }
};


const mdp = dispatch => ({
  createLikedProduct: (data) => dispatch(createLikedProduct(data)),
  deleteLikedProduct: (identifier) => dispatch(deleteLikedProduct(identifier)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default withRouter(connect(msp, mdp)(Like));