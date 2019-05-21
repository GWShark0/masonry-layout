import React, { useState } from 'react';
import MasonryGrid from './components/MasonryGrid';
import MediaManager from './components/MediaManager';
import GalleryModal from './components/GalleryModal';
import initialPhotos from './data/photos';
import { remove, reorder } from './utils/array';

import './App.scss';

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [photos, setPhotos] = useState(initialPhotos);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const openModal = () => setIsModelOpen(true);

  const closeModal = () => setIsModelOpen(false);

  const removePhoto = (index) => {
    setPhotos(remove(photos, index));
    setSelectedIndex(-1);
  };

  const reorderPhoto = (oldIndex, newIndex) => {
    setPhotos(reorder(photos, oldIndex, newIndex));
  };

  return (
    <div className="app">
      <GalleryModal
        isOpen={isModelOpen}
        onRequestClose={closeModal}
      >
        <MediaManager
          items={photos}
          onRemoveItem={removePhoto}
          onReorderItem={reorderPhoto}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </GalleryModal>
      <MasonryGrid
        photos={photos}
        onDoubleClick={openModal}
      />
    </div>
  );
}

export default App;
