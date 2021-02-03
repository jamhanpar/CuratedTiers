import React from "react";
import { withRouter } from "react-router-dom";
import "./session_form.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user)
    this.props.closeModal();
    if (this.props.isAuthenticated) {
      this.props.history.push("/")
    }
  }

  componentWillUnmount() {
    this.props.receiveErrors([])
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
            <header>
                <p className="welcome">Welcome to Curated Tiers</p>
            </header>
            <div className="username-label">
                <label htmlFor="username">Email</label>
            </div>
            <div className="username-input-container">
                <input
                  className="username"
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
            </div>

            <div className="username-label">
                <label htmlFor="password">Password</label>
            </div>
            <div className="password-input-container">
                <input
                  className="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
            </div>

            <div className="forgot-password-container">
                <a className="forgot-password-link" href="#">Forgot your username or password?</a>
            </div>
            {this.props.errors.length ? "" : this.renderErrors()}

            <button className="login-submit-btn" type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
