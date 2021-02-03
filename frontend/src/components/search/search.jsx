import React from "react";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "headphones",
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.update("searchTerm")}
              placeholder="Search"
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
