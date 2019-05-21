import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import classNames from 'classnames';

import './SortableItem.scss';

const SortableItem = SortableElement((props) => {
  const {
    id,
    index,
    selected,
    onRemoveItem,
    onSelectItem,
  } = props;
  const classes = classNames('grid-item', selected && 'grid-item--selected');

  const imageStyle = {
    backgroundImage: `url(https://source.unsplash.com/${id}`,
  }

  return (
    <div className={classes} onClick={() => onSelectItem(index)}>
      <div
        className="grid-item__thumb"
        style={imageStyle}
      />
      <span className="grid-item__handle" />
      <span className="grid-item__index">
        {index + 1}
      </span>
      {selected && (
        <span
          className="grid-item__remove"
          onClick={() => onRemoveItem(index)}
        />
      )}
    </div>
  )
});

export default SortableItem;
