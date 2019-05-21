import React from 'react';
import classNames from 'classnames';

import './Button.scss';

function Button(props) {
  const { type, ...rest } = props;
  const className = classNames('button', { [`button--${type}`]: !!type });
  return (
    <button className={className} {...rest} />
  );
}

Button.defaultProps = {
  type: 'secondary',
};

export default Button;
