import React from 'react';
import classNames from 'classnames';
import { SortableContainer } from 'react-sortable-hoc';
import SortableItem from './SortableItem';

import './SortableGrid.scss';

const Container = SortableContainer((props) => {
  const {
    isSorting,
    items,
    selectedIndex,
    onRemoveItem,
    onSelectItem,
  } = props;
  const classes = classNames('grid', isSorting && 'grid--sorting');
  return (
    <div className={classes}>
      {items.map(({ id }, index) => (
        <SortableItem
          id={id}
          key={id}
          index={index}
          selected={index === selectedIndex}
          onRemoveItem={onRemoveItem}
          onSelectItem={onSelectItem}
        />
      ))}
    </div>
  );
});

const SortableGrid = (props) => (
  <Container
    axis="xy"
    distance={5}
    helperClass="grid-item--helper"
    {...props}
  />
);

export default SortableGrid;
