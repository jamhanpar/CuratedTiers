import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import "../../stylesheets/reset.css";
import { FaSearch } from "react-icons/fa";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getSessionLinks = this.getSessionLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Render session options based on whether user is logged in
  getSessionLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="user-auth-container">
          <button className="join-btn" onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="user-auth-container">
          <button
            className="login-btn"
            onClick={() => this.props.openModal(`login`)}
          >
            Log in
          </button>

          {/* <Link to={"/signup"} style={{ textDecoration: "none" }}>
            <button className="join-btn">Signup</button>
          </Link> */}

          <button
            className="join-btn"
            onClick={() => this.props.openModal(`signup`)}
          >
            Signup
          </button>
        </div>
      );
    }
  }

  render() {
    return (
        <header className="main-nav">
            <div className="main-nav-container">
              <ul className="main-nav-list">
                  <li><Link to={"/"} className="main-nav-item">Home</Link></li>
                  <li><Link to={"/sales"} className="main-nav-item">Sales</Link></li>
                  <li><Link to={"/featured"} className="main-nav-item">Featured</Link></li>
              </ul>
            </div>
            <div className="logo-container">
                <img className="nav-logo" src="data:image/png;base64,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" alt="project-logo"/>
            </div>
            <div className="search-container">
                <div className="search-bar-container">
                    <div className="nav-search-icon"><FaSearch /></div>
                    {/* <img className="nav-search-icon" src={require('../../../img/search-icon.png')} alt="search-icon"/> */}
                    <input className="search-bar" type="text" placeholder="Search"/>
                </div>
            </div>
            {this.getSessionLinks()}
        </header>
    );
  }
}

export default NavBar;
