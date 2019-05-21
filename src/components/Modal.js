import React from 'react';
import ReactModal from 'react-modal';

import './Modal.scss';

ReactModal.setAppElement('#root');

function Modal(props) {
  return (
    <ReactModal {...props} />
  );
}

Modal.defaultProps = {
  className: 'modal',
  overlayClassName: 'modal-overlay',
  closeTimeoutMS: 300,
};

export default Modal;
