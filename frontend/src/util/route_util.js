import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    // Redirect to the user profile page if the user is authenticated
    render={ props => !loggedIn ? <Component {...props} /> : <Redirect to="/user/:id" /> }
  />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    // Redirect to the login page if the user is already authenticated
    render={ props => loggedIn ? <Component {...props} /> : <Redirect to="/login" /> }
  />
);

// Use the isAuthenticated slice of state to determine whether a user is logged in
const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));