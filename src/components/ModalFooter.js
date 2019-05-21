import React from 'react';
import Button from './Button';

import './ModalFooter.scss';

function ModalFooter(props) {
  const { onCancel, onConfirm } = props;
  return (
    <footer className="modal__footer">
      <Button onClick={onCancel}>
        {'Cancel'}
      </Button>
      <Button type="primary" onClick={onConfirm}>
        {'Save Changes'}
      </Button>
    </footer>
  );
}

export default ModalFooter;
