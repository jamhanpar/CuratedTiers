import React from "react";
import { withRouter } from "react-router";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.navigateToSearch = this.navigateToSearch.bind(this);
  }

  componentDidMount() {
// debugger
    const { searchTerm } = this.props.location;
    this.props.fetchProducts(searchTerm);
  }

  render() {
    const products = this.props.products;
    const { searchTerm } = this.props.location;

    
// debugger
    return (
      <div className="index-page">
      index page placeholder text
      </div>
    )
  }
}

export default withRouter(IndexPage);
