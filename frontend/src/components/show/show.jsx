import React from "react";
import LikedContainer from "../universal/like/like_container";
import "./show";

const ShowPage = (props) => {
  const beforePrice = props.pdt.pdt[3];
  const savingsPercent = props.pdt.pdt[5];
  const totalReviews = props.pdt.pdt[6];
  const url = props.pdt.pdt[10];

  const title = props.pdt.pdt[9];
  const currentPrice = props.pdt.pdt[1];
  const rating = props.pdt.pdt[7];
  const thumbnail = props.pdt.pdt[8];
  const heart = document.getElementById(props.likeId)

  return (
    <div className="show-card">
      <div className="show-card-left">
        <div className="show-card-img-container">
          <img className="show-card-img" src={thumbnail} alt="" />
        </div>
      </div>

      <div className="show-card-right">
        <div className="show-card-info-container">
          <h1 className="show-card-info">{title}</h1>
          <h1 className="show-card-info-tiny">Rating: {rating}</h1>
          <h1 className="show-card-info-tiny">Reviews: {totalReviews}</h1>
          {beforePrice !== 0 ? (
            <h1 className="show-card-info-tiny">
              Price: ${Math.round(beforePrice)}
            </h1>
          ) : null}
          {savingsPercent !== 0 ? (
            <h1 className="show-card-info-tiny">
              Sale: {Math.round(savingsPercent)}%
            </h1>
          ) : null}
          <h1 className="show-card-info-tiny">
            Sale Price: ${Math.round(currentPrice)}
          </h1>
        </div>
        <div className="show-card-url-container">
          <div className="show-liked-container">
            {heart.outerHTML}
            {/* <LikedContainer props={props.pdt.pdtObj} heartSize={"heartSize"} /> */}
          </div>
          <a
            className="show-card-url-btn"
            href={`${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            ${Math.round(currentPrice)} on Amazon
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
