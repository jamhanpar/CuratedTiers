import { connect } from "react-redux";
import SalesPage from "./sales";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesPage);
