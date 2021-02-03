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
    // debugger
    if (this.props.products.length === undefined) {
    // debugger
      return (
        <div>Loading...</div>
      )
    } else {
  // debugger
      const products = this.props.products;
      const { searchTerm } = this.props.location;
  debugger
      const numItems = products.length;
      // const priceArr = products.map( (product) => product.price.current_price)
      const priceArr = products.map((product) => [
        product.asin,
        product.price.current_price,
        parseInt(product.score),
        product.price.before_price,
        product.price.savings_amount,
        product.price.savings_percent,
        product.reviews.total_reviews,
        product.reviews.rating,
        product.thumbnail,
        product.title,
        product.url,
      ]);
  debugger 
      // const mean = priceArr.reduce((a,b) => a+b) / numItems
      // const sd = Math.sqrt(
      //   priceArr.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / numItems
      // );
      priceArr.sort(function(a,b) {
        return a[1] - b[1];
      })

      const numTier = numItems / 3;

      let count = 0 
      let lowTier = []
      let midTier = []
      let highTier = []

      priceArr.forEach ( (pdt) => {
        if (count < numTier) {
    // debugger
          lowTier.push(pdt)
        } else if (count >= numTier && count < (numTier * 2)) {
    // debugger;
          midTier.push(pdt)
        } else {
    // debugger
          highTier.push(pdt)
        }
        count += 1; 
    // debugger;
      })
  debugger
       
      lowTier.sort(function (a, b) {
        return b[2] - a[2];
      });

  debugger;
      midTier.sort(function (a, b) {
        return b[2] - a[2];
      });

  debugger;
      highTier.sort(function (a, b) {
        return b[2] - a[2];
      });

  debugger;



  // debugger
      return (
        <div className="index-page">
        index page placeholder text
        </div>
      )
      
    } // closing brace for else statement 
  }
}

export default withRouter(IndexPage);
