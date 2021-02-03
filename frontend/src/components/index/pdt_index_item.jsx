import React from "react";

const PdtIndexItem = (props) => {
  return (
      <li>
        Title: {props.pdt[9]} <br />
        Price: {props.pdt[1]} <br />
        Score: {props.pdt[2]} <br />
        <img src={props.pdt[8]} alt="" />
      </li>
    )
}

export default PdtIndexItem;
