import React from "react";
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
    const searchTerm = localStorage.searchTerm;

    this.props.fetchProducts(searchTerm);
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
          <div className="homepage-filter">
            <ul className="filter-options-list">
              <li>Trending</li>
              <li>New</li>
              <li>Most popular</li>
            </ul>
          </div>
          <div className="product-list-container">
            <div className="product-card">
              <div className="product-card-price-container">
                <button className="product-card-price">$300</button>
              </div>
              <div className="product-card-img-container">
                <img
                  className="product-card-img"
                  src="https://res.cloudinary.com/hcu8jcnmr/image/upload/c_fit,w_600,h_600/swedradzazzc0ilphx2l.jpg"
                  alt="product-img"
                />
              </div>
              <div className="product-card-info-container">
                <h1 className="product-card-info">
                  H7 Wireless Over-Ear Headphones, Natural
                </h1>
                <p className="product-card-info">by B{"&"}O PLAY</p>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default SalesPage;
