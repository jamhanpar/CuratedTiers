import React from "react";
import { FaHeart } from "react-icons/fa";
import "./like.css";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: (this.props.isAuthenticated ? (this.props.productList[this.props.product.asin] ? true : false) : false)
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
    debugger
    const likedStatus = this.state.liked ? "liked" : "unliked";
    const likeId = this.props.likeId;
    return (
      <div id={likeId} className="heart-container">
        <button className="heart-btn-container" onClick={this.handleClick}>
          <FaHeart className={`${likedStatus} ${this.props.heartSize}`} />
        </button>
      </div>
    );
  }
}

export default Like;
