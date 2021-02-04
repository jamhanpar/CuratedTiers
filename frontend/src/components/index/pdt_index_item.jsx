import React from "react";
import LikedContainer from '../like/like_container'


const PdtIndexItem = (props) => {

  let pdtObj = {}
  let pdtPriceObj = {}
  let pdtReviewObj = {}

// debugger 

  props.pdt.map ( (ele, i) => {
      if (i === 3) {
       (pdtPriceObj["beforePrice"] = ele)
      } else if (i === 1) {
       (pdtPriceObj["currentPrice"] = ele)
      } else if (i === 4) {
       (pdtPriceObj["savingsAmount"] = ele)
      } else if (i === 5 ) {
       (pdtPriceObj["savingsPercent"] = ele)
      }
  })

// debugger; 

props.pdt.map ( (ele, i) => {
      if (i === 7) {
      (pdtReviewObj["rating"] = ele)
      } else if (i === 6) {
      (pdtReviewObj["totalReviews"] = ele)
      }
  })

// debugger; 

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
      } else {
      (pdtObj["price"] = pdtPriceObj);
      (pdtObj["reviews"] = pdtReviewObj);
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
  
  const title = props.pdt[9]
  const currentPrice = props.pdt[1]
  const rating = props.pdt[7]
  const thumbnail = props.pdt[8]

  const pdt = props.pdt

  return (
      <li>
        
        <div 
          className={`product-card ${props.tier}`} 
          onClick={ () => props.openModal({modal: 'index_item', pdt: pdt })}
        >
              <div className="product-card-price-container">
                  <button className="product-card-price">{currentPrice}</button>
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
      </li>
    )
}

export default PdtIndexItem;
