import React from "react";
import LikedContainer from '../universal/like/like_container'


const PdtIndexItem = (props) => {

  let pdtObj = {}

  props.pdt.map ( (ele, i) => {
        if (i === 0) {
        (pdtObj["asin"] = ele)
        } else if (i === 2) {
        (pdtObj["score"] = ele)
        } else if (i === 8) {
        (pdtObj["thumbnail"] = ele)
        } else if (i === 9 ) {
        (pdtObj["title"] = ele)
        } else if (i === 10) {
        (pdtObj["url"] = ele)
        } else if (i === 7) {
        (pdtObj["rating"] = ele)
        } else if (i === 6) {
        (pdtObj["totalReviews"] = ele)
        } else if (i === 3) {
        (pdtObj["beforePrice"] = ele)
        } else if (i === 1) {
        (pdtObj["currentPrice"] = ele)
        } else if (i === 4) {
        (pdtObj["savingsAmount"] = ele)
        } else if (i === 5 ) {
        (pdtObj["savingsPercent"] = ele)
        }
    })

// debugger 
  
  // const asin = props.pdt[0]
  // const score = props.pdt[2]
  // const beforePrice = props.pdt[3]
  // const savingsAmount = props.pdt[4]
  // const savingsPercent = props.pdt[5]
  // const totalReviews = props.pdt[6]
  // const url = props.pdt[10]
  
  let title = props.pdt[9]
  let currentPrice = props.pdt[1]
  let rating = props.pdt[7]
  let thumbnail = props.pdt[8]

  const { pdt, likedProduct } = props;
  
  
  if (props.likedProduct) {
    const title = likedProduct.title;
    const currentPrice = likedProduct.currentPrice;
    const rating = likedProduct.rating;
    const thumbnail = likedProduct.thumbnail;
  }

  return (
        
        <div 
          className={`product-card ${props.tier}`} 
          onClick={ () => props.openModal({modal: 'index_item', pdt: {pdt, pdtObj} })}
        >
              <div className="product-card-price-container">
                  <button className={`product-card-price btn-${props.tier}`}>${currentPrice}</button>
              </div>
              <div className="product-card-img-container">
                  <img className="product-card-img" src={thumbnail} alt=""/>
              </div>
              <div className="product-card-info-container">
                  <h1 className="product-card-info">{title}</h1>
                  <h1 className="product-card-info">{rating}</h1>
              </div>
              <LikedContainer
                props={pdtObj}
              />
          </div>
    
    )
}

export default PdtIndexItem;
