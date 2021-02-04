import React from "react";
import '../stylesheets/content.css';
import '../stylesheets/reset.css';
import PdtIndexItem from "../index/pdt_index_item"

class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      likedProducts: []
    }
  }
  
  componentWillMount(){
    this.props.fetchLikedProducts(this.props.currentUser.id)
  }

  componentWillReceiveProps(newState) {
    this.setState({likedProducts: newState.likedProducts})
  }
  
  render() {
    const likedProducts = this.props.likedProducts


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
          {this.state.likedProducts.map((likedProduct, i) => {
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

export default UserProfile;
