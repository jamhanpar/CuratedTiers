import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import Like from './like';
import { createLikedProduct } from '../../actions/like_actions';

const msp = (state, ownProps) => ({
  liked: false
});

const mdp = dispatch => ({
  createLikedProduct: (data) => dispatch(createLikedProduct(data))
});

export default withRouter(connect(msp, mdp)(Like));