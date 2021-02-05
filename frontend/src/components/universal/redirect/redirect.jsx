import React from 'react';
import { withRouter } from 'react-router-dom';

const Redirect = (props) => {
  return (
    <div>
      {props.history.push('/index')}
    </div>
  )
}

export default withRouter(Redirect);