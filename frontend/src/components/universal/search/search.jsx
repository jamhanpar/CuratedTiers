import React from "react";
import { withRouter } from "react-router-dom";
import './search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: "/index",
      searchTerm: this.state.searchTerm,
    });
    localStorage.setItem("searchTerm", this.state.searchTerm)
  }

  render() {
    return (
      <div className="search-bar-container">
        <form className="search-input-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={this.props.searchClass}
            value={this.state.searchTerm}
            onChange={this.update("searchTerm")}
            placeholder="Search"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
