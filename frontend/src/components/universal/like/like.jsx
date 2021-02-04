import React from "react";
import { FaHeart } from "react-icons/fa";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const likedStatus = this.state.liked === false ? "unliked" : "liked";
    const handleClick =
      likedStatus === "unliked"
        ? () => this.props.createLikedProduct(this.props.product)
        : () => this.props.deleteLikedProduct(this.props.product.id);

    return (
      <div>
        <button className={likedStatus} onClick={handleClick}>
          <FaHeart className="heart-icon" />
        </button>
      </div>
    );
  }
}

export default Like;
