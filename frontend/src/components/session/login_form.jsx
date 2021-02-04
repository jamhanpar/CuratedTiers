import React from "react";
import { withRouter } from "react-router-dom";
import "./session_form.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
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

    this.props.login(user).then(() => {
      if (this.props.isAuthenticated) {
        this.props.closeModal();
        this.props.history.push("/");
      }
    });
  }

  handleDemoLogin(e) {
    e.preventDefault();
    const demo = {
      email: "demo@email.com",
      password: "password"
    };

    this.props.login(demo).then(() => {
      if (this.props.isAuthenticated) {
        this.props.closeModal();
        this.props.history.push("/");
      }
    })
  }

  componentWillUnmount() {
    this.props.receiveErrors([]);
  }

  // Render the session errors if there are any
  renderErrors() {
    const errorStatus =
      Object.values(this.props.errors).length > 0 ? "" : "hide-errors";
    return (
      <ul className={`auth-errors ${errorStatus}`}>
        {Object.values(this.props.errors).map((error, i) => (
          <li className="error-item" key={`error-${i}`}>
            {error}
          </li>
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
          <div className="email-label">
            <label htmlFor="email">Email</label>
          </div>
          <div className="email-input-container">
            <input
              className="email"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
          </div>

          <div className="password-label">
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

          {/* <div className="forgot-password-container">
            <a className="forgot-password-link" href="#">
              Forgot your username or password?
            </a>
          </div> */}

          {this.props.errors.length ? "" : this.renderErrors()}

          <button className="session-submit-btn" type="submit">
            Sign In
          </button>
          <button className="session-submit-btn demo-btn" onClick={this.handleDemoLogin}>
            Demo
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
