import React from "react";
import { AuthRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./universal/navbar/navbar_container";
import { Route } from 'react-router-dom';
import HomePage from "./home/home_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SalesPageContainer from "./sale/sales_container";
import FeaturedPageContainer from "./featured/featured_container";
import UserProfileContainer from "./user_profile/user_profile_container";
import Modal from "./modal/modal";

const App = () => (
  <div className="app-container">
    <Modal />
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <AuthRoute exact path="/sales" component={SalesPageContainer} />
      <AuthRoute exact path="/featured" component={FeaturedPageContainer} />
      <AuthRoute exact path="/user/:user_id" component={UserProfileContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
