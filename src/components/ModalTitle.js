import React from 'react';

import './ModalTitle.scss';

function ModalTitle(props) {
  const { children, ...rest } = props;
  return (
    <h1 className="modal__title" {...rest}>
      {children}
    </h1>
  );
}

export default ModalTitle;
