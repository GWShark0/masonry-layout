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

  return (
    <div className={classes} onClick={() => onSelectItem(index)}>
      <img
        className="grid-item__thumb"
        src={`https://source.unsplash.com/${id}/256x256`}
        draggable="false"
        alt=""
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
