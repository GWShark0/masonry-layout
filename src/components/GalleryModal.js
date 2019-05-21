import React from 'react';

import Modal from './Modal';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

function GalleryModal(props) {
  const { children, onRequestClose, ...rest } = props;
  return (
    <Modal onRequestClose={onRequestClose} {...rest}>
      <ModalHeader title="Gallery" />
      <ModalContent>
        {children}
      </ModalContent>
      <ModalFooter
        onCancel={onRequestClose}
        onConfirm={onRequestClose}
      />
    </Modal>
  );
}

export default GalleryModal;
