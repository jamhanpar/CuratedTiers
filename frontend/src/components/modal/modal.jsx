import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ShowPage from '../show/show';
import LogInContainer from '../session/login_form_container';
import SignUpContainer from '../session/signup_form_container';

import './modal.css';
import '../index/index.css';
import '../stylesheets/content.css';
import '../show/show.css';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  let width;
  let height;
  switch (modal[0]) {
    case "index_item":
      component = <ShowPage pdt={modal[1]} likeId={modal[2]}/>;
      width = `1197px`;
      height = `640px`;
      break;
    case "login":
      component = <LogInContainer />;
      width = 'fit-content';
      height = 'fit-content';
      break;
    case "signup":
      component = <SignUpContainer />;
      break;
    default:
      return null;
  }

  function closeModalFunction() {
    closeModal();
    debugger
    
  }


  return (
    <div className="modal-container" onClick={() => closeModalFunction()}>
      <div
        className="modal-component"
        style={{ width: `${width}`, height: `${height}` }}
        onClick={(e) => e.stopPropagation()}
      >
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);