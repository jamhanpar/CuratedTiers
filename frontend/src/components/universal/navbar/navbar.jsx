import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import "../../stylesheets/reset.css";
import { FaHome, FaTag, FaStar, FaSearch, FaUserAstronaut, FaSmile, FaDice, FaCubes, FaGithub } from "react-icons/fa";
import Search from "../search/search";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.logoutUser = this.logoutUser.bind(this);
    this.getSessionLinks = this.getSessionLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  getSessionLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="user-auth-container">
          <Link to={`/user/${this.props.userId}`} className="user-btn">
            <FaUserAstronaut className="user-profile-icon"/>
          </Link>
          <button className="join-btn" onClick={this.logoutUser}>
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className="user-auth-container">
          <button
            className="login-btn"
            onClick={() => this.props.openModal({modal: `login`})}
          >
            Login
          </button>
          <button
            className="join-btn"
            onClick={() => this.props.openModal({modal: `signup`})}
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
        <div className="main-nav-components-container">
          <div className="main-nav-container">
            <ul className="main-nav-list">
              <li className="main-nav-item">
                <Link to={"/"} className="link-item">
                  <FaHome className="nav-icon" />
                  Home
                </Link>
              </li>
              <li className="main-nav-item">
                <Link to={"/deals"} className="link-item">
                  <FaTag className="nav-icon" />
                  Deals
                </Link>
              </li>
              <li className="main-nav-item">
                <Link to={"/surpriseme"} className="link-item">
                  <FaDice className="nav-icon" />
                  SurpriseMe!
                </Link>
              </li>
            </ul>
          </div>
          <div className="logo-container">
            <Link to="/surpriseme">
              <img
                className="nav-logo"
                src="data:image/png;base64,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"
                alt="project-logo"
              />
            </Link>
          </div>
          <div className="search-container">
            <div className="search-bar-container">
              <div className="nav-search-icon">
                <FaSearch />
              </div>
              <Search searchClass="search-bar" />
            </div>
          </div>
          
          <Link to={"/about"} className="about-link">
              <FaGithub className="github-icon" size={27} />
          </Link>
          {this.getSessionLinks()}
        </div>
      </header>
    );
  }
}

export default NavBar;
