import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import { withRouter } from 'react-router-dom';
import NavBar from "./navbar";

import {openModal} from "../../../actions/modal_actions"

const mapStateToProps = (state) => {
  const userId = state.session.user ? state.session.user.id : ""


  return {
    loggedIn: state.session.isAuthenticated,
    userId: userId
  }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(NavBar));