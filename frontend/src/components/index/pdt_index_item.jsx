import React from "react";
import LikedContainer from '../like/like_container'


const PdtIndexItem = (props) => {
  // newObj = {}
  // props.map ( pdt => newObj[key] = pdt[0])

  return (
      <li>
        Title: {props.pdt[9]} <br />
        Price: {props.pdt[1]} <br />
        Score: {props.pdt[2]} <br />
        <img src={props.pdt[8]} alt="" />
        <LikedContainer
          // props={props}
          // props={newObj}
          // asin={newObj.asin}
          // newObj.asin
        />
      </li>
    )
}

export default PdtIndexItem;
