
import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import columnSplit from '../utils/columnSplit';

import './MasonryGrid.scss';

function MasonryGrid(props) {
  const { numColumns, photos, ...rest } = props;
  const columns = columnSplit(photos, numColumns);
  return (
    <div className="masonry-grid" {...rest}>
      {columns.map((column, columnIndex) => {
        return (
          <div className="masonry-grid__column" key={columnIndex}>
            {column.map(photo => <Image {...photo} key={photo.id} />)}
          </div>
        );
      })}
    </div>
  );
}

MasonryGrid.propTypes = {
  numColumns: PropTypes.number,
};

MasonryGrid.defaultProps = {
  numColumns: 3,
};

export default MasonryGrid;
