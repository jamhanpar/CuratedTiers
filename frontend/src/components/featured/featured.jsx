import React from "react";
import { withRouter } from "react-router";
import PdtIndexItem from "../index/pdt_index_item";
import ShoppingLoadIcon from "../../img/Shopping-1.5s-200px.gif";
import "./featured.css";
import "../index/index.css";
import "../stylesheets/content.css"

class FeaturedPage extends React.Component {
  constructor(props) {
    super(props);

    this.randomSearch = 'Quirky Gifts';

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillUnmount() {
    this.props.resetProducts();
  }
  
  componentDidMount() {
    // const { searchTerm } = this.props.location;
    // const searchTerm = localStorage.searchTerm;
    
    this.props.fetchProducts(this.randomSearch);
  }
  
  randomSearchGen() {
    const search_options = [
      "Amazon Best Seller Top 100",
      "Quirky gifts",
      "Cool gadgets",
      "Ny times best sellers",
      "Popular board games",
      "Gifts for men",
      "Gifts for women",
      "Random cool stuff",
      "Shoes",
      "Hats",
      "Face masks",
      "Smartwatches",
      "Laptops",
      "Wireless earbuds",
    ];

    return search_options[Math.floor(Math.random() * search_options.length)];
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.resetProducts(); 
    this.props.fetchProducts(this.randomSearch);
  }

  render() {
    if (this.props.products.length === undefined) {
      return (
        <div className="loading-gif">
          <img
            src={ShoppingLoadIcon}
            alt="Loading..."
            className="shopping-gif"
          />
        </div>
      );
    } else {
      const products = this.props.products;
      // const { searchTerm } = this.props.location;

      const numItems = products.length;
      // const priceArr = products.map( (product) => product.price.current_price)
      const priceArr = products.map((product) => [
        product.asin, // 0
        product.price.current_price, // 1
        parseInt(product.score), // 2
        product.price.before_price, // 3
        product.price.savings_amount, // 4
        product.price.savings_percent, // 5
        product.reviews.total_reviews, // 6
        product.reviews.rating, // 7
        product.thumbnail, // 8
        product.title, // 9
        product.url, // 10
      ]);

      // const mean = priceArr.reduce((a,b) => a+b) / numItems
      // const sd = Math.sqrt(
      //   priceArr.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / numItems
      // );
      priceArr.sort(function (a, b) {
        return a[1] - b[1];
      });

      const numTier = numItems / 3;

      let count = 0;
      let lowTier = [];
      let midTier = [];
      let highTier = [];

      priceArr.forEach((pdt) => {
        if (count < numTier) {
          lowTier.push(pdt);
        } else if (count >= numTier && count < numTier * 2) {
          midTier.push(pdt);
        } else {
          highTier.push(pdt);
        }
        count += 1;
      });

      lowTier.sort(function (a, b) {
        return b[5] - a[5];
      });

      midTier.sort(function (a, b) {
        return b[5] - a[5];
      });

      highTier.sort(function (a, b) {
        return b[5] - a[5];
      });

      const lowTierList = lowTier.map((pdt, i) => {
        return (
          //  debugger;
          <PdtIndexItem
            key={`${i}`}
            pdt={pdt}
            tier="low-tier"
            openModal={this.props.openModal}
          />
        );
      });
      const midTierList = midTier.map((pdt, i) => {
        return (
          //  debugger;
          <PdtIndexItem
            key={`${i}`}
            pdt={pdt}
            tier="mid-tier"
            openModal={this.props.openModal}
          />
        );
      });
      const highTierList = highTier.map((pdt, i) => {
        return (
          //  debugger;
          <PdtIndexItem
            key={`${i}`}
            pdt={pdt}
            tier="high-tier"
            openModal={this.props.openModal}
          />
        );
      });

      // debugger
      return (
        <section className="content-container">
          <div className="search-display-container">
            <div className="search-display">{this.randomSearch}</div>
            <button className="surprise-me-btn" onClick={this.handleSubmit}>
              Click Me!
            </button>
          </div>

          <div className="index-page">
            {/* <div className="tier-title-list">
              <h1 className="tier-title">Value</h1>
              <h1 className="tier-title">Mid Tier</h1>
              <h1 className="tier-title">High End</h1>
            </div> */}

            <div className="tier-list">
              <ul>{lowTierList}</ul>
              <ul>{midTierList}</ul>
              <ul>{highTierList}</ul>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default withRouter(FeaturedPage);
