import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import Like from './like';
import { createLikedProduct, deleteLikedProduct } from '../../../actions/like_actions';

const msp = (state, ownProps) => ({
  product: ownProps.product
});

//product should be a prop passed to like_container from index item or show modal

const mdp = dispatch => ({
  createLikedProduct: (data) => dispatch(createLikedProduct(data)),
  deleteLikedProduct: (id) => dispatch(deleteLikedProduct(id))
});

export default withRouter(connect(msp, mdp)(Like));