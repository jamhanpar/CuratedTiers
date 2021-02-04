import React from "react";
import { withRouter } from "react-router-dom";

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
        <input
          type="text"
          className="search-bar"
          value={this.state.searchTerm}
          onChange={this.update("searchTerm")}
          // onKeyDown={(e) => this.handleSubmit(e)}
          placeholder="Search"
        />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default withRouter(Search);
