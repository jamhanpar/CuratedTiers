import React from "react";
import { withRouter } from "react-router";
import PdtIndexItem from "../index/pdt_index_item";
import ShoppingLoadIcon from "../../img/Shopping-1.5s-200px.gif";
import "../index/index.css";

class SalesPage extends React.Component {
  componentWillUnmount() {
    this.props.resetProducts();
  }

  componentDidMount() {
    this.props.fetchProducts("Deals -clothing");
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

      const priceArr_2 = []

      priceArr.forEach( (product) => {
        const test = product[9].slice(0,9)
        const test2 = product[1]
        if (test !== 'Sponsored' && test2 > 0 ) {
          priceArr_2.push(product);
        } 
      })

      priceArr_2.forEach( (product) => {
        
        const titleArr = product[9].split(' ')
        const titleArr_2 = []
        let title_2 = ""

        titleArr.forEach ( (word) => {
          if (title_2.length < 62 ) {
            titleArr_2.push(word)
          }  
          title_2 = titleArr_2.join(' ')
        })

        product[9] = title_2
        product[1] = Math.round(product[1]);
        product[3] = Math.round(product[3]);
      })


      priceArr_2.sort(function(a,b) {
        return a[1] - b[1];
      })

      const numItems = priceArr_2.length;
      const numTier = numItems / 3;


      let count = 0;
      let lowTier = [];
      let midTier = [];
      let highTier = [];

      priceArr_2.forEach((pdt) => {
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
          <PdtIndexItem
            key={`${i}`}
            pdt={pdt}
            tier="high-tier"
            openModal={this.props.openModal}
          />
        );
      });

      return (
        <section className="content-container">
          <div className="index-page">
            <div className="tier-title-list">
              <h1 className="tier-title">Value</h1>
              <h1 className="tier-title">Mid Tier</h1>
              <h1 className="tier-title">High End</h1>
            </div>

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

export default withRouter(SalesPage);