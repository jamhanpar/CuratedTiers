import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./universal/navbar/navbar_container";
import HomePage from "./home/home_page";
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
      <Route exact path="/deals" component={SalesPageContainer} />
      <Route exact path="/surpriseme" component={FeaturedPageContainer} />
      <ProtectedRoute exact path="/user/:user_id" component={UserProfileContainer} />
    </Switch>
  </div>
);

export default App;