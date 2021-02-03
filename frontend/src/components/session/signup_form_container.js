import { connect } from "react-redux";
import { receiveErrors, signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    receiveErrors: (err) => dispatch(receiveErrors(err))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
