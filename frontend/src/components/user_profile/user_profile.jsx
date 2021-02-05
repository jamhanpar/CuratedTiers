import React from "react";
import '../stylesheets/content.css';
import '../stylesheets/reset.css';
import PdtIndexItem from "../index/pdt_index_item";
import ShoppingLoadIcon from "../../img/Shopping-1.5s-200px.gif"
import avatar from '../../img/Avatar.png'
import './user_profile.css'

class UserProfile extends React.Component {
  
  componentDidMount() {
    this.props.fetchLikedProducts(this.props.currentUser.id);
    this.props.fetchCurrentUser();
  }
  
  render() {
    if (Object.keys(this.props.likedProducts).length < 1) {
      return (
        <div className="empty-collection">
          <h1>Your collection is empty!</h1>
          {/* <img src={ShoppingLoadIcon} alt="Loading..." className="shopping-gif"/> */}
        </div>
      )
    } else {
      const likedProducts = Object.values(this.props.likedProducts)
      return (
        <div className="user-profile-container">
          <div className="user-profile-wrapper">
            <img className='avatar' src={avatar}></img>
            <h1 className="user-handle">{this.props.currentUsername}</h1>
            <h1 className="user-liked-products">@demo is currently </h1>
            <h1 className="user-like-count">following {likedProducts.length} items </h1>
          </div>
        <section className="content-container">
          <div className="homepage-filter"></div>
          <div className="product-list-container">
            {likedProducts.map((likedProduct, i) => {
              let pdt = [
                likedProduct.asin, 
                likedProduct.currentPrice, 
                likedProduct.score, 
                likedProduct.beforePrice, 
                likedProduct.savingsAmount, 
                likedProduct.savingsPercent, 
                likedProduct.totalReviews, 
                likedProduct.rating, 
                likedProduct.thumbnail, 
                likedProduct.title, 
                likedProduct.url 
              ]

              return (
                <PdtIndexItem key={`${i}`} likedProduct={likedProduct} pdt={pdt} openModal={this.props.openModal}  />
              )
            })}
          </div>
        </section>
      </div>
      );
    }    
  }
}

export default UserProfile;
