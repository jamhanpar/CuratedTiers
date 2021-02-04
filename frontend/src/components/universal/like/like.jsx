import React from "react";
import { FaHeart } from "react-icons/fa";
import "./like.css";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const likedStatus = this.state.liked ? "liked" : "unliked";
    const handleClick =
      likedStatus === "unliked"
        ? () => this.props.createLikedProduct(this.props.product)
        : () => this.props.deleteLikedProduct(this.props.product.id);
        
    return (
      <div>
        <button className="heart-container" onClick={handleClick}>
          <FaHeart className={likedStatus} />
        </button>
      </div>
    );
  }
}

export default Like;
