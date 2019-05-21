import React, { useState } from 'react';
import SortableGrid from './SortableGrid'

import './MediaManager.scss';

function MediaManager(props) {
  const {
    items,
    onRemoveItem,
    onReorderItem,
    selectedIndex,
    setSelectedIndex,
  } = props;
  const [isSorting, setIsSorting] = useState(false);

  const onSortStart = () => {
    setIsSorting(true);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    onReorderItem(oldIndex, newIndex);
    setSelectedIndex(newIndex);
    setIsSorting(false);
  };

  return (
    <div className="media-manager">
      <div className="media-grid">
        <SortableGrid
          items={items}
          isSorting={isSorting}
          selectedIndex={selectedIndex}
          onSortStart={onSortStart}
          onSortEnd={onSortEnd}
          onRemoveItem={onRemoveItem}
          onSelectItem={index => setSelectedIndex(index)}
        />
      </div>
    </div>
  );
}

export default MediaManager;
