import React from "react";

class PdtIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
    // <div>
        <li>
          {this.props.pdt[9]}
        </li>
    // </div>
  )}
}

export default PdtIndexItem;