import React from "react";
import { FaHeart } from "react-icons/fa";
import "./like.css";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: (this.props.productList[this.props.product.asin] ? true : false)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const product = this.props.product;
    if (this.state.liked === false && this.props.userId) {
      this.props.createLikedProduct({
        user: this.props.userId,
        asin: product.asin,
        currentPrice: product.currentPrice,
        beforePrice: product.beforePrice,
        savingsAmount: product.savingsAmount,
        savingsPercent: product.savingsPercent,
        rating: product.rating,
        totalReviews: product.totalReviews,
        score: product.score,
        thumbnail: product.thumbnail,
        title: product.title,
        url: product.url
      }).then(() => this.setState({liked: true}))
    } else if (this.state.liked === true && this.props.userId) {
      this.props.deleteLikedProduct(this.props.productList[this.props.product.asin]).then(
        () => this.setState({liked: false})
      )
    } else {
      this.props.openModal({modal: "login"})
    }
  }

  render() {
    const likedStatus = this.state.liked ? "liked" : "unliked";
    
    return (
      <div className="heart-container">
        <button className="heart-btn-container" onClick={this.handleClick}>
          <FaHeart className={likedStatus} />
        </button>
      </div>
    );
  }
}

export default Like;

// deleteLikedProduct needs to recognize products by the current user id and the product asin number