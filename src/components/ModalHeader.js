import React from 'react';
import ModalTitle from './ModalTitle';
import Tabs from './Tabs';

import './ModalHeader.scss';

function ModalHeader(props) {
  const { title } = props;
  return (
    <header className="modal__header">
      <ModalTitle>
        {title}
      </ModalTitle>
      <Tabs />
    </header>
  );
}

export default ModalHeader;
