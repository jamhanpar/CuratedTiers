import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./universal/navbar/navbar_container";
import HomePage from "./home/home_page";
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";
import SalesPageContainer from "./sale/sales_container";
import FeaturedPageContainer from "./featured/featured_container";
import UserProfileContainer from "./user_profile/user_profile_container";
import Modal from "./modal/modal";
import IndexPageContainer from "./index/index_container"
import './app.css';

const App = () => (
  <div className="app-container">
    <Modal />
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/index" component={IndexPageContainer} />
      <AuthRoute exact path="/deals" component={SalesPageContainer} />
      <AuthRoute exact path="/surpriseme" component={FeaturedPageContainer} />
      <AuthRoute exact path="/user/:user_id" component={UserProfileContainer} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}


    </Switch>
  </div>
);

export default App;