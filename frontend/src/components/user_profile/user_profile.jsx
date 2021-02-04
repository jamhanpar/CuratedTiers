import React from "react";
import '../stylesheets/content.css';
import '../stylesheets/reset.css';
import PdtIndexItem from "../index/pdt_index_item";
import ShoppingLoadIcon from "../../img/Shopping-1.5s-200px.gif"

class UserProfile extends React.Component {
  
  componentDidMount() {
    debugger
    this.props.fetchLikedProducts(this.props.currentUser.id);
    this.props.fetchCurrentUser();
  }
  
  render() {
    if (Object.keys(this.props.likedProducts).length < 1) {
      debugger
      return (
        <div className="loading-gif">
          <h1>Your collection is empty!</h1>
          {/* <img src={ShoppingLoadIcon} alt="Loading..." className="shopping-gif"/> */}
        </div>
      )
    } else {
      debugger
      const likedProducts = Object.values(this.props.likedProducts)
      return (

        <section className="content-container">
          <div className="user-profile-wrapper">
            <img></img>
            <h1 className="user-handle">{this.props.currentUsername}</h1>
          </div>
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
      );
    }    
  }
}

export default UserProfile;
