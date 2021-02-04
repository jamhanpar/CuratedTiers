import React from "react";
import LikedContainer from '../like/like_container'
import './show'

const ShowPage = (props) => {

  // const asin = props.pdt[0]
  // const score = props.pdt[2]
  const beforePrice = props.pdt.pdt[3]
  // const savingsAmount = props.pdt.pdt[4]
  const savingsPercent = props.pdt.pdt[5]
  const totalReviews = props.pdt.pdt[6]
  const url = props.pdt.pdt[10]
  
  const title = props.pdt.pdt[9]
  const currentPrice = props.pdt.pdt[1]
  const rating = props.pdt.pdt[7]
  const thumbnail = props.pdt.pdt[8]

  // const pdt = props.pdt.pdt
// debugger

  return (
    <div className='show-card'>

      <div className='show-card-left'>
        <div className="show-card-img-container">
            <img className="show-card-img" src={thumbnail} alt=""/>
        </div>
        <LikedContainer
            props={props.pdt.pdtObj}
        />
      </div>

      <div className='show-card-right'>
        <div className="show-card-price-container">
            <button className="show-card-price">{currentPrice}</button>
            <button className="show-card-price">{beforePrice}</button>
            <button className="show-card-price">{savingsPercent}</button>
        </div>
        
        <div className="show-card-info-container">
            <h1 className="show-card-info">{title}</h1>
            <h1 className="show-card-info">{rating}</h1>
            <h1 className="show-card-info">{totalReviews}</h1>
        </div>
        
        <div className='show-card-url'>
          <a href={`${url}`} target="_blank" rel="noopener noreferrer">{currentPrice} on Amazon</a>
        </div>
      </div>
    </div>
  )
}


export default ShowPage;
