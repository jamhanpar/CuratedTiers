import React from "react";
import { withRouter } from "react-router-dom";
import "./login_form.css";

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
      <div class="login-form-container">
        <form class="login-form" onSubmit={this.handleSubmit}>
            <header>
                <p class="welcome">Welcome to Curated Tiers</p>
            </header>
            <div class="username-label">
                <label for="username">Email</label>
            </div>
            <div class="username-input-container">
                <input
                  class="username"
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
            </div>

            <div class="username-label">
                <label for="password">Password</label>
            </div>
            <div class="password-input-container">
                <input
                  class="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
            </div>

            <div class="forgot-password-container">
                <a class="forgot-password-link" href="#">Forgot your username or password?</a>
            </div>
            {this.props.errors.length ? "" : this.renderErrors()}

            <button class="login-submit-btn" type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
