import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const likedStatus = this.state.liked === false ? "unliked" : "liked"

    return (
      <div>
        <button className={likedStatus} onClick={this.handleClick}>Heart</button>
      </div>
    )
  }
}

export default Like;