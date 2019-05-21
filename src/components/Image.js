import React, { useState } from 'react';
import classNames from 'classnames';

import './Image.scss';

function Image(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { url: src, color, width, height, ...rest } = props;
  const aspectRatio = width / height;

  const className = classNames('image-container', isLoaded && 'loaded');
  const style = {
    paddingBottom: `${1 / aspectRatio * 100}%`,
    backgroundColor: color,
  };

  return (
    <div className={className} style={style}>
      <img
        className="image"
        draggable="false"
        src={src}
        {...rest}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

export default Image;
