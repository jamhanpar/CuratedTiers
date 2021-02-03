import React from "react";
import { withRouter } from "react-router-dom";
import "./session_form.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      verifiedPassword: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }


  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      verifiedPassword: this.state.verifiedPassword,
    };

    this.props.signup(user).then(() => {
      if (this.props.isAuthenticated) {
        this.props.closeModal();
        this.props.history.push("/")
      }
    })
  }

  componentWillUnmount() {
    this.props.receiveErrors([]);
  }

  renderErrors() {
    const errorStatus = Object.values(this.props.errors).length ? "" : "hide-errors"
    return (
      <ul className={`auth-errors ${errorStatus}`}>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <header>
                <p className="welcome">Create Your Account</p>
            </header>
            <br />
            <div className="email-label">
                <label htmlFor="email">Email</label>
            </div>
            <input
              className="email"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <div className="username-label">
                <label htmlFor="email">Username</label>
            </div>
            <input
              className="username"
              type="text"
              value={this.state.handle}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <br />
            <div className="password-label">
                <label htmlFor="password">Password</label>
            </div>
            <input
              className="password"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <div className="password-label">
                <label htmlFor="password">Repeat Password</label>
            </div>
            <input
              className="password"
              type="password"
              value={this.state.verifiedPassword}
              onChange={this.update("verifiedPassword")}
              placeholder="Confirm Password"
            />
            <br/>
            {this.props.errors.length ? "" : this.renderErrors()}
            <br />
            <input className="signup-submit-btn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
