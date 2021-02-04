import React from "react";
import LikedContainer from "../universal/like/like_container";
import ShoppingLoadIcon from "../../img/Shopping-1.5s-200px.gif";
import '../stylesheets/content.css';

class SalesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.resetProducts();
  }

  componentDidMount() {
    // const searchTerm = localStorage.searchTerm;

    this.props.fetchProducts("deals");
  }

  render() {
    if (this.props.products.length === undefined) {
      return (
        <div className="loading-gif">
          <img src={ShoppingLoadIcon} alt="Loading..." className="shopping-gif"/>
        </div>
      );
    } else {
      return (
        <section className="content-container">
          <div className="product-list-container">
            {
              this.props.products.map(product => {
                <div className={`product-card`}>
                  <div className="product-card-price-container">
                    <button className="product-card-price">
                      {product.current_price}
                    </button>
                  </div>
                  <div className="product-card-img-container">
                    <img className="product-card-img" src={product.thumbnail} alt="" />
                  </div>
                  <div className="product-card-info-container">
                    <h1 className="product-card-info">{product.title}</h1>
                    <h1 className="product-card-info">{product.rating}</h1>
                  </div>
                  <LikedContainer props={product} />
                </div>;
              })
            }
          </div>
        </section>
      )
    }
  }
}

export default SalesPage;
