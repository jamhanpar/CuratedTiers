import React from "react";
import { withRouter } from "react-router";

import './index.css'
import PdtIndexItem from "./pdt_index_item";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillUnmount() {
    this.props.resetProducts();
  }

  componentDidMount() {

    // const { searchTerm } = this.props.location;

    const searchTerm = localStorage.searchTerm;
 
    this.props.fetchProducts(searchTerm);
  }

  render() {
    
    if (this.props.products.length === undefined) {
     
      return (
        <div>Loading...</div>
      )
    } else {
   
      const products = this.props.products;
      const { searchTerm } = this.props.location;
  
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
    
          lowTier.push(pdt)
        } else if (count >= numTier && count < (numTier * 2)) {
    
          midTier.push(pdt)
        } else {
    
          highTier.push(pdt)
        }
        count += 1; 
    
      })
  
       
      lowTier.sort(function (a, b) {
        return b[2] - a[2];
      });

  ;
      midTier.sort(function (a, b) {
        return b[2] - a[2];
      });

  ;
      highTier.sort(function (a, b) {
        return b[2] - a[2];
      });

  ;


      const lowTierList = lowTier.map( (pdt, i) => {
            return (
              //  debugger;
               <PdtIndexItem key={`${i}`} pdt={pdt} />
            )
      })
      const midTierList = midTier.map( (pdt, i) => {
            return (
              //  debugger;
               <PdtIndexItem key={`${i}`} pdt={pdt} />
            )
      })
      const highTierList = highTier.map( (pdt, i) => {
            return (
              //  debugger;
               <PdtIndexItem key={`${i}`} pdt={pdt} />
            )
      })

  debugger
      return (
        <div className="index-page">
          <div className="low-tier">
            <span>Value</span>
            <ul>{lowTierList}</ul>
          </div>

          <div className="mid-tier">
            <span>Mid Tier</span>
            <ul>{midTierList}</ul>
          </div>

          <div className="high-tier">
            <span>High End</span>
            <ul>{highTierList}</ul>
          </div>
        </div>
      );
      
    } // closing brace for else statement 
  }
}

export default withRouter(IndexPage);
