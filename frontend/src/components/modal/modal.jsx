import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import IndexItem from '../index_item/index_item';
import LogInContainer from '../session/login_form_container';
import SignUpContainer from '../session/signup_form_container';

import './modal.css'

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  let width;
  let height;
  switch (modal) {
    case "index_item":
      component = <IndexItem />;
      width = `1220px`;
      height = `1000px`;
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
  return (
    <div className="modal-container" onClick={closeModal}>
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

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);